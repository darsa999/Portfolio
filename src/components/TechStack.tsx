import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Layout, Bot, Terminal, Layers, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const TechStack: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<number>(0);

  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case 'Layout':
        return <Layout className="w-4 h-4" />;
      case 'Bot':
        return <Bot className="w-4 h-4" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4" />;
      case 'Layers':
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-100/50 dark:bg-slate-900/40 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Mastery & Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
            {t.skills.title}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            {t.skills.subtitle}
          </p>
        </div>

        {/* High-Impact AI-Augmented Callout Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-900/90 via-indigo-950 to-slate-900 border border-brand-500/40 shadow-xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-300 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>{t.skills.aiCallout.badge}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                {t.skills.aiCallout.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {t.skills.aiCallout.desc}
              </p>
            </div>

            <div className="shrink-0 flex flex-col gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs">
              <span className="font-bold text-emerald-400">⚡ Velocity Metric</span>
              <span className="text-slate-200">3-5x Faster Time-to-Market</span>
              <span className="text-slate-400">Near-Zero Architectural Regression</span>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {t.skills.categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === idx
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-700/70 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {getCategoryIcon(cat.icon)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid for Active Tab */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {t.skills.categories[activeTab].skills.map((skill, index) => (
            <div
              key={index}
              className={`p-5 rounded-2xl border transition-all ${
                skill.featured
                  ? 'bg-white dark:bg-slate-900 border-brand-500/40 shadow-sm shadow-brand-500/5'
                  : 'bg-white/80 dark:bg-slate-900/70 border-slate-200/80 dark:border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  {skill.name}
                  {skill.featured && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                      Core
                    </span>
                  )}
                </span>
                {skill.level && (
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    {skill.level}
                  </span>
                )}
              </div>
              {skill.description && (
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              )}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
