# Mamuka Darsalia — Senior Full-Stack & Automation Engineer Portfolio

A production-grade, highly optimized, multi-lingual portfolio web application architected with **React 19**, **Tailwind CSS v4**, **TypeScript**, and **Framer Motion**, tailored to win top-tier clients on Upwork.

---

## 🌟 Highlights & Architecture

- **Clean Architecture & i18n**: Fully decoupled UI and locale dictionaries (`src/data/locales/{ka,en,ru}.ts`).
- **3 Supported Languages**:
  - 🇬🇪 **Georgian (KA)** — Default / Existing
  - 🇺🇸 **English (EN)** — Primary conversion copy for Upwork & international clients
  - 🌐 **Russian (RU)** — Professional engineering translation
- **State & Theme Persistence**: Language and Dark/Light mode persist instantly in `localStorage` with zero-flash rendering.
- **Accurate CV Alignment**: Maps 100% of experiences, timelines, skills, and certifications from Mamuka Darsalia's CV (Invest Medical Georgia, Flat Rock Technology, Swift Digital, LTD Boxwood, IT Academy STEP verification, Skillwill Neo University, Bitcamp).
- **Featured Case Studies**: Structured as real-world problem/solution/contribution/metric breakdowns (Gestlife Platform, Staropub QR Menu, Invest Medical AI Automation Hub).
- **Upwork Conversion Focused**: Prominent CTAs, Escrow guarantee badges, 3-5x development velocity highlights via Google Antigravity & Claude Code, and one-click copy contact triggers.

---

## 🛠 Tech Stack

- **Framework**: React 18 / 19 + Vite
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS + PostCSS + Autoprefixer
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Hosting / Deployment Target**: Vercel, Netlify, or GitHub Pages

---

## 🚀 Quick Start (Development)

Run the local development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 📦 Production Build

Typecheck and generate the optimized production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```
├── public/
│   └── profile.jpg             # High-res profile portrait
├── src/
│   ├── components/             # Modular UI components
│   │   ├── Navbar.tsx          # Sticky navigation with blur & mobile drawer
│   │   ├── Hero.tsx            # Conversion hero with live availability pill
│   │   ├── UpworkBanner.tsx    # Upwork client advantage & escrow guarantee
│   │   ├── About.tsx           # Bio, engineering philosophy & discipline
│   │   ├── TechStack.tsx       # Categorized skills & AI superpower callout
│   │   ├── Experience.tsx      # Chronological timeline from CV
│   │   ├── Projects.tsx        # Case study cards
│   │   ├── CaseStudyModal.tsx  # Deep-dive interactive modal dialog
│   │   ├── Education.tsx       # Academic degrees, STEP badge & languages
│   │   ├── Contact.tsx         # Conversion contact channels & email copy
│   │   ├── Footer.tsx          # Brand footer & back-to-top
│   │   ├── LanguageSwitcher.tsx# Animated KA/EN/RU language pill switcher
│   │   └── ThemeToggle.tsx     # Smooth dark/light mode toggle
│   ├── context/
│   │   ├── LanguageContext.tsx # Reactive i18n provider with persistence
│   │   └── ThemeContext.tsx    # Dark/light mode provider
│   ├── data/
│   │   ├── locales/
│   │   │   ├── ka.ts           # Georgian content dictionary
│   │   │   ├── en.ts           # English content dictionary (Upwork primary)
│   │   │   └── ru.ts           # Russian content dictionary
│   │   └── portfolioData.ts    # Centralized dictionary exporter
│   ├── styles/
│   │   └── index.css           # Tailwind base styles & glassmorphic utilities
│   ├── types/
│   │   └── index.ts            # Strict TypeScript interfaces
│   ├── App.tsx                 # Root application layout & transition container
│   └── main.tsx                # React root entry
├── index.html                  # SEO & Social OpenGraph entrypoint
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🌐 Deploy to Vercel in 1-Click

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete production-grade portfolio refactor"
   git branch -M main
   git remote add origin https://github.com/darsa999/portfolio.git
   git push -u origin main
   ```
2. Import repository into [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
