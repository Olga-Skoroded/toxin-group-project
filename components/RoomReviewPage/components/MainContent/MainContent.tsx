import { useState } from 'react';
import { Form } from 'react-final-form';

import Benefits from 'components/Benefits/Benefits';
import BulletList from 'components/BulletList/BulletList';
import Button from 'components/Button/Button';
import Comment from 'components/Comment/Comment';
import { Props as CommentProps } from 'components/Comment/Comment.types';
import OrderForm from 'components/OrderForm/OrderForm';
import StarRating from 'components/StarRating/StarRating';
import Textarea from 'components/Textarea/Textarea';

import { roomImagesPreview, benefitsData, rulesData } from './MainContent.data';
import * as S from './MainContent.styles';

const handleRatingSubmit = (values) => console.log(values);

const MainContent = (): JSX.Element => {
  const [comment, setComment] = useState<CommentProps>(null);

  const handleReviewSubmit = (values) => {
    console.log(values);
    setComment({
      date: new Date(),
      text: values['room-review'],
      likesCount: 0,
      avatarUrl: 'xd',
      userName: 'Anon',
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
            {comment && <Comment key={String(comment.date)} {...comment} />}
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

export default MainContent;
