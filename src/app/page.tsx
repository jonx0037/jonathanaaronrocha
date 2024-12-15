import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MotionDiv } from '../components/motion/MotionDiv'
import SocialLinks from '../components/social/SocialLinks'

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-20">
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
            Jonathan Aaron Rocha
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
            Academic & Technology Professional
          </p>
        </MotionDiv>
      </section>

      {/* Education Section */}
      <section className="mb-20">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">Masters of Arts in English</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                Texas A&M University - Central Texas
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Graduated: December 2024
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">Masters of Data Science</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                Southern Methodist University
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Starting: Spring 2025
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">Bachelor of Arts in History</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                Texas A&M University
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Graduated: 2004
              </p>
            </div>
          </div>
        </MotionDiv>
      </section>

      {/* Projects Section */}
      <section className="mb-20">
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
              href="https://jonx0037.github.io/presentation/"
              target="_blank"
              className="block bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold mb-3">ENGL 5374 Final Project</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                A Vite-React website showcasing advanced web development techniques and academic research presentation.
              </p>
              <p className="text-blue-500 dark:text-blue-400 inline-flex items-center">
                View Project <span className="ml-2">→</span>
              </p>
            </Link>
          </div>
        </MotionDiv>
      </section>

      {/* Contact Section */}
      <section>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
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
