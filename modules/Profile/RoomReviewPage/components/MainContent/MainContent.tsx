import { useRouter } from 'next/router';
import queryString from 'query-string';
import { useEffect, memo } from 'react';
import { Form } from 'react-final-form';
import { connect } from 'react-redux';

import { OrderForm } from 'features/Rooms/OrderForm/OrderForm';
import { BookedHistoryList } from 'redux/Booking/model';
import {
  loadBookedHistoryRooms,
  requestCurrentRoomInfo,
  setRoomReview,
  setRoomRating,
  finishRoomRating,
} from 'redux/Booking/redux/actions';
import { AppState } from 'redux/store.model';
import { Review as ReviewProps } from 'services/api/entities/model';
import { Review } from 'shared/view/components/Review/Review';
import { RoomProps } from 'shared/view/components/Room/Room.model';
import { Benefits } from 'shared/view/elements/Benefits/Benefits';
import { BulletList } from 'shared/view/elements/BulletList/BulletList';
import { Button } from 'shared/view/elements/Button/Button';
import { Preloader } from 'shared/view/elements/Preloader/Preloader';
import { StarRating } from 'shared/view/elements/StarRating/StarRating';
import { Textarea } from 'shared/view/elements/TextArea/TextArea';

import { roomImagesPreview, benefitsData, rulesData } from './MainContent.data';
import * as S from './MainContent.styles';

type StateProps = {
  currentRoom: RoomProps;
  photoURL: string;
  displayedName: string;
  bookedRooms: BookedHistoryList;
  isLoadingData: boolean;
  userEmail: string;
  userRating: number;
  isRatingProcess: boolean;
  ratingStatus: string;
};

const mapState = (state: AppState): StateProps => ({
  currentRoom: state.booking.currentRoom,
  photoURL: state.auth.photoURL,
  displayedName: state.auth.displayName,
  bookedRooms: state.booking.bookedRooms,
  isLoadingData: state.booking.isPending,
  isRatingProcess: state.booking.isRatingProcess,
  userRating: state.booking.userRating,
  ratingStatus: state.booking.ratingStatus,
  userEmail: state.auth.userEmail,
});

const mapDispatch = {
  getRoomInfo: requestCurrentRoomInfo,
  getBookedRooms: loadBookedHistoryRooms,
  setComment: setRoomReview,
  setRating: setRoomRating,
  finishRatingProcess: finishRoomRating,
};

type Props = StateProps & typeof mapDispatch;

const sortDescByLikes = (a: ReviewProps, b: ReviewProps) => b.likesCount - a.likesCount;

const MainContent: React.FC<Props> = memo(
  ({
    currentRoom,
    photoURL,
    displayedName,
    bookedRooms,
    isLoadingData,
    userRating,
    isRatingProcess,
    ratingStatus,
    userEmail,
    getRoomInfo,
    getBookedRooms,
    setComment,
    setRating,
    finishRatingProcess,
  }: Props) => {
    const router = useRouter();
    // to do уже есть метод для фильтрации, надо вынести куда-то
    const roomParams = queryString.parse(router.asPath.split('?')[1]);

    const handleRatingSubmit = (values) => {
      setRating({ userEmail, roomId: Number(roomParams.room), rating: values['room-rating'] });
      setTimeout(finishRatingProcess, 1500);
    };

    useEffect(() => {
      getRoomInfo(Number(roomParams.room), userEmail);
    }, [getRoomInfo, roomParams.room, userEmail]);

    const reviews = currentRoom && [...currentRoom.reviews];

    const getMostPopularComments = (count: number) =>
      reviews && reviews.sort(sortDescByLikes).slice(0, count);

    const currentUserReview =
      (reviews &&
        reviews
          .filter((review) => review.userEmail === userEmail)
          .map((review) => {
            const reviewDate = review.date as Date;
            return {
              ...review,
              date: reviewDate,
            };
          })) ||
      [];

    const popularComments = getMostPopularComments(2);

    const handleReviewSubmit = (values) => {
      setComment({
        roomId: Number(roomParams.room),
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

    const passedFormProps = {
      roomNumber: Number(roomParams.room),
      booked: {
        from: Number(roomParams.from),
        to: Number(roomParams.to),
      },
      guests: {
        Adults: 1,
        Children: 1,
        Babies: 1,
      },
    };

    return (
      <S.MainContent>
        <S.RoomImages>
          {roomImagesPreview.map(({ src, alt }) => (
            <img key={src} src={src} alt={alt} />
          ))}
        </S.RoomImages>
        <S.Details>
          <S.Benefits>
            <S.Title>Сведения о номере</S.Title>
            <Benefits items={benefitsData} />
          </S.Benefits>
          <Form
            onSubmit={handleRatingSubmit}
            render={({ handleSubmit }) => (
              <S.RatingWrapper onSubmit={handleSubmit}>
                {!isLoadingData && currentRoom ? (
                  <>
                    <S.Title>Оцените Ваши впечатления от номера:</S.Title>
                    {isRatingProcess && ratingStatus ? (
                      <>{ratingStatus}</>
                    ) : (
                      <>
                        <S.StarRatingWrapper>
                          <StarRating
                            rating={userRating || 0}
                            disabled={false}
                            name="room-rating"
                          />
                        </S.StarRatingWrapper>
                        <Button type="submit">
                          {userRating ? 'Изменить оценку' : 'Применить'}
                        </Button>
                      </>
                    )}
                  </>
                ) : (
                  <Preloader label="Загрузка вашей оценки" />
                )}
              </S.RatingWrapper>
            )}
          />

          <S.BulletList>
            <S.Title>Правила</S.Title>
            <BulletList items={rulesData} />
          </S.BulletList>
          <S.CancellationTerms>
            <S.Title>Отмена</S.Title>
            <S.CancellationTermsText>
              Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до
              прибытия вы получите полный возврат за вычетом сбора за услуги.
            </S.CancellationTermsText>
          </S.CancellationTerms>

          <S.CommentsWrapper>
            <S.ReviewsContainer>
              <S.Title>Отзывы посетителей:</S.Title>
              {popularComments ? (
                popularComments.map((review) => {
                  const reviewDate = review.date as Date;
                  const reviewData = {
                    ...review,
                    date: reviewDate,
                  };
                  return (
                    <Review
                      key={`${reviewData.date}${reviewData.userName}`}
                      {...{ ...reviewData }}
                    />
                  );
                })
              ) : (
                <Preloader label="Загружаем популярные отзывы посетителей..." />
              )}
              {!!currentUserReview.length && (
                <>
                  <S.Title>Ваш отзыв:</S.Title>
                  <Review {...currentUserReview[0]} />
                </>
              )}
            </S.ReviewsContainer>
            <Form
              onSubmit={handleReviewSubmit}
              render={({ handleSubmit }) => (
                <S.ReviewsWrapper onSubmit={handleSubmit}>
                  <S.Title>Оставьте свой отзыв об этом номере:</S.Title>
                  <Textarea name="room-review" required />
                  <S.ButtonWrapper>
                    <Button>{currentUserReview.length ? 'Изменить' : 'Добавить'}</Button>
                  </S.ButtonWrapper>
                </S.ReviewsWrapper>
              )}
            />
          </S.CommentsWrapper>
          <S.OrderFormWrapper>
            <OrderForm
              overcrowdingPrice={700}
              breakfastPricePerGuest={300}
              roomNumber={passedFormProps.roomNumber}
              roomType="люкс"
              roomPrice={9990}
              initialProps={passedFormProps}
              disabled
            />
          </S.OrderFormWrapper>
        </S.Details>
      </S.MainContent>
    );
  },
);

export default connect(mapState, mapDispatch)(MainContent);
