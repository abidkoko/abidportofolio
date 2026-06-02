"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const projects = [
  {
    title: "Power Supply",
    description:
      "Catu daya variabel berbasis elektronika yang dirancang untuk kebutuhan praktikum dan pengujian rangkaian elektronik.",
    image: "/gallery/psu.png",
    tags: ["Electronics", "Power Supply", "PCB", "Arduino"],
    github: "",
  },
  {
    title: "LDR-Based Automatic Lighting System",
    description:
      "Sistem lampu otomatis berbasis sensor LDR yang mampu menyesuaikan pencahayaan sesuai kondisi lingkungan.",
    image: "/gallery/ldr.png",
    tags: ["LDR", "Arduino", "Sensor", "Automation"],
    github: "https://github.com/abidkoko/LDR-Based-Automatic-Lighting-System",
  },
  {
    title: "7-Segment Digital Clock System",
    description:
      "Jam digital berbasis seven segment display dengan desain modern dan akurasi waktu yang stabil.",
    image: "/gallery/seven3d.png",
    tags: ["Seven Segment", "RTC", "STM32", "C++"],
    github: "https://github.com/abidkoko/7-Segment-Digital-Clock-System",
  },
  {
    title: "IoT Smart Plant Watering",
    description:
      "Sistem penyiram tanaman otomatis berbasis IoT dengan monitoring kelembaban tanah real-time.",
    image: "/gallery/water.jpeg",
    tags: ["ESP32", "IoT", "Sensor", "WiFi"],
    github: "",
  },
  {
    title: "RFID Attendance System",
    description:
      "Sistem absensi pintar berbasis RFID dan IoT dengan penyimpanan data otomatis.",
    image: "/gallery/rfid3d.png",
    tags: ["RFID", "ESP32", "IoT", "Database"],
    github: "https://github.com/abidkoko/RFID-Based-IoT-Attendance-System",
  },
  {
    title: "Automated School Gate",
    description:
      "Gerbang otomatis berbasis mikrokontroler untuk sistem keamanan sekolah.",
    image: "/gallery/gate3dd.jpg",
    tags: ["Automation", "Arduino", "RFID"],
    github: "https://github.com/abidkoko/Automated-School-Gate-Control-System",
  },
  {
    title: "Bluetooth RC Car",
    description:
      "Mobil RC berbasis Bluetooth yang dikendalikan via smartphone.",
    image: "/gallery/car3d.jpg",
    tags: ["Bluetooth", "HC-06", "Arduino", "Motor"],
    github: "https://github.com/abidkoko/RC-CAR-BLUETOOTH",
  },
  {
    title: "Line Follower Robot",
    description:
      "Robot line follower analog menggunakan sensor IR dan komparator.",
    image: "/gallery/LF3d.jpg",
    tags: ["IR Sensor", "Motor", "Analog"],
    github: "https://github.com/abidkoko/Line-Follower-Analog",
  },
  {
    title: "Lockout Buzzer System",
    description:
      "Sistem buzzer kompetisi dengan lock input otomatis dan indikator cepat.",
    image: "/gallery/LBS.jpeg",
    tags: ["Embedded", "Digital System", "Real-Time"],
    github: "https://github.com/abidkoko/LOCKOUT-BUZZER-SYSTEM",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 overflow-visible"
    >
      <div
        ref={ref}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Project
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-3" />

          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Proyek elektronika dan IoT yang menunjukkan kemampuan saya dalam embedded system,
            automation, dan teknologi modern.
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
              className="group glass rounded-2xl overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-300"
            >

              {/* IMAGE */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-5 sm:p-6">

                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
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
                    className="block text-center px-4 py-2 rounded-lg border border-primary/30 text-primary text-sm hover:bg-primary/10 transition"
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