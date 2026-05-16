'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import { projects, type ProjectAudience } from '../../data/siteData'

type Filter = 'all' | ProjectAudience

const filters: { value: Filter; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'industry', label: 'Industry' },
    { value: 'academic', label: 'Academic' },
]

const audienceBadge: Record<ProjectAudience, { label: string; className: string }> = {
    industry: {
        label: 'Industry',
        className: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200',
    },
    academic: {
        label: 'Academic',
        className: 'bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-200',
    },
    both: {
        label: 'Industry · Academic',
        className: 'bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 dark:from-blue-900/60 dark:to-purple-900/60 dark:text-gray-100',
    },
}

export default function ProjectsSection() {
    const [filter, setFilter] = useState<Filter>('all')

    const visible = useMemo(() => {
        if (filter === 'all') return projects
        return projects.filter(
            (p) => p.audience === filter || p.audience === 'both'
        )
    }, [filter])

    return (
        <section id="projects" className="mb-20 pt-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Projects
                    </h2>
                    <div role="tablist" aria-label="Filter projects by audience" className="flex flex-wrap gap-2">
                        {filters.map((f) => {
                            const active = filter === f.value
                            return (
                                <button
                                    key={f.value}
                                    role="tab"
                                    aria-selected={active}
                                    onClick={() => setFilter(f.value)}
                                    className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                                        active
                                            ? 'bg-blue-600 text-white dark:bg-blue-500'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                                    }`}
                                >
                                    {f.label}
                                </button>
                            )
                        })}
                    </div>
                </div>

                <LayoutGroup>
                    <motion.div layout className="grid md:grid-cols-2 gap-6 md:gap-8">
                        <AnimatePresence mode="popLayout">
                            {visible.map((project) => {
                                const badge = audienceBadge[project.audience]
                                return (
                                    <motion.div
                                        key={project.title}
                                        layout
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -12 }}
                                        transition={{ duration: 0.25 }}
                                        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col"
                                    >
                                        <div className="flex items-start justify-between gap-3 mb-3">
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                {project.title}
                                            </h3>
                                            <span
                                                className={`text-[10px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${badge.className}`}
                                            >
                                                {badge.label}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-grow">
                                            {project.description}
                                        </p>
                                        {project.stack && project.stack.length > 0 && (
                                            <div className="flex flex-wrap gap-1.5 mb-4">
                                                {project.stack.map((item) => (
                                                    <span
                                                        key={item}
                                                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        <div className="flex flex-wrap items-center gap-4 text-sm pt-3 border-t border-gray-200 dark:border-gray-700">
                                            {project.liveLink ? (
                                                <a
                                                    href={project.liveLink.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                                                >
                                                    <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
                                                    {project.liveLink.label}
                                                </a>
                                            ) : (
                                                <Link
                                                    href={project.href}
                                                    target={project.external ? '_blank' : undefined}
                                                    rel={project.external ? 'noopener noreferrer' : undefined}
                                                    className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                                                >
                                                    <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
                                                    View project
                                                </Link>
                                            )}
                                            {project.repoLink && (
                                                <a
                                                    href={project.repoLink.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                                >
                                                    <CodeBracketIcon className="h-4 w-4" aria-hidden="true" />
                                                    Repo
                                                </a>
                                            )}
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </AnimatePresence>
                    </motion.div>
                </LayoutGroup>
            </motion.div>
        </section>
    )
}
