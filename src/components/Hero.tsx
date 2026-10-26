import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Linkedin, Mail, Zap, Sparkles, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-brand-500/15 via-indigo-500/15 to-cyan-500/15 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Conversion CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Upwork Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 dark:bg-white/10 border border-slate-300 dark:border-white/15 text-slate-800 dark:text-slate-200 text-xs font-semibold mb-6 shadow-sm backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t.hero.badge}</span>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-sm uppercase tracking-wider font-bold text-brand-600 dark:text-brand-400 mb-2 block">
                {t.hero.greeting}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-4">
                {t.hero.name}
              </h1>
              <p className="text-lg sm:text-xl font-bold text-gradient mb-6">
                {t.hero.roleHeadline}
              </p>
            </motion.div>

            {/* Subheadline & Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl"
            >
              {t.hero.subheadline}
            </motion.p>

            {/* Action Buttons (CTAs) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 w-full sm:w-auto"
            >
              {/* Primary Upwork CTA */}
              <a
                href={t.meta.upworkProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <Sparkles className="w-4 h-4 text-emerald-200" />
                <span>{t.hero.ctaPrimary}</span>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>

              {/* Secondary Case Studies CTA */}
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500 shadow-sm hover:shadow hover:-translate-y-0.5 transition-all"
              >
                <span>{t.hero.ctaSecondary}</span>
                <ArrowRight className="w-4 h-4 text-brand-500" />
              </a>

              {/* GitHub Link */}
              <a
                href={t.meta.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3.5 rounded-xl text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 hover:text-brand-600 dark:hover:text-brand-400 transition-colors shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              {/* LinkedIn Link */}
              <a
                href={t.meta.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3.5 rounded-xl text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* Direct Mail */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center p-3.5 rounded-xl text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 hover:text-brand-600 dark:hover:text-brand-400 transition-colors shadow-sm"
                aria-label="Contact Section"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Trust Micro-Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Full Escrow Protection on Upwork · 100% Milestone Delivery Guarantee</span>
            </motion.div>

          </div>

          {/* Right Column: High-End Portrait & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-72 sm:w-80 md:w-96 aspect-square"
            >
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-brand-600 via-indigo-600 to-cyan-400 p-1 shadow-2xl shadow-brand-500/20 rotate-3">
                <div className="w-full h-full bg-slate-950 rounded-3xl" />
              </div>

              {/* Inner Image Card */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/20 dark:border-white/10 shadow-2xl -rotate-1 bg-slate-900 group">
                <img
                  src="/profile.jpg"
                  alt={t.hero.name}
                  className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  loading="eager"
                />
                
                {/* Gradient bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Bottom Card Label */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/20 dark:border-slate-700/50 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">{t.hero.name}</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Tbilisi, Georgia · UTC+4</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Available
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: React 19 + Tailwind v4 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -top-4 -left-6 sm:-left-8 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl flex items-center gap-2"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-100">React 19 & Tailwind v4</span>
              </motion.div>

              {/* Floating Badge 2: AI-Augmented (Antigravity & Claude Code) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-4 -right-4 sm:-right-6 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl flex items-center gap-2"
              >
                <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-100">Antigravity · Claude Code</span>
              </motion.div>

            </motion.div>
          </div>

        </div>

        {/* Bottom Quick Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-sm"
        >
          {t.hero.quickStats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left px-3 py-2">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
