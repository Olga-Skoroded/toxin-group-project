import { ActionPayload } from 'redux/action.model';
import { Lang } from 'services/i18next/types';

type LanguageState = {
  currentLanguage: string | null;
};

type ChangeLanguageRequest = ActionPayload<'CHANGE_LANGUAGE_REQUEST', Lang>;
type ChangeLanguageSuccess = ActionPayload<'CHANGE_LANGUAGE_SUCCESS', Lang>;

type LanguageActions = ChangeLanguageRequest | ChangeLanguageSuccess;

export type { LanguageState, ChangeLanguageRequest, ChangeLanguageSuccess, LanguageActions };
