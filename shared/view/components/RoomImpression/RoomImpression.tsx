import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { getNounInDeclension } from 'shared/helpers/getNounInDeclension';

import { Chart } from './components/Chart/Chart';
import { ratingValues } from './RoomImpression.fixture';
import * as S from './RoomImpression.styles';

type Props = {
  title: string;
  numberOfRatings: {
    excellent: number;
    good: number;
    normal: number;
    bad: number;
  };
};

const RoomImpression = memo(({ title, numberOfRatings }: Props) => {
  const { t } = useTranslation(['WordForms', 'Rating']);
  const declensions = ['Vote', 'VotesSecondary', 'Votes'];
  const ratingsSum = Object.values(numberOfRatings).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  );

  return (
    <S.RoomImpression>
      <S.Title>{title}</S.Title>
      <S.Figure>
        <S.PieChartWrapper>
          <S.ReviewsCounter>
            {ratingsSum}
            <S.ReviewsCounterText>
              {t(getNounInDeclension(ratingsSum, declensions))}
            </S.ReviewsCounterText>
          </S.ReviewsCounter>
          <Chart {...numberOfRatings} />
        </S.PieChartWrapper>
        <S.FigureCaption>
          <S.List>
            {Object.values(ratingValues).map((value) => (
              <S.Item key={value}>{t(`Rating:${value}`)}</S.Item>
            ))}
          </S.List>
        </S.FigureCaption>
      </S.Figure>
    </S.RoomImpression>
  );
});

export { RoomImpression };
