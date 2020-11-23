import { SagaIterator } from 'redux-saga';
import { put, call, PutEffect } from 'redux-saga/effects';

import { takeLatestAction, takeLeadingAction } from 'redux/action.model';
import { Dependencies } from 'redux/api.model';
import {
  CurrentRoomRequest,
  RoomsRequest,
  LoadBookedHistory,
  BookedHistoryList,
  BookCurrentRoom,
  SetRoomReview,
  SetRoomRating,
  FinishRoomRating,
} from 'redux/Booking/model';
import { Apartment, BookingData } from 'services/api/entities/model';

import { pendingStatusUpdate, setFailedStatus, setRooms, updateBookedHistory } from '../actions';

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
    yield put({
      type: 'ROOMS_REQUEST_PENDING',
      payload: true,
    });
    const { id, email } = action.payload;
    const currentRoom: Apartment[] & { id: number } = yield call(api.apartments.load, id);
    if (email) {
      const reviewsData = yield call(api.apartments.loadUserReviews, email, Number(currentRoom.id));

      yield put({
        type: 'CURRENT_ROOM_REQUEST_SUCCESS',
        payload: Object.assign(currentRoom, reviewsData),
      });
    } else throw new Error('Auth failed!');
  } catch (error) {
    yield put({
      type: 'ROOMS_REQUEST_FAILED',
      payload: error,
    });
  } finally {
    yield put({
      type: 'ROOMS_REQUEST_PENDING',
      payload: false,
    });
  }
}
function* loadRoomsHistory({ api }: Dependencies, { payload }: LoadBookedHistory) {
  const bookedHistoryList: BookedHistoryList = yield call(api.booking.getBookedHistory, payload);

  yield put(updateBookedHistory(bookedHistoryList));
}

function* confirmBookedRoom({ api }: Dependencies, { payload }: BookCurrentRoom) {
  const { apartmentId, booked, user } = payload;
  const data: BookingData = {
    apartmentId,
    from: new Date(booked.from),
    to: new Date(booked.to),
    reservationBy: user,
  };

  yield call(api.booking.setBookedByUser, data);
}

function* setReview({ api }: Dependencies, data: SetRoomReview) {
  const result: Apartment = yield call(api.apartments.setRoomReview, data.payload);

  yield put({
    type: 'CURRENT_ROOM_REQUEST_SUCCESS',
    payload: result,
  });
}

function* setRoomRating({ api }: Dependencies, data: SetRoomRating) {
  yield put({
    type: 'START_RATING_ROOM',
  });

  try {
    yield call(api.apartments.setRoomRating, data.payload);

    yield put({
      type: 'SET_NEW_ROOM_RATING',
      payload: data.payload.rating,
    });

    yield put({
      type: 'RATING_PROCESS_RESPONSE',
      payload: 'Спасибо, ваше мнение учтено!',
    });
  } catch (error) {
    yield put({
      type: 'RATING_PROCESS_RESPONSE',
      payload: 'При изменении вашей оценки произошла ошибка!',
    });
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
  yield takeLatestAction<BookCurrentRoom['type']>('BOOK_ROOM', confirmBookedRoom, deps);
  yield takeLatestAction<SetRoomReview['type']>('SET_ROOM_REVIEW', setReview, deps);
  yield takeLatestAction<SetRoomRating['type']>('SET_ROOM_RATING', setRoomRating, deps);
  yield takeLatestAction<CurrentRoomRequest['type']>('LOAD_ROOM_INFO', loadCurrentRoom, deps);
  yield takeLatestAction<FinishRoomRating['type']>('FINISH_ROOM_RATING', finishRoomRating);
}

export { rootSaga };
