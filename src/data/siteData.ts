// ============================================================
// Centralized site data — single source of truth for all content
// ============================================================

// --- What's New ---
export interface Announcement {
    emoji: string
    text: string
}

export const announcements: Announcement[] = [
    {
        emoji: '🎓',
        text: 'Anticipating completion of M.S. in Data Science from SMU this Summer 2026',
    },
    {
        emoji: '🔬',
        text: 'Looking towards pre-doctoral work in Data Science, Computer Science, or Mathematics',
    },
    {
        emoji: '💼',
        text: 'Open to new career opportunities in private industry — AI/ML Engineering, Data Science, and Full-Stack Development',
    },
]

// --- Education ---
export interface Education {
    degree: string
    school: string
    status: string
    details?: string[]
    diplomaLink?: string
}

export const education: Education[] = [
    {
        degree: 'Master of Science, Data Science',
        school: 'Southern Methodist University (SMU)',
        status: 'Expected Graduation: August 2026 · GPA: 3.63',
        details: [
            'Capstone: Sentiment-based market regime detection using ensemble transformer models (BERT-family + time-series methods)',
            'Coursework: Artificial Intelligence, Database Management Systems, Applied Statistics I & II',
        ],
    },
    {
        degree: 'Master of Arts, English',
        school: 'Texas A&M University – Central Texas (TAMUCT)',
        status: 'Graduated December 2024',
        diplomaLink: '/images/TAMUCT-MA-ENGL-DIPLOMA.pdf',
    },
    {
        degree: 'Bachelor of Arts, History',
        school: 'Texas A&M University (TAMU)',
        status: 'Graduated 2004',
    },
]

// --- Experience ---
export interface Experience {
    title: string
    company: string
    period: string
    description: string
    bullets?: string[]
}

export const experience: Experience[] = [
    {
        title: 'Artificial Intelligence Engineer',
        company: 'Amazon Web Services (AWS)',
        period: 'April 2024 – Present',
        description:
            'Designs, develops, and implements AI systems across various AWS product platforms. Applies ML engineering principles to optimize AI system deployments in cloud infrastructure.',
        bullets: [
            'Tests capabilities of platform products and services to ensure quality and performance standards',
            'Provides data-driven recommendations to leadership on the continual improvement of platform products',
        ],
    },
    {
        title: 'Full-Stack Web Developer',
        company: 'Fullsteam Marketing',
        period: 'March 2016 – April 2024',
        description:
            'Developed and maintained React-based web applications aligned with the company\'s digital strategy. Managed database systems and cloud infrastructure on AWS.',
        bullets: [
            'Performed full front-end and back-end development using HTML, CSS, JavaScript, and Python',
            'Collaborated with cross-functional teams to deliver data-driven, user-centered products',
        ],
    },
    {
        title: 'Independent Web Development Contractor',
        company: 'Self-Employed',
        period: '2015 – Present',
        description:
            'Delivers custom web development solutions for diverse clients across multiple industries. Specializes in React applications, responsive design, UX/UI, and content management systems.',
    },
]

// --- Projects ---
export interface Project {
    title: string
    description: string
    href: string
    external?: boolean
    tags?: string[]
}

export const projects: Project[] = [
    {
        title: 'Cross-Asset Sentiment Regime Detector',
        description:
            'SMU Capstone — An automated system for detecting market regime transitions (Risk-On/Risk-Off) through cross-asset sentiment analysis using ensemble transformer models (FinBERT + RoBERTa) and systemic stress indicators.',
        href: 'https://github.com/jonx0037',
        external: true,
        tags: ['Python', 'NLP', 'FinBERT', 'Time-Series'],
    },
    {
        title: 'HarliBot: Bilingual Municipal AI Chatbot',
        description:
            'A production RAG-based AI chatbot for the City of Harlingen, TX. Features true bilingual support (EN/ES), 2,100+ vector-indexed chunks, and a full deployment on Vercel + AWS Lambda.',
        href: 'https://harli-bot.vercel.app',
        external: true,
        tags: ['React', 'Next.js', 'RAG', 'AWS Lambda'],
    },
    {
        title: 'Statistics Visualization',
        description:
            'A collection of Mermaid diagrams visualizing complex statistical concepts for Data Science education.',
        href: '/mermaid-visualization',
        tags: ['Mermaid.js', 'Data Viz', 'Education'],
    },
    {
        title: 'ENGL 5374 Final Project',
        description:
            "A Vite-React website exploring Twitter's platform governance, featuring interactive diagrams.",
        href: 'https://jonx0037.github.io/presentation/',
        external: true,
        tags: ['React', 'Vite', 'Digital Humanities'],
    },
]

// --- Skills ---
export interface SkillCategory {
    title: string
    color: string // Tailwind color class prefix, e.g. 'blue'
    skills: string[]
}

export const skillCategories: SkillCategory[] = [
    {
        title: 'Development',
        color: 'blue',
        skills: [
            'Full-Stack Development',
            'HTML / CSS / JavaScript',
            'TypeScript',
            'React / Next.js',
            'Python',
            'R',
        ],
    },
    {
        title: 'Data Science & ML',
        color: 'purple',
        skills: [
            'Machine Learning',
            'NLP / Transformers',
            'Statistical Analysis',
            'Data Visualization',
            'Cloud ML (AWS)',
            'RAG Pipelines',
        ],
    },
    {
        title: 'Digital Marketing',
        color: 'green',
        skills: [
            'SEO Strategy',
            'Content Management',
            'Analytics & Insights',
            'Digital Strategy',
        ],
    },
    {
        title: 'Design & Tools',
        color: 'amber',
        skills: [
            'UX/UI Design',
            'AI Technologies',
            'Project Management',
            'Cloud Infrastructure',
        ],
    },
]

// --- Blog Posts ---
export interface BlogPost {
    title: string
    slug: string
    publishDate: string
    excerpt: string
}

export const blogPosts: BlogPost[] = [
    {
        title: 'Building an AI Market Regime Detector',
        slug: 'building-ai-market-regime-detector',
        publishDate: '2026-02-15',
        excerpt:
            'How I built a cross-asset sentiment regime detector using ensemble transformer models for my SMU Capstone project.',
    },
    {
        title: 'HarliBot: Building a Bilingual AI Chatbot for Local Government',
        slug: 'harlibot-bilingual-ai-chatbot',
        publishDate: '2026-02-01',
        excerpt:
            'A case study on building and deploying a production RAG-based bilingual chatbot for the City of Harlingen, TX.',
    },
    {
        title: 'From History to Data Science',
        slug: 'from-history-to-data-science',
        publishDate: '2025-01-02',
        excerpt:
            'My academic journey from a BA in History to an MS in Data Science.',
    },
    {
        title: 'Combining English MA with Technical Writing',
        slug: 'combining-english-ma-with-technical-writing',
        publishDate: '2024-12-15',
        excerpt:
            'How my academic background in English has influenced my technical writing.',
    },
    {
        title: 'Building Better Web Apps with React',
        slug: 'building-better-web-apps-with-react',
        publishDate: '2024-05-15',
        excerpt:
            'Lessons learned from building complex web applications with React.',
    },
    {
        title: 'Visualizing Statistics: Making Complex Concepts Accessible',
        slug: 'visualizing-complex-statistics',
        publishDate: '2024-01-29',
        excerpt:
            'How I used Mermaid diagrams to create engaging visualizations for statistics education.',
    },
    {
        title: 'SEO Best Practices I Learned as an Analytics Manager',
        slug: 'seo-best-practices-from-analytics-manager',
        publishDate: '2024-01-22',
        excerpt:
            'Insights on effective SEO strategies from my experience in digital analytics.',
    },
].sort(
    (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
)

// --- Research Interests ---
export const researchInterests: string[] = [
    'Sentiment-based financial regime detection',
    'Ensemble NLP & transformer architectures',
    'Cross-asset systemic risk modeling',
    'Bilingual & multilingual AI systems',
    'Retrieval-Augmented Generation (RAG)',
]
