import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, ExternalLink, Briefcase } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/site';
import { useActiveSection } from '../hooks/useActiveSection';

const SECTION_IDS = [
  'services',
  'projects',
  'process',
  'about',
  'experience',
  'skills',
  'education',
  'contact',
] as const;

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside, { passive: true });
      document.addEventListener('keydown', handleKeyDown);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  // Same order as the sections appear on the page.
  const navLinks = [
    { id: 'services', label: t.nav.services },
    { id: 'projects', label: t.nav.projects },
    { id: 'about', label: t.nav.about },
    { id: 'experience', label: t.nav.experience },
    { id: 'skills', label: t.nav.skills },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'border-b border-slate-200/80 bg-white/85 py-3 shadow-xs backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/85'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#main"
            className="group flex items-center gap-3 rounded-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            <div
              aria-hidden="true"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-tr from-brand-600 via-indigo-600 to-cyan-500 text-lg font-black text-white shadow-md shadow-brand-500/20 transition-transform group-hover:scale-105"
            >
              MD
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold tracking-tight text-slate-900 transition-colors group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
                  {t.meta.name}
                </span>
                <span className="hidden items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-600 sm:inline-flex dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 motion-safe:animate-pulse" />
                  {t.common.available}
                </span>
              </div>
              <p className="hidden text-xs font-medium text-slate-500 md:block dark:text-slate-400">
                {t.nav.brandTagline}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label={t.nav.mainNavLabel}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors hover:bg-slate-100/70 dark:hover:bg-slate-800/50 ${
                    isActive
                      ? 'text-brand-600 dark:text-brand-400'
                      : 'text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    // layoutId would need the heavier domMax feature set; a scale-in reads just as well.
                    <m.span
                      aria-hidden="true"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-500"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Tools: Desktop Language & Theme Switchers, Upwork CTA & Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Language & Theme Switchers (hidden on mobile < md) */}
            <div className="hidden items-center gap-2 sm:gap-2.5 md:flex">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>

            {/* Upwork Direct CTA Button */}
            <a
              href={siteConfig.upworkProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-xl bg-linear-to-r from-emerald-600 to-teal-600 px-3.5 py-2 text-xs font-semibold text-white shadow-xs shadow-emerald-600/20 transition-all hover:from-emerald-500 hover:to-teal-500 hover:shadow-md hover:shadow-emerald-600/30 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500 sm:inline-flex"
            >
              <Briefcase className="h-3.5 w-3.5" />
              <span>{t.nav.hireUpwork}</span>
              <ExternalLink className="h-3 w-3 opacity-80" />
            </a>

            {/* Mobile Menu Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              className="rounded-xl p-2.5 text-slate-700 transition-colors hover:bg-slate-100 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-500 lg:hidden dark:text-slate-300 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-slate-200 bg-white/95 px-4 pt-3 pb-6 shadow-xl backdrop-blur-xl lg:hidden dark:border-slate-800 dark:bg-slate-950/95"
          >
            <nav className="flex flex-col gap-1.5" aria-label={t.nav.mainNavLabel}>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={activeSection === link.id ? 'location' : undefined}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/80 ${
                    activeSection === link.id
                      ? 'bg-brand-500/5 text-brand-600 dark:text-brand-400'
                      : 'text-slate-700 dark:text-slate-200'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Language & Theme Switchers (< md viewports) */}
              <div className="mt-2 flex flex-col gap-2.5 border-t border-slate-200 pt-3 md:hidden dark:border-slate-800">
                <LanguageSwitcher isMobile />
                <ThemeToggle isMobile />
              </div>

              {/* Mobile Upwork Direct CTA */}
              <div className="mt-2 flex flex-col gap-2 border-t border-slate-200 pt-3 dark:border-slate-800">
                <a
                  href={siteConfig.upworkProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-emerald-600 to-teal-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-600/20"
                >
                  <Briefcase className="h-4 w-4" />
                  <span>{t.nav.hireUpwork}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
};
