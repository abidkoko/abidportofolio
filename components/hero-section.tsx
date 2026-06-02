"use client"

import { motion } from "framer-motion"
import { Linkedin, Instagram, Download, ArrowRight, Mail } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

const roles = [
  "Electronics Engineering",
  "Electrical Technician",
  "Internet of Things (IoT) Developer",
  "Electronics Enthusiast",
  "PLC and Microcontroller Programming",
  "Electrical Installation",
  "Wiring Assembly",
  "Responsibility",
  "Problem Solving",
  "Communication",
]

export function HeroSection() {
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
  }, [displayText, isDeleting, currentRole])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient" />

      {/* Floating glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]"
          style={{ top: '10%', left: '10%' }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-accent/10 blur-[80px]"
          style={{ bottom: '10%', right: '10%' }}
          animate={{
            x: [0, -40, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-primary/5 blur-[60px]"
          style={{ top: '50%', right: '30%' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-24">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[420px] lg:h-[420px]">
              {/* Animated glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ padding: '3px' }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>

              {/* Profile image placeholder */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-primary/30 animate-pulse-glow">
                <Image
                  src="/pasfoto.jpeg"
                  alt="Muhamad Abid Maulana"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center lg:text-left max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-muted-foreground text-sm sm:text-base mb-4"
            >
              Selamat datang di portfolio saya
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 text-glow"
            >
              <span className="bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
                Muhamad Abid
              </span>
              <br />
              <span className="text-foreground">Maulana</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="h-8 sm:h-10 mb-6"
            >
              <span className="text-lg sm:text-xl lg:text-2xl text-primary font-mono">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed"
            >
              Saya adalah Technician Elektronika Industri yang menciptakan solusi IoT inovatif, sistem embedded.
              Mengubah ide menjadi kenyataan melalui kode dan rangkaian elektronika.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              {/* Download CV Button - Neon Cyan Glow */}
              <motion.a
                href="/CV_M_Abid_Maulana.pdf"
                download="Muhamad_Abid_Maulana_CV.pdf"
                className="group relative px-8 py-3.5 bg-transparent border-2 border-primary rounded-xl font-semibold overflow-hidden transition-all duration-500"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Neon glow effect */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 blur-xl bg-primary/30 opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10" />
                <div className="absolute inset-[-2px] rounded-xl bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-md" />

                <span className="relative z-10 flex items-center justify-center gap-2 text-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download CV
                </span>
              </motion.a>

              {/* Lihat Project Button - Primary Futuristic */}
              <motion.a
                href="#projects"
                className="group relative px-8 py-3.5 bg-gradient-to-r from-primary to-accent rounded-xl font-semibold overflow-hidden transition-all duration-500"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                {/* Glow effect on hover */}
                <div className="absolute inset-0 blur-xl bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10" />

                <span className="relative z-10 flex items-center justify-center gap-2 text-primary-foreground">
                  Lihat Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.a>

              {/* Hubungi Saya Button - Glassmorphism Outline */}
              <motion.a
                href="#contact"
                className="group relative px-8 py-3.5 glass rounded-xl font-semibold overflow-hidden border border-white/10 transition-all duration-500 hover:border-primary/50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Glassmorphism gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Subtle glow */}
                <div className="absolute inset-[-1px] rounded-xl bg-gradient-to-r from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />

                <span className="relative z-10 flex items-center justify-center gap-2 text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                  <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Hubungi Saya
                </span>
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: Linkedin, label: "Linkedin", href: "https://linkedin.com/in/muhamad-abid-maulana-4a528234a", color: "hover:bg-blue-600" },
                { icon: Instagram, label: "Instagram", href: "https://instagram.com/abidmauna", color: "hover:bg-pink-600" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
