"use client";

import { useEffect } from 'react';
import { useDarkMode } from '../../../context/DarkModeContext';
import DarkModeToggle from '../../components/DarkModeToggle';
import { blogPosts } from '../../blogPosts';
import styles from '../../page.module.css';
import Link from 'next/link';

export default function BlogPost({ params }: { params: { id: string } }) {
  const { darkMode } = useDarkMode();
  const post = blogPosts.find(post => post.id === params.id);
  const otherPosts = blogPosts.filter(p => p.id !== params.id);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className={styles.blogPost}>
      <DarkModeToggle />
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <h2>Other Posts</h2>
      <ul>
        {otherPosts.map(otherPost => (
          <li key={otherPost.id}>
            <Link href={`/blog/${otherPost.id}`}>
              <a>{otherPost.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}
