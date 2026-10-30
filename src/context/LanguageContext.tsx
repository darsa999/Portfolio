import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { Locale, LocaleContent } from '../types';
import { defaultLocale, isLocale, loadLocale } from '../data/portfolioData';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: LocaleContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'portfolio_locale';

/** `?lang=en` (shareable, used by hreflang links) wins over the saved choice. */
export const getInitialLocale = (): Locale => {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (isLocale(fromUrl)) return fromUrl;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLocale(saved)) return saved;
  } catch {
    // Ignore localStorage read errors
  }
  return defaultLocale;
};

const setMetaContent = (selector: string, content: string) => {
  document.querySelector(selector)?.setAttribute('content', content);
};

interface LanguageProviderProps {
  initialLocale: Locale;
  initialContent: LocaleContent;
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ initialLocale, initialContent, children }) => {
  const [state, setState] = useState({ locale: initialLocale, t: initialContent });

  const setLocale = useCallback((newLocale: Locale) => {
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
    } catch {
      // Ignore localStorage write errors
    }
    loadLocale(newLocale)
      .then((t) => setState({ locale: newLocale, t }))
      .catch(() => {
        // A failed chunk fetch (offline, stale deploy) keeps the current language on screen.
      });
  }, []);

  const { locale, t } = state;

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = t.seo.title;
    setMetaContent('meta[name="description"]', t.seo.description);
    setMetaContent('meta[property="og:title"]', t.seo.title);
    setMetaContent('meta[property="og:description"]', t.seo.description);

    // Keep a shared link pointing at the language being viewed, without adding history entries.
    const url = new URL(window.location.href);
    if (locale === defaultLocale) url.searchParams.delete('lang');
    else url.searchParams.set('lang', locale);
    try {
      window.history.replaceState(window.history.state, '', url);
    } catch {
      // Sandboxed frames may refuse history updates; the language still switches.
    }
  }, [locale, t]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <LanguageContext value={value}>{children}</LanguageContext>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
