import React from 'react'
import Image from 'next/image'
import { MotionDiv } from '../motion/MotionDiv'
import SocialLinks from '../social/SocialLinks'

export default function ContactSection() {
    return (
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
                    <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                        <Image
                            src="/images/2025-jon-b.jpeg"
                            alt="Jonathan Rocha"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 text-center">
                        I&apos;m always interested in connecting with fellow academics, technology professionals, and potential collaborators.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 text-center">
                        <a
                            href="mailto:jon.aaron.rocha@gmail.com"
                            className="text-blue-500 dark:text-blue-400 hover:underline"
                        >
                            jon.aaron.rocha@gmail.com
                        </a>
                    </p>
                    <SocialLinks />
                </div>
            </MotionDiv>
        </section>
    )
}
