"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const projects = [
  {
    title: "Power Supply",
    description:
      "Catu daya variabel berbasis elektronika untuk praktikum dan pengujian rangkaian elektronik.",
    image: "/gallery/psu.png",
    tags: ["Electronics", "Power Supply", "PCB", "Arduino"],
    github: "",
  },
  {
    title: "LDR-Based Automatic Lighting System",
    description:
      "Sistem lampu otomatis berbasis sensor LDR.",
    image: "/gallery/ldr.png",
    tags: ["LDR", "Arduino", "Sensor", "Automation"],
    github: "https://github.com/abidkoko/LDR-Based-Automatic-Lighting-System",
  },
  {
    title: "7-Segment Digital Clock",
    description:
      "Jam digital berbasis seven segment display dengan RTC.",
    image: "/gallery/seven3d.png",
    tags: ["Seven Segment", "RTC", "STM32", "C++"],
    github: "https://github.com/abidkoko/7-Segment-Digital-Clock-System",
  },
  {
    title: "Smart Plant Watering System",
    description:
      "Sistem penyiram tanaman otomatis berbasis IoT.",
    image: "/gallery/water.jpeg",
    tags: ["ESP32", "IoT", "Sensor", "WiFi"],
    github: "",
  },
  {
    title: "RFID Attendance System",
    description:
      "Sistem absensi pintar berbasis RFID dan IoT.",
    image: "/gallery/rfid3d.png",
    tags: ["RFID", "ESP32", "IoT"],
    github: "https://github.com/abidkoko/RFID-Based-IoT-Attendance-System",
  },
  {
    title: "Smart School Gate",
    description:
      "Gerbang otomatis berbasis mikrokontroler.",
    image: "/gallery/gate3dd.jpg",
    tags: ["Automation", "Arduino", "RFID"],
    github: "https://github.com/abidkoko/Automated-School-Gate-Control-System",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="relative py-20 sm:py-32 overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />

          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Proyek elektronika dan IoT yang menunjukkan kemampuan embedded system dan automation.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group glass rounded-2xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-500"
            >

              {/* IMAGE */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-5 sm:p-6">

                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* BUTTON */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm hover:bg-primary/20 transition"
                  >
                    View GitHub
                  </a>
                )}

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}