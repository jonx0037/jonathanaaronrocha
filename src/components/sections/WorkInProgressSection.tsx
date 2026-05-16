import React from 'react'
import { CodeBracketIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import { MotionDiv } from '../motion/MotionDiv'
import { worksInProgress } from '../../data/siteData'

export default function WorkInProgressSection() {
    return (
        <section id="wip" className="mb-20 pt-16">
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                    In Progress
                </h2>
                <div className="space-y-6">
                    {worksInProgress.map((wip) => (
                        <div
                            key={wip.title}
                            className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg"
                        >
                            <div className="flex items-start gap-4">
                                <div className="hidden sm:flex w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900/40 items-center justify-center flex-shrink-0">
                                    <BookOpenIcon className="h-6 w-6 text-amber-600 dark:text-amber-300" aria-hidden="true" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-2">
                                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                            {wip.title}
                                        </h3>
                                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200">
                                            {wip.status}
                                        </span>
                                    </div>
                                    {wip.subtitle && (
                                        <p className="text-base text-gray-500 dark:text-gray-400 italic mb-3">
                                            {wip.subtitle}
                                        </p>
                                    )}
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                        {wip.description}
                                    </p>
                                    <div className="flex flex-wrap items-center gap-4 text-sm">
                                        {wip.repoUrl && (
                                            <a
                                                href={wip.repoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                                            >
                                                <CodeBracketIcon className="h-4 w-4" aria-hidden="true" />
                                                Companion repo
                                            </a>
                                        )}
                                        {wip.license && (
                                            <span className="text-gray-500 dark:text-gray-400 font-mono text-xs">
                                                {wip.license}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </MotionDiv>
        </section>
    )
}
