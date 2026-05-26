"use client"

import { motion } from "framer-motion"
import { Linkedin, Instagram, MessageCircle, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socials = [
    { icon: Linkedin, label: "Linkedin", href: "https://linkedin.com/in/muhamad-abid-maulana-4a528234a", color: "hover:bg-blue-600" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/abidmauna", color: "hover:bg-pink-600" },
  ]

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Tentang Saya", href: "#about" },
    { label: "Keahlian", href: "#skills" },
    { label: "Project", href: "#projects" },
    { label: "Sertifikat", href: "#certificates" },
    { label: "Dokumentasi", href: "#galeri" },
    { label: "Kontak", href: "#contact" },
  ]

  return (
    <footer className="relative py-12 border-t border-border/50">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-primary/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center">
          {/* Logo/Name */}
          <motion.a
            href="#hero"
            className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Muhamad Abid Maulana
          </motion.a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-3 mb-8">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center flex items-center gap-1 flex-wrap justify-center">
            <span>© {currentYear} Muhamad Abid Maulana</span>
            <span className="hidden sm:inline">—</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> as Electronics Engineer
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
