import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { m } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" aria-labelledby="experience-title" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="experience-title"
          eyebrow={t.experience.eyebrow}
          icon={Briefcase}
          tone="indigo"
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />

        {/* Timeline Container */}
        <div className="relative ml-4 space-y-12 border-l-2 border-slate-200 sm:ml-8 md:ml-32 dark:border-slate-800">
          {t.experience.items.map((item, index) => (
            <m.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative pl-6 sm:pl-8"
            >
              {/* Timeline Marker Dot */}
              <div
                className={`absolute top-1.5 left-[-9px] h-4 w-4 rounded-full border-2 transition-all ${
                  item.isCurrent
                    ? 'border-white bg-emerald-500 shadow-md ring-4 ring-emerald-500/20 dark:border-slate-950'
                    : 'border-white bg-slate-300 group-hover:bg-brand-500 dark:border-slate-950 dark:bg-slate-700'
                }`}
              />

              {/* Date pill positioned cleanly */}
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  {item.period}
                </span>

                {item.isCurrent && (
                  <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-extrabold text-emerald-600 uppercase dark:text-emerald-400">
                    {t.experience.currentTag}
                  </span>
                )}

                <span className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                  <MapPin className="h-3 w-3" aria-hidden="true" />
                  {item.location}
                </span>
              </div>

              {/* Experience Card */}
              <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all hover:border-brand-500/40 hover:shadow-md sm:p-8 dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-3 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <h3 className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">{item.role}</h3>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-brand-600 dark:text-brand-400">
                    <Building2 className="h-4 w-4 shrink-0" />
                    <span>{item.company}</span>
                  </div>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.summary}</p>

                {/* Bullets List from CV */}
                <ul className="mb-6 space-y-3">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-slate-200/60 bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700/60 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};
