"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { X, Award } from "lucide-react"
import Image from "next/image"

const certificates = [
  {
    title: "TOEIC (Test of English for International Communication)",
    issuer: "ETS (Educational Testing Service)",
    date: "2025",
    image: "/certificates/toeic.jpg",

    description:
      "Berhasil memperoleh skor TOEIC yang menunjukkan kemampuan komunikasi bahasa Inggris dalam konteks profesional dan internasional.",

    credential: "TOEIC-785",
  },

  {
    title: "Lomba Kompetensi Siswa (LKS) Bidang Electronics",
    issuer: "Kementrian Pendidikan Dasar dan Menengah",
    date: "2025",
    image: "/certificates/LKSE-ABID1.jpg",

    description:
      "Berpartisipasi dalam kompetisi LKS bidang Electronics dengan kemampuan dalam perancangan rangkaian elektronika, troubleshooting, dan mikrokontroler.",

    credential: "LKS-2025-ELEC",
  },

  {
    title: "Olimpiade Sains Pemuda Indonesia (OSPI) Bidang Bahasa Inggris",
    issuer: "Pusat Kejuaraan Sains Nasional (PUSKANAS)",
    date: "2023",
    image: "/certificates/ospi.jpg",

    description:
      "Berhasil meraih Medali Perak pada ajang OSPI 2023 bidang Bahasa Inggris tingkat nasional.",

    credential: "OSPI-2023-SILVER",
  },
]

export function CertificatesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null)

  return (
    <section id="certificates" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px]" />
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
              Sertifikat
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Dokumentasi sertifikat, pelatihan, dan prestasi yang mencerminkan dedikasi saya dalam mengembangkan keterampilan di bidang teknologi,
            engineering, dan komunikasi bahasa Inggris secara berkelanjutan.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              onClick={() => setSelectedCert(cert)}
              className="group glass rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-primary/50"
              style={{ perspective: "1000px" }}
            >
              {/* Certificate Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                {/* Award icon */}
                <div className="absolute top-3 right-3 p-2 glass rounded-full">
                  <Award className="w-4 h-4 text-primary" />
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-4">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-1 line-clamp-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                <p className="text-xs text-primary font-mono">{cert.date}</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Klik untuk melihat sertifikat
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-2xl w-full glass rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 glass rounded-full text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Certificate Image */}
              <div className="relative h-64 sm:h-80">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain bg-secondary/50"
                />
              </div>

              {/* Certificate Info */}
              <div className="p-6 space-y-4">

                {/* Issuer */}
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Award className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-sm text-primary font-medium">
                      {selectedCert.issuer}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {selectedCert.date}
                    </p>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground leading-tight">
                  {selectedCert.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {selectedCert.description}
                </p>

                {/* Credential Box */}
                <div className="glass rounded-xl p-4 border border-primary/10">
                  <p className="text-xs text-muted-foreground mb-1">
                    Credential ID
                  </p>

                  <p className="text-primary font-mono text-sm">
                    {selectedCert.credential}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
