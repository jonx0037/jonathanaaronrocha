import React from 'react'
import Image from 'next/image'
import { ArrowDownTrayIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { MotionDiv } from '../motion/MotionDiv'
import { profile } from '../../data/siteData'

interface TrackCardProps {
    portraitSrc: string
    portraitAlt: string
    heading: string
    pitch: string
    anchors: { href: string; label: string }[]
    ctaHref: string
    ctaLabel: string
    accentRingClass: string
    side: 'left' | 'right'
}

function TrackCard({
    portraitSrc,
    portraitAlt,
    heading,
    pitch,
    anchors,
    ctaHref,
    ctaLabel,
    accentRingClass,
    side,
}: TrackCardProps) {
    return (
        <MotionDiv
            initial={{ opacity: 0, x: side === 'left' ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: side === 'left' ? 0 : 0.1 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col h-full"
        >
            <div className={`relative w-[72px] h-[72px] rounded-full overflow-hidden mb-5 ring-4 ${accentRingClass}`}>
                <Image src={portraitSrc} alt={portraitAlt} fill style={{ objectFit: 'cover' }} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                {heading}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                {pitch}
            </p>
            <ul className="space-y-2 mb-6 flex-grow">
                {anchors.map((anchor) => (
                    <li key={anchor.href}>
                        <a
                            href={anchor.href}
                            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                        >
                            <ArrowRightIcon className="h-4 w-4 mr-2 flex-shrink-0" aria-hidden="true" />
                            {anchor.label}
                        </a>
                    </li>
                ))}
            </ul>
            <a
                href={ctaHref}
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 bg-blue-600 text-white font-semibold hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition-colors text-sm"
            >
                <ArrowDownTrayIcon className="h-4 w-4" aria-hidden="true" />
                {ctaLabel}
            </a>
        </MotionDiv>
    )
}

export default function AudienceSplitSection() {
    return (
        <section id="audience" className="mb-20 pt-16">
            <h2 className="sr-only">Choose your path</h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <TrackCard
                    side="left"
                    portraitSrc="/images/headshots/audience-industry.webp"
                    portraitAlt={profile.fullName}
                    accentRingClass="ring-blue-200 dark:ring-blue-700"
                    heading="Shipping Production ML"
                    pitch={profile.pitchIndustry}
                    anchors={[
                        { href: '#projects', label: 'Production projects (finrag.io, CounselOS, HarliBot)' },
                        { href: '#experience', label: '20+ years of full-stack engineering' },
                        { href: '#skills', label: 'Stack and ML tooling' },
                    ]}
                    ctaHref={profile.resumeUrl}
                    ctaLabel="Download Resume"
                />
                <TrackCard
                    side="right"
                    portraitSrc="/images/headshots/audience-academic.webp"
                    portraitAlt={profile.fullName}
                    accentRingClass="ring-purple-200 dark:ring-purple-700"
                    heading="Pursuing the PhD"
                    pitch={profile.pitchAcademic}
                    anchors={[
                        { href: '#formal-series', label: 'Formal series — 130+ topics across 29 tracks' },
                        { href: '#research-interests', label: 'Research interests and PhD direction' },
                        { href: '#education', label: 'SMU MSDS Capstone (advised by Dr. Lin)' },
                    ]}
                    ctaHref={profile.cvUrl}
                    ctaLabel="Download CV"
                />
            </div>
        </section>
    )
}
