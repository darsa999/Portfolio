import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { m } from 'framer-motion';
import { Icon, type IconName } from './icons';
import { SectionHeading } from './ui/SectionHeading';

// Accent colour per icon, so the locale files only have to name the icon.
const valueIconColor: Partial<Record<IconName, string>> = {
  ShieldCheck: 'text-brand-600 dark:text-brand-400',
  Gauge: 'text-emerald-600 dark:text-emerald-400',
  Workflow: 'text-cyan-600 dark:text-cyan-400',
};

const hobbyIconColor: Partial<Record<IconName, string>> = {
  ShieldCheck: 'text-emerald-500',
  Award: 'text-emerald-500',
  Sparkles: 'text-indigo-500',
  Brain: 'text-indigo-500',
  Dumbbell: 'text-rose-500',
  Music: 'text-indigo-500',
  Cpu: 'text-amber-500',
};

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" aria-labelledby="about-title" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="about-title"
          eyebrow={t.about.eyebrow}
          icon={Sparkles}
          tone="brand"
          title={t.about.title}
          subtitle={t.about.subtitle}
        />

        {/* Top Story & Quick Details Card */}
        <div className="mb-16 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Main Bio Paragraphs */}
          <div className="space-y-4 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs sm:p-8 lg:col-span-8 dark:border-slate-800 dark:bg-slate-900">
            {t.about.bioParagraphs.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-pretty text-slate-700 dark:text-slate-300">
                {para}
              </p>
            ))}

            {/* Micro Highlights */}
            <ul className="grid grid-cols-1 gap-3 border-t border-slate-100 pt-4 sm:grid-cols-2 dark:border-slate-800">
              {t.about.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Info Sidebar Card */}
          <div className="rounded-3xl border border-slate-200 bg-linear-to-b from-slate-50 to-slate-100/60 p-6 shadow-xs lg:col-span-4 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
            <h3 className="mb-4 text-sm font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
              {t.about.overviewTitle}
            </h3>
            <dl className="space-y-4 text-sm">
              {t.about.overview.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between gap-4 ${
                    i < t.about.overview.length - 1 ? 'border-b border-slate-200 pb-3 dark:border-slate-800' : ''
                  }`}
                >
                  <dt className="text-slate-500 dark:text-slate-400">{row.label}</dt>
                  <dd
                    className={`flex items-center gap-1.5 text-right font-semibold ${
                      row.live ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-900 dark:text-white'
                    }`}
                  >
                    {row.live && (
                      <span
                        className="h-2 w-2 rounded-full bg-emerald-500 motion-safe:animate-pulse"
                        aria-hidden="true"
                      />
                    )}
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* 3 Core Values Cards */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.about.coreValues.map((val, i) => (
            <m.div
              key={val.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all hover:-translate-y-0.5 hover:border-brand-500/40 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 transition-transform group-hover:scale-110 dark:bg-slate-800">
                <Icon name={val.icon} className={`h-5 w-5 ${valueIconColor[val.icon] ?? 'text-brand-500'}`} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">{val.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{val.desc}</p>
            </m.div>
          ))}
        </div>

        {/* Personal Discipline & Interests */}
        <div>
          <h3 className="mb-6 text-center text-xl font-bold text-slate-900 sm:text-left dark:text-white">
            {t.about.hobbiesTitle}
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {t.about.hobbies.map((hobby) => (
              <div
                key={hobby.title}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-100/60 p-6 dark:border-slate-800 dark:bg-slate-900/60"
              >
                <div className="shrink-0 rounded-xl bg-white p-3 shadow-xs dark:bg-slate-800">
                  <Icon name={hobby.icon} className={`h-5 w-5 ${hobbyIconColor[hobby.icon] ?? 'text-indigo-500'}`} />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-bold text-slate-900 dark:text-white">{hobby.title}</h4>
                  <p className="text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-400">{hobby.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
