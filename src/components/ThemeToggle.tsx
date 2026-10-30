import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { m } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface ThemeToggleProps {
  isMobile?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isMobile = false }) => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        toggleTheme();
      }}
      aria-label={isDark ? t.theme.switchToLight : t.theme.switchToDark}
      className={`rounded-xl border border-slate-200 bg-slate-100 text-slate-700 shadow-xs transition-all duration-200 hover:border-brand-500/40 hover:text-brand-600 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-slate-700/60 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:text-brand-400 ${
        isMobile
          ? 'flex min-h-[44px] w-full items-center justify-between px-3.5 py-2.5 text-sm font-semibold'
          : 'inline-flex items-center justify-center p-2'
      }`}
    >
      {isMobile ? (
        <>
          <span className="flex items-center gap-2.5">
            <m.span
              key={theme}
              initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 45, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              {isDark ? <Moon className="h-4 w-4 text-indigo-400" /> : <Sun className="h-4 w-4 text-amber-500" />}
            </m.span>
            <span className="text-slate-700 dark:text-slate-200">{isDark ? t.theme.dark : t.theme.light}</span>
          </span>
          <span
            aria-hidden="true"
            className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${
              isDark
                ? 'border border-indigo-500/20 bg-indigo-500/15 text-indigo-400'
                : 'border border-amber-500/20 bg-amber-500/15 text-amber-600'
            }`}
          >
            {isDark ? t.theme.switchToLight : t.theme.switchToDark}
          </span>
        </>
      ) : (
        <m.div
          key={theme}
          initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 45, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {isDark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-indigo-600" />}
        </m.div>
      )}
    </button>
  );
};
