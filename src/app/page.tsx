import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import AudienceSplitSection from '../components/sections/AudienceSplitSection'
import WhatsNewSection from '../components/sections/WhatsNewSection'
import FormalSeriesSection from '../components/sections/FormalSeriesSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import WorkInProgressSection from '../components/sections/WorkInProgressSection'
import ResearchInterestsSection from '../components/sections/ResearchInterestsSection'
import EducationSection from '../components/sections/EducationSection'
import ExperienceSection from '../components/sections/ExperienceSection'
import SkillsSection from '../components/sections/SkillsSection'
import BlogSection from '../components/sections/BlogSection'
import ContactSection from '../components/sections/ContactSection'

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <HeroSection />
      <AudienceSplitSection />
      <WhatsNewSection />
      <FormalSeriesSection />
      <ProjectsSection />
      <WorkInProgressSection />
      <ResearchInterestsSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <BlogSection />
      <ContactSection />
    </main>
  )
}
