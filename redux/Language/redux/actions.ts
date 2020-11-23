import { Lang } from 'services/i18next/types';

import { ChangeLanguageRequest, ChangeLanguageSuccess } from '../model';

const changeLanguage = (newLanguage: Lang): ChangeLanguageRequest => ({
  type: 'CHANGE_LANGUAGE_REQUEST',
  payload: newLanguage,
});

const changeLanguageSuccess = (lang: Lang): ChangeLanguageSuccess => ({
  type: 'CHANGE_LANGUAGE_SUCCESS',
  payload: lang,
});

export { changeLanguage, changeLanguageSuccess };
