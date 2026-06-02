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
          setTimeout(() => setIsDeleting(true), 1500)
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

      {/* BACKGROUND */}
      <div className="absolute inset-0 animated-gradient" />

      {/* FLOAT ORBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-accent/10 blur-[80px]"
          animate={{ x: [0, -40, 0], y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
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
                transition={{ duration: 8, repeat: Infinity }}
                style={{ padding: 3 }}
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

            <motion.p className="text-muted-foreground mb-4">
              Selamat datang di portfolio saya
            </motion.p>

            <motion.h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4">
              Muhamad Abid Maulana
            </motion.h1>

            <div className="h-8 mb-6">
              <span className="text-primary font-mono">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="text-muted-foreground mb-8">
              Electronics Technician & IoT Developer. Turning ideas into real systems.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">

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