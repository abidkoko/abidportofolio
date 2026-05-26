"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  GraduationCap,
  Briefcase,
  Languages,
  MapPin,
  Cpu,
} from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const infoCards = [
    {
      icon: GraduationCap,
      title: "Edukasi",
      desc: "SMKN 1 Katapang — Teknik Elektronika Industri",
    },
    {
      icon: Briefcase,
      title: "Pengalaman",
      desc: "PKL & Project Embedded System dan IoT",
    },
    {
      icon: Languages,
      title: "Bahasa",
      desc: "Indonesia & English",
    },
    {
      icon: MapPin,
      title: "Lokasi",
      desc: "Bandung, Indonesia",
    },
    {
      icon: Cpu,
      title: "Spesialisasi",
      desc: "IoT, Embedded System, Arduino & ESP32",
    },
  ]

  return (
    <section
      id="about"
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        ref={ref}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tentang Saya
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Teknik Elektronika Industri
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Saya adalah fresh graduate Teknik Elektronika Industri yang
                memiliki minat besar dalam bidang IoT, embedded system, dan
                pengembangan teknologi berbasis mikrokontroler.
              </p>

              <p>
                Saya terbiasa mengembangkan project menggunakan Arduino,
                ESP32, sensor elektronik, serta sistem otomatisasi berbasis
                Internet of Things.
              </p>

              <p>
                Saya senang mempelajari teknologi baru, membangun solusi
                inovatif, dan mengubah ide menjadi sistem yang nyata dan
                bermanfaat.
              </p>
            </div>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {infoCards.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.5 + index * 0.1,
                }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-2xl p-5 border border-white/5 hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h4>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}