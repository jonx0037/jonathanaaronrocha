import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import Navbar from '../components/layout/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jonathan Aaron Rocha — Data Scientist · AI/ML Engineer · Full-Stack Developer',
  description: 'Data Scientist, AI/ML Engineer, and Full-Stack Web Developer with 10+ years of experience. Currently pursuing an M.S. in Data Science at SMU. Specializing in NLP, ensemble transformers, and cloud AI systems.',
  keywords: ['Jonathan Rocha', 'Data Scientist', 'AI Engineer', 'Machine Learning', 'NLP', 'Full-Stack Developer', 'React', 'Python', 'SMU', 'Portfolio'],
  authors: [{ name: 'Jonathan Aaron Rocha' }],
  metadataBase: new URL('https://jonathanaaronrocha.com'),
  openGraph: {
    title: 'Jonathan Aaron Rocha — Data Scientist · AI/ML Engineer',
    description: 'Data Scientist, AI/ML Engineer, and Full-Stack Web Developer. Founder of DataSalt LLC and pursuing an M.S. in Data Science at SMU.',
    url: 'https://jonathanaaronrocha.com',
    siteName: 'Jonathan Aaron Rocha',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/images/favicon.png',
        type: 'image/png',
      }
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
