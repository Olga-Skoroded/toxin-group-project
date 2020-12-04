import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { YMaps, Placemark, ZoomControl } from 'react-yandex-maps';

import * as S from './Map.styles';

type Props = {
  coordinates: {
    center: [number, number];
    placemark?: [number, number];
  };
  zoom?: number;
  zoomControl?: boolean;
};

const Map = memo(({ coordinates, zoom = 15, zoomControl = true }: Props) => {
  const mapLanguage = {
    ru: 'ru-RU',
    en: 'en-US',
  };

  const { i18n } = useTranslation();

  return (
    <YMaps query={{ lang: mapLanguage[i18n.language] }}>
      <S.Map defaultState={{ center: coordinates.center, zoom }}>
        {coordinates.placemark && <Placemark geometry={coordinates.placemark} />}
        {zoomControl && <ZoomControl />}
      </S.Map>
    </YMaps>
  );
});

export { Map };
