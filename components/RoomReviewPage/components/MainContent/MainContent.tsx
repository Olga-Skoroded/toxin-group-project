import { useRouter } from 'next/router';
import queryString from 'query-string';
import { useEffect } from 'react';
import { Form } from 'react-final-form';
import { connect } from 'react-redux';

import { Review as ReviewProps } from 'api/entities/types';
import Benefits from 'components/Benefits/Benefits';
import BulletList from 'components/BulletList/BulletList';
import Button from 'components/Button/Button';
import OrderForm from 'components/OrderForm/OrderForm';
import Preloader from 'components/Preloader/Preloader';
import Review from 'components/Review/Review';
import { Props as RoomProps } from 'components/Room/Room.types';
import StarRating from 'components/StarRating/StarRating';
import Textarea from 'components/TextArea/TextArea';
import {
  loadBookedHistoryRooms,
  requestCurrentRoomInfo,
  setRoomReview,
} from 'redux/Booking/redux/actions';
import { BookedHistoryList } from 'redux/Booking/types';
import { AppState } from 'redux/store.types';

import { roomImagesPreview, benefitsData, rulesData } from './MainContent.data';
import * as S from './MainContent.styles';

type StateProps = {
  currentRoom: RoomProps;
  photoURL: string;
  displayedName: string;
  bookedRooms: BookedHistoryList;
  isLoadingData: boolean;
  userEmail: string;
};

const mapState = (state: AppState): StateProps => ({
  currentRoom: state.booking.currentRoom,
  photoURL: state.auth.photoURL,
  displayedName: state.auth.displayName,
  bookedRooms: state.booking.bookedRooms,
  isLoadingData: state.booking.isPending,
  userEmail: state.auth.userEmail,
});

const mapDispatch = {
  getRoomInfo: requestCurrentRoomInfo,
  getBookedRooms: loadBookedHistoryRooms,
  setComment: setRoomReview,
};

type Props = StateProps & typeof mapDispatch;

const handleRatingSubmit = (values) => console.log(values);

const sortDescByLikes = (a: ReviewProps, b: ReviewProps) => b.likesCount - a.likesCount;

const MainContent: React.FC<Props> = ({
  currentRoom,
  photoURL,
  displayedName,
  bookedRooms,
  userEmail,
  getRoomInfo,
  getBookedRooms,
  setComment,
}: Props) => {
  const router = useRouter();
  // to do уже есть метод для фильтрации, надо вынести куда-то
  const roomParams = queryString.parse(router.asPath.split('?')[1]);

  useEffect(() => {
    getRoomInfo(Number(roomParams.room));
  }, [getRoomInfo, roomParams.room]);

  const reviews = currentRoom && [...currentRoom.reviews];

  const getMostPopularComments = (count: number) =>
    reviews && reviews.sort(sortDescByLikes).slice(0, count);

  const currentUserReview =
    (reviews && reviews.filter((review) => review.userEmail === userEmail)) || [];

  const popularComments = getMostPopularComments(2);

  const handleReviewSubmit = (values) => {
    setComment({
      roomId: roomParams.room,
      commentData: {
        date: new Date(),
        text: values['room-review'],
        likesCount: 0,
        avatarUrl: photoURL,
        userName: displayedName,
        userEmail,
      },
    });

    getRoomInfo(Number(roomParams.room));
  };

  const passedFormProps = {
    roomNumber: +roomParams.room,
    booked: {
      from: +roomParams.from,
      to: +roomParams.to,
    },
    guests: {
      adults: 1,
      children: 1,
      babies: 1,
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
              <S.Title>Оцените Ваши впечатления от номера:</S.Title>
              <S.StarRatingWrapper>
                <StarRating disabled={false} name="room-rating" />
              </S.StarRatingWrapper>
              <Button type="submit">Применить</Button>
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
              popularComments.map((review) => (
                <Review key={`${review.date}${review.userName}`} {...{ ...review }} />
              ))
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
                  <Button>Добавить</Button>
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
};

export default connect(mapState, mapDispatch)(MainContent);
