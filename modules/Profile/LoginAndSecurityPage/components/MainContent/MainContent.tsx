import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { NavAccountSettings } from 'shared/view/elements';

import { Login } from '../Login/Login';
import * as S from './MainContent.styles';

const MainContent = memo(() => {
  const { t } = useTranslation('AccountSettingsPage');

  return (
    <S.MainContent>
      <NavAccountSettings title={t('Login & security')} />
      <S.Title>{t('Login & security')}</S.Title>
      <Login />
    </S.MainContent>
  );
});

export { MainContent };
