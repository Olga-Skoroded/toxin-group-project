import { useRouter } from 'next/router';
import { memo, useCallback, useEffect, useState } from 'react';
import { Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { completeFoodOrder, foodOrder } from 'modules/Services/redux/Food/redux/actions';
import { loadBookedHistoryRooms } from 'redux/Booking/redux/actions';
import { AppState } from 'redux/store.model';
import { BookedRoomsHistory } from 'services/api/entities/model';
import { User } from 'services/api/Firebase/modules/Authentication';
import { PopUpNotification } from 'shared/view/components';
import { Select, Preloader } from 'shared/view/elements';

import * as S from './FoodOrderForm.styles';

type StateProps = {
  user: User;
  isBookedRoomsPending: boolean;
  bookedRooms: BookedRoomsHistory;
  isFoodOrderPending: boolean;
  isFoodOrderSuccess: boolean;
  isFoodOrderCompleted: boolean;
  statusText: string;
};

const mapState = (state: AppState): StateProps => ({
  user: state.auth.user,
  isBookedRoomsPending: state.booking.isPending,
  bookedRooms: state.booking.bookedRooms,
  isFoodOrderPending: state.food.isFoodOrderPending,
  isFoodOrderSuccess: state.food.isFoodOrderSuccess,
  isFoodOrderCompleted: state.food.isFoodOrderCompleted,
  statusText: state.food.foodOrderStatusText,
});

const mapDispatch = {
  startGetBookedRooms: loadBookedHistoryRooms,
  startFoodOrder: foodOrder,
  stopFoodOrder: completeFoodOrder,
};

type Props = StateProps & typeof mapDispatch;

const FoodOrderForm = memo(
  ({
    user,
    bookedRooms,
    isBookedRoomsPending,
    isFoodOrderPending,
    isFoodOrderSuccess,
    isFoodOrderCompleted,
    statusText,
    startFoodOrder,
    stopFoodOrder,
    startGetBookedRooms,
  }: Props) => {
    const [rooms, setRooms] = useState<{ value: number; text: string }[]>(null);
    const [isVisibleConfirm, setVisibleConfirm] = useState(false);
    const router = useRouter();
    const foodName = typeof window !== 'undefined' ? sessionStorage.getItem('food') : null;
    const { t } = useTranslation('FoodOrderPage');

    const handleFormSubmit = ({ room }: { room: number }) => {
      startFoodOrder({ user: user.displayName, room, food: foodName });
    };

    const handleFoodOrderButtonClick = () => {
      setVisibleConfirm(true);
    };

    const handleConfirmFoodOrderButtonClick = () => {
      setTimeout(() => setVisibleConfirm(false));
    };

    const handleCancelFoodOrderButtonClick = () => {
      setVisibleConfirm(false);
    };

    const handleConfirmButtonClick = () => {
      stopFoodOrder();
      if (isFoodOrderSuccess) router.push('/services/menu');
    };

    const getBookedRooms = useCallback(() => {
      if (user) startGetBookedRooms(user.email);
    }, [startGetBookedRooms, user]);

    useEffect(() => {
      getBookedRooms();
    }, [getBookedRooms]);

    useEffect(() => {
      if (bookedRooms) {
        const roomsList = [];
        bookedRooms.current.forEach(({ room, bookedData }) => {
          if (bookedData.from.getTime() < Date.now()) {
            roomsList.push({
              value: room.id,
              text: `${t('Room')} №${room.id}`,
            });
          }
        });
        setRooms(roomsList);
      }
    }, [bookedRooms, t]);

    return (
      <Form
        onSubmit={handleFormSubmit}
        render={({ handleSubmit }) => (
          <S.FoodOrderForm>
            {isBookedRoomsPending && (
              <S.Loading>
                <Preloader label={t('Loading order data...')} />
              </S.Loading>
            )}
            {rooms && !!rooms.length && !isBookedRoomsPending ? (
              <>
                <S.Title>{t(`Food:${foodName}`)}</S.Title>
                <form onSubmit={handleSubmit}>
                  <S.RoomSelect>
                    <Select
                      values={rooms}
                      name="room"
                      label={t('Choose a room')}
                      placeholder={
                        !rooms.length ? t('You have no rooms booked') : t('Please make a choice')
                      }
                    />
                  </S.RoomSelect>
                  <S.FoodOrderButton
                    type="button"
                    disabled={isFoodOrderPending || !rooms.length}
                    onClick={handleFoodOrderButtonClick}
                  >
                    {t('Order')}
                  </S.FoodOrderButton>
                  {isVisibleConfirm && (
                    <PopUpNotification
                      message={t('Are you sure you want to order room service?')}
                      typeConfirmButton="submit"
                      withCancelButton
                      onConfirmButtonClick={handleConfirmFoodOrderButtonClick}
                      onCancelButtonClick={handleCancelFoodOrderButtonClick}
                    />
                  )}
                  {isFoodOrderCompleted && (
                    <PopUpNotification
                      message={t(statusText)}
                      onConfirmButtonClick={handleConfirmButtonClick}
                    />
                  )}
                </form>
              </>
            ) : (
              !isBookedRoomsPending && (
                <S.Loading>
                  {rooms && !rooms.length
                    ? t(
                        'You do not have any rooms booked or you have not checked into any of them yet',
                      )
                    : t('Failed to load order data')}
                </S.Loading>
              )
            )}
          </S.FoodOrderForm>
        )}
      />
    );
  },
);

const ConnectedComponent = connect(mapState, mapDispatch)(FoodOrderForm);
export { ConnectedComponent as FoodOrderForm };
