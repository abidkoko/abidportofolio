"use client"

import { useState } from "react"
import { languageData } from "@/data/language"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { CertificatesSection } from "@/components/certificates-section"
import { GallerySection } from "@/components/galeri-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [language, setLanguage] = useState("id")
  const t = languageData[language as keyof typeof languageData]

  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navigation
        language={language}
        setLanguage={setLanguage}
      />

      <HeroSection t={t} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
