import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, Award, Globe, CheckCircle2, FileCheck2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Education: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
            {t.education.title}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            {t.education.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education & Degrees */}
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-brand-500" />
              <span>{t.education.degreesTitle}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.education.items.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    {item.badge && (
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 mb-3">
                        {item.badge}
                      </span>
                    )}
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 mb-3">
                      {item.institution}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {item.details}
                    </p>
                  </div>

                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                    {item.period}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Official STEP Verification Card (from Page 2 of CV) */}
            <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-transparent border border-blue-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500 text-white shrink-0 shadow-sm">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    IT Academy STEP — Front-End Web Programming Certificate & Addition
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.education.stepVerificationBadge} · Credential Verified
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-xl text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/30 self-start sm:self-auto">
                Verified 2025
              </span>
            </div>
          </div>

          {/* Right Column: Languages Spoken */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-6 flex items-center gap-2">
              <Globe className="w-4 h-4 text-cyan-500" />
              <span>{t.education.languagesTitle}</span>
            </h3>

            <div className="space-y-4">
              {t.education.languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center font-bold text-xs text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 shadow-xs">
                      {lang.code}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {lang.name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {lang.level}
                      </p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong className="block text-emerald-700 dark:text-emerald-400 font-bold mb-1">
                🌐 Client Communication Guarantee
              </strong>
              Fluent English communication for video discovery calls, daily asynchronous standups, PR reviews, and sprint planning.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
