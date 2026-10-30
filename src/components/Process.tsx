import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Route } from 'lucide-react';
import { m } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';

export const Process: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="process" aria-labelledby="process-title" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="process-title"
          eyebrow={t.process.eyebrow}
          icon={Route}
          tone="cyan"
          title={t.process.title}
          subtitle={t.process.subtitle}
        />

        <ol className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connector line behind the step numbers on wide screens */}
          <div
            aria-hidden="true"
            className="absolute top-6 right-[12.5%] left-[12.5%] hidden h-px bg-linear-to-r from-brand-500/40 via-cyan-500/40 to-emerald-500/40 lg:block"
          />
          {t.process.steps.map((step, i) => (
            <m.li
              key={step.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center"
            >
              <span className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-brand-600 to-cyan-500 text-lg font-black text-white shadow-lg shadow-brand-500/20">
                {i + 1}
              </span>
              <h3 className="mb-2 text-base font-bold text-slate-900 dark:text-white">{step.title}</h3>
              <p className="max-w-xs text-sm leading-relaxed text-slate-600 dark:text-slate-400">{step.desc}</p>
            </m.li>
          ))}
        </ol>
      </div>
    </section>
  );
};
