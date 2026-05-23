import React from 'react'
import Image from 'next/image'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { MotionDiv } from '../motion/MotionDiv'
import SocialLinks from '../social/SocialLinks'
import ResumeCtaButtons from '../ui/ResumeCtaButtons'
import { profile } from '../../data/siteData'

export default function ContactSection() {
    return (
        <section id="contact" className="pt-16 pb-16">
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                    Get in Touch
                </h2>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                    <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden">
                        <Image
                            src="/images/headshots/contact.webp"
                            alt={profile.fullName}
                            fill
                            sizes="112px"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-6 text-center max-w-xl mx-auto leading-relaxed">
                        I&apos;m open to AI/ML engineering and data science roles as well as
                        pre-doctoral and PhD program conversations. Reach out — I&apos;d be
                        glad to talk.
                    </p>
                    <div className="flex flex-col items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
                        <a
                            href={`mailto:${profile.email}`}
                            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                        >
                            <EnvelopeIcon className="h-4 w-4" aria-hidden="true" />
                            {profile.email}
                        </a>
                        <a
                            href={`tel:${profile.phone.replace(/\D/g, '')}`}
                            className="inline-flex items-center gap-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                        >
                            <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                            {profile.phone}
                        </a>
                        <span className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400">
                            <MapPinIcon className="h-4 w-4" aria-hidden="true" />
                            {profile.location}
                        </span>
                    </div>
                    <div className="flex justify-center mb-2">
                        <ResumeCtaButtons variant="compact" />
                    </div>
                    <SocialLinks />
                </div>
            </MotionDiv>
        </section>
    )
}
