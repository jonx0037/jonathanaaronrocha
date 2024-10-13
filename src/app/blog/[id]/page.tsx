import { blogPosts } from '../../blogPosts';
import styles from '../../page.module.css';
import Link from 'next/link';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(post => post.id === params.id);
  const otherPosts = blogPosts.filter(p => p.id !== params.id);

  if (!post) {
    return (
      <div className={styles.page}>
        <header className={styles.header}>
          <nav>
            <Link href="/">Home</Link> / <span>Post Not Found</span>
          </nav>
        </header>
        <main className={styles.main}>
          <div className={styles.error}>
            <h1>Oops! Post not found.</h1>
            <p>We couldn't find the post you're looking for. Please check the URL or return to the <Link href="/">homepage</Link>.</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav>
          <Link href="/">Home</Link> / <Link href="/#blog">Blog</Link> / <span>{post.title}</span>
        </nav>
      </header>
      <main className={styles.main}>
        <article className={styles.blogPostPage}>
          <h1>{post.title}</h1>
          <p className={styles.postMeta}>Posted on {post.date}</p>
          <div className={styles.blogPostContent} dangerouslySetInnerHTML={{ __html: post.content }} />
          <Link href="/#blog" className={styles.backToBlog}>
            Back to Blog
          </Link>
          <section className={styles.commentsSection}>
            <h2>Comments</h2>
            <p>Comments functionality coming soon!</p>
          </section>
          <section className={styles.socialSharing}>
            <h2>Share this post</h2>
            <button className={styles.shareButton}>Share on Twitter</button>
            <button className={styles.shareButton}>Share on Facebook</button>
          </section>
        </article>
        <aside className={styles.otherPosts}>
          <h2>Other Posts</h2>
          <ul className={styles.otherPostsList}>
            {otherPosts.map(otherPost => (
              <li key={otherPost.id}>
                <Link href={`/blog/${otherPost.id}`} className={styles.otherPostLink}>
                  {otherPost.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </main>
    </div>
  );
}
