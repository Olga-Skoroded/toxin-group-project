import { useRouter } from 'next/router';
import queryString from 'query-string';
import { useEffect, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { OrderForm } from 'features/Rooms/OrderForm/OrderForm';
import { getRoomDetails as getRoomDetailsRequest } from 'redux/Apartment/redux/actions';
import { preloadAuthData } from 'redux/Auth/redux/actions';
import { requestCurrentRoomInfo } from 'redux/Booking/redux/actions';
import { AppState } from 'redux/store.model';
import { Apartment } from 'shared/model';
import { Benefits, BulletList, Preloader } from 'shared/view/elements';

import { Comments } from '../Comments/Comments';
import { UserRating } from '../UserRating/UserRating';
import { roomImagesPreview, benefitsData, rulesData } from './MainContent.fixture';
import * as S from './MainContent.styles';

type StateProps = {
  isAuthSuccess: boolean;
  userEmail: string;
  isPending: boolean;
  roomDetails: Apartment;
};

const mapState = (state: AppState): StateProps => ({
  isAuthSuccess: state.auth.isAuthSuccess,
  userEmail: state.auth.userEmail,
  isPending: state.apartment.isGetRoomDetailsPending,
  roomDetails: state.apartment.roomDetails,
});

const mapDispatch = {
  checkAuthBeforePageLoaded: preloadAuthData,
  getRoomInfo: requestCurrentRoomInfo,
  startGetRoomDetails: getRoomDetailsRequest,
};

type Props = StateProps & typeof mapDispatch;

const MainContent = memo(
  ({
    isAuthSuccess,
    userEmail,
    isPending,
    roomDetails,
    getRoomInfo,
    checkAuthBeforePageLoaded,
    startGetRoomDetails,
  }: Props) => {
    const { t } = useTranslation(['RoomDetailsPage', 'Buttons']);
    const router = useRouter();
    const roomParams = queryString.parse(router.asPath.split('?')[1]);

    useEffect(() => {
      checkAuthBeforePageLoaded();

      if (typeof isAuthSuccess === 'boolean') {
        if (!isAuthSuccess) router.push('/');
      }
    });

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

    useEffect(() => {
      getRoomInfo(passedFormProps.roomNumber, userEmail);
    }, [getRoomInfo, passedFormProps.roomNumber, userEmail]);

    const getRoomDetails = useCallback(
      (id: number) => {
        startGetRoomDetails(id);
      },
      [startGetRoomDetails],
    );

    useEffect(() => {
      getRoomDetails(passedFormProps.roomNumber);
    }, [getRoomDetails, passedFormProps.roomNumber]);

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
            {isPending && (
              <S.Loading>
                <Preloader label={t('Loading Room Information ...')} />
              </S.Loading>
            )}
            {roomDetails ? (
              <OrderForm
                overcrowdingPrice={roomDetails.overcrowdingPrice}
                breakfastPricePerGuest={roomDetails.breakfastPricePerGuest}
                roomNumber={passedFormProps.roomNumber}
                roomType={roomDetails.class}
                roomPrice={roomDetails.price}
                initialProps={passedFormProps}
                userEmail={userEmail}
                isAuthSuccess
                isСancellationForm
              />
            ) : (
              !isPending && (
                <S.Loading>{t('Sorry, the room information could not be loaded')}</S.Loading>
              )
            )}
          </S.OrderFormWrapper>
        </S.Details>
      </S.MainContent>
    );
  },
);

const ConnectedComponent = connect(mapState, mapDispatch)(MainContent);

export { ConnectedComponent as MainContent };
