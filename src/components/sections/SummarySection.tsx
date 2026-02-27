import React from 'react'
import { MotionDiv } from '../motion/MotionDiv'

export default function SummarySection() {
    return (
        <section className="mb-16">
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Full-Stack Web Developer and Data Scientist with over 10 years of experience designing, building, and deploying web applications and AI systems. Combines deep technical expertise in machine learning engineering, NLP, and cloud infrastructure with a strong interdisciplinary background in English and historical research. Currently pursuing an M.S. in Data Science at SMU with a focus on ensemble transformer models and sentiment-based market regime detection. Passionate about turning complex, real-world problems into scalable, data-driven solutions.
                    </p>
                </div>
            </MotionDiv>
        </section>
    )
}
