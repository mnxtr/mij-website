import { en } from './en';
import { ja } from './ja';
import { bn } from './bn';
import { Language } from '../contexts/LanguageContext';

export const translations = {
  en,
  ja,
  bn,
};

export function getTranslation(lang: Language) {
  return translations[lang];
}

export type TranslationType = typeof en;
