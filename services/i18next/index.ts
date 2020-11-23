import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { FALLBACK_LANGUAGE } from './constants';
import { ru, en } from './locales/index';

const resources = {
  ru: { ...ru },
  en: { ...en },
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: FALLBACK_LANGUAGE,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: false,
      bindI18n: 'languageChanged',
      bindI18nStore: '',
    },
  });

export { i18next };
