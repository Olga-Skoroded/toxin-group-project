import { useRouter } from 'next/router';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { MainLayout } from 'features/shared/MainLayout/MainLayout';
import { preloadAuthData } from 'redux/Auth/redux/actions';
import { loadBookedHistoryRooms } from 'redux/Booking/redux/actions';
import { AppState } from 'redux/store.model';
import { BookedRoomsHistory } from 'services/api/entities/model';
import { Preloader } from 'shared/view/elements';

import { RoomsList } from './components/RoomsList/RoomsList';
import * as S from './SelectedRoomsPage.style';

type StateProps = {
  isAuthSuccess: boolean;
  bookedRooms: BookedRoomsHistory;
  isLoadingData: boolean;
  userEmail: string;
};

const mapState = (state: AppState): StateProps => ({
  isAuthSuccess: state.auth.isAuthSuccess,
  bookedRooms: state.booking.bookedRooms,
  isLoadingData: state.booking.isPending,
  userEmail: state.auth.userEmail,
});

const mapDispatch = {
  checkAuthBeforePageLoaded: preloadAuthData,
  getBookedRooms: loadBookedHistoryRooms,
};

type Props = StateProps & typeof mapDispatch;

const SelectedRoomsPage = memo(
  ({
    isAuthSuccess,
    bookedRooms,
    userEmail,
    isLoadingData,
    checkAuthBeforePageLoaded,
    getBookedRooms,
  }: Props) => {
    const router = useRouter();

    useEffect(() => {
      checkAuthBeforePageLoaded();

      if (typeof isAuthSuccess === 'boolean') {
        if (!isAuthSuccess) router.push('/');
      }
    });

    useEffect(() => {
      getBookedRooms(userEmail);
    }, [getBookedRooms, userEmail]);

    const { t } = useTranslation('SelectedRoomsPage');

    return (
      <MainLayout>
        <S.Container>
          <S.Title>{t('Your booked rooms')}:</S.Title>
          <S.RoomsListContainer>
            {isLoadingData && <Preloader />}
            {bookedRooms &&
              (bookedRooms.current.length ? (
                <RoomsList rooms={bookedRooms.current} />
              ) : (
                <S.Text>{t('No rooms booked')}</S.Text>
              ))}
          </S.RoomsListContainer>
          <S.SubTitle>{t('History of booked rooms')}:</S.SubTitle>
          <S.RoomsListContainer>
            {isLoadingData && <Preloader />}
            {bookedRooms &&
              (bookedRooms.history.length ? (
                <RoomsList rooms={bookedRooms.history} />
              ) : (
                <S.Text>{t('Empty... Perhaps this will be your first booking?')}</S.Text>
              ))}
          </S.RoomsListContainer>
        </S.Container>
      </MainLayout>
    );
  },
);

const ConnectedComponent = connect(mapState, mapDispatch)(SelectedRoomsPage);
export { ConnectedComponent as SelectedRoomsPage };
