import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { formatNumber } from 'utils/number.utils';

import * as S from './FoodCard.styles';

type Props = {
  title: string;
  grams: number;
  price: number;
  description: string;
  image: string;
};

const FoodCard = memo(({ title, grams, price, description, image }: Props) => {
  const { t } = useTranslation('Food');

  return (
    <S.FoodCard>
      <S.Header>
        <S.Title>{t(title)}</S.Title>
        <S.Price>{formatNumber(price)}</S.Price>
      </S.Header>
      <S.Grams>{grams}&nbsp;г.</S.Grams>
      <S.Description>{t(description)}</S.Description>
      <S.Image src={image} alt={title} />
    </S.FoodCard>
  );
});

export { FoodCard };
