import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Zap, Layers, Cpu, CheckCircle, ExternalLink, ShieldCheck, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export const UpworkBanner: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-brand-500" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-500" />;
      case 'CheckCircle':
      default:
        return <CheckCircle className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container with subtle border gradient and backdrop */}
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white shadow-2xl border border-slate-700/60 overflow-hidden">
          
          {/* Background Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>{t.upworkSection.badge}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-4">
              {t.upworkSection.title}
            </h2>
            
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {t.upworkSection.description}
            </p>
          </div>

          {/* 4 Feature Cards Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {t.upworkSection.perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-400/40 hover:bg-white/10 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {getIcon(perk.icon)}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{perk.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{perk.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action Footer inside Banner */}
          <div className="relative z-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-300 font-medium text-center sm:text-left">
              <ShieldCheck className="w-5 h-5 shrink-0 text-emerald-400" />
              <span>{t.upworkSection.guaranteeText}</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={t.meta.upworkProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-100"
              >
                <span>{t.upworkSection.ctaButton}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all"
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
