export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "seo-2024",
    title: "The Importance of SEO in 2024",
    date: "January 15, 2024",
    excerpt: "In this post, we explore the evolving landscape of SEO and why it remains crucial for businesses in 2024...",
    content: `
      <h2>The Importance of SEO in 2024</h2>
      <p>As we move further into 2024, Search Engine Optimization (SEO) continues to play a pivotal role in digital marketing strategies. With the ever-evolving algorithms of search engines and the increasing competition in the digital space, businesses need to stay ahead of the curve to maintain their online visibility.</p>
      <h3>1. Adapting to AI and Machine Learning</h3>
      <p>Search engines are becoming smarter with AI and machine learning. In 2024, it's crucial to optimize for semantic search and natural language processing. This means focusing on context and user intent rather than just keywords.</p>
      <h3>2. Mobile-First Indexing</h3>
      <p>With the majority of internet users accessing content via mobile devices, Google's mobile-first indexing is more important than ever. Ensuring your website is fully optimized for mobile is no longer optional—it's essential.</p>
      <h3>3. Voice Search Optimization</h3>
      <p>As voice-activated devices become more prevalent, optimizing for voice search is crucial. This involves focusing on natural language and question-based queries.</p>
      <h3>4. Core Web Vitals</h3>
      <p>Google's Core Web Vitals have become a key ranking factor. In 2024, website speed, interactivity, and visual stability are more important than ever for both SEO and user experience.</p>
      <h3>Conclusion</h3>
      <p>SEO in 2024 is about creating a holistic online presence that caters to both search engines and users. By staying updated with the latest trends and continuously optimizing your online presence, you can ensure your business stays visible and competitive in the digital landscape.</p>
    `,
    category: "SEO"
  },
  {
    id: "web-dev-trends",
    title: "Web Development Trends to Watch in 2024",
    date: "February 5, 2024",
    excerpt: "Discover the cutting-edge web development trends that are shaping the digital landscape in 2024...",
    content: `
      <h2>Web Development Trends to Watch in 2024</h2>
      <p>The world of web development is constantly evolving, with new technologies and methodologies emerging each year. As we progress through 2024, several trends are standing out as game-changers in the industry.</p>
      <h3>1. Progressive Web Apps (PWAs)</h3>
      <p>PWAs continue to gain traction, offering app-like experiences on the web. They provide faster load times, offline functionality, and improved user engagement.</p>
      <h3>2. AI-Driven Development</h3>
      <p>Artificial Intelligence is revolutionizing web development, from AI-assisted coding to intelligent chatbots and personalized user experiences.</p>
      <h3>3. WebAssembly</h3>
      <p>WebAssembly is enabling high-performance applications on the web, allowing developers to use languages like C++ and Rust for web development.</p>
      <h3>4. Serverless Architecture</h3>
      <p>Serverless computing is becoming increasingly popular, offering scalability and reduced operational costs for web applications.</p>
      <h3>5. Motion UI and Micro-interactions</h3>
      <p>Subtle animations and micro-interactions are enhancing user experiences, making websites more engaging and intuitive.</p>
      <h3>Conclusion</h3>
      <p>Staying updated with these trends is crucial for web developers and businesses alike. By embracing these technologies, you can create more efficient, engaging, and future-proof web experiences.</p>
    `,
    category: "Web Development"
  }
];
