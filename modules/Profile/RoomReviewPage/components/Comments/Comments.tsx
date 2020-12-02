import { memo } from 'react';
import { Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { setRoomReview } from 'redux/Booking/redux/actions';
import { AppState } from 'redux/store.model';
import { ClientRoomProps, Review as ReviewProps } from 'shared/model';
import { Review } from 'shared/view/components/Review/Review';
import { Button } from 'shared/view/elements/Button/Button';
import { Preloader } from 'shared/view/elements/Preloader/Preloader';
import { Textarea } from 'shared/view/elements/TextArea/TextArea';

import * as S from './Comments.styles';

type ReviewValues = {
  'room-review': string;
};

type StateProps = {
  currentRoom: ClientRoomProps;
  userEmail: string;
  photoURL: string;
  displayedName: string;
};

const mapState = (state: AppState): StateProps => ({
  currentRoom: state.booking.currentRoom,
  userEmail: state.auth.userEmail,
  photoURL: state.auth.photoURL,
  displayedName: state.auth.displayName,
});

const mapDispatch = {
  setComment: setRoomReview,
};

type OwnProps = {
  roomId: string;
};

type Props = typeof mapDispatch & ReturnType<typeof mapState> & OwnProps;

const sortDescByLikes = (a: ReviewProps, b: ReviewProps) => b.likesCount - a.likesCount;

const Comments: React.FC<Props> = memo(
  ({ currentRoom, userEmail, roomId, photoURL, displayedName, setComment }: Props): JSX.Element => {
    const { t } = useTranslation(['RoomDetailsPage', 'Buttons']);
    const reviews = currentRoom && [...currentRoom.reviews];

    const getMostPopularComments = (count: number) =>
      reviews && reviews.sort(sortDescByLikes).slice(0, count);

    const currentUserReview =
      (reviews &&
        reviews
          .filter((review) => review.userEmail === userEmail)
          .map((review) => {
            return {
              ...review,
              date: review.date,
            };
          })) ||
      [];

    const popularComments = getMostPopularComments(2);

    const handleReviewSubmit = (values: ReviewValues) => {
      setComment({
        roomId: Number(roomId),
        commentData: {
          date: new Date(),
          text: values['room-review'],
          likesCount: 0,
          avatarUrl: photoURL,
          userName: displayedName,
          userEmail,
        },
      });
    };

    return (
      <>
        <S.ReviewsContainer>
          <S.Title>{t('Visitor reviews')}:</S.Title>
          {popularComments ? (
            popularComments.map((review) => {
              const reviewData = {
                ...review,
                date: review.date,
              };
              return (
                <Review key={`${reviewData.date}${reviewData.userName}`} {...{ ...reviewData }} />
              );
            })
          ) : (
            <Preloader label={t('Loading popular visitor reviews...')} />
          )}
          {!!currentUserReview.length && (
            <>
              <S.Title>{t('Your feedback')}:</S.Title>
              <Review {...currentUserReview[0]} />
            </>
          )}
        </S.ReviewsContainer>
        <Form
          onSubmit={handleReviewSubmit}
          render={({ handleSubmit }) => (
            <S.ReviewsWrapper onSubmit={handleSubmit}>
              <S.Title>{t('Leave your review about this room')}:</S.Title>
              <Textarea name="room-review" required />
              <S.ButtonWrapper>
                <Button>{currentUserReview.length ? t('Buttons:Change') : t('Buttons:Add')}</Button>
              </S.ButtonWrapper>
            </S.ReviewsWrapper>
          )}
        />
      </>
    );
  },
);

const ConnectedComponent = connect(mapState, mapDispatch)(Comments);

export { ConnectedComponent as Comments };
