import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { takeLeadingAction } from 'redux/action.model';
import { Dependencies } from 'redux/api.model';
import { Apartment } from 'services/api/entities/model';

import { GetRoomDetailsRequest } from '../../model';
import { getRoomDetailsFailed, getRoomDetailsSuccess } from '../actions';

function* getRoomDetails({ api }: Dependencies, { payload: id }: GetRoomDetailsRequest) {
  try {
    const roomDetails: Apartment = yield call(api.apartments.load, id);
    yield put(getRoomDetailsSuccess(roomDetails));
  } catch (err) {
    yield put(getRoomDetailsFailed());
  }
}

function* rootSaga(deps: Dependencies): SagaIterator {
  yield takeLeadingAction<GetRoomDetailsRequest['type']>(
    'GET_ROOM_DETAILS_PROCESS',
    getRoomDetails,
    deps,
  );
}

export { rootSaga };
