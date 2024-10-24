"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import styles from "./page.module.css";
import { blogPosts } from './blogPosts';
import dynamic from 'next/dynamic';

// Dynamically import components
const TypewriterAnimation = dynamic(() => import('../components/TypewriterAnimation'));

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={styles.header}>
      <button 
        className={styles.mobileMenuToggle} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        ☰
      </button>
      <nav className={`${isMenuOpen ? styles.open : ''}`}>
        <a onClick={() => scrollToSection('about')} tabIndex={0}>About</a>
        <a onClick={() => scrollToSection('portfolio')} tabIndex={0}>Portfolio</a>
        <a onClick={() => scrollToSection('skills')} tabIndex={0}>Skills</a>
        <a onClick={() => scrollToSection('resume')} tabIndex={0}>Resume</a>
        <a onClick={() => scrollToSection('blog')} tabIndex={0}>Blog</a>
        <a onClick={() => scrollToSection('contact')} tabIndex={0}>Contact</a>
      </nav>
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

const Hero: React.FC = () => (
  <section className={styles.hero}>
    <h1>Hi, I'm Jonathan Rocha</h1>
    <TypewriterAnimation texts={["Web Developer", "Content Manager", "Digital Marketing Expert"]} />
    <p>With over 5 years of experience managing online communities, optimizing SEO strategies, and leading content creation across multiple platforms.</p>
    <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} aria-label="Get in touch">Get in Touch</button>
  </section>
);

const About: React.FC = () => (
  <section id="about" className={styles.section}>
    <h2>About Me</h2>
    <div className={styles.aboutContent}>
      <div className={styles.aboutText}>
        <p>As a web developer and marketer with over five years of experience, I excel in full-stack development and SEO strategy. My expertise includes graphic design, UX/UI, content management systems, digital marketing, and content creation. In my most recent role as a Content Manager at Fullsteam, I oversee developing, optimizing, and managing high-quality content across multiple platforms. As an SEO Analyst at Fullsteam, I significantly improved visibility and search engine rankings through data-driven SEO strategies.</p>
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
        <Image src="/fullsteam-project.jpeg" alt="Fullsteam project" width={300} height={200} />
        <h3>SEO and Web Development for Fullsteam</h3>
        <p>Improved visibility and search rankings through data-driven SEO strategies and site performance optimization.</p>
        <button className={styles.viewProjectBtn} aria-label="View Fullsteam project">View Project</button>
      </div>
      <div className={styles.project}>
        <Image src="/personal-website.jpeg" alt="Personal website" width={300} height={200} />
        <h3>JonathanAaronRocha.com</h3>
        <p>This personal website, built with Next.js, serves as a portfolio and digital hub for my professional interests.</p>
        <button className={styles.viewProjectBtn} aria-label="View personal website project">View Project</button>
      </div>
      <div className={styles.project}>
        <Image src="/research-project.jpeg" alt="Research project" width={300} height={200} />
        <h3>Research on Online Free Speech</h3>
        <p>My academic work on content moderation and free speech, focusing on the impact of platform censorship.</p>
        <button className={styles.viewProjectBtn} aria-label="View research project">View Project</button>
      </div>
    </div>
  </section>
);

const Skills: React.FC = () => (
  <section id="skills" className={styles.section}>
    <h2>Skills</h2>
    <div className={styles.skillsGrid}>
      <div className={styles.skillCategory}>
        <h3>Technical Skills</h3>
        <ul>
          <li>HTML5 / CSS3 / JavaScript</li>
          <li>React / Next.js</li>
          <li>Node.js / Express</li>
          <li>SQL / NoSQL Databases</li>
          <li>RESTful API Design</li>
        </ul>
      </div>
      <div className={styles.skillCategory}>
        <h3>Digital Marketing</h3>
        <ul>
          <li>SEO / SEM</li>
          <li>Content Strategy</li>
          <li>Social Media Marketing</li>
          <li>Email Marketing</li>
          <li>Analytics and Reporting</li>
        </ul>
      </div>
      <div className={styles.skillCategory}>
        <h3>Soft Skills</h3>
        <ul>
          <li>Project Management</li>
          <li>Team Leadership</li>
          <li>Communication</li>
          <li>Problem Solving</li>
          <li>Adaptability</li>
        </ul>
      </div>
    </div>
  </section>
);

const Resume: React.FC = () => (
  <section id="resume" className={styles.section}>
    <h2>Resume</h2>
    <div className={styles.timeline}>
      <div className={styles.timelineItem}>
        <div className={styles.timelineIcon}>📊</div>
        <h3>2024 - Present: Content Manager at Fullsteam</h3>
        <p>Oversee content creation and SEO strategies, ensuring alignment with company goals.</p>
      </div>
      <div className={styles.timelineItem}>
        <div className={styles.timelineIcon}>🔍</div>
        <h3>2023 - 2024: SEO Analyst at Fullsteam</h3>
        <p>Led SEO efforts to optimize site performance and increase organic visibility.</p>
      </div>
      <div className={styles.timelineItem}>
        <div className={styles.timelineIcon}>💻</div>
        <h3>2021 - 2023: Web Developer at Fullsteam</h3>
        <p>Developed user-friendly websites and applications, ensuring technical excellence.</p>
      </div>
      <div className={styles.timelineItem}>
        <div className={styles.timelineIcon}>🎓</div>
        <h3>1999 - 2004: BA in History, Texas A&M University</h3>
        <p>Focused on research in history and digital content.</p>
      </div>
      <div className={styles.timelineItem}>
        <div className={styles.timelineIcon}>📚</div>
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
          <Image src={`/blog-${post.id}.jpg`} alt={post.title} width={300} height={200} />
          <h3>{post.title}</h3>
          <p className={styles.postMeta}>Posted on {post.date}</p>
          <p className={styles.postCategory}>{post.category}</p>
          <p>{post.excerpt}</p>
          <Link href={`/blog/${post.id}`} className={styles.readMore} aria-label={`Read more about ${post.title}`}>
            Read More
          </Link>
        </article>
      ))}
    </div>
    {visiblePosts < blogPosts.length && (
      <div className={styles.loadMoreContainer}>
        <button onClick={loadMorePosts} className={styles.loadMoreBtn} aria-label="Load more blog posts">Load More</button>
      </div>
    )}
  </section>
);

const Contact: React.FC = () => (
  <section id="contact" className={styles.section}>
    <h2>Get in Touch</h2>
    <p>If you're interested in working together or just want to say hello, feel free to reach out!</p>
    <form action="/submit-form" method="POST" className={styles.contactForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required aria-required="true" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required aria-required="true" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required aria-required="true"></textarea>
      </div>
      <button type="submit" className={styles.submitBtn}>Send Message</button>
    </form>
    <p>You can also find me on <a href="https://www.linkedin.com/in/jonathan-rocha-atx/">LinkedIn</a> or check out my projects on <a href="https://github.com/jonx0037">GitHub</a>.</p>
  </section>
);

export default function Home() {
  const [visiblePosts, setVisiblePosts] = useState(2);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(styles.visible);
            }
          });
        },
        { threshold: 0.1 }
      );

      sectionRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const loadMorePosts = () => {
    setVisiblePosts(prevVisible => Math.min(prevVisible + 2, blogPosts.length));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Resume />
        <Blog visiblePosts={visiblePosts} loadMorePosts={loadMorePosts} />
        <Contact />
      </main>
      <Footer />
      {showScrollTop && (
        <button 
          className={`${styles.scrollToTop} ${styles.visible}`} 
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}
