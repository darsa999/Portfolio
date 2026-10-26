import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp, Github, Linkedin, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-extrabold text-slate-900 dark:text-white tracking-tight">
                {t.meta.name}
              </span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                {t.footer.topRatedBadge}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} {t.meta.name}. {t.footer.rights}
            </p>
          </div>

          {/* Tech Built Notice */}
          <div className="text-xs text-slate-500 dark:text-slate-400 text-center">
            {t.footer.builtWith}
          </div>

          {/* Social Links & Back to top button */}
          <div className="flex items-center gap-2.5">
            <a
              href={t.meta.upworkProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Upwork Profile"
              className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/20 text-xs font-bold transition-all"
            >
              <span>Upwork</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={t.meta.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:-translate-y-0.5"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={t.meta.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:-translate-y-0.5"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:-translate-y-0.5"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
