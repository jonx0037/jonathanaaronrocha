import React from 'react'
import { MotionDiv } from '../motion/MotionDiv'
import { researchInterests } from '../../data/siteData'

export default function ResearchInterestsSection() {
    return (
        <section id="research-interests" className="mb-20 pt-16">
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    Research Interests
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Pursuing a PhD in data science, computer science, or mathematics. Research is anchored in
                    topology-aware deep learning and time-series data mining, with applied threads in financial
                    NLP and sentiment-based regime detection.
                </p>
                <div className="flex flex-wrap gap-2">
                    {researchInterests.map((interest, index) => (
                        <MotionDiv
                            key={interest}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.3, delay: 0.03 * index }}
                            className="px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200 text-sm font-medium border border-blue-100 dark:border-blue-800"
                        >
                            {interest}
                        </MotionDiv>
                    ))}
                </div>
            </MotionDiv>
        </section>
    )
}
