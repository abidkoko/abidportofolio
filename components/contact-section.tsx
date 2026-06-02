"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react"
import emailjs from "@emailjs/browser"
import { useLanguage } from "@/context/language-context"

export function ContactSection() {
  const { t } = useLanguage()

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget

    try {
      await emailjs.sendForm(
        "service_m11dvzr",
        "template_sfqpy7e",
        form,
        "jzZaWZe0pvtwx5zEN"
      )

      setIsSubmitted(true)
      form.reset()

      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (error) {
      console.error(error)
      alert(t.contact.sendFailed)
    }

    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.email,
      value: "btlabd52@gmail.com",
      href: "mailto:btlabd52@gmail.com",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+62 812 2343 2566",
      href: "https://wa.me/6281223432566",
    },
    {
      icon: MapPin,
      label: t.contact.location,
      value: "Bandung, Indonesia",
      href: "#",
    },
  ]

  const socials = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/muhamad-abid-maulana-4a528234a",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/abidmauna",
    },
  ]

  return (
    <section id="contact" className="relative py-20 sm:py-32 overflow-hidden">

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
              {t.contact.title}
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />

          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-xl font-semibold mb-6">
              {t.contact.sendMessage}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="text-sm text-muted-foreground">
                  {t.contact.name}
                </label>

                <input
                  name="from_name"
                  required
                  className="w-full mt-2 px-4 py-3 bg-secondary/50 border border-border rounded-lg"
                  placeholder={t.contact.namePlaceholder}
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground">
                  {t.contact.email}
                </label>

                <input
                  name="from_email"
                  required
                  className="w-full mt-2 px-4 py-3 bg-secondary/50 border border-border rounded-lg"
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground">
                  {t.contact.message}
                </label>

                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full mt-2 px-4 py-3 bg-secondary/50 border border-border rounded-lg"
                  placeholder={t.contact.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full py-3 bg-primary text-primary-foreground rounded-lg flex justify-center gap-2"
              >
                {isSubmitting
                  ? t.contact.sending
                  : isSubmitted
                  ? t.contact.sent
                  : t.contact.sendButton}
              </button>

            </form>
          </motion.div>

          {/* INFO */}
          <div className="flex flex-col justify-center space-y-6">

            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="flex items-center gap-4 p-4 glass rounded-xl"
              >
                <info.icon className="w-5 h-5 text-primary" />

                <div>
                  <p className="text-sm text-muted-foreground">
                    {info.label}
                  </p>
                  <p className="font-medium">{info.value}</p>
                </div>
              </a>
            ))}

            <div>
              <p className="text-sm text-muted-foreground mb-3">
                {t.contact.findMeOn}
              </p>

              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    className="p-3 glass rounded-xl"
                  >
                    <s.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* STATUS */}
            <div className="glass p-5 rounded-xl border border-green-500/20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <div>
                  <p className="font-semibold">
                    {t.contact.available}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t.contact.availableDesc}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}