import { useRouter } from 'next/router';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { OrderForm } from 'features/Rooms/OrderForm/OrderForm';
import { getRoomDetails as getRoomDetailsRequest } from 'redux/Apartment/redux/actions';
import { preloadAuthData } from 'redux/Auth/redux/actions';
import { bookRoom } from 'redux/Booking/redux/actions';
import { AppState } from 'redux/store.model';
import { User } from 'services/api/Firebase/modules/Authentication/model';
import { Apartment } from 'shared/model';
import { RoomImpression } from 'shared/view/components';
import { Benefits, BulletList, Preloader } from 'shared/view/elements';

import { Reviews } from '../Reviews/Reviews';
import { roomImagesPreview, benefitsData, rulesData } from './MainContent.fixture';
import * as S from './MainContent.styles';

type StateProps = {
  isPending: boolean;
  roomDetails: Apartment;
  isAuthSuccess: boolean;
  userEmail: string;
  user: User;
};

const mapState = (state: AppState): StateProps => ({
  isPending: state.apartment.isGetRoomDetailsPending,
  roomDetails: state.apartment.roomDetails,
  isAuthSuccess: state.auth.isAuthSuccess,
  userEmail: state.auth.userEmail,
  user: state.auth.user,
});

const mapDispatch = {
  startGetRoomDetails: getRoomDetailsRequest,
  checkAuthBeforePageLoaded: preloadAuthData,
  confirmBookedRoom: bookRoom,
};

type Props = StateProps & typeof mapDispatch;

const MainContent = memo(
  ({
    isPending,
    roomDetails,
    isAuthSuccess,
    userEmail,
    user,
    startGetRoomDetails,
    checkAuthBeforePageLoaded,
    confirmBookedRoom,
  }: Props) => {
    const { t } = useTranslation('RoomDetailsPage');
    const router = useRouter();
    const roomNumber = Number(router.asPath.split('=')[1]);

    const getRoomDetails = useCallback(
      (id: number) => {
        startGetRoomDetails(id);
      },
      [startGetRoomDetails],
    );

    useEffect(() => {
      checkAuthBeforePageLoaded();
      getRoomDetails(roomNumber);
    }, [checkAuthBeforePageLoaded, getRoomDetails, roomNumber]);

    return (
      <>
        {isPending && (
          <S.Loading>
            <Preloader label={t('Loading Room Information ...')} />
          </S.Loading>
        )}
        {roomDetails ? (
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
              <S.RoomImpressionWrapper>
                <RoomImpression
                  title={t('Impressions of the room')}
                  numberOfRatings={roomDetails.numberOfRatings}
                />
              </S.RoomImpressionWrapper>
              <S.ReviewsWrapper>
                <Reviews reviews={roomDetails.reviews} user={user} roomId={roomNumber} />
              </S.ReviewsWrapper>
              <S.BulletList>
                <S.Title>{t('Shared:Rules')}</S.Title>
                <BulletList items={rulesData} />
              </S.BulletList>
              <S.CancellationTerms>
                <S.Title>{t('Shared:Cancel')}</S.Title>
                <S.CancellationTermsText>
                  {t(
                    'Free cancellation within 48 hours. Thereafter, if canceled no later than 5 days in advance. you will receive a full refund before arrival minus the service fee.',
                  )}
                </S.CancellationTermsText>
              </S.CancellationTerms>
              <S.OrderFormWrapper>
                <OrderForm
                  overcrowdingPrice={roomDetails.overcrowdingPrice}
                  breakfastPricePerGuest={roomDetails.breakfastPricePerGuest}
                  roomNumber={roomDetails.id}
                  roomType={roomDetails.class}
                  roomPrice={roomDetails.price}
                  isAuthSuccess={isAuthSuccess}
                  userEmail={userEmail}
                  confirmBookedRoom={confirmBookedRoom}
                />
              </S.OrderFormWrapper>
            </S.Details>
          </S.MainContent>
        ) : (
          !isPending && <S.Loading>{t('Failed to load room information')}</S.Loading>
        )}
      </>
    );
  },
);

const ConnectedComponent = connect(mapState, mapDispatch)(MainContent);
export { ConnectedComponent as MainContent };
