import React from 'react'
import { MotionDiv } from '../motion/MotionDiv'
import { skillCategories } from '../../data/siteData'

const colorMap: Record<string, { heading: string }> = {
    blue: {
        heading: 'text-blue-500 dark:text-blue-400',
    },
    purple: {
        heading: 'text-purple-500 dark:text-purple-400',
    },
    green: {
        heading: 'text-green-500 dark:text-green-400',
    },
    amber: {
        heading: 'text-amber-500 dark:text-amber-400',
    },
}

export default function SkillsSection() {
    return (
        <section id="skills" className="mb-20 pt-16">
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                    Technical Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category) => {
                        const colors = colorMap[category.color] || colorMap.blue
                        return (
                            <div
                                key={category.title}
                                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <h3
                                    className={`text-xl font-semibold mb-4 ${colors.heading}`}
                                >
                                    {category.title}
                                </h3>
                                <div className="space-y-2">
                                    {category.skills.map((skill) => (
                                        <p
                                            key={skill}
                                            className="text-gray-600 dark:text-gray-300"
                                        >
                                            {skill}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </MotionDiv>
        </section>
    )
}
