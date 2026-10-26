import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, Copy, Check, ExternalLink, Github, Linkedin, MessageSquare, Sparkles, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(t.meta.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-100/50 dark:bg-slate-900/40 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get Started</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
            {t.contact.title}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Live Availability Notice */}
        <div className="max-w-3xl mx-auto mb-12 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-500/30 shadow-sm text-center">
          <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
            {t.contact.availabilityText}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Upwork Hire Card */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white border border-emerald-500/40 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Primary Recommendation</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                {t.contact.hireDirectly}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {t.contact.sendBrief}
              </p>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Upwork Escrow Protection ensures funds are only released upon your approval</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Flexible milestone or weekly hourly contracts with full time tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Comprehensive NDA & IP transfer guarantee upon project completion</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={t.meta.upworkProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 active:scale-100"
              >
                <span>{t.contact.upworkCtaText}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <span className="text-xs text-slate-400">
                Typically responds in under 2 hours
              </span>
            </div>
          </div>

          {/* Direct Communication Channels Card */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {t.contact.directContact}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                {t.contact.orDirectMessage}
              </p>

              <div className="space-y-4">
                {/* Email Item with Copy Button */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${t.meta.email}`}
                        className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-brand-600 truncate block transition-colors"
                      >
                        {t.meta.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    aria-label="Copy Email"
                    className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0"
                    title="Copy to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone / WhatsApp Item */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                        Phone / WhatsApp
                      </span>
                      <a
                        href={`tel:${t.meta.phone.replace(/\s+/g, '')}`}
                        className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-600 transition-colors"
                      >
                        {t.meta.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links Row */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={t.meta.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 flex items-center gap-2.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:border-slate-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>github.com/darsa999</span>
                  </a>

                  <a
                    href={t.meta.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 flex items-center gap-2.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:border-slate-400 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-blue-500" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>

              </div>
            </div>

            {copiedEmail && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold text-center"
              >
                {t.contact.copySuccess}
              </motion.div>
            )}

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
              <span className="text-[11px] text-slate-400 dark:text-slate-500">
                Location: Tbilisi, Georgia (UTC+4) · Open to asynchronous & overlapping hours
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
