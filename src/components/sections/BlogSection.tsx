import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MotionDiv } from '../motion/MotionDiv'
import { blogPosts, profile } from '../../data/siteData'

export default function BlogSection() {
    // Show only the latest 4 posts on the homepage
    const latestPosts = blogPosts.slice(0, 4)

    return (
        <section id="blog" className="mb-20 pt-16">
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Blog
                    </h2>
                    <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-gray-700 flex-shrink-0">
                        <Image
                            src="/images/headshots/blog.webp"
                            alt={profile.fullName}
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <Link
                        href="/blog"
                        className="ml-auto text-blue-500 dark:text-blue-400 hover:underline text-sm font-medium"
                    >
                        View All Posts →
                    </Link>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {latestPosts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}/`}
                            className="block bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                        >
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                {new Date(post.publishDate).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </div>
                            <h3 className="text-2xl font-semibold mb-3">{post.title}</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                                {post.excerpt}
                            </p>
                            <p className="text-blue-500 dark:text-blue-400 inline-flex items-center">
                                Read More <span className="ml-2">→</span>
                            </p>
                        </Link>
                    ))}
                </div>
            </MotionDiv>
        </section>
    )
}
