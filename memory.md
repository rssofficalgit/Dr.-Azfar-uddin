# Project Memory & Living Documentation

> **Project Name:** React Starter Template (Initialization Engine)  
> **Repository Status:** Initialized & Active  
> **Last Updated:** 2026-07-29  

---

## 1. Project Overview

* **Purpose:** A clean, production-ready React starter template and project setup foundation.
* **Main Objectives:** Provide a modular, scalable, type-safe, and aesthetic starting point for web applications with Tailwind CSS, shadcn/ui components, ESLint, Inter typography design system, SEO foundation, and Git repository setup.
* **Tech Stack:**
  * **Framework:** React 19 + Vite 6
  * **Language:** TypeScript 5.8
  * **Typography:** Inter (Google Font)
  * **Styling:** Tailwind CSS v4
  * **UI Component Library:** shadcn/ui (New York style)
  * **Icons:** Lucide React (`lucide-react`)
  * **Code Quality:** ESLint 9 (Flat Configuration) + `typescript-eslint`
  * **SEO Infrastructure:** `robots.txt`, `sitemap.xml`, dynamic SEO metadata manager
  * **Version Control:** Git

---

## 2. Current Progress

* **[x] AI Agent Instructions (`AGENTS.md`):** Configured mandatory directive requiring all AI coding agents to automatically maintain `memory.md` as a living knowledge base and handoff document across all project modifications.
* **[x] Development Rules Constitution (`RULES.md`):** Established non-negotiable project development rules covering rule priority, modular architecture, mobile-first responsiveness, typography design system, SEO maintenance, security, accessibility, and AI agent behavioral guidelines.
* **[x] Responsive Mobile-First UI/UX System:** Optimized for 4 breakpoints (Mobile 320-767px, Tablet 768-1023px, Desktop 1024-1439px, Wide Screen 1440px+). Added a mobile drawer overlay navigation with minimum 44px touch targets and max-width containers.
* **[x] React + Vite + TypeScript Foundation:** Fully configured with strict type checking.
* **[x] Inter Typography Design System:** Configured Inter globally as default font family across all UI elements, headings, body text, buttons, and form inputs.
* **[x] SEO Foundation Setup:** Created `public/robots.txt`, `public/sitemap.xml`, and `src/utils/seo.ts` helper for dynamic canonical URL and metadata management.
* **[x] Tailwind CSS v4 Setup:** Integrated with custom CSS variables and dark mode support.
* **[x] shadcn/ui Integration:** `components.json` created, `cn()` utility established in `@/lib/utils`, and foundational UI components installed.
* **[x] ESLint Configuration:** Flat `eslint.config.js` added with scripts for `npm run lint` and `npm run lint:fix`.
* **[x] Git Repository:** Initialized with clean commit history.
* **[x] Clean Minimalism Theme:** Applied aesthetic light/dark theme with high-contrast typography, border details, and subtle status indicators.
* **[x] Modular Architecture:** Refactored into distinct layout components, dashboard cards, custom hooks, typed interfaces, and constant data schemas.
* **[ ] Pending Features:** Custom app feature development (as requested by future user prompts).

---

## 3. Folder Structure

```
├── .env.example              # Environment variable declarations template
├── .gitignore                # Git ignored patterns (node_modules, build outputs)
├── AGENTS.md                 # AI agent instructions & memory sync rules
├── components.json           # shadcn/ui CLI configuration
├── eslint.config.js          # ESLint 9 flat configuration
├── memory.md                 # Living project documentation and memory log
├── metadata.json             # AI Studio applet permissions and description
├── package.json              # Project dependencies and script definitions
├── RULES.md                  # Mandatory project development rules constitution
├── tsconfig.json             # TypeScript compiler settings and path aliases
├── vite.config.ts            # Vite bundler configuration (@/ path alias)
├── public/
│   ├── robots.txt            # Search engine crawler instructions
│   └── sitemap.xml           # Canonical XML sitemap for public pages
└── src/
    ├── main.tsx              # React application entry point
    ├── App.tsx               # Main container component organizing layout modules
    ├── index.css             # Inter font import, theme variables, dark mode rules
    ├── types/
    │   └── index.ts          # Global interfaces (StackItem, PipelineStep, etc.)
    ├── constants/
    │   └── stack.ts          # Static constants & setup pipeline metadata
    ├── hooks/
    │   ├── useDarkMode.ts    # Dark/Light theme state hook
    │   └── useClipboard.ts   # Clipboard copy helper hook with reset timer
    ├── lib/
    │   └── utils.ts          # Class merging helper (clsx + tailwind-merge)
    ├── utils/
    │   └── seo.ts            # Dynamic SEO metadata and canonical link manager
    └── components/
        ├── ui/               # shadcn/ui reusable atomic components
        │   ├── button.tsx
        │   ├── card.tsx
        │   ├── badge.tsx
        │   └── input.tsx
        ├── layout/           # Global structural layout components
        │   ├── Header.tsx
        │   └── Sidebar.tsx
        └── dashboard/        # Feature dashboard components
            ├── StackGrid.tsx
            ├── InteractiveShowcase.tsx
            └── ConfigCommandsCard.tsx
```

---

## 4. Architecture Decisions

1. **Inter Font Standard:** Applied Inter globally via Google Fonts preconnect in `index.html` and `--font-sans` in `src/index.css` to guarantee typographic consistency.
2. **SEO Infrastructure:** Created static `robots.txt` and `sitemap.xml` in `public/` along with `src/utils/seo.ts` to dynamically set canonical URLs and meta descriptions on client mounts.
3. **Strict Modular Isolation:** Every component, hook, interface, constant, and utility resides in a single-responsibility file inside logical subfolders (`/components`, `/hooks`, `/types`, `/constants`, `/utils`, `/lib`).
4. **Tailwind v4 `@theme` & CSS Variables:** Configured in `src/index.css` supporting automatic `.dark` class toggling for themes.
5. **shadcn/ui Pattern:** Standardized on `cn()` utility from `@/lib/utils` for tailwind class merging (`clsx` + `tailwind-merge`).
6. **Path Aliasing:** Configured `@/*` to point directly to `./src/*` in both `tsconfig.json` and `vite.config.ts`.

---

## 5. Implemented Features

| Feature Name | Date | Files Created / Modified | Description |
| :--- | :--- | :--- | :--- |
| **shadcn/ui Setup** | 2026-07-29 | `components.json`, `src/lib/utils.ts`, `src/components/ui/*` | Initialized shadcn/ui configuration and basic components (Button, Card, Badge, Input). |
| **ESLint Flat Config** | 2026-07-29 | `eslint.config.js`, `package.json` | Configured ESLint 9 rules for TypeScript and React Hooks linting. |
| **Git Initialization** | 2026-07-29 | `.git/` | Initialized repository, configured user, and created initial commits. |
| **Clean Minimalism Theme** | 2026-07-29 | `src/index.css`, `src/App.tsx` | Applied clean white/slate minimalism styling with status pills, sidebar pipeline, and dark mode. |
| **Modular Architecture Refactoring** | 2026-07-29 | `src/types/*`, `src/constants/*`, `src/hooks/*`, `src/components/*` | Extracted monolithic code into isolated components, hooks, constants, and types. |
| **Project Memory System** | 2026-07-29 | `memory.md` | Established living project documentation. |
| **AI Agent Memory Directive** | 2026-07-29 | `AGENTS.md` | Configured strict instruction requiring every AI agent to maintain memory.md for all changes. |
| **Development Rules Constitution** | 2026-07-29 | `RULES.md` | Established mandatory project development rules and guidelines for architecture, UI/UX, SEO, security, and AI behavior. |
| **Responsive Mobile-First UI/UX** | 2026-07-29 | `src/components/layout/*`, `src/components/dashboard/*`, `src/App.tsx` | Optimized layouts across 4 breakpoints (Mobile, Tablet, Desktop, Wide Screen), implemented mobile drawer navigation, 44px touch targets, and wide-screen container limits. |
| **Inter Typography System** | 2026-07-29 | `index.html`, `src/index.css` | Integrated Inter font globally across all elements with proper typographic hierarchy rules. |
| **SEO Foundation Setup** | 2026-07-29 | `public/robots.txt`, `public/sitemap.xml`, `src/utils/seo.ts`, `src/App.tsx` | Created robots.txt, sitemap.xml, and dynamic SEO utility for meta updates and canonical links. |

---

## 6. Database Changes

* **Current Status:** No database currently connected (Client-side template).
* **Planned:** Firebase Firestore or Cloud SQL can be added when backend features are required.

---

## 7. API Documentation

* **Current Status:** No external REST or GraphQL endpoints currently configured.
* **Dev Server Port:** Runs on `0.0.0.0:3000` via Vite.

---

## 8. Components & Utilities

### UI Components (`src/components/ui/`)
* **`Button`:** Standardized button with primary, secondary, outline, ghost, link, and destructive variants.
* **`Card`:** Structural card container with sub-components (`CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`).
* **`Badge`:** Status pill badge with variant styling.
* **`Input`:** Text input control supporting standard HTML attributes and focus styles.

### Layout Components (`src/components/layout/`)
* **`Header`:** Sticky top navigation bar containing title, status indicator, dark mode toggle, and "Push to Origin" copy button.
* **`Sidebar`:** Collapsible setup pipeline progression tracker and repository health metrics.

### Dashboard Components (`src/components/dashboard/`)
* **`StackGrid`:** Responsive grid displaying core technology stack cards (React, TypeScript, Tailwind, shadcn/ui, ESLint, Git).
* **`InteractiveShowcase`:** Interactive state counter demo and reactive name binding test input.
* **`ConfigCommandsCard`:** Code snippets card displaying initialized config files and quick git/terminal commands.

### Utilities (`src/utils/`)
* **`seo.ts`:** Manages page titles, meta descriptions, and canonical URL settings dynamically on app initialization.

---

## 9. Known Issues

* None. Linting (`npm run lint`) and builds (`npm run build`) complete with zero errors.

---

## 10. TODO / Next Steps

1. Add custom user-requested application views and pages.
2. Integrate backend API services or database models as required by future prompts.

---

## 11. Dependencies

### Core Dependencies (`dependencies`)
* `react` & `react-dom` (^19.0.1): Core React UI framework.
* `@tailwindcss/vite` (^4.1.14) & `tailwindcss` (^4.1.14): Styling engine.
* `lucide-react` (^0.546.0): UI icon library.
* `class-variance-authority` (^0.7.1), `clsx` (^2.1.1), `tailwind-merge` (^3.0.2): Class utilities for shadcn/ui.
* `motion` (^12.23.24): React animation library.

### Dev Dependencies (`devDependencies`)
* `typescript` (~5.8.2): Static typing.
* `vite` (^6.2.3): Build tool & dev server.
* `eslint` (^9.x), `@eslint/js`, `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`: Code quality linter.

---

## 12. Configuration

* **`vite.config.ts`:**
  * Configured `@` alias resolving to `./src`
  * Express/Vite server binding to `0.0.0.0:3000`
* **`tsconfig.json`:**
  * Target: `ES2022`
  * Paths: `"@/*": ["./src/*"]`
* **`.env.example`:**
  * Declarations for `GEMINI_API_KEY` and `APP_URL`.

---

## 13. Change Log

* **2026-08-12:** Updated the English language flag badge in `Header.tsx` to the US flag 🇺🇸 per user request.
* **2026-08-12:** Placed the Language toggle button *after* the Book Appointment button in `Header.tsx` and removed the Chamber Hours block from `Footer.tsx` per user request.
* **2026-08-12:** Added custom SVG flag badges (Bangladesh 🇧🇩 and English/UK 🇬🇧) to the Language toggle button in `Header.tsx` for desktop and mobile menus per user request.
* **2026-08-12:** Configured `Noto Serif Bengali` from Google Fonts in `index.html` and `src/index.css` as the primary font for all Bangla text and `html[lang="bn"]` mode per user request.
* **2026-08-12:** Added a complete bilingual (English & Bangla) translation system:
  - Created `src/data/translations.ts` and `src/context/LanguageContext.tsx` with `localStorage` persistence.
  - Added a prominent `বাংলা | EN` language toggle button in both desktop Header and mobile menu.
  - Translated all UI components (`Header`, `Hero`, `Stats`, `About`, `Services`, `Banner`, `Chambers`, `Testimonials`, `Publications`, `LatestBlogs`, `FeaturedVideos`, `FAQ`, `Footer`, `AboutPage`, `ContactPage`, `BlogPage`, `BlogPostDetails`) seamlessly.
* **2026-08-12:** Updated chamber titles in `Chambers.tsx` to `AZFAR UROLOGY, ANDROLOGY, MICROSURGERY & FERTILITY CENTER` (and `OFFICE`), and updated the Office address to *"SEL Kabir Center 9th floor House 2/A Road 8 GreenRoad dhanmondi Dhaka"*.
* **2026-08-12:** Updated `Hero.tsx` headline to *"World class Urology & Andrology Clinic In Bangladesh / AZFAR Urology, Andrology & Fertility Center."* and updated key feature bullet points to 4 specific credentials provided by user.
* **2026-08-12:** Created `vercel.json` and `public/_redirects` with SPA rewrite rules (`/(.*)` -> `/index.html`) to resolve Vercel 404 NOT_FOUND errors on sub-page refreshes/direct visits.
* **2026-08-12:** Added `Prof.` prefix before `Dr. Azfar Uddin Shaikh` across all site titles, components (`About.tsx`, `Hero.tsx`, `FAQ.tsx`, `Testimonials.tsx`, `Header.tsx`, `Footer.tsx`), blog data (`blogs.ts`), assets, and `index.html`.
* **2026-08-12:** Removed the floating contact card containing the phone number from the `Hero.tsx` section per user request.
* **2026-08-12:** Updated years of experience across the entire website (`Stats.tsx`, `Hero.tsx`, `About.tsx`) from 15+/25+ to **26+** per user request.

* **2026-08-03:** Cleaned up unused imports (`ArrowRight`, `MapPin`, `Send`) in `Chambers.tsx` and `ContactPage.tsx` to resolve all project ESLint warnings and verify clean compilation.
* **2026-08-03:** Extracted Blog and YouTube video sections into `LatestBlogs.tsx` and `FeaturedVideos.tsx` and integrated them into `Home.tsx`. Upgraded UI/UX designs for `Hero.tsx`, `About.tsx`, `Services.tsx`, and `Chambers.tsx` on the homepage to achieve a highly premium, modern aesthetic with advanced hover animations, gradient typography, and custom icon integration.
* **2026-08-03:** Removed the stale `.git/index.lock` file that was preventing git commands from running.
* **2026-08-03:** Copied 10 user-provided featured images from assets to the public directory and integrated them as the main featured images for all 10 blogs in `blogs.ts`.
* **2026-08-03:** Completely populated `src/data/blogs.ts` with all 10 real medical blog articles in Bengali provided by the user.
* **2026-08-03:** Created `BlogPostDetails.tsx` to serve as a premium dynamic blog details/full article page, complete with social sharing options and custom category badges.
* **2026-08-03:** Integrated 22 unique YouTube videos from the user into the `BlogPage.tsx` dynamic video gallery grid, and set the most recent two videos to display on the Home page's `FeaturedVideos.tsx` section.
* **2026-08-03:** Implemented a Facade pattern for all YouTube iframes (`BlogPage.tsx` & `FeaturedVideos.tsx`) to drastically improve loading performance. Removed text labels from video thumbnails for a cleaner UI.
* **2026-08-03:** Removed the Contact Form from `ContactPage.tsx` and redesigned the direct contact info into a full-width 3-column premium grid layout.
* **2026-08-03:** Updated all site domains to the live URL (`https://www.drazfarshaikh.com/`) in `sitemap.xml` and `robots.txt`. Replaced placeholder emails across the site with demo domain emails (e.g., `appointment@drazfarshaikh.com`).
* **2026-08-03:** Completely redesigned `Footer.tsx` with a highly premium aesthetic featuring a glassmorphic overlapping CTA card, dark rich background, and a responsive 12-column grid layout.
* **2026-08-03:** Added `BlogPage.tsx` placeholder for blog and social content. Updated navigation menus in `Header.tsx` (desktop and mobile) and `Footer.tsx` to replace "Gallery & Videos" with "Blog & Social" linking to `/blog`.
* **2026-08-03:** Built `ContactPage.tsx` featuring a modern Hero banner, a premium Contact Form, direct contact information cards, and integrated the `Chambers.tsx` component. Configured routing for `/contact` in `App.tsx` and updated `Header.tsx`.
* **2026-08-03:** Restructured application for multi-page client-side routing. Installed `react-router-dom`, extracted home sections to `src/pages/Home.tsx`, and updated `App.tsx` and `Header.tsx` to handle routing.
* **2026-08-03:** Built `AboutPage.tsx` in `src/pages/` containing comprehensive doctor profile, educational qualifications, working experience, and memberships per the provided screenshot.
* **2026-08-03:** Built `Footer.tsx` component in `src/components/layout/` featuring a CTA section, four-column informational footer with logo and Bengali text, and a copyright bottom bar. Integrated it into `App.tsx` below the main content.
* **2026-08-03:** Built `FAQ.tsx` component in `src/components/home/` featuring an interactive accordion layout for frequently asked questions, and integrated it into `App.tsx`.
* **2026-08-03:** Built `Publications.tsx` component in `src/components/home/` displaying a grid of journal articles with hover effects, and integrated it into `App.tsx`.
* **2026-08-03:** Built `Testimonials.tsx` component in `src/components/home/` containing a modern 3-column review card grid, and integrated it into `App.tsx`.
* **2026-08-03:** Built `Chambers.tsx` component in `src/components/home/` to display clinic locations and contact details in a grid layout, and integrated it into `App.tsx`.
* **2026-08-03:** Built `Banner.tsx` component in `src/components/home/` using custom CSS clip-paths and absolute positioning for the diagonal cut layout, and integrated it into `App.tsx`.
* **2026-08-03:** Built `Services.tsx` component in `src/components/home/` containing a 12-item responsive grid layout for treatment categories with image placeholders, and integrated it into `App.tsx`.
* **2026-08-03:** Changed the global typography system from Inter to Lato per explicit user request. Updated Google Fonts link in `index.html` and the `--font-sans` variable in `src/index.css`.
* **2026-08-03:** Created `Stats.tsx` and `About.tsx` components in `src/components/home/` matching the requested layout and styling. Integrated them into `App.tsx` and moved `WhatsApp Image 2025-11-02 at 14.36.07.jpeg` to the public directory as `about-surgery.jpeg`.
* **2026-08-03:** Added `Hero.tsx` section to `src/components/home/` mapping exactly to the provided UI screenshot, including styling and Lucide icons. Integrated `Hero` into `App.tsx` and moved `Image-Azfar.png` to the public assets directory.
* **2026-08-03:** Added `Azfa0r.png` as favicon and configured it as the mobile layout logo in `Header.tsx`.
* **2026-08-03:** Copied custom logo (`Azfar.png`) into public assets and updated `src/components/layout/Header.tsx` to use the provided full logo image instead of the HTML/CSS reconstructed one.
* **2026-08-03:** Rebuilt `src` directory with `main.tsx`, `App.tsx`, and `index.css`. Replicated the requested Urology clinic navigation UI in `src/components/layout/Header.tsx` as per the provided screenshot.
* **2026-07-29:** Created `AGENTS.md` setting mandatory instructions for all AI coding agents to automatically maintain `memory.md` synchronization across all project changes, and verified full accuracy of `memory.md`.
* **2026-07-29:** Created `RULES.md` project development rules constitution and updated `memory.md` documentation logs.
* **2026-07-29:** Configured Inter typography system globally (`index.html`, `src/index.css`), added SEO foundation (`public/robots.txt`, `public/sitemap.xml`, `src/utils/seo.ts`), and updated `memory.md` project documentation.
* **2026-07-29:** Initialized React 19 + TypeScript + Vite project. Added Tailwind CSS v4, initialized shadcn/ui components, configured ESLint 9 flat config, initialized Git repo with initial commit, styled with Clean Minimalism theme, refactored into modular architecture, and created `memory.md` documentation artifact.
