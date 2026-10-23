import { Language } from '@magic-translate/vue';

export const languages = {
  [Language.EN]: 'English',
  [Language.ZH]: 'Chinese',
  [Language.DE]: 'German',
} as const;

export type AvailableLanguage = keyof typeof languages;
