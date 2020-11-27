import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { takeLeadingAction } from 'redux/action.model';
import { Dependencies } from 'redux/api.model';
import { Apartment } from 'services/api/entities/model';

import { GetRoomDetailsRequest, SetReviewLikeRequest } from '../../model';
import {
  getRoomDetailsFailed,
  getRoomDetailsSuccess,
  setReviewLikeFailed,
  setReviewLikeSuccess,
} from '../actions';

function* getRoomDetails({ api }: Dependencies, { payload: id }: GetRoomDetailsRequest) {
  try {
    const roomDetails: Apartment = yield call(api.apartments.load, id);
    yield put(getRoomDetailsSuccess(roomDetails));
  } catch (err) {
    yield put(getRoomDetailsFailed());
  }
}

function* setReviewLike({ api }: Dependencies, { payload: data }: SetReviewLikeRequest) {
  try {
    api.apartments.setReviewLike(data.id, data.reviews);
    yield put(setReviewLikeSuccess());
  } catch (err) {
    yield put(setReviewLikeFailed());
  }
}

function* rootSaga(deps: Dependencies): SagaIterator {
  yield takeLeadingAction<GetRoomDetailsRequest['type']>(
    'GET_ROOM_DETAILS_PROCESS',
    getRoomDetails,
    deps,
  );
  yield takeLeadingAction<SetReviewLikeRequest['type']>(
    'SET_REVIEW_LIKE_PROCESS',
    setReviewLike,
    deps,
  );
}

export { rootSaga };
