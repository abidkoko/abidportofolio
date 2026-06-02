"use client"

import { motion } from "framer-motion"
import { Linkedin, Instagram, Download, ArrowRight, Mail } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/context/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  const roles = t.hero?.roles ?? []

  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!roles.length) return

    const role = roles[currentRole]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole, roles])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 animated-gradient" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-24">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[420px] lg:h-[420px]">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ padding: "3px" }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>

              <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-primary/30">
                <Image
                  src="/pasfoto.jpeg"
                  alt="profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* TEXT */}
          <div className="text-center lg:text-left max-w-3xl">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground mb-4"
            >
              {t.hero.welcome}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
                Muhamad Abid
              </span>
              <br />
              <span>Maulana</span>
            </motion.h1>

            {/* ROLE ANIMATION */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="h-10 mb-6"
            >
              <span className="text-primary font-mono text-lg">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground mb-8"
            >
              {t.hero.description}
            </motion.p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <a
                href="/CV_M_Abid_Maulana.pdf"
                download
                className="px-6 py-3 border border-primary rounded-xl text-primary"
              >
                <Download className="inline w-4 h-4 mr-2" />
                {t.hero.downloadCV}
              </a>

              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-black rounded-xl"
              >
                <ArrowRight className="inline w-4 h-4 mr-2" />
                {t.hero.viewProjects}
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border rounded-xl"
              >
                <Mail className="inline w-4 h-4 mr-2" />
                {t.hero.contactMe}
              </a>

            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-6 justify-center lg:justify-start">
              <a href="https://www.linkedin.com/in/muhamad-abid-maulana-4a528234a/" target="_blank">
                <Linkedin />
              </a>
              <a href="https://www.instagram.com/abidmauna" target="_blank">
                <Instagram />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}