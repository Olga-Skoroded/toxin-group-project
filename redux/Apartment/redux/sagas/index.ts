import { SagaIterator } from 'redux-saga';
import { call, put, takeLeading, takeLatest } from 'redux-saga/effects';

import api from 'api/api';
import { Apartment } from 'api/entities/types';

import {
  GET_ROOM_DETAILS_PROCESS,
  GET_ROOM_DETAILS_SUCCESS,
  GET_ROOM_DETAILS_FAILED,
} from '../../constants';
import { GetRoomDetailsRequest, CommentData } from '../../types';

function* getRoomDetails({ payload: id }: GetRoomDetailsRequest) {
  try {
    const roomDetails: Apartment = yield call(api.apartments.load, id);
    yield put({
      type: GET_ROOM_DETAILS_SUCCESS,
      payload: roomDetails,
    });
  } catch (err) {
    yield put({
      type: GET_ROOM_DETAILS_FAILED,
      payload: null,
    });
  }
}

function* setReview(data: CommentData) {
  console.log('test', data);
  const result = yield call(api.apartments.setRoomReview, data.payload);
}

function* rootSaga(): SagaIterator {
  yield takeLatest('SET_ROOM_REVIEW', setReview);
  yield takeLeading(GET_ROOM_DETAILS_PROCESS, getRoomDetails);
}

export { rootSaga };
