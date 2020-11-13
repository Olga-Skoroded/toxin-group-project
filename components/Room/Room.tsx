import StarRating from 'components/StarRating/StarRating';
import formatNumber from 'shared/helpers/formatNumber';

import ImageGallery from './components/ImageGallery/ImageGallery';
import * as S from './Room.styles';
import { Props } from './Room.types';

const getDate = (date: string) => {
  const [day, month, year] = date.split('.');
  const resultDate = new Date();
  resultDate.setDate(+day);
  resultDate.setMonth(+month - 1);
  resultDate.setFullYear(+year);
  return resultDate.getTime();
};

const Room: React.FC<Props> = ({
  price,
  number,
  reviews,
  imagePaths,
  roomType,
  currency,
  bookedData,
  measure = 'в сутки',
  reviewMeasure = 'отзывов',
  rating = 5,
}: Props) => {
  return (
    <S.Room>
      <ImageGallery imagePaths={imagePaths} />
      <S.Info>
        <S.Container>
          <S.RoomNumber>
            <S.RoomLink
              href={
                bookedData
                  ? `/room-review?room=${number}&from=${getDate(bookedData.from)}&to=${getDate(
                      bookedData.to,
                    )}`
                  : `/room-details?room=${number}`
              }
            >
              <S.NumberSign>№</S.NumberSign>
              {number}
            </S.RoomLink>
            {roomType && <S.RoomType>{roomType}</S.RoomType>}
          </S.RoomNumber>
          <S.Price>
            {formatNumber(price, currency)}
            <S.Measure>{measure}</S.Measure>
          </S.Price>
        </S.Container>
        <S.RatingContainer>
          <StarRating rating={rating} />
          <S.Reviews>
            <S.ReviewCount>{reviews.length}</S.ReviewCount>
            <S.ReviewMeasure>{reviewMeasure}</S.ReviewMeasure>
          </S.Reviews>
        </S.RatingContainer>
      </S.Info>
    </S.Room>
  );
};

export default Room;
