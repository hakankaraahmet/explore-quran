import type { Locale } from '../i18n.config'

const dictionaries = {
  en: () => import('../dictionaries/en.json').then(module => module.default),
  tr: () => import('../dictionaries/tr.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => {
  try {
    return await dictionaries[locale]();
  } catch (error) {
    console.error(`Error loading dictionary for locale ${locale}:`, error);
    // Handle the error or throw it further depending on your use case.
    throw error;
  }
};
