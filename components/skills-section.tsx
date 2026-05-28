"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  { name: "Arduino", level: 95, category: "Microcontroller" },
  { name: "ESP32", level: 93, category: "Microcontroller" },
  { name: "STM32", level: 87, category: "Microcontroller" },
  { name: "Internet of Things (IoT) Systems", level: 88, category: "Systems" },
  { name: "PCB Design", level: 95, category: "Hardware" },
  { name: "Sensor Integration", level: 92, category: "Hardware" },
  { name: "AutoDesk Eagle", level: 95, category: "Software" },
  { name: "Embedded C/C++", level: 90, category: "Programming" },
  { name: "PLC Schneider", level: 85, category: "Programming" },
  { name: "PLC Omron", level: 90, category: "Programming" },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Keahlian
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Toolkit lengkap untuk membangun proyek elektronika inovatif, solusi IoT, dan aplikasi web modern.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass rounded-xl p-5 sm:p-6 group cursor-pointer transition-all duration-300 hover:border-primary/50"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{skill.category}</p>
                </div>
                <span className="text-sm font-mono text-primary">{skill.level}%</span>
              </div>

              {/* Progress bar */}
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">Tools & Technologies lainnya:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["AutoDesk Fusion", "VS Code", "VS Studio", "Node-RED", "Firebase", "Blynk", "ThingSpeak", "MQTT"].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1.2 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 text-xs font-medium glass rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
