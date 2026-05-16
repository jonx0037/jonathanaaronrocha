// ============================================================
// Centralized site data — single source of truth for all content
// ============================================================

// --- Profile ---
export interface Profile {
    fullName: string
    shortName: string
    tagline: string
    email: string
    phone: string
    location: string
    linkedin: string
    github: string
    resumeUrl: string
    cvUrl: string
    pitchCombined: string
    pitchIndustry: string
    pitchAcademic: string
}

export const profile: Profile = {
    fullName: 'Jonathan A. Rocha',
    shortName: 'Jonathan Rocha',
    tagline: 'Data Scientist · AI/ML Engineer · Full-Stack Developer',
    email: 'jarocha@smu.edu',
    phone: '737-397-0800',
    location: 'Austin, TX',
    linkedin: 'https://www.linkedin.com/in/jonathan-rocha-ai',
    github: 'https://github.com/jonx0037',
    resumeUrl: '/documents/JR-Resume-2026.pdf',
    cvUrl: '/documents/JR-CV-2026.pdf',
    pitchCombined:
        'Building applied ML systems in industry. Pursuing doctoral research in topology-aware deep learning and time-series data mining.',
    pitchIndustry:
        '20+ years of full-stack engineering experience across financial services (Wells Fargo), automotive retail, marketing technology, and AI/ML consulting. Currently shipping production ML systems — multimodal RAG, multi-agent pipelines, sentiment-driven market intelligence — while completing an M.S. in Data Science at SMU.',
    pitchAcademic:
        'Pursuing a PhD in data science, computer science, or mathematics with research interests in topology-aware deep learning, time-series data mining, and NLP applied to financial markets. Author of the Formal educational platform series (130+ topics across 29 tracks) and the Applied NLP for Finance book manuscript.',
}

// --- What's New ---
export interface Announcement {
    emoji: string
    text: string
}

export const announcements: Announcement[] = [
    {
        emoji: '🎓',
        text: 'Pursuing a PhD in data science, computer science, or mathematics — research focus on topology-aware deep learning and time-series data mining',
    },
    {
        emoji: '📘',
        text: 'Writing "Applied NLP for Finance: Building Market Intelligence Systems with Language Models" — book manuscript in progress with companion GitHub repo',
    },
    {
        emoji: '💼',
        text: 'DataSalt.ai consultancy actively serving Texas businesses across retail, agriculture, legal, and healthcare — 10 case studies and 7 technical blog posts published',
    },
]

// --- Education ---
export interface Education {
    degree: string
    school: string
    status: string
    details?: string[]
    advisor?: string
    liveLink?: { url: string; label: string }
    diplomaLink?: string
}

export const education: Education[] = [
    {
        degree: 'Master of Science, Data Science',
        school: 'Southern Methodist University (SMU)',
        status: 'Expected Graduation: August 2026 · GPA: 3.63',
        advisor: 'Dr. Lin',
        liveLink: { url: 'https://market-sentiment.io', label: 'market-sentiment.io' },
        details: [
            'Capstone: Sentiment-based market regime detection using ensemble transformer models (BERT-family + GARCH(1,1) + Statistical Jump Model)',
            'Coursework: Artificial Intelligence, Database Management Systems, Applied Statistics I & II, Machine Learning II',
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
    location: string
    mode?: 'Remote' | 'Hybrid' | 'Onsite'
    current?: boolean
    description: string
    bullets?: string[]
}

export const experience: Experience[] = [
    {
        title: 'Founder & Chief Executive Officer',
        company: 'DataSalt.ai',
        period: 'February 2025 – Present',
        location: 'Austin, TX',
        mode: 'Hybrid',
        current: true,
        description:
            'Founded a boutique AI/ML consultancy serving small and mid-sized Texas businesses. Lead all data science engagements: retrieve and analyze sensitive client data across retail, agriculture, legal, healthcare, and other verticals; transform inputs into actionable insights through intuitive data storytelling.',
        bullets: [
            'Built finrag.io, a multimodal financial RAG system (Gemini Embeddings 2, Qdrant, Cloudflare R2, FastAPI on Fly.io, Claude Sonnet, Next.js on Vercel)',
            'Created the Formal educational platform series — formalml.com, formalstatistics.com, formalcalculus.com — Astro 5 / React 18 / MDX / Tailwind CSS / D3.js / KaTeX with 130+ published topics across 29 curriculum tracks',
            'Published portfolio of 10 case studies and 7 technical blog posts at datasalt.ai; built SaltyDog, an AI chatbot with custom avatar',
        ],
    },
    {
        title: 'Senior Web Developer & Full-Stack Engineer',
        company: 'Fullsteam / Fullsteam Marketing',
        period: 'January 2015 – December 2025',
        location: 'Austin, TX',
        mode: 'Remote',
        current: true,
        description:
            '11-year tenure across three role transitions: Web Developer (Jan 2015) → Full-Stack Engineer at Fullsteam Marketing (Jan 2016, concurrent) → promoted to Senior Web Developer (Jan 2019). Architected and maintained React-based web applications aligned with company digital strategy.',
        bullets: [
            'Executed full-stack development with HTML, CSS, JavaScript, and Python; managed database systems and AWS cloud infrastructure',
            'Optimized site performance for SEO and user experience, significantly boosting visibility and search rankings of Fullsteam digital properties',
            'Contributed to digital growth strategy through data-informed development decisions and cross-functional collaboration',
        ],
    },
    {
        title: 'Independent Web Development Consultant',
        company: 'Self-Employed',
        period: '2004 – Present',
        location: 'Austin, TX',
        mode: 'Hybrid',
        current: true,
        description:
            'Two decades of end-to-end custom web solutions specializing in React, responsive design, and UX/UI for clients ranging from startups to enterprises.',
        bullets: [
            'Manage every stage of the project lifecycle: requirements gathering, technical architecture, full-stack development, API integration, performance optimization, accessibility, ongoing maintenance',
            'Translate complex business needs into clear technical solutions; provide strategic guidance on best practices to non-technical stakeholders',
        ],
    },
    {
        title: 'Senior Web Developer',
        company: 'Amaru Motors LP dba Charlie Clark Nissan',
        period: 'March 2009 – January 2015',
        location: 'Harlingen, TX',
        mode: 'Onsite',
        description:
            'Developed, optimized, and maintained user-facing websites and web applications for one of South Texas’s largest dealer-group operations.',
        bullets: [
            'Led mobile-first web design initiatives and contributed to the initial design and development of the company mobile app',
            'Optimized site performance for SEO and usability, improving search rankings and customer engagement across digital properties',
        ],
    },
    {
        title: 'Web Developer',
        company: 'Wells Fargo',
        period: 'March 2004 – March 2009',
        location: 'San Antonio, TX',
        mode: 'Onsite',
        description:
            'Built and maintained secure, user-friendly web applications supporting Wells Fargo online banking — account management, transactions, customer self-service — under strict regulatory and security requirements.',
        bullets: [
            'Worked across the stack with a back-end focus using HTML, CSS, JavaScript, and Python; built reliable, high-performing features under banking-grade security standards',
            'Collaborated with product, design, and security teams to ensure regulatory compliance while optimizing backend services for response time, stability, and usability',
        ],
    },
]

// --- Projects ---
export type ProjectAudience = 'industry' | 'academic' | 'both'

export interface Project {
    title: string
    description: string
    href: string
    external?: boolean
    audience: ProjectAudience
    liveLink?: { url: string; label: string }
    repoLink?: { url: string; label: string }
    stack?: string[]
}

export const projects: Project[] = [
    {
        title: 'Cross-Asset Sentiment Regime Detector',
        description:
            'SMU Capstone (advised by Dr. Lin). Two-layer pipeline combining GARCH(1,1) volatility modeling with a Statistical Jump Model for cross-asset sentiment regime detection. Ensemble approach integrates BERT-family transformers with classical time-series methods. Live dashboard with hybrid RAG + live-context chatbot.',
        href: 'https://market-sentiment.io',
        external: true,
        audience: 'both',
        liveLink: { url: 'https://market-sentiment.io', label: 'market-sentiment.io' },
        stack: ['Python', 'BERT', 'GARCH', 'Statistical Jump Model', 'RAG'],
    },
    {
        title: 'finrag.io — Multimodal Financial RAG',
        description:
            'A multimodal financial document intelligence platform. Gemini Embeddings 2 + Qdrant for retrieval, Cloudflare R2 for storage, FastAPI backend on Fly.io, Claude Sonnet for synthesis, Gemini Flash for TTS of earnings call transcripts.',
        href: 'https://finrag.io',
        external: true,
        audience: 'both',
        liveLink: { url: 'https://finrag.io', label: 'finrag.io' },
        stack: ['Gemini', 'Qdrant', 'FastAPI', 'Claude Sonnet', 'Next.js'],
    },
    {
        title: 'CounselOS — Multi-Agent Legal Intake',
        description:
            'A multi-agent AI legal matter intake system featuring a five-agent pipeline with a custom state machine orchestrator. Built for portfolio and technical interview preparation; demonstrates multi-agent orchestration patterns.',
        href: 'https://github.com/jonx0037/counselos',
        external: true,
        audience: 'industry',
        repoLink: { url: 'https://github.com/jonx0037/counselos', label: 'github.com/jonx0037/counselos' },
        stack: ['FastAPI', 'Next.js', 'Multi-Agent', 'Railway', 'Vercel'],
    },
    {
        title: 'HarliBot — Bilingual Municipal AI Chatbot',
        description:
            'Production RAG-based AI chatbot for the City of Harlingen, TX. True bilingual support (EN/ES), 2,100+ vector-indexed chunks, full deployment on Vercel + AWS Lambda.',
        href: 'https://harli-bot.vercel.app',
        external: true,
        audience: 'industry',
        liveLink: { url: 'https://harli-bot.vercel.app', label: 'harli-bot.vercel.app' },
        stack: ['React', 'Next.js', 'RAG', 'AWS Lambda'],
    },
    {
        title: 'DataSalt.ai — Consultancy Platform',
        description:
            'The DataSalt.ai consultancy site with 10 case studies covering South Texas verticals (boat sales, beach resort, shrimping, citrus/agriculture, healthcare, construction, law firm, used-car dealership), SaltyDog AI chatbot with custom Amelie French Bulldog avatar, programmatic hero image generator, and 7 technical blog posts.',
        href: 'https://datasalt.ai',
        external: true,
        audience: 'industry',
        liveLink: { url: 'https://datasalt.ai', label: 'datasalt.ai' },
        stack: ['Next.js 14', 'Tailwind CSS', 'Vercel'],
    },
    {
        title: 'Persistent Homology for Financial Regime Detection',
        description:
            'ML 2 final project. Applied topological data analysis methods — persistent homology, Vietoris–Rips complexes, persistence diagrams — to financial time-series classification. Deliverables: video script, Jupyter notebook, presentation deck.',
        href: 'https://github.com/jonx0037',
        external: true,
        audience: 'academic',
        stack: ['Python', 'GUDHI', 'Ripser', 'giotto-tda'],
    },
    {
        title: 'Statistics Visualization',
        description:
            'A collection of Mermaid diagrams visualizing complex statistical concepts for Data Science education.',
        href: '/mermaid-visualization',
        audience: 'academic',
        stack: ['Mermaid.js'],
    },
    {
        title: 'ENGL 5374 Final Project',
        description:
            'A Vite-React website exploring Twitter platform governance, featuring interactive diagrams.',
        href: 'https://jonx0037.github.io/presentation/',
        external: true,
        audience: 'academic',
        stack: ['React', 'Vite'],
    },
]

// --- Formal Educational Platform Series ---
export interface FormalSite {
    domain: string
    name: string
    topicCount: number
    trackCount: number
    tracks: string[]
    description: string
    liveUrl: string
    repoUrl: string
}

export const formalSeries: FormalSite[] = [
    {
        domain: 'formalml.com',
        name: 'Formal ML',
        topicCount: 65,
        trackCount: 13,
        tracks: [
            'Topology & TDA',
            'Linear Algebra',
            'Probability & Statistics',
            'Optimization',
            'Differential Geometry',
            'Information Theory',
            'Graph Theory',
            'Category Theory',
            'Supervised Learning',
            'Unsupervised & Generative',
            'Nonparametric & Distribution-Free',
            'Bayesian & Probabilistic ML',
            'Learning Theory & Methodology',
        ],
        description:
            'Mathematical foundations of modern machine learning. Geometric-first exposition with rigorous proofs and interactive D3 visualizations.',
        liveUrl: 'https://formalml.com',
        repoUrl: 'https://github.com/jonx0037/formalML',
    },
    {
        domain: 'formalstatistics.com',
        name: 'Formal Statistics',
        topicCount: 32,
        trackCount: 8,
        tracks: [
            'Foundations of Probability',
            'Core Distributions & Families',
            'Convergence & Limit Theorems',
            'Statistical Estimation',
            'Hypothesis Testing & Confidence',
            'Regression & Linear Models',
            'Bayesian Statistics',
            'High-Dimensional & Nonparametric',
        ],
        description:
            'A pure statistics curriculum from probability foundations through high-dimensional inference.',
        liveUrl: 'https://formalstatistics.com',
        repoUrl: 'https://github.com/jonx0037/formalStatistics',
    },
    {
        domain: 'formalcalculus.com',
        name: 'Formal Calculus',
        topicCount: 32,
        trackCount: 8,
        tracks: [
            'Limits & Continuity',
            'Single-Variable Calculus',
            'Multivariable Differential Calculus',
            'Multivariable Integral Calculus',
            'Sequences & Series',
            'Ordinary Differential Equations',
            'Measure & Integration',
            'Functional Analysis Essentials',
        ],
        description:
            'Calculus and analysis curriculum spanning single-variable through functional analysis essentials.',
        liveUrl: 'https://formalcalculus.com',
        repoUrl: 'https://github.com/jonx0037/formalCalculus',
    },
]

// --- Works in Progress ---
export interface WorkInProgress {
    title: string
    subtitle?: string
    status: string
    description: string
    license?: string
    repoUrl?: string
    liveUrl?: string
}

export const worksInProgress: WorkInProgress[] = [
    {
        title: 'Applied NLP for Finance',
        subtitle: 'Building Market Intelligence Systems with Language Models',
        status: 'Manuscript in progress · 12–13 chapters',
        description:
            'A book and companion code repository covering knowledge graphs, LLM workflows, and applied financial NLP. Bridges current research with practitioner-ready engineering.',
        license: 'Dual MIT / CC BY-NC 4.0',
        repoUrl: 'https://github.com/jonx0037/applied-nlp-finance',
    },
]

// --- Skills ---
export interface SkillCategory {
    title: string
    color: string
    skills: string[]
}

export const skillCategories: SkillCategory[] = [
    {
        title: 'Development',
        color: 'blue',
        skills: [
            'TypeScript / JavaScript (ES6+)',
            'React / Next.js',
            'Astro / MDX',
            'Python (FastAPI, Flask)',
            'Node.js',
            'R, SQL',
        ],
    },
    {
        title: 'Data Science & ML',
        color: 'purple',
        skills: [
            'Hugging Face Transformers / BERT',
            'NLP & time-series modeling',
            'RAG pipelines (Gemini, Claude, Qdrant)',
            'GARCH & ensemble methods',
            'Scikit-learn, PyTorch',
            'Statistical inference & A/B testing',
        ],
    },
    {
        title: 'Math & ML Theory',
        color: 'amber',
        skills: [
            'Topology & TDA (persistent homology, Mapper)',
            'Differential geometry',
            'Optimization',
            'Probability & statistics',
            'Information theory',
            'Learning theory',
        ],
    },
    {
        title: 'Infrastructure & Data',
        color: 'green',
        skills: [
            'Vercel · Fly.io · Railway',
            'AWS · Cloudflare R2',
            'Qdrant · MongoDB · NoSQL',
            'D3.js · KaTeX · MDX',
            'Docker · CI/CD',
            'Full-stack architecture',
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
    'Topology-aware deep learning',
    'Time-series data mining',
    'NLP applied to financial markets',
    'Sentiment-based market regime detection',
    'Topological data analysis (persistent homology, Mapper)',
    'Ensemble transformer models',
    'Scalable ML systems',
    'Distributed computing architectures',
    'Computational text analysis',
]
