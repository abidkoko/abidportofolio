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
  return (
    <>
      <Navigation />

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </>
  )
}