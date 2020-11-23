import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Cards } from '../Cards/Cards';
import * as S from './MainContent.styles';

const MainContent = memo(() => {
  const { t } = useTranslation('AccountSettingsPage');

  return (
    <S.MainContent>
      <S.Title>{t('Account')}</S.Title>
      <Cards />
    </S.MainContent>
  );
});

export { MainContent };
