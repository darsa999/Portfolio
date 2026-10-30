import React, { useEffect, useRef } from 'react';
import type { ProjectCaseStudy } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { X, ExternalLink, CheckCircle2, TrendingUp, AlertCircle, Sparkles } from 'lucide-react';
import { m } from 'framer-motion';
import { GithubIcon } from './icons';
import { ProjectPreview } from './ui/ProjectPreview';

interface CaseStudyModalProps {
  project: ProjectCaseStudy;
  onClose: () => void;
}

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** Render inside <AnimatePresence> in the parent so the exit animation can play. */
export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const { t } = useLanguage();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCloseRef.current();
        return;
      }
      // Keep Tab cycling inside the dialog.
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, []);

  const titleId = `case-study-${project.id}-title`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6">
      {/* Backdrop */}
      <m.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs"
      />

      {/* Modal Window */}
      <m.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative z-10 my-auto flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 p-6 sm:p-8 dark:border-slate-800">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-full border border-brand-500/20 bg-brand-500/10 px-2.5 py-1 text-xs font-bold text-brand-600 dark:text-brand-400">
                {project.category}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">{project.year}</span>
            </div>
            <h2 id={titleId} className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              {project.title}
            </h2>
            <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">{project.tagline}</p>
            <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
              {t.projects.roleLabel}: <span className="text-slate-800 dark:text-slate-200">{project.role}</span>
            </p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={t.projects.closeCaseStudy}
            className="shrink-0 rounded-xl bg-slate-100 p-2 text-slate-500 transition-colors hover:text-slate-900 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-500 dark:bg-slate-800 dark:hover:text-white"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="space-y-8 overflow-y-auto p-6 sm:p-8">
          <ProjectPreview
            project={project}
            privateNote={t.projects.privateNote}
            screenshotLabel={t.projects.screenshotLabel}
            sizes="(min-width: 768px) 720px, 100vw"
            className="rounded-2xl border border-slate-200 dark:border-slate-800"
          />

          {/* Metrics Highlight Row */}
          <div className="grid grid-cols-3 gap-3 rounded-2xl border border-slate-200/80 bg-slate-50 p-4 text-center dark:border-slate-800 dark:bg-slate-800/50">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col items-center">
                <span className="text-xl font-black text-brand-600 sm:text-2xl dark:text-brand-400">
                  {metric.value}
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{metric.label}</span>
              </div>
            ))}
          </div>

          {/* The Challenge / Problem */}
          <div>
            <h3 className="mb-2 flex items-center gap-1.5 text-sm font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
              <AlertCircle className="h-4 w-4 text-amber-500" />
              <span>{t.projects.challengeTitle}</span>
            </h3>
            <p className="rounded-2xl border border-amber-500/10 bg-amber-500/5 p-4 text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-300">
              {project.problem}
            </p>
          </div>

          {/* Architectural Solution */}
          <div>
            <h3 className="mb-2 flex items-center gap-1.5 text-sm font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
              <Sparkles className="h-4 w-4 text-brand-500" />
              <span>{t.projects.solutionTitle}</span>
            </h3>
            <p className="rounded-2xl border border-brand-500/10 bg-brand-500/5 p-4 text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-300">
              {project.solution}
            </p>
          </div>

          {/* Contributions List */}
          <div>
            <h3 className="mb-3 flex items-center gap-1.5 text-sm font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
              <TrendingUp className="h-4 w-4 text-emerald-500" />
              <span>{t.projects.contributionsTitle}</span>
            </h3>
            <ul className="space-y-2.5">
              {project.myContribution.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h3 className="mb-3 text-xs font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
              {t.projects.technologiesUsed}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-bold text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div className="flex flex-wrap items-center justify-end gap-3 border-t border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-800/80">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-xs transition-colors hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              <GithubIcon className="h-4 w-4" />
              <span>{t.projects.sourceCode}</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-brand-600 to-indigo-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-brand-500/20 transition-all hover:scale-105 hover:from-brand-500 hover:to-indigo-500"
            >
              <span>{t.projects.liveDemo}</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </m.div>
    </div>
  );
};
