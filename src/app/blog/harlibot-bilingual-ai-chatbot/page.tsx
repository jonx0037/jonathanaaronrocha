import React from 'react'
import { MotionDiv } from '../../../components/motion/MotionDiv'
import { readFileSync } from 'fs'
import { join } from 'path'
import { marked } from 'marked'
import BlogNavigation from '../../../components/blog/BlogNavigation'

const blogPost = {
    title: 'HarliBot: Building a Bilingual AI Chatbot for Local Government',
    slug: 'harlibot-bilingual-ai-chatbot',
    publishDate: '2026-02-01'
}

export default function HarliBotBlogPost() {
    const blogContent = readFileSync(join(process.cwd(), 'public', 'blog-posts', 'HarliBot: Building a Bilingual AI Chatbot for Local Government'), 'utf8')
    const html = marked(blogContent)

    return (
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
            >
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                        {blogPost.title}
                    </h1>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(blogPost.publishDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </div>
                </div>
                <div
                    className="prose prose-lg dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
                <BlogNavigation />
            </MotionDiv>
        </main>
    )
}
