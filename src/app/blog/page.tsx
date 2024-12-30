import React from 'react'
import Link from 'next/link'
import { MotionDiv } from '../../components/motion/MotionDiv'

const blogPosts = [
  {
    title: 'Building Better Web Apps with React',
    slug: 'building-better-web-apps-with-react',
    publishDate: '2024-01-15'
  },
  {
    title: 'Combining English MA with Technical Writing',
    slug: 'combining-english-ma-with-technical-writing',
    publishDate: '2024-01-08'
  },
  {
    title: 'From History to Data Science',
    slug: 'from-history-to-data-science',
    publishDate: '2024-01-02'
  },
  {
    title: 'SEO Best Practices from Analytics Manager',
    slug: 'seo-best-practices-from-analytics-manager',
    publishDate: '2024-01-22'
  },
  {
    title: 'Visualizing Complex Statistics',
    slug: 'visualizing-complex-statistics',
    publishDate: '2024-01-29'
  }
].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())

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
                  day: 'numeric'
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
            </article>
          ))}
        </div>
      </MotionDiv>
    </main>
  )
}
