"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Power Supply",
    description:
      "Catu daya variabel berbasis elektronika yang dirancang untuk kebutuhan praktikum dan pengujian rangkaian elektronik.",
    image: "/projects/psu.jpg",
    tags: ["Electronics", "Power Supply", "PCB", "Arduino"],
    // github: "#",
    // demo: "#",
  },
  {
    title: "Automatic LDR Lighting System",
    description:
      "Sistem lampu otomatis berbasis sensor LDR yang mampu menyesuaikan pencahayaan sesuai kondisi lingkungan.",
    image: "/projects/ldr-lamp.jpg",
    tags: ["LDR", "Arduino", "Sensor", "Automation", "C++"],
    // github: "#",
    demo: "#",
  },
  {
    title: "IoT Smart Plant Watering",
    description:
      "Sistem penyiram tanaman otomatis berbasis IoT dengan monitoring kelembaban tanah secara real-time.",
    image: "/projects/watering.jpg",
    tags: ["ESP32", "IoT", "Soil Sensor", "WiFi", "C++"],
    // github: "#",
    // demo: "#",
  },
  {
    title: "RFID IoT Attendance System",
    description:
      "Sistem absensi pintar berbasis RFID dan IoT dengan penyimpanan data otomatis dan monitoring online.",
    image: "/projects/rfid-attendance.jpg",
    tags: ["RFID", "ESP32", "IoT", "Database", "WiFi", "C++"],
    github: "#",
    // demo: "#",
  },
  {
    title: "Digital Seven Segment Clock",
    description:
      "Jam digital berbasis seven segment display dengan desain modern dan akurasi waktu yang stabil.",
    image: "/projects/seven-segment.jpg",
    tags: ["Seven Segment", "RTC", "STM32", "Electronics", "C++"],
    github: "#",
    // demo: "#",
  },
  {
    title: "Smart School Gate System",
    description:
      "Implementasi gerbang sekolah otomatis berbasis mikrokontroler untuk meningkatkan keamanan dan efisiensi akses.",
    image: "/gallery/gate.png",
    tags: ["Automation", "Arduino", "IoT", "RFID", "C++"],
    github: "#",
    // demo: "#",
  },
  {
    title: "Bluetooth RC Car",
    description:
      "Mobil remote control berbasis Bluetooth yang dapat dikendalikan melalui aplikasi smartphone secara wireless.",
    image: "/projects/rc-car.jpg",
    tags: ["Bluetooth", "HC-06", "Arduino", "Motor Driver", "C++"],
    github: "#",
    demo: "#",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
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
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Project
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />

          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Kumpulan proyek elektronika dan IoT yang menunjukkan kemampuan
            saya dalam pengembangan embedded system, automation, dan teknologi
            modern.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group glass rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/40 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Hover */}
                <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-full text-white hover:text-cyan-400 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>

                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-full text-white hover:text-cyan-400 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-300 rounded-md border border-cyan-500/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}