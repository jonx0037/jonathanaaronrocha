import React from 'react'
import { MotionDiv } from '../motion/MotionDiv'
import { experience } from '../../data/siteData'

export default function ExperienceSection() {
    return (
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
                    {experience.map((job) => (
                        <div
                            key={`${job.title}-${job.company}`}
                            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                                {job.company} • {job.period}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                                {job.description}
                            </p>
                            {job.bullets && (
                                <ul className="mt-3 space-y-1 text-gray-500 dark:text-gray-400 text-sm list-disc list-inside">
                                    {job.bullets.map((bullet, i) => (
                                        <li key={i}>{bullet}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </MotionDiv>
        </section>
    )
}
