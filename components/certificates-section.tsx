"use client"

import { motion, AnimatePresence, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { X, Award } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/context/language-context"

/* ✅ STATIC DATA (IMAGE DI SINI, BUKAN JSON) */
const certificatesData = [
  {
    image: "/certificates/Sertifikat Uji Kompetensi-1.png",
    credential: "Sert/SSA/2512116",
  },
  {
    image: "/certificates/TOEIC-ENG1.jpg",
    credential: "TOEIC-590",
  },
  {
    image: "/certificates/LKSE-ABID1.jpg",
    credential: "LKS-2025-ELEC",
  },
  {
    image: "/certificates/OSPI-ENG1.jpg",
    credential: "OSPI-2023-SILVER",
  },
  {
    image: "/certificates/cert_Bahasa Inggris - OSPI 2023-1.png",
    credential: "0759805/BHM-PUSKANAS/OSPI-S/X/2023",
  },
  {
    image: "/certificates/cert_Informatika - NHC 2023-1.png",
    credential: "0768420/BHM-FOSNAS/NHC-S/XI/2023",
  },
]

export function CertificatesSection() {
  const { t } = useLanguage()

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return (
    <section
      id="certificates"
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
      >
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.certificates.title}
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />

          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            {t.certificates.description}
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.certificates.items.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedIndex(index)}
              className="group glass rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-primary/50"
            >
              {/* IMAGE */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={certificatesData[index].image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                <div className="absolute top-3 right-3 p-2 glass rounded-full">
                  <Award className="w-4 h-4 text-primary" />
                </div>
              </div>

              {/* INFO */}
              <div className="p-4">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-1 line-clamp-1">
                  {cert.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {cert.issuer}
                </p>

                <p className="text-xs text-primary font-mono">
                  {cert.date}
                </p>

                <p className="text-xs text-muted-foreground mt-2">
                  {t.certificates.clickToView}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-2xl w-full glass rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 z-10 p-2 glass rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              {/* IMAGE */}
              <div className="relative h-64 sm:h-80">
                <Image
                  src={certificatesData[selectedIndex].image}
                  alt={t.certificates.items[selectedIndex].title}
                  fill
                  className="object-contain bg-secondary/50"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Award className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-sm text-primary font-medium">
                      {t.certificates.items[selectedIndex].issuer}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {t.certificates.items[selectedIndex].date}
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold">
                  {t.certificates.items[selectedIndex].title}
                </h3>

                <p className="text-muted-foreground">
                  {t.certificates.items[selectedIndex].description}
                </p>

                <div className="glass rounded-xl p-4 border border-primary/10">
                  <p className="text-xs text-muted-foreground mb-1">
                    {t.certificates.credentialId}
                  </p>

                  <p className="text-primary font-mono text-sm">
                    {certificatesData[selectedIndex].credential}
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