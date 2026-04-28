import React from 'react'
import Image from 'next/image'
import { MotionDiv } from '../motion/MotionDiv'

export default function HeroSection() {
    return (
        <section className="text-center mb-16 pt-16">
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
            >
                <div className="mb-8">
                    <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-blue-500/20">
                        <Image
                            src="/images/corp-headshot-blue-suit-jon.jpg"
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
                    Data Scientist · AI/ML Engineer · Full-Stack Web Developer
                </p>
            </MotionDiv>
        </section>
    )
}
