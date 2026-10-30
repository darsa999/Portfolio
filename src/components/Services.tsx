import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Briefcase, CheckCircle2 } from 'lucide-react';
import { m } from 'framer-motion';
import { Icon, type IconName } from './icons';
import { SectionHeading } from './ui/SectionHeading';

const serviceAccent: Partial<Record<IconName, string>> = {
  Layout: 'bg-brand-500/10 text-brand-600 dark:text-brand-400',
  Rocket: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
  Workflow: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  Bot: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
};

export const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" aria-labelledby="services-title" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="services-title"
          eyebrow={t.services.eyebrow}
          icon={Briefcase}
          tone="brand"
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {t.services.items.map((service, i) => (
            <m.article
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
              className="group flex flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all hover:-translate-y-0.5 hover:border-brand-500/40 hover:shadow-lg sm:p-8 dark:border-slate-800 dark:bg-slate-900"
            >
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 ${
                  serviceAccent[service.icon] ?? serviceAccent.Layout
                }`}
              >
                <Icon name={service.icon} className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">{service.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{service.desc}</p>
              <ul className="mt-auto space-y-2 border-t border-slate-100 pt-5 dark:border-slate-800">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </m.article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-600 dark:bg-white dark:text-slate-900 dark:hover:bg-brand-400"
          >
            <span>{t.services.cta}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
