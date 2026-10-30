import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { m } from 'framer-motion';
import { ArrowRight, ExternalLink, Mail, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/site';
import { GithubIcon, LinkedinIcon } from './icons';

// Public files resolve against Vite's base, so the site also works when served from a sub-path.
const IMG = `${import.meta.env.BASE_URL}images/`;

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background Decorative Glow Gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-tr from-brand-500/15 via-indigo-500/15 to-cyan-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-10 -z-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Text & Conversion CTAs */}
          <div className="flex flex-col items-start text-left lg:col-span-7">
            {/* Top Upwork Availability Pill */}
            <m.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-900/5 px-3.5 py-1.5 text-xs font-semibold text-slate-800 shadow-xs backdrop-blur-md dark:border-white/15 dark:bg-white/10 dark:text-slate-200"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>{t.hero.badge}</span>
            </m.div>

            {/* Main Greeting & Name */}
            {/* The h1 is the LCP candidate: slide it in, but never hide it behind opacity: 0. */}
            <m.div initial={{ y: 12 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <span className="mb-2 block text-sm font-bold tracking-wider text-brand-600 uppercase dark:text-brand-400">
                {t.hero.greeting}
              </span>
              <h1
                id="hero-title"
                className="mb-4 text-4xl leading-[1.1] font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
              >
                {t.hero.name}
              </h1>
              <p className="mb-6 text-gradient text-lg font-bold sm:text-xl">{t.hero.roleHeadline}</p>
            </m.div>

            {/* Subheadline & Value Proposition */}
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300"
            >
              {t.hero.subheadline}
            </m.p>

            {/* Action Buttons (CTAs) */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex w-full flex-wrap items-center gap-3 sm:w-auto"
            >
              {/* Primary Upwork CTA */}
              <a
                href={siteConfig.upworkProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-linear-to-r from-emerald-600 to-teal-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/25 transition-all hover:-translate-y-0.5 hover:from-emerald-500 hover:to-teal-500 hover:shadow-emerald-600/40 active:translate-y-0 sm:w-auto"
              >
                <Sparkles className="h-4 w-4 text-emerald-200" />
                <span>{t.hero.ctaPrimary}</span>
                <ExternalLink className="h-4 w-4 opacity-80" />
              </a>

              {/* Secondary Case Studies CTA */}
              <a
                href="#projects"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-800 shadow-xs transition-all hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-sm sm:w-auto dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-brand-500"
              >
                <span>{t.hero.ctaSecondary}</span>
                <ArrowRight className="h-4 w-4 text-brand-500" />
              </a>

              {/* GitHub Link */}
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white p-3.5 text-slate-700 shadow-xs transition-colors hover:border-slate-400 hover:text-brand-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:text-brand-400"
                aria-label={t.common.githubProfile}
              >
                <GithubIcon className="h-5 w-5" />
              </a>

              {/* LinkedIn Link */}
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white p-3.5 text-slate-700 shadow-xs transition-colors hover:border-slate-400 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:text-blue-400"
                aria-label={t.common.linkedinProfile}
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>

              {/* Direct Mail */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white p-3.5 text-slate-700 shadow-xs transition-colors hover:border-slate-400 hover:text-brand-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:text-brand-400"
                aria-label={t.nav.contact}
              >
                <Mail className="h-5 w-5" />
              </a>
            </m.div>

            {/* Trust Micro-Badge */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
              <span>{t.hero.trustBadge}</span>
            </m.div>
          </div>

          {/* Right Column: High-End Portrait & Floating Badges */}
          <div className="flex justify-center lg:col-span-5">
            <m.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square w-72 sm:w-80 md:w-96"
            >
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rotate-3 rounded-3xl bg-linear-to-tr from-brand-600 via-indigo-600 to-cyan-400 p-1 shadow-2xl shadow-brand-500/20">
                <div className="h-full w-full rounded-3xl bg-slate-950" />
              </div>

              {/* Inner Image Card */}
              <div className="group relative h-full w-full -rotate-1 overflow-hidden rounded-3xl border-2 border-white/20 bg-slate-900 shadow-2xl dark:border-white/10">
                <picture>
                  <source
                    type="image/avif"
                    srcSet={`${IMG}profile-320.avif 320w, ${IMG}profile-640.avif 640w`}
                    sizes="(min-width: 768px) 384px, (min-width: 640px) 320px, 288px"
                  />
                  <source
                    type="image/webp"
                    srcSet={`${IMG}profile-320.webp 320w, ${IMG}profile-640.webp 640w`}
                    sizes="(min-width: 768px) 384px, (min-width: 640px) 320px, 288px"
                  />
                  <img
                    src={`${IMG}profile-640.jpg`}
                    alt={t.hero.photoAlt}
                    width={640}
                    height={641}
                    fetchPriority="high"
                    decoding="async"
                    className="h-full w-full object-cover object-top contrast-105 grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </picture>

                {/* Gradient bottom overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Bottom Card Label */}
                <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/90 p-3 backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-900/90">
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">{t.hero.name}</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {t.meta.city} · {t.meta.timezone}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 motion-safe:animate-pulse" />
                    {t.common.available}
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: React 19 + Tailwind v4 */}
              <m.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -top-4 -left-6 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/95 px-3.5 py-2 shadow-xl backdrop-blur-md sm:-left-8 dark:border-slate-700 dark:bg-slate-900/95"
              >
                <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-100">React 19 & Tailwind v4</span>
              </m.div>

              {/* Floating Badge 2: AI-Augmented (Antigravity & Claude Code) */}
              <m.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -right-4 -bottom-4 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/95 px-3.5 py-2 shadow-xl backdrop-blur-md sm:-right-6 dark:border-slate-700 dark:bg-slate-900/95"
              >
                <Zap className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-100">Antigravity · Claude Code</span>
              </m.div>
            </m.div>
          </div>
        </div>

        {/* Bottom Quick Stats Strip */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-xs backdrop-blur-md sm:mt-24 sm:p-6 md:grid-cols-4 dark:border-slate-800/80 dark:bg-slate-900/60"
        >
          {t.hero.quickStats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center px-3 py-2 text-center sm:items-start sm:text-left">
              <span className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">{stat.label}</span>
            </div>
          ))}
        </m.div>
      </div>
    </section>
  );
};
