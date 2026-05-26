"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section
      id="gallery"
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

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
              Galeri Project
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />

          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Dokumentasi project elektronika, embedded system,
            IoT, dan kegiatan engineering lainnya.
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
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-primary transition"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="relative w-full max-w-5xl aspect-video">
              <Image
                src={selectedImage}
                alt="Preview"
                fill
                className="object-contain rounded-2xl"
              />
            </div>

          </div>
        )}

      </div>
    </section>
  )
}