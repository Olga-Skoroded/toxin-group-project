import { useRouter } from 'next/router';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import Benefits from 'components/Benefits/Benefits';
import BulletList from 'components/BulletList/BulletList';
import OrderForm from 'components/OrderForm/OrderForm';
import Preloader from 'components/Preloader/Preloader';
import Reviews from 'components/Reviews/Reviews';
import RoomImpression from 'components/RoomImpression/RoomImpression';
import { getRoomDetails as getRoomDetailsRequest } from 'redux/Apartment/redux/actions';
import { preloadAuthData } from 'redux/Auth/redux/actions';
import { bookRoom } from 'redux/Booking/redux/actions';
import { AppState } from 'redux/store.types';
import { Apartment } from 'services/api/entities/types';

import { roomImagesPreview, benefitsData, rulesData } from './MainContent.data';
import * as S from './MainContent.styles';

type StateProps = {
  isPending: boolean;
  roomDetails: Apartment;
  isAuthSuccess: boolean;
  userEmail: string;
};

const mapState = (state: AppState): StateProps => ({
  isPending: state.apartment.isGetRoomDetailsPending,
  roomDetails: state.apartment.roomDetails,
  isAuthSuccess: state.auth.isAuthSuccess,
  userEmail: state.auth.userEmail,
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
    startGetRoomDetails,
    checkAuthBeforePageLoaded,
    confirmBookedRoom,
  }: Props) => {
    const { t } = useTranslation(['RoomDetailsPage', 'Shared']);
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
            <Preloader label={t('RoomDetailsPage:Loading Room Information ...')} />
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
                <S.Title>{t('RoomDetailsPage:Room details')}</S.Title>
                <Benefits items={benefitsData} />
              </S.Benefits>
              <S.RoomImpressionWrapper>
                <RoomImpression
                  title={t('RoomDetailsPage:Impressions of the room')}
                  numberOfRatings={roomDetails.numberOfRatings}
                />
              </S.RoomImpressionWrapper>
              <S.ReviewsWrapper>
                <Reviews reviews={roomDetails.reviews} />
              </S.ReviewsWrapper>
              <S.BulletList>
                <S.Title>{t('Shared:Rules')}</S.Title>
                <BulletList items={rulesData} />
              </S.BulletList>
              <S.CancellationTerms>
                <S.Title>{t('Shared:Cancel')}</S.Title>
                <S.CancellationTermsText>
                  {t(
                    'RoomDetailsPage:Free cancellation within 48 hours. Thereafter, if canceled no later than 5 days in advance. you will receive a full refund before arrival minus the service fee.',
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
          !isPending && (
            <S.Loading>{t('RoomDetailsPage:Failed to load room information')}</S.Loading>
          )
        )}
      </>
    );
  },
);

MainContent.displayName = 'MainContent';

export default connect(mapState, mapDispatch)(MainContent);
