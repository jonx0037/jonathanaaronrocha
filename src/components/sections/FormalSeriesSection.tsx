import React from 'react'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import { MotionDiv } from '../motion/MotionDiv'
import { formalSeries } from '../../data/siteData'

const totalTopics = formalSeries.reduce((sum, s) => sum + s.topicCount, 0)
const totalTracks = formalSeries.reduce((sum, s) => sum + s.trackCount, 0)

export default function FormalSeriesSection() {
    return (
        <section id="formal-series" className="mb-20 pt-16">
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Formal Educational Platform Series
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 font-mono text-sm">
                    {totalTopics}+ topics · {totalTracks} curriculum tracks · Astro 5 · React 18 · MDX · D3.js · KaTeX
                </p>
                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {formalSeries.map((site, index) => (
                        <MotionDiv
                            key={site.domain}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col"
                        >
                            <div className="font-mono text-sm text-gray-500 dark:text-gray-400 mb-3">
                                {site.domain}
                            </div>
                            <div className="flex items-baseline gap-4 mb-4">
                                <div>
                                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 leading-none">
                                        {site.topicCount}+
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">
                                        topics
                                    </div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 leading-none">
                                        {site.trackCount}
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">
                                        tracks
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                {site.name}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-grow">
                                {site.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5 mb-5">
                                {site.tracks.slice(0, 5).map((track) => (
                                    <span
                                        key={track}
                                        className="text-[11px] px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                                    >
                                        {track}
                                    </span>
                                ))}
                                {site.tracks.length > 5 && (
                                    <span className="text-[11px] px-2 py-0.5 text-gray-500 dark:text-gray-400">
                                        +{site.tracks.length - 5} more
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center gap-4 text-sm pt-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
                                <a
                                    href={site.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                                >
                                    <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
                                    Live site
                                </a>
                                <a
                                    href={site.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                >
                                    <CodeBracketIcon className="h-4 w-4" aria-hidden="true" />
                                    GitHub
                                </a>
                            </div>
                        </MotionDiv>
                    ))}
                </div>
            </MotionDiv>
        </section>
    )
}
