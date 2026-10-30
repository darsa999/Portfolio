import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { Locale } from '../types';
import { ChevronDown, Check, Globe } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';

// Emoji flags render as plain letters on Windows, so the short code is the visual marker.
const languages: { code: Locale; shortCode: string; label: string }[] = [
  { code: 'ka', shortCode: 'KA', label: 'ქართული' },
  { code: 'en', shortCode: 'EN', label: 'English' },
  { code: 'ru', shortCode: 'RU', label: 'Русский' },
];

interface LanguageSwitcherProps {
  isMobile?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isMobile = false }) => {
  const { locale, setLocale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = isMobile ? 'language-menu-mobile' : 'language-menu';

  const activeLanguage = languages.find((lang) => lang.code === locale) ?? languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
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
    triggerRef.current?.focus();
  };

  return (
    <div ref={dropdownRef} className={`relative ${isMobile ? 'w-full' : 'inline-block'}`}>
      <button
        ref={triggerRef}
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={`${t.nav.selectLanguage}: ${activeLanguage.label}`}
        className={`flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-100 text-slate-700 shadow-xs transition-all duration-200 hover:border-brand-500/40 hover:text-brand-600 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-slate-700/60 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:text-brand-400 ${
          isMobile ? 'min-h-[44px] w-full px-3.5 py-2.5 text-sm font-semibold' : 'px-3 py-2 text-xs font-semibold'
        }`}
      >
        <span className="flex items-center gap-2">
          <Globe className="h-3.5 w-3.5 shrink-0 text-slate-500 dark:text-slate-400" aria-hidden="true" />
          <span className="font-bold tracking-wide">{activeLanguage.shortCode}</span>
          {isMobile && <span className="font-medium text-slate-500 dark:text-slate-400">({activeLanguage.label})</span>}
        </span>
        <ChevronDown
          aria-hidden="true"
          className={`h-3.5 w-3.5 shrink-0 text-slate-500 transition-transform duration-200 dark:text-slate-400 ${
            isOpen ? 'rotate-180 text-brand-600 dark:text-brand-400' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <m.ul
            id={menuId}
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={`z-[60] mt-2 rounded-xl border border-slate-200/90 bg-white p-1.5 shadow-xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/40 ${
              isMobile ? 'relative w-full' : 'absolute right-0 min-w-[160px] origin-top-right'
            }`}
          >
            {languages.map((lang) => {
              const isActive = locale === lang.code;
              return (
                <li key={lang.code}>
                  <button
                    type="button"
                    lang={lang.code}
                    aria-current={isActive ? 'true' : undefined}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectLanguage(lang.code);
                    }}
                    className={`flex w-full items-center justify-between gap-2.5 rounded-lg transition-colors duration-150 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-500 ${
                      isMobile ? 'min-h-[44px] px-3.5 py-2.5 text-sm' : 'px-3 py-2 text-xs'
                    } ${
                      isActive
                        ? 'bg-brand-500/10 font-bold text-brand-600 dark:bg-brand-500/15 dark:text-brand-400'
                        : 'font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/80'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="rounded-sm bg-slate-100 px-1.5 py-0.5 text-[11px] font-semibold tracking-wider text-slate-500 uppercase dark:bg-slate-800 dark:text-slate-400">
                        {lang.shortCode}
                      </span>
                      <span>{lang.label}</span>
                    </span>
                    {isActive && (
                      <Check className="h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                    )}
                  </button>
                </li>
              );
            })}
          </m.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
