import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { setReviewLike } from 'redux/Apartment/redux/actions';
import { AppState } from 'redux/store.model';
import { User } from 'services/api/Firebase/modules/Authentication/model';
import { getNounInDeclension } from 'shared/helpers/getNounInDeclension';
import { Review as ReviewProps } from 'shared/model';
import { Review } from 'shared/view/components';

import * as S from './Reviews.style';

type StateProps = {
  isPending: boolean;
};

const mapState = (state: AppState): StateProps => ({
  isPending: state.apartment.isSetReviewLikePending,
});

const mapDispatch = {
  setReviewLikeRequest: setReviewLike,
};

type OwnProps = {
  roomId: string;
  reviews: ReviewProps[];
  user: User;
};

type Props = OwnProps & StateProps & typeof mapDispatch;

const NUMBER_OF_REVIEWS = 2;

const Reviews = memo(({ reviews, user, roomId, setReviewLikeRequest }: Props) => {
  const { t } = useTranslation(['WordForms', 'Reviews']);
  const declensions = [t('Review'), t('ReviewsSecondary'), t('Reviews')];
  const sortedReviews = reviews.slice().sort((a, b) => b.likesCount - a.likesCount);
  const mostPopularReviews = sortedReviews.slice(0, NUMBER_OF_REVIEWS);

  const onLikeButtonClick = (reviewId: string, userId: string) => {
    const currentReviews = JSON.parse(JSON.stringify(reviews));
    const reviewIndex = currentReviews.findIndex((item) => item.id === reviewId);

    const currentReview = { ...reviews[reviewIndex] };
    const isLikeActive = currentReview.likers.includes(userId);

    if (isLikeActive) {
      const index = currentReview.likers.indexOf(userId);
      currentReview.likesCount -= 1;
      currentReview.likers.splice(index, 1);
    } else {
      currentReview.likesCount -= 1;
      currentReview.likers.push(userId);
    }

    currentReviews[reviewIndex] = currentReview;

    setReviewLikeRequest({ id: roomId, reviews: currentReviews });
  };

  return (
    <S.Reviews>
      <S.Title>{t('Reviews:Guest reviews')}</S.Title>
      <S.Counter>
        {reviews.length} {getNounInDeclension(reviews.length, declensions)}
      </S.Counter>
      <S.List>
        {mostPopularReviews.map((review) => (
          <S.Item key={review.userName}>
            <Review
              {...review}
              uid={user ? user.uid : null}
              onLikeButtonClick={onLikeButtonClick}
            />
          </S.Item>
        ))}
      </S.List>
    </S.Reviews>
  );
});

const ConnectedComponent = connect(mapState, mapDispatch)(Reviews);
export { ConnectedComponent as Reviews };
