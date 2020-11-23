import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { NavAccountSettings } from 'shared/view/elements';

import { PersonalInfo } from '../PersonalInfo/PersonalInfo';
import * as S from './MainContent.styles';

const MainContent = memo(() => {
  const { t } = useTranslation('AccountSettingsPage');

  return (
    <S.MainContent>
      <NavAccountSettings title={t('Personal info')} />
      <S.Title>{t('Personal info')}</S.Title>
      <PersonalInfo />
    </S.MainContent>
  );
});

export { MainContent };
