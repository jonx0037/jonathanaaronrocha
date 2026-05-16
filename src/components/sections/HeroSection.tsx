import React from 'react'
import Image from 'next/image'
import { MotionDiv } from '../motion/MotionDiv'
import ResumeCtaButtons from '../ui/ResumeCtaButtons'
import { profile } from '../../data/siteData'

export default function HeroSection() {
    return (
        <section className="text-center mb-16 pt-16">
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
            >
                <div className="mb-8">
                    <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-blue-500/20">
                        <Image
                            src="/images/corp-headshot-blue-suit-jon.jpg"
                            alt={profile.fullName}
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
                    {profile.fullName}
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                    {profile.tagline}
                </p>
                <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                    {profile.pitchCombined}
                </p>
                <div className="pt-2">
                    <ResumeCtaButtons variant="hero" />
                </div>
                <p className="pt-1 text-sm text-gray-500 dark:text-gray-400 flex flex-wrap justify-center items-center gap-x-3 gap-y-1">
                    <a
                        href={`mailto:${profile.email}`}
                        className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                        {profile.email}
                    </a>
                    <span aria-hidden="true" className="text-gray-300 dark:text-gray-600">·</span>
                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                        LinkedIn
                    </a>
                    <span aria-hidden="true" className="text-gray-300 dark:text-gray-600">·</span>
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                        GitHub
                    </a>
                    <span aria-hidden="true" className="text-gray-300 dark:text-gray-600">·</span>
                    <span>{profile.location}</span>
                </p>
            </MotionDiv>
        </section>
    )
}
