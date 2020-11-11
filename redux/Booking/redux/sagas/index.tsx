import { SagaIterator } from 'redux-saga';
import { put, takeLatest, call, PutEffect, takeLeading, CallEffect } from 'redux-saga/effects';

import {
  RoomsRequest,
  LoadBookedHistory,
  BookedHistoryList,
  UpdateBookedHistory,
  BookCurrentRoom,
} from 'redux/Booking/model';
import Api from 'services/api/api';
import { Apartment, BookingData } from 'services/api/entities/types';

import {
  ROOMS_REQUEST_PENDING,
  ROOMS_REQUEST_SUCCESS,
  ROOMS_REQUEST_FAILED,
  LOAD_ROOMS,
  LOAD_BOOKED_HISTORY,
  UPDATE_BOOKED_HISTORY,
  BOOK_ROOM,
} from '../../constants';

function* loadRooms(
  action: RoomsRequest,
): Generator | Generator<PutEffect<RoomsRequest>, void, never> {
  try {
    yield put({
      type: ROOMS_REQUEST_PENDING,
      payload: true,
    });

    const rooms: Apartment[] = yield call(Api.booking.filterRooms, action.payload);
    yield put({
      type: ROOMS_REQUEST_SUCCESS,
      payload: rooms,
    });
  } catch (error) {
    yield put({
      type: ROOMS_REQUEST_FAILED,
      payload: error,
    });
  } finally {
    yield put({
      type: ROOMS_REQUEST_PENDING,
      payload: false,
    });
  }
}

function* loadRoomsHistory({
  payload,
}: LoadBookedHistory): Generator | Generator<PutEffect<UpdateBookedHistory>, void, never> {
  const result: BookedHistoryList = yield call(Api.booking.getBookedHistory, payload);

  yield put({
    type: UPDATE_BOOKED_HISTORY,
    payload: result,
  });
}

function* confirmBookedRoom({
  payload,
}: BookCurrentRoom): Generator | Generator<CallEffect<BookCurrentRoom>, void, never> {
  const { apartmentId, booked, user } = payload;
  const data: BookingData = {
    apartmentId,
    from: new Date(booked.from),
    to: new Date(booked.to),
    reservationBy: user,
  };

  yield call(Api.booking.setBookedByUser, data);
}

export function* rootSaga(): SagaIterator {
  yield takeLeading(LOAD_ROOMS, loadRooms);
  yield takeLatest(LOAD_BOOKED_HISTORY, loadRoomsHistory);
  yield takeLatest(BOOK_ROOM, confirmBookedRoom);
}
