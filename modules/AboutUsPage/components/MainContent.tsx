import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { YMaps, Placemark, ZoomControl } from 'react-yandex-maps';

import * as S from './MainContent.styles';

const MainContent = memo(() => {
  const { t, i18n } = useTranslation('AboutUsPage');

  const mapLanguage = {
    ru: 'ru-RU',
    en: 'en-US',
  };

  return (
    <S.MainContent>
      <S.Navigation>
        <S.Title>{`${t('How to find us')}:`}</S.Title>
        <S.Address>
          {t('Krasnoarmeyskaya Street, 147, Tomsk, Tomsk Oblast, Russia, 634045')}
        </S.Address>
        <YMaps query={{ lang: mapLanguage[i18n.language] }}>
          <S.Map defaultState={{ center: [56.45315, 84.97564], zoom: 18 }}>
            <Placemark geometry={[56.45315, 84.97564]} />
            <ZoomControl />
          </S.Map>
        </YMaps>
      </S.Navigation>
    </S.MainContent>
  );
});

export { MainContent };
