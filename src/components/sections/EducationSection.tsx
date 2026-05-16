import React from 'react'
import Link from 'next/link'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { MotionDiv } from '../motion/MotionDiv'
import { education } from '../../data/siteData'

export default function EducationSection() {
    return (
        <section id="education" className="mb-20 pt-16">
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                    Education
                </h2>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {education.map((edu) => (
                        <div
                            key={edu.degree}
                            className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                                {edu.degree}
                            </h3>
                            <p className="text-lg text-gray-700 dark:text-gray-200 mb-1">
                                {edu.school}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                {edu.status}
                                {edu.advisor && ` · Advisor: ${edu.advisor}`}
                            </p>
                            {edu.details && (
                                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1.5 mt-3 list-disc list-inside leading-relaxed">
                                    {edu.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            )}
                            <div className="flex flex-wrap items-center gap-4 mt-4">
                                {edu.liveLink && (
                                    <a
                                        href={edu.liveLink.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                                    >
                                        <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
                                        {edu.liveLink.label}
                                    </a>
                                )}
                                {edu.diplomaLink && (
                                    <Link
                                        href={edu.diplomaLink}
                                        target="_blank"
                                        className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                                    >
                                        <span>View digital diploma</span>
                                        <span aria-hidden="true">→</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </MotionDiv>
        </section>
    )
}
