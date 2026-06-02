"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { useLanguage } from "@/context/language-context"

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { t } = useLanguage()

  const projects = t.projects?.items ?? []

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
            {t.projects.title}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />

          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            {t.projects.description}
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {projects.map((project: any, index: number) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group glass rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/40 transition-all duration-500"
            >

              {/* IMAGE */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-5 sm:p-6">

                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-300 rounded-md border border-cyan-500/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GITHUB */}
                {project.github?.trim() && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-5 text-center px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm font-medium hover:bg-cyan-500/20 transition-all duration-300"
                  >
                    {t.projects.viewOnGithub}
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