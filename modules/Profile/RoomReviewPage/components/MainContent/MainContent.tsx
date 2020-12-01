import { useRouter } from 'next/router';
import queryString from 'query-string';
import { useEffect, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { OrderForm } from 'features/Rooms/OrderForm/OrderForm';
import { requestCurrentRoomInfo } from 'redux/Booking/redux/actions';
import { AppState } from 'redux/store.model';
import { Benefits } from 'shared/view/elements/Benefits/Benefits';
import { BulletList } from 'shared/view/elements/BulletList/BulletList';

import { Comments } from '../Comments/Comments';
import { UserRating } from '../UserRating/UserRating';
import { roomImagesPreview, benefitsData, rulesData } from './MainContent.fixture';
import * as S from './MainContent.styles';

type StateProps = {
  userEmail: string;
};

const mapState = (state: AppState): StateProps => ({
  userEmail: state.auth.userEmail,
});

const mapDispatch = {
  getRoomInfo: requestCurrentRoomInfo,
};

type Props = StateProps & typeof mapDispatch;

const MainContent: React.FC<Props> = memo(({ userEmail, getRoomInfo }: Props) => {
  const { t } = useTranslation(['RoomDetailsPage', 'Buttons']);
  const router = useRouter();
  // to do уже есть метод для фильтрации, надо вынести куда-то
  const roomParams = queryString.parse(router.asPath.split('?')[1]);

  useEffect(() => {
    getRoomInfo(Number(roomParams.room), userEmail);
  }, [getRoomInfo, roomParams.room, userEmail]);

  const passedFormProps = {
    roomNumber: Number(roomParams.room),
    booked: {
      from: Number(roomParams.from),
      to: Number(roomParams.to),
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
          <S.Title>{t('Room Details')}</S.Title>
          <Benefits items={benefitsData} />
        </S.Benefits>
        <UserRating room={roomParams.room} />
        <S.BulletList>
          <S.Title>{t('Shared:Rules')}</S.Title>
          <BulletList items={rulesData} />
        </S.BulletList>
        <S.CancellationTerms>
          <S.Title>{t('Shared:Cancel')}</S.Title>
          <S.CancellationTermsText>
            {t(
              'RoomDetailsPage:Free cancellation within 48 hours. Thereafter, if canceled no later than 5 days in advance, you will receive a full refund before arrival minus the service fee.',
            )}
          </S.CancellationTermsText>
        </S.CancellationTerms>
        <S.CommentsWrapper>
          <Comments roomId={roomParams.room} />
        </S.CommentsWrapper>
        <S.OrderFormWrapper>
          <OrderForm
            overcrowdingPrice={700}
            breakfastPricePerGuest={300}
            roomNumber={passedFormProps.roomNumber}
            roomType="люкс"
            roomPrice={9990}
            initialProps={passedFormProps}
            userEmail={userEmail}
            isAuthSuccess
            isСancellationForm
          />
        </S.OrderFormWrapper>
      </S.Details>
    </S.MainContent>
  );
});

export default connect(mapState, mapDispatch)(MainContent);
