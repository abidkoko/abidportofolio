"use client"

import { motion } from "framer-motion"
import { Linkedin, Instagram, Download, ArrowRight, Mail } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"

export function HeroSection() {
  const t = useTranslations("hero")

  const roles = t.raw("roles") // ambil array dari JSON

  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
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

            <motion.p className="text-muted-foreground mb-4">
              {t("welcome")}
            </motion.p>

            <motion.h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Muhamad Abid
              </span>
              <br />
              <span>Maulana</span>
            </motion.h1>

            {/* ROLE */}
            <div className="h-8 mb-6">
              <span className="text-primary font-mono">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            {/* DESCRIPTION */}
            <p className="text-muted-foreground mb-8">
              {t("description")}
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">

              <a
                href="/CV_M_Abid_Maulana.pdf"
                download
                className="px-6 py-3 border border-primary rounded-xl text-primary"
              >
                <Download className="inline w-5 h-5 mr-2" />
                {t("downloadCV")}
              </a>

              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-white rounded-xl"
              >
                {t("viewProjects")}
                <ArrowRight className="inline w-5 h-5 ml-2" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 glass rounded-xl"
              >
                <Mail className="inline w-5 h-5 mr-2" />
                {t("contactMe")}
              </a>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-6">
              <a href="https://linkedin.com" target="_blank">
                <Linkedin />
              </a>
              <a href="https://instagram.com" target="_blank">
                <Instagram />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}