# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Personal portfolio website for Jonathan Aaron Rocha at [jonathanaaronrocha.com](https://jonathanaaronrocha.com). Static-exported Next.js site deployed to GitHub Pages via GitHub Actions.

## Commands

- `pnpm dev` — local dev server
- `pnpm build` — production build (static export to `out/`)
- `pnpm lint` — ESLint

No test suite exists.

## Architecture

**Static export site** — `next.config.js` sets `output: 'export'` with unoptimized images. Everything compiles to `out/` for GitHub Pages hosting.

### Data Flow

All site content lives in `src/data/siteData.ts` — a single file containing typed arrays for announcements, education, experience, projects, skills, blog post metadata, and research interests. Section components import from this file; there is no CMS or database.

### Layout

- `src/app/layout.tsx` — Root layout with Inter font, dark mode via `next-themes` (class strategy), and `<Navbar />`
- `src/app/providers.tsx` — Client-side `ThemeProvider` wrapper
- `src/app/page.tsx` — Homepage composed of nine section components rendered sequentially

### Blog Posts

Two patterns coexist:

1. **Markdown-based** (newer posts like `building-ai-market-regime-detector`): reads `.md` files from `public/blog-posts/` at build time using `fs.readFileSync` + `marked`, rendered via the `prose` typography classes
2. **Inline JSX** (older posts like `building-better-web-apps-with-react`): content written directly in the page component

Each blog post is a Next.js page at `src/app/blog/[slug]/page.tsx`. The blog index at `src/app/blog/page.tsx` renders from the `blogPosts` array in `siteData.ts`.

### Key Patterns

- **Framer Motion**: `src/components/motion/MotionDiv.tsx` is a `'use client'` wrapper used throughout for fade/slide animations
- **Tailwind**: v3 with `@tailwindcss/typography` plugin, custom `primary` color scale (sky blue), dark mode classes throughout
- **No API routes** — purely static site

## Deployment

Pushes to `main` trigger `.github/workflows/nextjs.yml` which builds and deploys to GitHub Pages. The `CNAME` file maps to `jonathanaaronrocha.com`.

## Language

Always use American English spelling and conventions (e.g., "organize," "color," "analyze," "defense," "catalog") — never British English variants.
