import React from 'react'
import Link from 'next/link'
import { MotionDiv } from '../motion/MotionDiv'
import { education } from '../../data/siteData'

export default function EducationSection() {
    return (
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
                    {education.map((edu) => (
                        <div
                            key={edu.degree}
                            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-2xl font-semibold mb-3">{edu.degree}</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                                {edu.school}
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 mb-2">
                                {edu.status}
                            </p>
                            {edu.details && (
                                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1 mt-3 list-disc list-inside">
                                    {edu.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            )}
                            {edu.diplomaLink && (
                                <Link
                                    href={edu.diplomaLink}
                                    target="_blank"
                                    className="inline-flex items-center text-blue-500 hover:text-blue-600 mt-4"
                                >
                                    <span>View Digital Diploma</span>
                                    <span className="ml-2">→</span>
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </MotionDiv>
        </section>
    )
}
