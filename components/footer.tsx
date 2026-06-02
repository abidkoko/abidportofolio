"use client"

import { motion } from "framer-motion"
import { Linkedin, Instagram, Heart } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const socials = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/muhamad-abid-maulana-4a528234a",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/abidmauna",
    },
  ]

  const navLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.certificates, href: "#certificates" },
    { label: t.nav.gallery, href: "#galeri" },
    { label: t.nav.contact, href: "#contact" },
  ]

  return (
    <footer className="relative py-12 border-t border-border/50">

      {/* background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-primary/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">

        {/* NAME */}
        <motion.a
          href="#hero"
          className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6"
          whileHover={{ scale: 1.05 }}
        >
          Muhamad Abid Maulana
        </motion.a>

        {/* NAV */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* SOCIAL */}
        <div className="flex gap-3 mb-8">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              className="text-muted-foreground hover:text-primary transition"
            >
              <s.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* divider */}
        <div className="w-full max-w-xs h-px bg-border mb-6" />

        {/* COPYRIGHT */}
        <p className="text-sm text-muted-foreground text-center flex flex-wrap items-center justify-center gap-1">
          <span>© {currentYear} Muhamad Abid Maulana</span>

          <span className="hidden sm:inline">—</span>

          <span className="flex items-center gap-1">
            {t.footer.madeWith}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            {t.footer.as}
          </span>
        </p>
      </div>
    </footer>
  )
}