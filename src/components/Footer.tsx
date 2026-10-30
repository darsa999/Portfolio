import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/site';
import { GithubIcon, LinkedinIcon } from './icons';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-12 transition-colors dark:border-slate-800/80 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Brand Info */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="mb-1 flex items-center gap-2">
              <span className="font-extrabold tracking-tight text-slate-900 dark:text-white">{t.meta.name}</span>
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
          <div className="text-center text-xs text-slate-500 dark:text-slate-400">{t.footer.builtWith}</div>

          {/* Social Links & Back to top button */}
          <div className="flex items-center gap-2.5">
            <a
              href={siteConfig.upworkProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.common.upworkProfile}
              className="inline-flex items-center gap-1.5 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-2.5 text-xs font-bold text-emerald-600 transition-all hover:bg-emerald-500/20 dark:text-emerald-400"
            >
              <span>Upwork</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.common.linkedinProfile}
              className="rounded-2xl border border-slate-200 bg-slate-100 p-3 text-slate-600 shadow-xs transition-all hover:-translate-y-0.5 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-blue-400"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.common.githubProfile}
              className="rounded-2xl border border-slate-200 bg-slate-100 p-3 text-slate-600 shadow-xs transition-all hover:-translate-y-0.5 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label={t.footer.backToTop}
              className="rounded-2xl border border-slate-200 bg-slate-100 p-3 text-slate-600 shadow-xs transition-all hover:-translate-y-0.5 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
