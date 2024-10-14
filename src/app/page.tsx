"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from "./page.module.css";
import { blogPosts } from './blogPosts';
import dynamic from 'next/dynamic';

// Dynamically import components
const DarkModeToggle = dynamic(() => import('../components/DarkModeToggle'));
const TypewriterAnimation = dynamic(() => import('../components/TypewriterAnimation'));

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <nav>
        <a onClick={() => scrollToSection('about')}>About</a>
        <a onClick={() => scrollToSection('portfolio')}>Portfolio</a>
        <a onClick={() => scrollToSection('resume')}>Resume</a>
        <a onClick={() => scrollToSection('blog')}>Blog</a>
        <a onClick={() => scrollToSection('contact')}>Contact</a>
      </nav>
      <DarkModeToggle />
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://linkedin.com/in/jonathan-rocha-atx/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/jonx0037" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="mailto:jonX03@pm.me">Email Me</a>
    </footer>
  );
};

const About: React.FC = () => (
  <section id="about" className={styles.section}>
    <h2>About Me</h2>
    <div className={styles.aboutContent}>
      <div className={styles.aboutText}>
        <p>I have a unique perspective on digital content, combining my background in the humanities with technical expertise. I specialize in SEO strategies, web development, and content creation.</p>
        <p>As the Content Manager at Fullsteam, I lead a team to produce engaging, SEO-optimized content that aligns with business goals.</p>
        <p>Outside of work, I enjoy music, jiu-jitsu, and spending time with my Olde English Bulldogge, Lady.</p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/profile-image.jpg"
          alt="Jonathan Aaron Rocha smiling in a blue shirt and black tie"
          width={300}
          height={300}
          className={styles.profileImage}
        />
      </div>
    </div>
  </section>
);

const Portfolio: React.FC = () => (
  <section id="portfolio" className={styles.section}>
    <h2>Portfolio</h2>
    <div className={styles.projectGrid}>
      <div className={styles.project}>
        <h3>SEO and Web Development for Fullsteam</h3>
        <p>Improved visibility and search rankings through data-driven SEO strategies and site performance optimization.</p>
      </div>
      <div className={styles.project}>
        <h3>JonathanAaronRocha.com</h3>
        <p>This personal website, built with Next.js, serves as a portfolio and digital hub for my professional interests.</p>
      </div>
      <div className={styles.project}>
        <h3>Research on Online Free Speech</h3>
        <p>My academic work on content moderation and free speech, focusing on the impact of platform censorship.</p>
      </div>
    </div>
  </section>
);

const Resume: React.FC = () => (
  <section id="resume" className={styles.section}>
    <h2>Resume</h2>
    <div className={styles.timeline}>
      <div className={styles.timelineItem}>
        <h3>2024 - Present: Content Manager at Fullsteam</h3>
        <p>Oversee content creation and SEO strategies, ensuring alignment with company goals.</p>
      </div>
      <div className={styles.timelineItem}>
        <h3>2023 - 2024: SEO Analyst at Fullsteam</h3>
        <p>Led SEO efforts to optimize site performance and increase organic visibility.</p>
      </div>
      <div className={styles.timelineItem}>
        <h3>2021 - 2023: Web Developer at Fullsteam</h3>
        <p>Developed user-friendly websites and applications, ensuring technical excellence.</p>
      </div>
      <div className={styles.timelineItem}>
        <h3>1999 - 2004: BA in History, Texas A&M University</h3>
        <p>Focused on research in history and digital content.</p>
      </div>
      <div className={styles.timelineItem}>
        <h3>2023 - 2024: MA in English, Texas A&M University - Central Texas</h3>
        <p>Researching digital rhetoric and free speech in online environments.</p>
      </div>
    </div>
  </section>
);

interface BlogProps {
  visiblePosts: number;
  loadMorePosts: () => void;
}

const Blog: React.FC<BlogProps> = ({ visiblePosts, loadMorePosts }) => (
  <section id="blog" className={styles.section}>
    <h2>Blog</h2>
    <div className={styles.blogGrid}>
      {blogPosts.slice(0, visiblePosts).map((post) => (
        <article key={post.id} className={styles.blogPost}>
          <h3>{post.title}</h3>
          <p className={styles.postMeta}>Posted on {post.date}</p>
          <p>{post.excerpt}</p>
          <Link href={`/blog/${post.id}`} className={styles.readMore}>
            Read More
          </Link>
        </article>
      ))}
    </div>
    {visiblePosts < blogPosts.length && (
      <div className={styles.loadMoreContainer}>
        <button onClick={loadMorePosts} className={styles.loadMoreBtn}>Load More</button>
      </div>
    )}
  </section>
);

const Contact: React.FC = () => (
  <section id="contact" className={styles.section}>
    <h2>Get in Touch</h2>
    <p>If you’re interested in working together or just want to say hello, feel free to reach out!</p>
    <form action="/submit-form" method="POST" className={styles.contactForm}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" required></textarea>

      <button type="submit">Send Message</button>
    </form>
    <p>You can also find me on <a href="https://www.linkedin.com/in/jonathan-rocha-atx/">LinkedIn</a> or check out my projects on <a href="https://github.com/jonx0037">GitHub</a>.</p>
  </section>
);

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [visiblePosts, setVisiblePosts] = useState(2);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    setIsDarkMode(storedDarkMode === 'true');
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  const loadMorePosts = () => {
    setVisiblePosts(prevVisible => Math.min(prevVisible + 2, blogPosts.length));
  };

  return (
    <div className={`${styles.page} ${isDarkMode ? styles.darkMode : ''}`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className={styles.main}>
        <section className={styles.introBanner}>
          <h1>Hi, I’m Jonathan Rocha.</h1>
          <p>Web Developer, Content Manager, and Digital Marketing Expert with over 5 years of experience managing online communities, optimizing SEO strategies, and leading content creation across multiple platforms.</p>
        </section>

        <About />
        <Portfolio />
        <Resume />
        <Blog visiblePosts={visiblePosts} loadMorePosts={loadMorePosts} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
