# Mamuka Darsalia — Lead Full-Stack & Automation Engineer Portfolio

Multi-lingual (KA / EN / RU) portfolio built with **React 19**, **Tailwind CSS v4**, **TypeScript**, **Vite 7** and **Framer Motion**.

Live: https://portfolio-pi-rosy-22.vercel.app

---

## 🌟 Highlights & Architecture

- **i18n with lazy dictionaries**: Georgian ships in the main bundle; English and Russian are separate chunks loaded on demand. `?lang=en` / `?lang=ru` links are shareable and listed as `hreflang` alternates.
- **Typed content**: every locale implements `LocaleContent`; icons are referenced by a typed `IconName`, so a typo is a compile error.
- **Single source for contact data**: email, phone and profile links live in `src/config/site.ts`, not in each locale.
- **No theme flash**: an inline script in `index.html` applies the saved theme before first paint.
- **Accessibility**: skip link, labelled sections, active-section nav highlighting, focus-trapped case-study dialog, `prefers-reduced-motion` respected everywhere.
- **Performance**: responsive AVIF/WebP portrait (≈26 KB instead of 608 KB), preloaded LCP image, self-hosted variable fonts with Georgian coverage, `LazyMotion` + `domAnimation`, vendor chunks split for caching.
- **SEO**: canonical, Open Graph + Twitter card (1200×630), JSON-LD `Person` + `WebSite`, `robots.txt`, `sitemap.xml`, web manifest.

---

## 🛠 Tech Stack

- **Framework**: React 19 + Vite 7
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Animations**: Framer Motion 12 (`LazyMotion`)
- **Icons**: Lucide React (+ inline GitHub / LinkedIn brand SVGs)
- **Fonts**: `@fontsource-variable/inter`, `@fontsource-variable/noto-sans-georgian`
- **Quality**: ESLint 9 (typescript-eslint, react-hooks, jsx-a11y), Prettier + `prettier-plugin-tailwindcss`
- **Hosting**: Vercel (`vercel.json` sets cache and security headers)

---

## 🚀 Scripts

| Command                   | What it does                                                          |
| ------------------------- | --------------------------------------------------------------------- |
| `npm run dev`             | Dev server on http://localhost:3000                                   |
| `npm run build`           | Type-check and build to `dist/`                                       |
| `npm run preview`         | Serve the production build locally                                    |
| `npm run lint`            | ESLint (incl. accessibility rules)                                    |
| `npm run format`          | Prettier, also sorts Tailwind classes                                 |
| `npm run analyze`         | Build and write a bundle treemap to `dist/stats.html`                 |
| `npm run optimize:images` | Regenerate portrait, OG card and icons from `assets/` + `favicon.svg` |

---

## 📁 Project Structure

```
├── assets/
│   └── profile-source.png      # Original portrait (not deployed)
├── public/
│   ├── images/                 # Generated: profile-*.avif/webp/jpg, og-image.jpg
│   ├── favicon.svg, *.png      # Icon set
│   ├── robots.txt, sitemap.xml, site.webmanifest
├── scripts/
│   └── optimize-images.mjs     # sharp pipeline for images/icons
├── src/
│   ├── components/
│   │   ├── ui/SectionHeading.tsx
│   │   ├── icons.tsx           # Typed icon map + brand SVGs
│   │   └── *.tsx               # Page sections, modal, switchers
│   ├── config/site.ts          # Language-independent contact data & site URL
│   ├── context/                # Language (lazy locales) & theme providers
│   ├── data/locales/{ka,en,ru}.ts
│   ├── hooks/useActiveSection.ts
│   ├── styles/index.css        # Tailwind v4 theme + fonts
│   └── types/index.ts
├── index.html                  # SEO meta, JSON-LD, theme bootstrap
├── vercel.json
└── vite.config.ts
```

When the site moves to a custom domain, update `siteConfig.url` and the absolute URLs in `index.html`, `public/robots.txt` and `public/sitemap.xml`.
