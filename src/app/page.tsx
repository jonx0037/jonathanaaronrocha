import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import SummarySection from '../components/sections/SummarySection'
import WhatsNewSection from '../components/sections/WhatsNewSection'
import EducationSection from '../components/sections/EducationSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import BlogSection from '../components/sections/BlogSection'
import SkillsSection from '../components/sections/SkillsSection'
import ExperienceSection from '../components/sections/ExperienceSection'
import ContactSection from '../components/sections/ContactSection'

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <HeroSection />
      <SummarySection />
      <WhatsNewSection />
      <EducationSection />
      <ProjectsSection />
      <BlogSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}
