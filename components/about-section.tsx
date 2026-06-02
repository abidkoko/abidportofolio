"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  GraduationCap,
  Briefcase,
  MapPin,
  Languages,
  Cpu,
  Calendar,
} from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  })

  return (
    <section
      id="about"
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
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
              {t.about.title}
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-6 sm:p-8 lg:p-10"
          >
            <h3 className="text-2xl font-semibold text-primary mb-6">
              {t.about.subtitle}
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t.about.description1}</p>
              <p>{t.about.description2}</p>
              <p>{t.about.description3}</p>
            </div>

            {/* INFO */}
            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="glass rounded-xl p-4 border border-primary/10">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <p className="text-sm text-muted-foreground">
                    {t.about.location}
                  </p>
                </div>
                <p className="font-medium text-foreground">
                  {t.about.locationValue}
                </p>
              </div>

              <div className="glass rounded-xl p-4 border border-primary/10">
                <div className="flex items-center gap-2 mb-2">
                  <Languages className="w-4 h-4 text-primary" />
                  <p className="text-sm text-muted-foreground">
                    {t.about.language}
                  </p>
                </div>
                <p className="font-medium text-foreground">
                  {t.about.languageValue}
                </p>
              </div>

              <div className="glass rounded-xl p-4 border border-primary/10 col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-4 h-4 text-primary" />
                  <p className="text-sm text-muted-foreground">
                    {t.about.specialization}
                  </p>
                </div>
                <p className="font-medium text-foreground">
                  {t.about.specializationValue}
                </p>
              </div>

            </div>
          </motion.div>

          {/* RIGHT TIMELINE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="flex items-center gap-2 mb-8">
              <Calendar className="w-5 h-5 text-primary" />

              <h3 className="text-2xl font-semibold text-foreground">
                {t.about.timeline.title}
              </h3>
            </div>

            {/* LINE */}
            <div className="absolute left-5 top-16 bottom-0 w-px bg-primary/20" />

            <div className="space-y-8">
              {t.about.timeline.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.1,
                  }}
                  className="relative pl-14"
                >
                  {/* DOT */}
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-background border border-primary/40 flex items-center justify-center">
                    {item.type === "education" ? (
                      <GraduationCap className="w-5 h-5 text-primary" />
                    ) : (
                      <Briefcase className="w-5 h-5 text-primary" />
                    )}
                  </div>

                  {/* CARD */}
                  <div className="glass rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {item.year}
                      </span>

                      <span className="text-xs text-muted-foreground">
                        {item.location}
                      </span>
                    </div>

                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>

                    <p className="text-primary text-sm mb-3">
                      {item.company}
                    </p>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}