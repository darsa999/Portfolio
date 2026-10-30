import type { Locale, LocaleContent } from '../types';
import { ka } from './locales/ka';

export const locales: readonly Locale[] = ['ka', 'en', 'ru'];
export const defaultLocale: Locale = 'ka';

export const isLocale = (value: unknown): value is Locale => locales.includes(value as Locale);

// Georgian ships in the main bundle; the other dictionaries are split into their own chunks
// and fetched only when a visitor actually picks (or links to) that language.
const loaders: Record<Exclude<Locale, 'ka'>, () => Promise<LocaleContent>> = {
  en: () => import('./locales/en').then((m) => m.en),
  ru: () => import('./locales/ru').then((m) => m.ru),
};

const cache = new Map<Locale, LocaleContent>([['ka', ka]]);

export const loadLocale = async (locale: Locale): Promise<LocaleContent> => {
  const cached = cache.get(locale);
  if (cached) return cached;
  const content = await loaders[locale as Exclude<Locale, 'ka'>]();
  cache.set(locale, content);
  return content;
};
