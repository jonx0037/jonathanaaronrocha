import React from 'react'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { profile } from '../../data/siteData'

interface ResumeCtaButtonsProps {
    variant?: 'hero' | 'compact'
    className?: string
}

export default function ResumeCtaButtons({
    variant = 'hero',
    className = '',
}: ResumeCtaButtonsProps) {
    const isHero = variant === 'hero'
    const sizeClasses = isHero
        ? 'px-6 py-3 text-base'
        : 'px-4 py-2 text-sm'

    const primary = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition-colors shadow-sm ${sizeClasses}`
    const secondary = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/40 transition-colors ${sizeClasses}`

    return (
        <div
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 ${
                isHero ? 'justify-center' : 'justify-start'
            } ${className}`}
        >
            <a
                href={profile.resumeUrl}
                download
                className={primary}
                aria-label="Download industry resume (PDF)"
            >
                <ArrowDownTrayIcon className="h-5 w-5" aria-hidden="true" />
                <span>Resume</span>
            </a>
            <a
                href={profile.cvUrl}
                download
                className={secondary}
                aria-label="Download academic CV (PDF)"
            >
                <ArrowDownTrayIcon className="h-5 w-5" aria-hidden="true" />
                <span>CV</span>
            </a>
        </div>
    )
}
