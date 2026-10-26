import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Locale } from '../types';
import { ChevronDown, Check, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const languages: { code: Locale; shortCode: string; label: string; flag: string }[] = [
  { code: 'ka', shortCode: 'KA', label: 'ქართული', flag: '🇬🇪' },
  { code: 'en', shortCode: 'EN', label: 'English', flag: '🇺🇸' },
  { code: 'ru', shortCode: 'RU', label: 'Русский', flag: '🌐' },
];

interface LanguageSwitcherProps {
  isMobile?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isMobile = false }) => {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside, { passive: true });
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelectLanguage = (code: Locale) => {
    setLocale(code);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={`relative ${isMobile ? 'w-full' : 'inline-block'}`}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select language"
        className={`flex items-center justify-between gap-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-500/40 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 shadow-sm ${
          isMobile
            ? 'w-full min-h-[44px] px-3.5 py-2.5 text-sm font-semibold'
            : 'px-3 py-2 text-xs font-semibold'
        }`}
      >
        <span className="flex items-center gap-2">
          <Globe className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 shrink-0" />
          <span className="text-sm leading-none" aria-hidden="true">
            {activeLanguage.flag}
          </span>
          <span className="tracking-wide font-bold">{activeLanguage.shortCode}</span>
          {isMobile && (
            <span className="text-slate-500 dark:text-slate-400 font-medium">
              ({activeLanguage.label})
            </span>
          )}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-500 dark:text-slate-400 transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180 text-brand-600 dark:text-brand-400' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="listbox"
            aria-label="Language options"
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={`z-[60] mt-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-900/10 dark:shadow-black/40 p-1.5 backdrop-blur-xl ${
              isMobile ? 'w-full relative' : 'absolute right-0 min-w-[160px]'
            }`}
          >
            {languages.map((lang) => {
              const isActive = locale === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectLanguage(lang.code);
                  }}
                  className={`w-full flex items-center justify-between gap-2.5 rounded-lg transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                    isMobile ? 'px-3.5 py-2.5 text-sm min-h-[44px]' : 'px-3 py-2 text-xs'
                  } ${
                    isActive
                      ? 'bg-brand-500/10 dark:bg-brand-500/15 text-brand-600 dark:text-brand-400 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 font-medium'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-base leading-none" aria-hidden="true">
                      {lang.flag}
                    </span>
                    <span>{lang.label}</span>
                    <span className="text-[11px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-semibold">
                      {lang.shortCode}
                    </span>
                  </span>
                  {isActive && <Check className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
