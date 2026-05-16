import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import Navbar from '../components/layout/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jonathan Aaron Rocha — Data Scientist · AI/ML Engineer · Full-Stack Developer',
  description:
    'Data Scientist, AI/ML Engineer, and full-stack developer with 20+ years of experience. Currently completing an M.S. in Data Science at SMU and pursuing a PhD in topology-aware deep learning and time-series data mining. Founder of DataSalt.ai and author of the Applied NLP for Finance book and Formal educational platform series.',
  keywords: [
    'Jonathan Rocha',
    'Data Scientist',
    'AI Engineer',
    'AI/ML Engineer',
    'Machine Learning',
    'NLP',
    'Topological Data Analysis',
    'RAG',
    'Financial NLP',
    'Full-Stack Developer',
    'React',
    'Next.js',
    'Python',
    'SMU',
    'DataSalt',
    'formalml.com',
    'PhD',
    'Portfolio',
  ],
  authors: [{ name: 'Jonathan Aaron Rocha' }],
  metadataBase: new URL('https://jonathanaaronrocha.com'),
  openGraph: {
    title: 'Jonathan Aaron Rocha — Data Scientist · AI/ML Engineer',
    description:
      'Building applied ML systems in industry and pursuing doctoral research in topology-aware deep learning and time-series data mining. Founder of DataSalt.ai. SMU MSDS, August 2026.',
    url: 'https://jonathanaaronrocha.com',
    siteName: 'Jonathan Aaron Rocha',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jonathan Aaron Rocha — Data Scientist · AI/ML Engineer',
    description:
      'Applied ML in industry. Doctoral research in topology-aware deep learning and time-series data mining.',
  },
  icons: {
    icon: [
      {
        url: '/images/favicon.png',
        type: 'image/png',
      },
    ],
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <div className="min-h-screen pt-20 px-4 md:px-6 bg-white dark:bg-gray-900">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
