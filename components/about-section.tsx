"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Cpu, Wifi, CircuitBoard, Code, Microchip, Gauge } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    { icon: Cpu, label: "Embedded Systems" },
    { icon: Wifi, label: "IoT Development" },
    { icon: CircuitBoard, label: "PCB Design" },
    { icon: Code, label: "Firmware Development" },
    { icon: Microchip, label: "Microcontroller" },
    { icon: Gauge, label: "Sensor Integration" },
  ]

  return (
    <section id="about" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-6 sm:p-8 lg:p-10"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-6">
              Teknik Elektronika
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Saya adalah seorang Teknik elektronika yang bersemangat dalam menciptakan solusi IoT inovatif,
                sistem embedded. Mengubah ide menjadi kenyataan melalui kode dan rangkaian elektronika.
              </p>
              <p>
                Keahlian utama saya meliputi pengembangan firmware untuk microcontroller seperti 
                Arduino dan ESP32, desain PCB profesional, serta integrasi berbagai sensor dan 
                aktuator untuk sistem IoT yang kompleks.
              </p>
              <p>
                Saya percaya bahwa teknologi embedded systems dan IoT memiliki potensi besar untuk 
                mentransformasi berbagai industri, dan saya bersemangat untuk menjadi bagian dari 
                revolusi teknologi ini.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl p-4 sm:p-6 text-center group cursor-pointer transition-all duration-300 hover:border-primary/50"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
