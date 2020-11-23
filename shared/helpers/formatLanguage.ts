type FormattedLanguage = 'Русский' | 'English' | 'Cannot find language';

const formatLanguage = (language: string): FormattedLanguage => {
  switch (language) {
    case 'ru':
    case 'ru-RU':
      return 'Русский';
    case 'en':
    case 'en-US':
      return 'English';
    default:
      return 'Cannot find language';
  }
};

export { formatLanguage };
