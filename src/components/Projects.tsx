import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ProjectCaseStudy } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import { ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';
import { GithubIcon } from './icons';
import { SectionHeading } from './ui/SectionHeading';

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative bg-slate-100/50 py-20 md:py-28 dark:bg-slate-900/40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="projects-title"
          eyebrow={t.projects.eyebrow}
          icon={Sparkles}
          tone="emerald"
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {t.projects.items.map((project, index) => (
            <m.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xs transition-all duration-300 hover:border-brand-500/40 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="p-6 sm:p-8">
                {/* Category & Year Header */}
                <div className="mb-4 flex items-center justify-between gap-2">
                  <span className="rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-xs font-bold text-brand-600 dark:text-brand-400">
                    {project.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">{project.year}</span>
                </div>

                {/* Title & Tagline */}
                <h3 className="mb-2 text-2xl font-black tracking-tight text-slate-900 transition-colors group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
                  {project.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.tagline}</p>

                {/* Measurable Impact Metrics Strip */}
                <div className="mb-6 grid grid-cols-3 gap-2 rounded-2xl border border-slate-100 bg-slate-50 p-3.5 text-center dark:border-slate-800 dark:bg-slate-800/60">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <span className="block text-sm font-black text-slate-900 sm:text-base dark:text-white">
                        {metric.value}
                      </span>
                      <span className="block truncate text-[10px] font-medium text-slate-500 sm:text-[11px] dark:text-slate-400">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions Bar */}
              <div className="flex items-center justify-between gap-3 border-t border-slate-100 bg-slate-50/70 p-6 dark:border-slate-800/80 dark:bg-slate-900/90">
                <button
                  type="button"
                  aria-haspopup="dialog"
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1 text-xs font-bold text-brand-600 transition-colors hover:text-brand-700 sm:text-sm dark:text-brand-400 dark:hover:text-brand-300"
                >
                  <span>{t.projects.viewCaseStudy}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-slate-200 bg-white p-2 text-slate-600 shadow-xs transition-colors hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:text-white"
                      aria-label={`${project.title} — ${t.projects.sourceCode}`}
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition-colors hover:bg-brand-600 dark:bg-white dark:text-slate-900 dark:hover:bg-brand-400"
                    >
                      <span>{t.projects.liveDemo}</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </m.article>
          ))}
        </div>
      </div>

      {/* Case Study Modal Window */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal key={selectedProject.id} project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};
