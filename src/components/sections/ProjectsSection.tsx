import React from 'react'
import Link from 'next/link'
import { MotionDiv } from '../motion/MotionDiv'
import { projects } from '../../data/siteData'

export default function ProjectsSection() {
    return (
        <section id="projects" className="mb-20 pt-16">
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                    Featured Projects
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <Link
                            key={project.title}
                            href={project.href}
                            target={project.external ? '_blank' : undefined}
                            className="block bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                        >
                            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                                {project.description}
                            </p>
                            {project.tags && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                            <p className="text-blue-500 dark:text-blue-400 inline-flex items-center">
                                View Project <span className="ml-2">→</span>
                            </p>
                        </Link>
                    ))}
                </div>
            </MotionDiv>
        </section>
    )
}
