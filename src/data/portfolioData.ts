import { Locale, LocaleContent } from '../types';
import { ka } from './locales/ka';
import { en } from './locales/en';
import { ru } from './locales/ru';

export const localesData: Record<Locale, LocaleContent> = {
  ka,
  en,
  ru,
};

export const defaultLocale: Locale = 'ka';
