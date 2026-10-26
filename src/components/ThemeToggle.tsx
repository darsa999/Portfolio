import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  isMobile?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isMobile = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        toggleTheme();
      }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className={`rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-500/40 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 shadow-sm ${
        isMobile
          ? 'w-full min-h-[44px] px-3.5 py-2.5 flex items-center justify-between text-sm font-semibold'
          : 'p-2 inline-flex items-center justify-center'
      }`}
    >
      {isMobile ? (
        <>
          <span className="flex items-center gap-2.5">
            <motion.span
              key={theme}
              initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 45, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              {isDark ? (
                <Moon className="w-4 h-4 text-indigo-400" />
              ) : (
                <Sun className="w-4 h-4 text-amber-500" />
              )}
            </motion.span>
            <span className="text-slate-700 dark:text-slate-200">
              {isDark ? 'Dark Mode' : 'Light Mode'}
            </span>
          </span>
          <span
            className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium ${
              isDark
                ? 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/20'
                : 'bg-amber-500/15 text-amber-600 border border-amber-500/20'
            }`}
          >
            {isDark ? 'Switch to Light' : 'Switch to Dark'}
          </span>
        </>
      ) : (
        <motion.div
          key={theme}
          initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 45, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-indigo-600" />
          )}
        </motion.div>
      )}
    </button>
  );
};
