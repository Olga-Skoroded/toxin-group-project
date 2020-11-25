import { SagaIterator } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import { takeLatestAction, takeLeadingAction } from 'redux/action.model';
import { Dependencies } from 'redux/api.model';
import { Apartment, BookingData } from 'services/api/entities/model';

import {
  RoomsRequest,
  BookedHistoryList,
  LoadBookedHistory,
  Booking,
  CancelBooking,
} from '../../model';
import {
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

function* rootSaga(deps: Dependencies): SagaIterator {
  yield takeLeadingAction<RoomsRequest['type']>('LOAD_ROOMS', loadRooms, deps);
  yield takeLatestAction<LoadBookedHistory['type']>('LOAD_BOOKED_HISTORY', loadRoomsHistory, deps);
  yield takeLeadingAction<Booking['type']>('BOOKING', bookRoom, deps);
  yield takeLeadingAction<CancelBooking['type']>('CANCEL_BOOKING', cancelBooking, deps);
}

export { rootSaga };
