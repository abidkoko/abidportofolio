"use client"

import { useState } from "react"
import { content } from "@/content"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { CertificatesSection } from "@/components/certificates-section"
import { GallerySection } from "@/components/galeri-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  const [lang, setLang] = useState<"id" | "en">("id")

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />

      <HeroSection lang={lang} />
      <AboutSection lang={lang} />
      <SkillsSection lang={lang} />
      <ProjectsSection lang={lang} />
      <CertificatesSection lang={lang} />
      <GallerySection lang={lang} />
      <ContactSection lang={lang} />
      <Footer lang={lang} />
    </>
  )
}
