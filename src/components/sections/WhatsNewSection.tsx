import React from 'react'
import { MotionDiv } from '../motion/MotionDiv'
import { announcements } from '../../data/siteData'

export default function WhatsNewSection() {
    return (
        <section className="mb-20">
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-1 rounded-xl">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <span className="animate-pulse mr-2">🎉</span>
                            What&apos;s New
                        </h2>
                        <div className="space-y-4">
                            {announcements.map((item, index) => (
                                <MotionDiv
                                    key={index}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 + index * 0.2 }}
                                    className="flex items-start space-x-3"
                                >
                                    <span className="text-blue-500">{item.emoji}</span>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {item.text}
                                    </p>
                                </MotionDiv>
                            ))}
                        </div>
                    </div>
                </div>
            </MotionDiv>
        </section>
    )
}
