import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, ShieldCheck, Award } from 'lucide-react';
import { m } from 'framer-motion';
import { siteConfig } from '../config/site';
import { Icon, type IconName } from './icons';

const perkIconColor: Partial<Record<IconName, string>> = {
  Zap: 'text-amber-500',
  Layers: 'text-brand-500',
  Cpu: 'text-cyan-500',
  CheckCircle: 'text-emerald-500',
};

export const UpworkBanner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="upwork-title" className="relative overflow-hidden py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Container with subtle border gradient and backdrop */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-700/60 bg-linear-to-br from-slate-900 via-slate-900 to-indigo-950 p-8 text-white shadow-2xl sm:p-12">
          {/* Background Ambient Glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"
          />

          {/* Header */}
          <div className="relative z-10 mb-12 max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold tracking-wider text-emerald-300 uppercase">
              <Award className="h-3.5 w-3.5" />
              <span>{t.upworkSection.badge}</span>
            </div>

            <h2
              id="upwork-title"
              className="mb-4 text-3xl leading-tight font-black tracking-tight text-white sm:text-4xl"
            >
              {t.upworkSection.title}
            </h2>

            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">{t.upworkSection.description}</p>
          </div>

          {/* 4 Feature Cards Grid */}
          <div className="relative z-10 mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.upworkSection.perks.map((perk, index) => (
              <m.div
                key={perk.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-brand-400/40 hover:bg-white/10"
              >
                <div>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-transform group-hover:scale-110">
                    <Icon name={perk.icon} className={`h-5 w-5 ${perkIconColor[perk.icon] ?? 'text-emerald-500'}`} />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-white">{perk.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">{perk.desc}</p>
                </div>
              </m.div>
            ))}
          </div>

          {/* Call to Action Footer inside Banner */}
          <div className="relative z-10 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
            <div className="flex items-center gap-2 text-center text-xs font-medium text-emerald-300 sm:text-left sm:text-sm">
              <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-400" />
              <span>{t.upworkSection.guaranteeText}</span>
            </div>

            <div className="flex w-full items-center gap-3 sm:w-auto">
              <a
                href={siteConfig.upworkProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 hover:bg-emerald-300 active:scale-100 sm:w-auto"
              >
                <span>{t.upworkSection.ctaButton}</span>
                <ExternalLink className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/20 sm:w-auto"
              >
                <span>{t.upworkSection.secondaryCta}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
