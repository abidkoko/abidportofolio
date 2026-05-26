"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const projects = [
  {
    title: "Power Supply",
    description:
      "Catu daya variabel berbasis elektronika yang dirancang untuk kebutuhan praktikum dan pengujian rangkaian elektronik.",
    image: "/gallery/psu.png",
    tags: ["Electronics", "Power Supply", "PCB", "Arduino"],
  },
  {
    title: "Automatic LDR Lighting System",
    description:
      "Sistem lampu otomatis berbasis sensor LDR yang mampu menyesuaikan pencahayaan sesuai kondisi lingkungan.",
    image: "/gallery/ldr.png",
    tags: ["LDR", "Arduino", "Sensor", "Automation", "C++"],
  },
  {
    title: "IoT Smart Plant Watering",
    description:
      "Sistem penyiram tanaman otomatis berbasis IoT dengan monitoring kelembaban tanah secara real-time.",
    image: "/projects/watering.jpg",
    tags: ["ESP32", "IoT", "Soil Sensor", "WiFi", "C++"],
  },
  {
    title: "RFID IoT Attendance System",
    description:
      "Sistem absensi pintar berbasis RFID dan IoT dengan penyimpanan data otomatis dan monitoring online.",
    image: "/gallery/rfid.jpeg",
    tags: ["RFID", "ESP32", "IoT", "Database", "WiFi", "C++"],
  },
  {
    title: "Digital Seven Segment Clock",
    description:
      "Jam digital berbasis seven segment display dengan desain modern dan akurasi waktu yang stabil.",
    image: "/gallery/seven3d.png",
    tags: ["Seven Segment", "RTC", "STM32", "Electronics", "C++"],
  },
  {
    title: "Smart School Gate System",
    description:
      "Implementasi gerbang sekolah otomatis berbasis mikrokontroler untuk meningkatkan keamanan dan efisiensi akses.",
    image: "/gallery/gate3dd.jpg",
    tags: ["Automation", "Arduino", "IoT", "RFID", "C++"],
  },
  {
    title: "Bluetooth RC Car",
    description:
      "Mobil remote control berbasis Bluetooth yang dapat dikendalikan melalui aplikasi smartphone secara wireless.",
    image: "/gallery/car3d.jpg",
    tags: ["Bluetooth", "HC-06", "Arduino", "Motor Driver", "C++"],
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        
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
            saya dalam pengembangan embedded system, automation, dan teknologi modern.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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