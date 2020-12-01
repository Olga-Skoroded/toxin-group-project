import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Map } from 'shared/view/components';

import * as S from './MainContent.styles';

const MainContent = memo(() => {
  const { t } = useTranslation('AboutUsPage');

  return (
    <S.MainContent>
      <S.Navigation>
        <S.Title>{`${t('How to find us')}:`}</S.Title>
        <S.Address>
          {t('Krasnoarmeyskaya Street, 147, Tomsk, Tomsk Oblast, Russia, 634045')}
        </S.Address>
        <Map coordinates={{ center: [56.45315, 84.97564], placemark: [56.45315, 84.97564] }} />
      </S.Navigation>
    </S.MainContent>
  );
});

export { MainContent };
