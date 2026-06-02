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
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 animated-gradient" />

      {/* FLOATING ORBS (FULL VERSION BALIK) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]"
          style={{ top: "10%", left: "10%" }}
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-accent/10 blur-[80px]"
          style={{ bottom: "10%", right: "10%" }}
          animate={{ x: [0, -40, 0], y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-primary/5 blur-[60px]"
          style={{ top: "50%", right: "30%" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-24">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
                  alt="Muhamad Abid Maulana"
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
              className="text-muted-foreground text-sm sm:text-base mb-4"
            >
              Selamat datang di portfolio saya
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

            <div className="h-8 sm:h-10 mb-6">
              <span className="text-lg sm:text-xl lg:text-2xl text-primary font-mono">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="text-muted-foreground text-base sm:text-lg mb-10 leading-relaxed">
              Saya adalah Technician Elektronika Industri yang menciptakan solusi IoT inovatif,
              sistem embedded. Mengubah ide menjadi kenyataan melalui kode dan rangkaian elektronika.
            </p>

            {/* BUTTONS (FIXED spacing biar gak "kecil") */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">

              <a
                href="/CV_M_Abid_Maulana.pdf"
                download
                className="px-6 py-3 border border-primary rounded-xl text-primary"
              >
                <Download className="inline w-5 h-5 mr-2" />
                Download CV
              </a>

              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-white rounded-xl"
              >
                Lihat Project <ArrowRight className="inline w-5 h-5 ml-2" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 glass rounded-xl"
              >
                <Mail className="inline w-5 h-5 mr-2" />
                Contact
              </a>

            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 justify-center lg:justify-start">
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