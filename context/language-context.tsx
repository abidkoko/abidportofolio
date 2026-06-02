"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

// Import translations
import id from "@/locales/id.json"
import en from "@/locales/en.json"

export type Language = "id" | "en"

export interface LanguageInfo {
  code: Language
  name: string
  nativeName: string
  flag: string
  dir: "ltr" | "rtl"
}

export const languages: LanguageInfo[] = [
  { code: "id", name: "Indonesia", nativeName: "Indonesia", flag: "🇮🇩", dir: "ltr" },
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧", dir: "ltr" },
]

const translations: Record<Language, typeof id> = {
  id,
  en,
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof id
  dir: "ltr" | "rtl"
  languageInfo: LanguageInfo
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && languages.some(l => l.code === savedLanguage)) {
      setLanguageState(savedLanguage)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language)
      const dir = languages.find(l => l.code === language)?.dir || "ltr"
      document.documentElement.dir = dir
      document.documentElement.lang = language
    }
  }, [language, mounted])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const languageInfo = languages.find(l => l.code === language) || languages[0]

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    dir: languageInfo.dir,
    languageInfo,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}