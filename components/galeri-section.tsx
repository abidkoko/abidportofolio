"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  "/gallery/SKEMATIK PENYIRAM TANAMAN OTOMATIS.png",
  "/gallery/sevensch.png",
  "/gallery/rfidsch.png",
  "/gallery/LAYOUT PENYIRAM TANAMAN OTOMATIS.png",
  "/gallery/rfid3d.png",
  "/gallery/rfidbrd.png",
  "/gallery/IMG_20240531_215143.jpg",
  "/gallery/seven3d.png",
  "/gallery/seven.png",
  "/gallery/gatebrdd.jpg",
  "/gallery/gate3dd.jpg",
  "/gallery/car3d.jpg",
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section
      id="galeri"
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Dokumentasi
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />

          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Sekilas tentang ruang kerja, proyek, dan perjalanan saya dalam mewujudkan ide menjadi kenyataan.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl glass cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}

        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Tombol Close */}
              <button
                onClick={() => setSelectedImage(null)}
                className="
          absolute -top-3 -right-3 z-50
          bg-white text-black
          rounded-full p-2 shadow-xl
          hover:scale-110 transition
        "
              >
                <X className="w-5 h-5" />
              </button>

              {/* Gambar */}
              <Image
                src={selectedImage}
                alt="Preview"
                width={1600}
                height={1200}
                className="
          w-full
          max-h-[85vh]
          object-contain
          rounded-2xl
        "
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}