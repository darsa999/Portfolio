import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, Award, Globe, CheckCircle2, FileCheck2 } from 'lucide-react';
import { m } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';

export const Education: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="education" aria-labelledby="education-title" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="education-title"
          eyebrow={t.education.eyebrow}
          icon={GraduationCap}
          tone="amber"
          title={t.education.title}
          subtitle={t.education.subtitle}
        />

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left Column: Education & Degrees */}
          <div className="space-y-4 lg:col-span-8">
            <h3 className="mb-2 flex items-center gap-2 text-sm font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
              <Award className="h-4 w-4 text-brand-500" />
              <span>{t.education.degreesTitle}</span>
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {t.education.items.map((item, idx) => (
                <m.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900"
                >
                  <div>
                    {item.badge && (
                      <span className="mb-3 inline-block rounded-full border border-brand-500/20 bg-brand-500/10 px-2.5 py-0.5 text-[10px] font-extrabold text-brand-600 dark:text-brand-400">
                        {item.badge}
                      </span>
                    )}
                    <h4 className="mb-1 text-base font-bold text-slate-900 dark:text-white">{item.title}</h4>
                    <p className="mb-3 text-xs font-semibold text-brand-600 dark:text-brand-400">{item.institution}</p>
                    <p className="mb-4 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{item.details}</p>
                  </div>

                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">{item.period}</span>
                </m.div>
              ))}
            </div>

            {/* Official STEP Verification Card (from Page 2 of CV) */}
            <div className="mt-6 flex flex-col justify-between gap-4 rounded-2xl border border-blue-500/20 bg-linear-to-r from-blue-500/10 via-indigo-500/10 to-transparent p-5 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <div className="shrink-0 rounded-xl bg-blue-500 p-2.5 text-white shadow-xs">
                  <FileCheck2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.education.stepTitle}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.education.stepVerificationBadge} · {t.education.credentialVerified}
                  </p>
                </div>
              </div>
              <span className="self-start rounded-xl border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-600 sm:self-auto dark:text-blue-400">
                {t.education.verifiedYear}
              </span>
            </div>
          </div>

          {/* Right Column: Languages Spoken */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs sm:p-8 lg:col-span-4 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-6 flex items-center gap-2 text-sm font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
              <Globe className="h-4 w-4 text-cyan-500" />
              <span>{t.education.languagesTitle}</span>
            </h3>

            <div className="space-y-4">
              {t.education.languages.map((lang) => (
                <div
                  key={lang.code}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/60"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 shadow-2xs dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200">
                      {lang.code}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">{lang.name}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{lang.level}</p>
                    </div>
                  </div>
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              <strong className="mb-1 block font-bold text-emerald-700 dark:text-emerald-400">
                {t.education.commsTitle}
              </strong>
              {t.education.commsText}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
