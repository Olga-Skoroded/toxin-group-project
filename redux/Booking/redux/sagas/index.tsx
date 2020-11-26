import { SagaIterator } from 'redux-saga';
import { put, call, PutEffect } from 'redux-saga/effects';

import { takeLatestAction, takeLeadingAction } from 'redux/action.model';
import { Dependencies } from 'redux/api.model';
import {
  CurrentRoomRequest,
  RoomsRequest,
  BookedHistoryList,
  SetRoomReview,
  SetRoomRating,
  FinishRoomRating,
  RoomData,
} from 'redux/Booking/model';
import { BookingData, Apartment, RoomRatingData } from 'services/api/entities/model';

import { LoadBookedHistory, Booking, CancelBooking } from '../../model';
import {
  successRoomRequest,
  startRatingRoom,
  setNewRoomRating,
  responseRatingProcess,
  pendingStatusUpdate,
  setRooms,
  setFailedStatus,
  updateBookedHistory,
  bookingSuccess,
  bookingFailed,
  cancelBookingSuccess,
  cancelBookingFailed,
} from '../actions';

function* loadRooms({ api }: Dependencies, { payload }: RoomsRequest) {
  try {
    yield put(pendingStatusUpdate(true));

    const rooms: Apartment[] = yield call(api.booking.filterRooms, payload);

    yield put(setRooms(rooms));
  } catch (error) {
    yield put(setFailedStatus(error));
  } finally {
    yield put(pendingStatusUpdate(false));
  }
}

function* loadCurrentRoom(
  { api }: Dependencies,
  action: CurrentRoomRequest,
): Generator | Generator<PutEffect<CurrentRoomRequest>, void, never> {
  try {
    yield put(pendingStatusUpdate(true));
    const { id, email } = action.payload;
    const currentRoom: RoomData = yield call(api.apartments.load, id);
    if (email) {
      const reviewsData: RoomRatingData = yield call(
        api.apartments.loadUserReviews,
        email,
        Number(currentRoom.id),
      );

      yield put(successRoomRequest(Object.assign(currentRoom, reviewsData)));
    } else throw new Error('Auth failed!');
  } catch (error) {
    yield put(setFailedStatus(error));
  } finally {
    yield put(pendingStatusUpdate(false));
  }
}
function* loadRoomsHistory({ api }: Dependencies, { payload }: LoadBookedHistory) {
  const bookedHistoryList: BookedHistoryList = yield call(api.booking.getBookedHistory, payload);

  yield put(updateBookedHistory(bookedHistoryList));
}

function* bookRoom({ api }: Dependencies, { payload }: Booking) {
  const { apartmentId, booked, guests, user } = payload;
  try {
    if (!booked || !booked.to || !booked.from) throw new Error('Please select a booking date');
    if (!guests || (!guests.adults && !guests.children && !guests.babies)) {
      throw new Error('Please indicate the number of guests');
    }

    const data: BookingData = {
      apartmentId,
      from: booked.from,
      to: booked.to,
      reservationBy: user,
    };

    yield call(api.booking.setBookedByUser, data);

    yield put(bookingSuccess());
  } catch ({ message }) {
    yield put(bookingFailed(message));
  }
}

function* cancelBooking({ api }: Dependencies, { payload }: CancelBooking) {
  const { apartmentId, booked, user } = payload;
  try {
    if (!apartmentId || booked || user) throw new Error('Failed to cancel booking');

    const data = {
      apartmentId,
      from: booked.from,
      to: booked.to,
      reservationBy: user,
    };

    yield call(api.booking.cancelBooking, data);
    yield put(cancelBookingSuccess());
  } catch ({ message }) {
    yield put(cancelBookingFailed(message));
  }
}

function* setReview({ api }: Dependencies, data: SetRoomReview) {
  const result: RoomData = yield call(api.apartments.setRoomReview, data.payload);

  yield put(successRoomRequest(result));
}

function* setRoomRating({ api }: Dependencies, data: SetRoomRating) {
  yield put(startRatingRoom());

  try {
    yield call(api.apartments.setRoomRating, data.payload);

    yield put(setNewRoomRating(data.payload.rating));

    yield put(responseRatingProcess('Спасибо, ваше мнение учтено!'));
  } catch (error) {
    yield put(responseRatingProcess('При изменении вашей оценки произошла ошибка!'));
  }
}

function* finishRoomRating() {
  yield put({
    type: 'FINISH_RATING_ROOM',
  });
}

function* rootSaga(deps: Dependencies): SagaIterator {
  yield takeLeadingAction<RoomsRequest['type']>('LOAD_ROOMS', loadRooms, deps);
  yield takeLatestAction<LoadBookedHistory['type']>('LOAD_BOOKED_HISTORY', loadRoomsHistory, deps);
  yield takeLatestAction<SetRoomReview['type']>('SET_ROOM_REVIEW', setReview, deps);
  yield takeLatestAction<SetRoomRating['type']>('SET_ROOM_RATING', setRoomRating, deps);
  yield takeLatestAction<CurrentRoomRequest['type']>('LOAD_ROOM_INFO', loadCurrentRoom, deps);
  yield takeLatestAction<FinishRoomRating['type']>('FINISH_ROOM_RATING', finishRoomRating);
  yield takeLeadingAction<Booking['type']>('BOOKING', bookRoom, deps);
  yield takeLeadingAction<CancelBooking['type']>('CANCEL_BOOKING', cancelBooking, deps);
}

export { rootSaga };
