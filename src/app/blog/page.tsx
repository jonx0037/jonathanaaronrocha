import React from 'react'
import Link from 'next/link'
import { MotionDiv } from '../../components/motion/MotionDiv'
import { blogPosts } from '../../data/siteData'

export default function BlogIndex() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Blog Posts
        </h1>
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article key={post.slug} className="space-y-2">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(post.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <h2 className="text-2xl font-bold">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </MotionDiv>
    </main>
  )
}
