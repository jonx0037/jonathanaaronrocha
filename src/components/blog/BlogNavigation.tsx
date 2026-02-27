'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { blogPosts } from '../../data/siteData'

function NavigationLink({ post, direction }: { post: typeof blogPosts[0], direction: 'prev' | 'next' }) {
  const isNext = direction === 'next'
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
    >
      {!isNext && <ChevronLeftIcon className="h-5 w-5 mr-2" />}
      <div className={isNext ? 'text-right' : ''}>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {isNext ? 'Next' : 'Previous'}
        </div>
        <div className="text-base font-medium">{post.title}</div>
      </div>
      {isNext && <ChevronRightIcon className="h-5 w-5 ml-2" />}
    </Link>
  )
}

export default function BlogNavigation() {
  const pathname = usePathname()
  if (!pathname) return null

  const currentSlug = pathname.split('/').pop()
  const currentIndex = blogPosts.findIndex(post => post.slug === currentSlug)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  return (
    <nav className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
      <div className="flex justify-between items-center">
        <Link
          href="/blog"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          <div className="text-sm text-gray-500 dark:text-gray-400">
            View All
          </div>
          <div className="text-base font-medium">Blog Posts</div>
        </Link>
        {prevPost ? (
          <NavigationLink post={prevPost} direction="prev" />
        ) : (
          <div className="w-1/3" />
        )}
        {nextPost ? (
          <NavigationLink post={nextPost} direction="next" />
        ) : (
          <div className="w-1/3" />
        )}
      </div>
    </nav>
  )
}
