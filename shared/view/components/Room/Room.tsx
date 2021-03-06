import Link from 'next/link';
import { memo } from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';

import { StarRating } from 'shared/view/elements';
import { formatNumber } from 'utils/number.utils';

import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { RoomProps } from './Room.model';
import * as S from './Room.styles';

type Props = WithTranslation & RoomProps;

const Room = memo(
  ({
    price,
    number,
    reviews,
    imagePaths,
    roomType,
    measure = 'Per day',
    reviewMeasure = 'Reviews',
    currency,
    bookedData,
    rating = 5,
    t,
  }: Props) => {
    const dateFrom = bookedData && bookedData.from.getTime();
    const link =
      dateFrom < Date.now()
        ? `/profile/room-review?room=${number}&from=${dateFrom}&to=${bookedData.to.getTime()}`
        : `/rooms/room-details?room=${number}`;

    return (
      <S.Room>
        <ImageGallery images={imagePaths} />
        <Link href={link} passHref>
          <S.Info>
            <S.Container>
              <S.RoomNumber>
                <S.NumberSign>№</S.NumberSign>
                {number}
                {roomType && <S.RoomType>{roomType}</S.RoomType>}
              </S.RoomNumber>
              <S.Price>
                {formatNumber(price, currency)}
                <S.Measure>{t(`WordForms:${measure}`)}</S.Measure>
              </S.Price>
            </S.Container>
            <S.RatingContainer>
              <StarRating rating={rating} />
              <S.Reviews>
                <S.ReviewCount>{reviews.length}</S.ReviewCount>
                <S.ReviewMeasure>{t(`WordForms:${reviewMeasure}`)}</S.ReviewMeasure>
              </S.Reviews>
            </S.RatingContainer>
          </S.Info>
        </Link>
      </S.Room>
    );
  },
);

const TranslatedComponent = withTranslation('WordForms')(Room);
export { TranslatedComponent as Room };
