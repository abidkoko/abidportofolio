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

      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-white/5" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-cyan-400/20 blur-[80px]"
          style={{ top: "10%", left: "10%" }}
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />

        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-purple-500/20 blur-[80px]"
          style={{ bottom: "10%", right: "10%" }}
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 24, repeat: Infinity }}
        />

        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-blue-400/20 blur-[70px]"
          style={{ top: "40%", right: "30%" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 18, repeat: Infinity }}
        />

      </div>

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
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              {/* DOWNLOAD CV */}
              <motion.a
                href="/CV_M_Abid_Maulana.pdf"
                download
                whileTap={{ scale: 0.92 }}
                whileHover={{ scale: 1.03 }}
                className="relative px-6 py-3 rounded-xl
               border border-cyan-400/40
               bg-white/5 backdrop-blur-md
               text-cyan-300 font-medium
               overflow-hidden
               transition-all duration-300"
              >
                {/* click ripple glow */}
                <span className="absolute inset-0 bg-cyan-400/20 scale-0 group-active:scale-100 transition-transform duration-300 rounded-xl" />

                <Download className="inline w-4 h-4 mr-2" />
                {t.hero.downloadCV}
              </motion.a>


              {/* VIEW PROJECTS */}
              <motion.a
                href="#projects"
                whileTap={{ scale: 0.92 }}
                whileHover={{ scale: 1.05 }}
                className="relative px-6 py-3 rounded-xl
               bg-gradient-to-r from-cyan-400 to-blue-500
               text-black font-semibold
               shadow-[0_0_25px_rgba(34,211,238,0.4)]
               hover:shadow-[0_0_45px_rgba(34,211,238,0.7)]
               transition-all duration-300 overflow-hidden"
              >
                {/* shine animation */}
                <span className="absolute inset-0 -translate-x-full hover:translate-x-full bg-white/20 transition-transform duration-700" />

                <ArrowRight className="inline w-4 h-4 mr-2" />
                {t.hero.viewProjects}
              </motion.a>


              {/* CONTACT */}
              <motion.a
                href="#contact"
                whileTap={{ scale: 0.92 }}
                whileHover={{ scale: 1.03 }}
                className="relative px-6 py-3 rounded-xl
               glass border border-white/10
               text-white/80 backdrop-blur-md
               hover:border-cyan-400/40 hover:text-white
               transition-all duration-300 overflow-hidden"
              >
                <Mail className="inline w-4 h-4 mr-2" />
                {t.hero.contactMe}
              </motion.a>

            </div>

            <div className="flex gap-4 mt-6 justify-center lg:justify-start">

              <motion.a
                href="https://www.linkedin.com/in/muhamad-abid-maulana-4a528234a/"
                target="_blank"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 flex items-center justify-center rounded-full
               bg-white/5 backdrop-blur-md
               border border-white/10
               text-muted-foreground
               hover:text-white hover:border-cyan-400/60
               hover:bg-cyan-400/10
               transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/abidmauna"
                target="_blank"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 flex items-center justify-center rounded-full
               bg-white/5 backdrop-blur-md
               border border-white/10
               text-muted-foreground
               hover:text-white hover:border-pink-400/60
               hover:bg-pink-400/10
               transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}