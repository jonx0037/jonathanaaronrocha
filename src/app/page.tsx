import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MotionDiv } from '../components/motion/MotionDiv'
import SocialLinks from '../components/social/SocialLinks'

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16 pt-16">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="mb-8">
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src="/images/headshot.jpeg"
                alt="Jonathan Rocha"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Jonathan A. Rocha
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
            Web Developer, Digital Marketer, & Data Scientist
          </p>
        </MotionDiv>
      </section>

      {/* Professional Summary */}
      <section className="mb-16">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Digital marketing professional with more than 5 years of experience in managing online communities and social networks.
            </p>
          </div>
        </MotionDiv>
      </section>

      {/* What's New Section */}
      <section className="mb-20">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-1 rounded-xl">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="animate-pulse mr-2">🎉</span>
                What's New
              </h2>
              <div className="space-y-4">
                <MotionDiv
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start space-x-3"
                >
                  <span className="text-blue-500">🎓</span>
                  <p className="text-gray-600 dark:text-gray-300">Graduated with an MA in English from TAMUCT on December 13, 2024</p>
                </MotionDiv>
                <MotionDiv
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start space-x-3"
                >
                  <span className="text-blue-500">📚</span>
                  <p className="text-gray-600 dark:text-gray-300">Starting MS in Data Science at SMU in Spring 2025</p>
                </MotionDiv>
                <MotionDiv
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-start space-x-3"
                >
                  <span className="text-blue-500">✍️</span>
                  <p className="text-gray-600 dark:text-gray-300">New Blog section coming soon!</p>
                </MotionDiv>
              </div>
            </div>
          </div>
        </MotionDiv>
      </section>

      {/* Education Section */}
      <section id="education" className="mb-20 pt-16">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">Master of Science, Data Science</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                Southern Methodist University
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Starting Spring 2025
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">Master of Arts, English</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                Texas A&M University - Central Texas
              </p>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Graduated December 2024
              </p>
              <Link 
                href="/images/TAMUCT-MA-ENGL-DIPLOMA.pdf"
                target="_blank"
                className="inline-flex items-center text-blue-500 hover:text-blue-600"
              >
                <span>View Digital Diploma</span>
                <span className="ml-2">→</span>
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">Bachelor of Arts, History</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                Texas A&M University
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Graduated 2004
              </p>
            </div>
          </div>
        </MotionDiv>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-20 pt-16">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link 
              href="/mermaid-visualization"
              target="_blank"
              className="block bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold mb-3">Statistics Visualization</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                A collection of Mermaid diagrams visualizing complex statistical concepts for Data Science education.
              </p>
              <p className="text-blue-500 dark:text-blue-400 inline-flex items-center">
                View Project <span className="ml-2">→</span>
              </p>
            </Link>

            <Link 
              href="https://jonx0037.github.io/presentation/"
              target="_blank"
              className="block bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold mb-3">ENGL 5374 Final Project</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                A Vite-React website exploring Twitter's platform governance, featuring interactive diagrams.
              </p>
              <p className="text-blue-500 dark:text-blue-400 inline-flex items-center">
                View Project <span className="ml-2">→</span>
              </p>
            </Link>
          </div>
        </MotionDiv>
      </section>

      {/* Blog Section */}
      <section id="blog" className="mb-20 pt-16">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Blog
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link 
              href="/blog/building-better-web-apps-with-react/"
              className="block bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold mb-3">Building Better Web Apps with React</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Lessons learned from building complex web applications with React.
              </p>
              <p className="text-blue-500 dark:text-blue-400 inline-flex items-center">
                Read More <span className="ml-2">→</span>
              </p>
            </Link>

            <Link 
              href="/blog/combining-english-ma-with-technical-writing/"
              className="block bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold mb-3">Combining English MA Skills with Technical Writing</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                How my academic background in English has influenced my technical writing.
              </p>
              <p className="text-blue-500 dark:text-blue-400 inline-flex items-center">
                Read More <span className="ml-2">→</span>
              </p>
            </Link>

            <Link 
              href="/blog/from-history-to-data-science/"
              className="block bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold mb-3">From History to Data Science</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                My academic journey from a BA in History to an MS in Data Science.
              </p>
              <p className="text-blue-500 dark:text-blue-400 inline-flex items-center">
                Read More <span className="ml-2">→</span>
              </p>
            </Link>

            <Link 
              href="/blog/seo-best-practices-from-analytics-manager/"
              className="block bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold mb-3">SEO Best Practices I Learned as an Analytics Manager</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Insights on effective SEO strategies from my experience in digital analytics.
              </p>
              <p className="text-blue-500 dark:text-blue-400 inline-flex items-center">
                Read More <span className="ml-2">→</span>
              </p>
            </Link>

            <Link 
              href="/blog/visualizing-complex-statistics/"
              className="block bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold mb-3">Visualizing Statistics: Making Complex Concepts Accessible</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                How I used Mermaid diagrams to create engaging visualizations for statistics education.
              </p>
              <p className="text-blue-500 dark:text-blue-400 inline-flex items-center">
                Read More <span className="ml-2">→</span>
              </p>
            </Link>
          </div>
        </MotionDiv>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="mb-20 pt-16">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-blue-500 dark:text-blue-400">Development</h3>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">Full-Stack Development</p>
                <p className="text-gray-600 dark:text-gray-300">HTML/CSS/JavaScript</p>
                <p className="text-gray-600 dark:text-gray-300">Python</p>
                <p className="text-gray-600 dark:text-gray-300">React/Next.js</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-purple-500 dark:text-purple-400">Digital Marketing</h3>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">SEO Strategy</p>
                <p className="text-gray-600 dark:text-gray-300">Content Management</p>
                <p className="text-gray-600 dark:text-gray-300">Analytics</p>
                <p className="text-gray-600 dark:text-gray-300">Digital Strategy</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-green-500 dark:text-green-400">Design & Tools</h3>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">UX/UI Design</p>
                <p className="text-gray-600 dark:text-gray-300">Graphic Design</p>
                <p className="text-gray-600 dark:text-gray-300">AI Technologies</p>
                <p className="text-gray-600 dark:text-gray-300">Project Management</p>
              </div>
            </div>
          </div>
        </MotionDiv>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-20 pt-16">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Experience
          </h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-2">Content Manager</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">Fullsteam • May 2024 - Present</p>
              <p className="text-gray-600 dark:text-gray-300">
                Leading content strategy and management across multiple platforms, overseeing a team of writers and editors. Implementing data-driven strategies to enhance user engagement and search rankings while maintaining brand consistency.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-2">SEO Analyst</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">Fullsteam • March 2023 - May 2024</p>
              <p className="text-gray-600 dark:text-gray-300">
                Optimized website performance through comprehensive SEO strategies, including technical audits, keyword research, and analytics monitoring. Successfully improved organic search rankings across multiple digital properties.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-2">Web Developer</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">Fullsteam • March 2021 - March 2023</p>
              <p className="text-gray-600 dark:text-gray-300">
                Full-stack development of user-friendly websites and web applications using HTML, CSS, JavaScript, and Python. Focused on optimizing performance and ensuring seamless functionality across platforms.
              </p>
            </div>
          </div>
        </MotionDiv>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-16">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Get in Touch
          </h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <Image
                src="/images/avatar-blue.jpg"
                alt="Artistic Avatar"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 text-center">
              I'm always interested in connecting with fellow academics, technology professionals, and potential collaborators.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 text-center">
              <a href="mailto:jon.aaron.rocha@gmail.com" className="text-blue-500 dark:text-blue-400 hover:underline">
                jon.aaron.rocha@gmail.com
              </a>
            </p>
            <SocialLinks />
          </div>
        </MotionDiv>
      </section>
    </main>
  )
}
