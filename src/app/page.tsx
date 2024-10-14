"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from "./page.module.css";
import { blogPosts } from './blogPosts';
import TypewriterAnimation from '../components/TypewriterAnimation';

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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const loadMorePosts = () => {
    setVisiblePosts(prevVisible => Math.min(prevVisible + 2, blogPosts.length));
  };

  return (
    <div className={`${styles.page} ${isDarkMode ? styles.darkMode : ''}`}>
      <header className={styles.header}>
        <nav>
          <a onClick={() => scrollToSection('about')}>About</a>
          <a onClick={() => scrollToSection('portfolio')}>Portfolio</a>
          <a onClick={() => scrollToSection('resume')}>Resume</a>
          <a onClick={() => scrollToSection('blog')}>Blog</a>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
        </nav>
        <button onClick={toggleDarkMode} className={styles.modeToggle}>
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </header>

      <main className={styles.main}>
        <section className={styles.introBanner}>
          <h1>Hi, I’m Jonathan Rocha.</h1>
          <p>Web Developer, Content Manager, and Digital Marketing Expert with over 5 years of experience managing online communities, optimizing SEO strategies, and leading content creation across multiple platforms.</p>
        </section>

        <section className={styles.cta}>
          <p>Discover my work, explore my thoughts, or get in touch.</p>
          <Link href="/portfolio" className={styles.btn}>Explore My Portfolio</Link>
          <Link href="/contact" className={styles.btn}>Contact Me</Link>
        </section>

        <section id="about" className={styles.section}>
          <h2>About Me</h2>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p>With a background in both the humanities and tech, I bring a unique perspective to digital content. I specialize in SEO strategies, web development, and content creation that bridges the gap between data-driven analysis and creative storytelling.</p>
              <p>I’ve worked on optimizing website performance, developing SEO strategies, and managing cross-functional teams to ensure high-quality content that aligns with business goals. Currently, I serve as the Content Manager at Fullsteam, overseeing a team of writers and developers to produce engaging, SEO-optimized content.</p>
              <p>When I’m not immersed in digital strategies, I enjoy playing guitar and piano, exploring classical and jazz music, and training in jiu-jitsu. I also love spending time with my Olde English Bulldogge, Lady, and exploring new academic frontiers with my BA in History and an MA in English.</p>
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

        <section className={`${styles.section} ${styles.typewriterSection}`}>
          <TypewriterAnimation text="Web Developer, Content Manager, SEO Expert, Digital Marketer, Leader, Musician, Jiu-Jitsu Practitioner, Scholar" />
        </section>

        <section id="portfolio" className={styles.section}>
          <h2>Portfolio</h2>
          <div className={styles.projectGrid}>
            <div className={styles.project}>
              <h3>SEO and Web Development for Fullsteam</h3>
              <p>As SEO Analyst and Web Developer at Fullsteam, I significantly improved visibility and search engine rankings across multiple digital properties by implementing data-driven SEO strategies, optimizing site performance, and ensuring seamless cross-platform functionality. (Link to case study or project details)</p>
            </div>
            <div className={styles.project}>
              <h3>JonathanAaronRocha.com</h3>
              <p>This personal website is built using Next.js and deployed on Vercel, featuring a dark, modern theme optimized for performance and SEO. It serves as both a portfolio and a digital hub for my professional and personal interests. (You are here!)</p>
            </div>
            <div className={styles.project}>
              <h3>Research on Online Free Speech</h3>
              <p>Explore my academic work on content moderation and online free speech, focusing on the impact of platform censorship on freedom of expression. This project draws heavily on research conducted for ENGL 5374 at Texas A&M University. (Link to research papers)</p>
            </div>
          </div>
        </section>

        <section id="resume" className={styles.section}>
          <h2>Resume</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <h3>2024 - Present: Content Manager at Fullsteam</h3>
              <p>Oversee content creation, SEO strategies, and digital marketing efforts, ensuring alignment with company goals and audience engagement.</p>
            </div>
            <div className={styles.timelineItem}>
              <h3>2023 - 2024: SEO Analyst at Fullsteam</h3>
              <p>Led SEO efforts to optimize site performance and increase organic search visibility through data-driven strategies.</p>
            </div>
            <div className={styles.timelineItem}>
              <h3>2021 - 2023: Web Developer at Fullsteam</h3>
              <p>Developed and maintained user-friendly websites and web applications, aligning projects with business objectives and ensuring technical excellence.</p>
            </div>
            <div className={styles.timelineItem}>
              <h3>1999 - 2004: BA in History, Texas A&M University</h3>
              <p>Focused on research in history, politics, and digital content, laying the groundwork for my later ventures in SEO and digital marketing.</p>
            </div>
            <div className={styles.timelineItem}>
              <h3>2023 - 2024: MA in English, Texas A&M University - Central Texas</h3>
              <p>Exploring digital rhetoric, content moderation, and free speech in online environments as part of my advanced academic research.</p>
            </div>
          </div>
        </section>

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
      </main>

      <footer className={styles.footer}>
        <a
          href="https://linkedin.com/in/jonathan-rocha-atx/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/jonx0037"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="mailto:jon.rocha@outlook.com"
        >
          Email Me
        </a>
      </footer>
    </div>
  );
}
