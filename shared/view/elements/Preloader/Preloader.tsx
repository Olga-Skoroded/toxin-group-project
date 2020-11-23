import { memo } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import ClipLoader from 'react-spinners/ClipLoader';

import * as S from './Preloader.styles';

type Props = WithTranslation & {
  label?: string;
};

const Preloader = memo(({ label = 'Loading rooms ...', t }: Props) => (
  <S.Container>
    <S.Label>{t(`RoomFilter:${label}`)}</S.Label>
    <ClipLoader />
  </S.Container>
));

const TranslatedComponent = withTranslation('Benefits')(Preloader);
export { TranslatedComponent as Preloader };
