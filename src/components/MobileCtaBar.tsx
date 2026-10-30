import React, { useEffect, useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { Briefcase, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../config/site';

/**
 * Phone-only bottom bar that keeps the two hiring actions in reach once the hero CTAs have scrolled away.
 * It hides again over the contact section, where the same actions are already on screen.
 */
export const MobileCtaBar: React.FC = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero-title');
    const contact = document.getElementById('contact');
    if (!hero || !contact) return;

    let pastHero = false;
    let atContact = false;
    const update = () => setVisible(pastHero && !atContact);

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) pastHero = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        if (entry.target === contact) atContact = entry.isIntersecting;
      }
      update();
    });
    observer.observe(hero);
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(t.contact.briefSubject)}&body=${encodeURIComponent(t.contact.briefBody)}`;

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 400, damping: 36 }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200/80 bg-white/90 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md sm:hidden dark:border-slate-800/80 dark:bg-slate-950/90"
        >
          <div className="flex gap-2">
            <a
              href={siteConfig.upworkProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-emerald-600 to-teal-600 px-4 py-3 text-sm font-bold text-white shadow-md shadow-emerald-600/20"
            >
              <Briefcase className="h-4 w-4" aria-hidden="true" />
              <span>{t.nav.hireUpwork}</span>
            </a>
            <a
              href={mailto}
              aria-label={t.contact.briefCta}
              className="flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};
