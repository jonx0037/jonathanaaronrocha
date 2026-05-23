import React from 'react'
import Image from 'next/image'
import { MotionDiv } from '../motion/MotionDiv'
import { profile } from '../../data/siteData'

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden text-center mb-16 pt-16">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 -z-0 mx-auto h-[460px] max-w-md opacity-[0.12] dark:opacity-[0.08]"
                style={{
                    maskImage: 'linear-gradient(to bottom, black 0%, black 35%, transparent 85%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 35%, transparent 85%)',
                }}
            >
                <Image
                    src="/images/headshots/hero-backdrop.webp"
                    alt=""
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    sizes="(min-width: 768px) 28rem, 100vw"
                />
            </div>
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 space-y-6"
            >
                <div className="mb-8">
                    <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-blue-500/20">
                        <Image
                            src="/images/headshots/hero.webp"
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
                <p className="pt-2 text-sm text-gray-500 dark:text-gray-400 flex flex-wrap justify-center items-center gap-x-3 gap-y-1">
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
