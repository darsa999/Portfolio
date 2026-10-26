import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Gauge, Workflow, Dumbbell, Music, Cpu, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const getValueIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-brand-600 dark:text-brand-400" />;
      case 'Gauge':
        return <Gauge className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Workflow':
      default:
        return <Workflow className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
    }
  };

  const getHobbyIcon = (name: string) => {
    switch (name) {
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5 text-rose-500" />;
      case 'Music':
        return <Music className="w-5 h-5 text-indigo-500" />;
      case 'Cpu':
      default:
        return <Cpu className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
            {t.about.title}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            {t.about.subtitle}
          </p>
        </div>

        {/* Top Story & Quick Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          
          {/* Main Bio Paragraphs */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            {t.about.bioParagraphs.map((para, i) => (
              <p key={i} className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {para}
              </p>
            ))}

            {/* Micro Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>React 19 & Tailwind CSS v4 Specialist</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>AI-Augmented Development (3-5x Velocity)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>n8n, Python & Workflow Automation</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Fluent in English, Georgian & Russian</span>
              </div>
            </div>
          </div>

          {/* Quick Info Sidebar Card */}
          <div className="lg:col-span-4 p-6 rounded-3xl bg-gradient-to-b from-slate-50 to-slate-100/60 dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
              Quick Overview
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400">Location</span>
                <span className="font-semibold text-slate-900 dark:text-white flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-500" />
                  Tbilisi, Georgia
                </span>
              </li>
              <li className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400">Total Experience</span>
                <span className="font-semibold text-slate-900 dark:text-white">6+ Years</span>
              </li>
              <li className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400">Current Role</span>
                <span className="font-semibold text-slate-900 dark:text-white text-right">Lead Full-Stack Eng.</span>
              </li>
              <li className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400">Upwork Status</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available Now
                </span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400">Timezone</span>
                <span className="font-semibold text-slate-900 dark:text-white">UTC+4 (Flexible)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 3 Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {t.about.coreValues.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-brand-500/40 transition-all group"
            >
              <div className="w-10 h-10 rounded-2xl bg-brand-50 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {getValueIcon(val.icon)}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {val.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Personal Discipline & Interests (From User's CV) */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center sm:text-left flex items-center gap-2">
            <span>{t.about.hobbiesTitle}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.about.hobbies.map((hobby, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-100/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm shrink-0">
                  {getHobbyIcon(hobby.icon)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    {hobby.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {hobby.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
