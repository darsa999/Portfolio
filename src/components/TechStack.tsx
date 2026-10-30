import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Zap } from 'lucide-react';
import { m } from 'framer-motion';
import { Icon } from './icons';
import { SectionHeading } from './ui/SectionHeading';

export const TechStack: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative bg-slate-100/50 py-20 md:py-28 dark:bg-slate-900/40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="skills-title"
          eyebrow={t.skills.eyebrow}
          icon={Zap}
          tone="cyan"
          title={t.skills.title}
          subtitle={t.skills.subtitle}
          className="mb-12"
        />

        {/* High-Impact AI-Augmented Callout Banner */}
        <div className="relative mb-14 overflow-hidden rounded-3xl border border-brand-500/40 bg-linear-to-r from-brand-900/90 via-indigo-950 to-slate-900 p-6 text-white shadow-xl sm:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 h-80 w-80 rounded-full bg-brand-500/15 blur-3xl"
          />

          <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-3xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/20 px-3 py-1 text-xs font-bold tracking-wider text-brand-300 uppercase">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" aria-hidden="true" />
                <span>{t.skills.aiCallout.badge}</span>
              </div>
              <h3 className="mb-2 text-xl font-black text-balance text-white sm:text-2xl">
                {t.skills.aiCallout.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{t.skills.aiCallout.desc}</p>
            </div>

            <div className="flex shrink-0 flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs">
              <span className="font-bold text-emerald-400">{t.skills.velocity.title}</span>
              <span className="text-slate-200">{t.skills.velocity.primary}</span>
              <span className="text-slate-400">{t.skills.velocity.secondary}</span>
            </div>
          </div>
        </div>

        {/* Category filter: a toggle-button group, so aria-pressed rather than the full tabs pattern */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {t.skills.categories.map((cat, idx) => (
            <button
              key={cat.title}
              type="button"
              aria-pressed={activeTab === idx}
              aria-controls="skills-grid"
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-500 ${
                activeTab === idx
                  ? 'bg-slate-900 text-white shadow-md dark:bg-white dark:text-slate-900'
                  : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-200/70 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700/70'
              }`}
            >
              <Icon name={cat.icon} className="h-4 w-4" />
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid for Active Tab */}
        <m.ul
          id="skills-grid"
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          aria-live="polite"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {t.skills.categories[activeTab].skills.map((skill) => (
            <li
              key={skill.name}
              className={`rounded-2xl border p-5 transition-all hover:-translate-y-0.5 ${
                skill.featured
                  ? 'border-brand-500/40 bg-white shadow-xs shadow-brand-500/5 dark:bg-slate-900'
                  : 'border-slate-200/80 bg-white/80 dark:border-slate-800 dark:bg-slate-900/70'
              }`}
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white">
                  {skill.name}
                  {skill.featured && (
                    <span className="rounded-sm border border-brand-500/20 bg-brand-500/10 px-1.5 py-0.5 text-[10px] font-bold text-brand-600 dark:text-brand-400">
                      {t.skills.coreTag}
                    </span>
                  )}
                </span>
                {skill.level && (
                  <span className="shrink-0 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    {skill.level}
                  </span>
                )}
              </div>
              {skill.description && (
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">{skill.description}</p>
              )}
            </li>
          ))}
        </m.ul>
      </div>
    </section>
  );
};
