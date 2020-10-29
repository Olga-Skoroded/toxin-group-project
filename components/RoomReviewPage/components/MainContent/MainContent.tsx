import { useEffect, useState } from 'react';
import { Form } from 'react-final-form';
import { connect } from 'react-redux';

import Benefits from 'components/Benefits/Benefits';
import BulletList from 'components/BulletList/BulletList';
import Button from 'components/Button/Button';
import Comment from 'components/Comment/Comment';
import { Props as CommentProps } from 'components/Comment/Comment.types';
import OrderForm from 'components/OrderForm/OrderForm';
import Preloader from 'components/Preloader/Preloader';
import { Props as RoomProps } from 'components/Room/Room.types';
import StarRating from 'components/StarRating/StarRating';
import Textarea from 'components/Textarea/Textarea';
import { requestCurrentRoomInfo } from 'redux/Booking/redux/actions';
import { AppState } from 'redux/store.types';

import { roomImagesPreview, benefitsData, rulesData } from './MainContent.data';
import * as S from './MainContent.styles';

type StateProps = {
  currentRoom: RoomProps;
  photoURL: string;
  displayedName: string;
};

const mapState = (state: AppState): StateProps => ({
  currentRoom: state.bookingReducer.currentRoom,
  photoURL: state.authReducer.photoURL,
  displayedName: state.authReducer.displayName,
});

const mapDispatch = {
  getRoomInfo: requestCurrentRoomInfo,
};

type Props = StateProps & typeof mapDispatch;

const handleRatingSubmit = (values) => console.log(values);

const sortDescByLikes = (a: CommentProps, b: CommentProps) => b.likesCount - a.likesCount;

const MainContent: React.FC<Props> = ({
  currentRoom,
  photoURL,
  displayedName,
  getRoomInfo,
}: Props) => {
  const [comment, setComment] = useState<CommentProps>(null);

  const mockRoomNumber = 95;

  const getMostPopularComments = (count: number) =>
    currentRoom && currentRoom.reviews.sort(sortDescByLikes).slice(0, count);

  const popularComments = getMostPopularComments(2);

  useEffect(() => {
    getRoomInfo(mockRoomNumber);
  }, []);

  const handleReviewSubmit = (values) => {
    setComment({
      date: new Date(),
      text: values['room-review'],
      likesCount: 0,
      avatarUrl: photoURL,
      userName: displayedName,
    });
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
                <Comment
                  key={`${review.date}${review.userName}`}
                  {...{ ...review, date: new Date(review.date) }}
                />
              ))
            ) : (
              <Preloader label="Загружаем популярные отзывы посетителей..." />
            )}
            {comment && <Comment {...comment} avatarUrl={photoURL} />}
          </S.ReviewsContainer>
          <Form
            onSubmit={handleReviewSubmit}
            render={({ handleSubmit }) => (
              <S.ReviewsWrapper onSubmit={handleSubmit}>
                <S.Title>Оставьте свой отзыв об этом номере:</S.Title>
                <Textarea name="room-review" required />
                <S.ButtonWrapper>
                  <Button>{comment ? 'Изменить' : 'Добавить'}</Button>
                </S.ButtonWrapper>
              </S.ReviewsWrapper>
            )}
          />
        </S.CommentsWrapper>
        <S.OrderFormWrapper>
          <OrderForm
            overcrowdingPrice={700}
            breakfastPricePerGuest={300}
            roomNumber={888}
            roomType="люкс"
            roomPrice={9990}
            disabled
          />
        </S.OrderFormWrapper>
      </S.Details>
    </S.MainContent>
  );
};

export default connect(mapState, mapDispatch)(MainContent);
