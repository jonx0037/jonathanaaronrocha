"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from "./page.module.css";
import { blogPosts } from './blogPosts';

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
          <a onClick={() => scrollToSection('projects')}>Projects</a>
          <a onClick={() => scrollToSection('skills')}>Skills</a>
          <a onClick={() => scrollToSection('blog')}>Blog</a>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
        </nav>
        <button onClick={toggleDarkMode} className={styles.modeToggle}>
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </header>

      <main className={styles.main}>
        <section id="about" className={styles.section}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h1 className={styles.title}>Jonathan Aaron Rocha</h1>
              <p className={styles.description}>
                WEB DEVELOPER & MARKETER
              </p>
              <h2>Professional Summary</h2>
              <p>
                Digital marketing professional with more than 5 years of experience in managing online communities and social networks.
              </p>
              <h2>Experience</h2>
              <p>
                <strong>Content Manager - Fullsteam</strong><br />
                May 2024 - Present<br />
                • Oversee developing, optimizing, and managing high-quality content across multiple platforms<br />
                • Collaborate with cross-functional teams to create engaging, SEO-optimized copy<br />
                • Tailor content to business objectives and audience needs<br />
                • Manage content calendars<br />
                • Ensure brand consistency<br />
                • Utilize data-driven strategies to enhance user engagement, search rankings, and conversion rates<br />
                • Lead a team of writers and editors<br />
                • Guide best practices, tone, and style<br />
                • Ensure all content aligns with company goals<br />
                <strong>SEO Analyst- Fullsteam</strong><br />
                March 2023 - May 2024<br />
                • Optimized website performance through data-driven SEO strategies<br />
                • Conducted keyword research<br />
                • Performed competitive analysis<br />
                • Executed technical audits to improve organic search rankings<br />
                • Collaborated with marketing and development teams<br />
                • Implemented on-page and off-page SEO best practices<br />
                • Monitored site analytics<br />
                • Refined strategies to enhance traffic and conversion rates<br />
                • Significantly improved visibility and search engine rankings across multiple digital properties<br />
                <strong>Web Developer - Fullsteam</strong><br />
                March 2021 - March 2023<br />
                • Developed and maintained user-friendly websites and web applications<br />
                • Aligned projects with company goals<br />
                • Performed front-end and back-end development<br />
                • Coded in HTML, CSS, JavaScript, and Python<br />
                • Optimized site performance for SEO and user experience<br />
                • Collaborated with cross-functional teams<br />
                • Troubleshot issues<br />
                • Integrated new features<br />
                • Ensured seamless functionality across platforms<br />
                • Contributed to the company's digital strategy and growth<br />
              </p>
              <h2>Education</h2>
              <p>
                <strong>Bachelors of Arts in History</strong><br />
                Texas A&M University, College Station, TX, USA<br />
                1999-2004<br />
                <strong>Masters of Arts in English</strong><br />
                Texas A&M University - Central Texas, Killeen, TX, USA<br />
                2023-2024<br />
              </p>
              <h2>Skills</h2>
              <p>
                I possess diverse skills in web development, digital marketing, and content creation. Proficient in multiple programming languages, I excel in full-stack development and SEO strategy. My expertise includes graphic design, UX/UI, and content management systems. I'm experienced in data analysis, project management, and leadership, with knowledge of emerging technologies like AI. My versatility spans from technical development to creative content strategy.
              </p>
              <h2>Languages</h2>
              <p>
                • Native English<br />
                • Fluent Spanish, French<br />
              </p>
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

        <section id="projects" className={styles.section}>
          <h2>Projects</h2>
          <div className={styles.projectGrid}>
            <div className={styles.project}>
              <h3>E-commerce Platform</h3>
              <p>Developed a full-stack e-commerce platform using React, Node.js, and MongoDB. Implemented features such as user authentication, product catalog, shopping cart, and payment integration.</p>
            </div>
            <div className={styles.project}>
              <h3>SEO Optimization Campaign</h3>
              <p>Led an SEO optimization campaign for a client&apos;s website, resulting in a 150% increase in organic traffic over 6 months. Implemented technical SEO improvements and created a content strategy.</p>
            </div>
            <div className={styles.project}>
              <h3>Content Management System</h3>
              <p>Built a custom CMS using Python and Django, allowing non-technical users to easily manage website content. Integrated with a headless CMS for flexible content delivery.</p>
            </div>
          </div>
        </section>

        <section id="skills" className={styles.section}>
          <h2>Skills</h2>
          <ul className={styles.skillList}>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>SEO Optimization</li>
            <li>Content Strategy</li>
            <li>Digital Marketing</li>
            <li>HTML5 & CSS3</li>
          </ul>
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
          <h2>Contact Me</h2>
          <p>Get in touch with me at: jon.rocha@outlook.com</p>
          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href="mailto:jon.rocha@outlook.com"
            >
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/jonathan-rocha-atx/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              LinkedIn Profile
            </a>
          </div>
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
          href="https://github.com/jonx0037/jonx0037.github.io"
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
