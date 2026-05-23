import React from 'react'
import Image from 'next/image'
import { MotionDiv } from '../motion/MotionDiv'
import { experience, profile } from '../../data/siteData'

export default function ExperienceSection() {
    return (
        <section id="experience" className="mb-20 pt-16">
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Experience
                    </h2>
                    <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-blue-200 dark:ring-blue-900/60 flex-shrink-0">
                        <Image
                            src="/images/headshots/experience.webp"
                            alt={profile.fullName}
                            fill
                            sizes="56px"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
                <ol className="relative border-l-2 border-blue-200 dark:border-blue-900/60 ml-3 md:ml-5 space-y-10">
                    {experience.map((job, index) => (
                        <MotionDiv
                            key={`${job.title}-${job.company}`}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.4, delay: 0.05 * index }}
                            className="relative pl-6 md:pl-8"
                        >
                            <span
                                aria-hidden="true"
                                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full ring-4 ring-white dark:ring-gray-900 ${
                                    job.current
                                        ? 'bg-blue-500 dark:bg-blue-400'
                                        : 'bg-gray-300 dark:bg-gray-600'
                                }`}
                            />
                            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                                    {job.title}
                                </h3>
                                {job.current && (
                                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-800 dark:bg-green-900/60 dark:text-green-200 uppercase tracking-wider">
                                        Current
                                    </span>
                                )}
                            </div>
                            <p className="text-lg text-gray-700 dark:text-gray-200 font-medium">
                                {job.company}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                {job.period} · {job.location}
                                {job.mode && ` · ${job.mode}`}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {job.description}
                            </p>
                            {job.bullets && job.bullets.length > 0 && (
                                <ul className="mt-3 space-y-1.5 text-sm text-gray-500 dark:text-gray-400 list-disc list-inside">
                                    {job.bullets.map((bullet, i) => (
                                        <li key={i} className="leading-relaxed">
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </MotionDiv>
                    ))}
                </ol>
            </MotionDiv>
        </section>
    )
}
