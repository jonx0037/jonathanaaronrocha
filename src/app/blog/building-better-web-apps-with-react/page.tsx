import React from 'react'
import { MotionDiv } from '../../../components/motion/MotionDiv'
import { readFileSync } from 'fs'
import { join } from 'path'
import { marked } from 'marked'

export default function BuildingBetterWebAppsWithReact() {
  const blogContent = readFileSync(join(process.cwd(), 'public', 'blog-posts', 'Building Better Web Applications with React: Lessons Learned'), 'utf8')
  const html = marked(blogContent)

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Building Better Web Apps with React: Lessons Learned
        </h1>
        <div 
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: html }} 
        />
      </MotionDiv>
    </main>
  )
}
