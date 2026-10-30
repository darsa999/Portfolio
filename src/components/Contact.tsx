import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, Copy, Check, ExternalLink, MessageSquare, Send, Sparkles, ShieldCheck } from 'lucide-react';
import { m } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { siteConfig } from '../config/site';
import { GithubIcon, LinkedinIcon } from './icons';

type CopyState = 'idle' | 'copied' | 'failed';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [copyState, setCopyState] = useState<CopyState>('idle');
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const handleCopyEmail = async () => {
    try {
      // Throws on insecure origins, denied permission, or browsers without the async Clipboard API.
      await navigator.clipboard.writeText(siteConfig.email);
      setCopyState('copied');
    } catch {
      setCopyState('failed');
    }
    window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setCopyState('idle'), 2500);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative bg-slate-100/50 py-20 md:py-28 dark:bg-slate-900/40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="contact-title"
          eyebrow={t.contact.eyebrow}
          icon={MessageSquare}
          tone="emerald"
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        {/* Live Availability Notice */}
        <div className="mx-auto mb-12 max-w-3xl rounded-2xl border border-emerald-500/30 bg-white p-4 text-center shadow-xs dark:bg-slate-900">
          <p className="text-xs font-semibold text-slate-800 sm:text-sm dark:text-slate-200">
            {t.contact.availabilityText}
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Main Upwork Hire Card */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-emerald-500/40 bg-linear-to-br from-emerald-950 via-slate-900 to-slate-950 p-8 text-white shadow-2xl sm:p-10 lg:col-span-7">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-0 right-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"
            />

            <div className="relative z-10 mb-8">
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/20 px-3 py-1 text-xs font-bold tracking-wider text-emerald-300 uppercase">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{t.contact.primaryBadge}</span>
              </span>
              <h3 className="mb-3 text-2xl font-black text-white sm:text-3xl">{t.contact.hireDirectly}</h3>
              <p className="mb-6 text-sm leading-relaxed text-slate-300 sm:text-base">{t.contact.sendBrief}</p>

              <ul className="space-y-2.5 text-xs text-slate-300 sm:text-sm">
                {t.contact.upworkBullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-4 border-t border-white/10 pt-6 sm:flex-row">
              <a
                href={siteConfig.upworkProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-emerald-400 px-8 py-4 text-sm font-bold text-slate-950 shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 hover:bg-emerald-300 active:scale-100 sm:w-auto"
              >
                <span>{t.contact.upworkCtaText}</span>
                <ExternalLink className="h-4 w-4" />
              </a>

              <span className="text-xs text-slate-400">{t.contact.responseTime}</span>
            </div>
          </div>

          {/* Direct Communication Channels Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xs sm:p-10 lg:col-span-5 dark:border-slate-800 dark:bg-slate-900">
            <div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">{t.contact.directContact}</h3>
              <p className="mb-6 text-xs text-slate-500 sm:text-sm dark:text-slate-400">{t.contact.orDirectMessage}</p>

              {/* Opens the visitor's mail app with a short brief template, so first messages arrive with scope, timeline and budget */}
              <a
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(t.contact.briefSubject)}&body=${encodeURIComponent(t.contact.briefBody)}`}
                className="mb-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-600 dark:bg-white dark:text-slate-900 dark:hover:bg-brand-400"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                <span>{t.contact.briefCta}</span>
              </a>

              <div className="space-y-4">
                {/* Email Item with Copy Button */}
                <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200/60 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/60">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                        {t.contact.emailLabel}
                      </span>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="block truncate text-xs font-bold text-slate-900 transition-colors hover:text-brand-600 sm:text-sm dark:text-white"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    aria-label={t.contact.copyEmail}
                    className="shrink-0 rounded-xl p-2 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-900 dark:hover:bg-slate-700 dark:hover:text-white"
                    title={t.contact.copyEmail}
                  >
                    {copyState === 'copied' ? (
                      <Check className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                    ) : (
                      <Copy className="h-4 w-4" aria-hidden="true" />
                    )}
                  </button>
                </div>

                {/* Phone / WhatsApp Item */}
                <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200/60 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/60">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                        {t.contact.phoneLabel}
                      </span>
                      <a
                        href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                        className="text-xs font-bold text-slate-900 transition-colors hover:text-emerald-600 sm:text-sm dark:text-white"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links Row */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={siteConfig.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-2xl border border-slate-200/60 bg-slate-50 p-3.5 text-xs font-bold text-slate-700 transition-colors hover:border-slate-400 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-300"
                  >
                    <GithubIcon className="h-4 w-4" />
                    <span>{siteConfig.githubHandle}</span>
                  </a>

                  <a
                    href={siteConfig.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-2xl border border-slate-200/60 bg-slate-50 p-3.5 text-xs font-bold text-slate-700 transition-colors hover:border-slate-400 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-300"
                  >
                    <LinkedinIcon className="h-4 w-4 text-blue-500" />
                    <span>{t.contact.linkedinLabel}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Always mounted so screen readers announce the result of the copy action */}
            <div role="status" aria-live="polite">
              {copyState !== 'idle' && (
                <m.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 rounded-xl border p-2 text-center text-xs font-bold ${
                    copyState === 'copied'
                      ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                      : 'border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-400'
                  }`}
                >
                  {copyState === 'copied' ? t.contact.copySuccess : t.contact.copyFailed}
                </m.p>
              )}
            </div>

            <div className="mt-6 border-t border-slate-100 pt-4 text-center dark:border-slate-800">
              <span className="text-[11px] text-slate-500 dark:text-slate-400">{t.contact.locationNote}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
