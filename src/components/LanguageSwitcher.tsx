import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Locale } from '../types';
import { motion } from 'framer-motion';

const languages: { code: Locale; label: string; flag: string }[] = [
  { code: 'ka', label: 'ქარ', flag: '🇬🇪' },
  { code: 'en', label: 'EN', flag: '🇺🇸' },
  { code: 'ru', label: 'РУ', flag: '🌐' },
];

export const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language Switcher"
      className="inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 shadow-inner"
    >
      {languages.map((lang) => {
        const isActive = locale === lang.code;
        return (
          <button
            key={lang.code}
            onClick={() => setLocale(lang.code)}
            aria-pressed={isActive}
            className={`relative px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors duration-200 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
              isActive
                ? 'text-slate-900 dark:text-white font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="active-lang-pill"
                className="absolute inset-0 bg-white dark:bg-slate-700 rounded-lg shadow-sm"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
            <span className="relative z-10 text-[13px]">{lang.flag}</span>
            <span className="relative z-10 tracking-wide">{lang.label}</span>
          </button>
        );
      })}
    </div>
  );
};
