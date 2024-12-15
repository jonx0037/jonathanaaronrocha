import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import Navbar from '../components/layout/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jonathan Aaron Rocha',
  description: 'Personal website and portfolio of Jonathan Aaron Rocha - MA in English graduate and incoming Masters of Data Science student',
  keywords: ['Jonathan Rocha', 'MA English', 'Data Science', 'Academic', 'Technology', 'Portfolio'],
  authors: [{ name: 'Jonathan Aaron Rocha' }],
  metadataBase: new URL('https://jonathanaaronrocha.com'),
  openGraph: {
    title: 'Jonathan Aaron Rocha',
    description: 'Personal website and portfolio of Jonathan Aaron Rocha',
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
