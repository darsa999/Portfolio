import type { LucideIcon } from 'lucide-react';

const tones = {
  brand: 'bg-brand-500/10 border-brand-500/20 text-brand-600 dark:text-brand-400',
  emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400',
  cyan: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400',
  indigo: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-400',
  amber: 'bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400',
} as const;

interface SectionHeadingProps {
  /** id of the <h2>, referenced by the parent section's aria-labelledby */
  id: string;
  eyebrow: string;
  icon: LucideIcon;
  tone: keyof typeof tones;
  title: string;
  subtitle: string;
  className?: string;
}

export const SectionHeading = ({
  id,
  eyebrow,
  icon: IconComponent,
  tone,
  title,
  subtitle,
  className = 'mb-16',
}: SectionHeadingProps) => (
  <div className={`mx-auto max-w-3xl text-center ${className}`}>
    <div
      className={`mb-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold tracking-wider uppercase ${tones[tone]}`}
    >
      <IconComponent className="h-3.5 w-3.5" aria-hidden="true" />
      <span>{eyebrow}</span>
    </div>
    <h2
      id={id}
      className="mb-3 text-3xl font-black tracking-tight text-balance text-slate-900 sm:text-4xl dark:text-white"
    >
      {title}
    </h2>
    <p className="text-base text-pretty text-slate-600 dark:text-slate-400">{subtitle}</p>
  </div>
);
