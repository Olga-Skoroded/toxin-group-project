import { Review as ReviewProps } from 'api/entities/types';
import Review from 'components/Review/Review';
import getNounInDeclension from 'shared/helpers/getNounInDeclension';

import * as S from './Reviews.style';

type Props = {
  reviews: ReviewProps[];
};

const NUMBER_OF_REVIEWS = 2;

const declensions = ['отзыв', 'отзыва', 'отзывов'];

const Reviews = ({ reviews }: Props): JSX.Element => (
  <S.Reviews>
    <S.Title>Отзывы посетителей номера</S.Title>
    <S.Counter>
      {reviews.length} {getNounInDeclension(reviews.length, declensions)}
    </S.Counter>
    <S.List>
      {reviews
        .sort((a, b) => b.likesCount - a.likesCount)
        .slice(0, NUMBER_OF_REVIEWS)
        .map((review) => (
          <S.Item key={review.userName}>
            <Review {...review} />
          </S.Item>
        ))}
    </S.List>
  </S.Reviews>
);

export default Reviews;
