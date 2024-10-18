import { blogPosts } from '../../blogPosts';
import styles from '../../page.module.css';
import Link from 'next/link';

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(post => post.id === params.id);
  const otherPosts = blogPosts.filter(p => p.id !== params.id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className={styles.blogPostPage}>
      <h1>{post.title}</h1>
      <p className={styles.postMeta}>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <Link href="/blog">
        <a className={styles.backToBlog}>Back to Blog</a>
      </Link>
      <h2>Other Posts</h2>
      <ul className={styles.otherPostsList}>
        {otherPosts.map(otherPost => (
          <li key={otherPost.id}>
            <Link href={`/blog/${otherPost.id}`}>
              <a className={styles.otherPostLink}>{otherPost.title}</a>
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
