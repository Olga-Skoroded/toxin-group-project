import { SagaIterator } from 'redux-saga';
import { put, takeLatest, call, PutEffect } from 'redux-saga/effects';

import Api from 'api/api';
import { UserCredential } from 'api/Firebase/modules/Authentication/types';

import { REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAILED } from '../../constants';
import { ProfileData, RegistrationStatusSuccess, RegistrationStatusFailed } from '../../types';

function* startRegistrationProcess(data: {
  type: typeof REGISTRATION_REQUEST;
  payload: ProfileData;
}):
  | Generator
  | Generator<PutEffect<RegistrationStatusSuccess | RegistrationStatusFailed>, void, never> {
  const { email, password, name, surname, birthDate, gender, avatar, receiveOffers } = data.payload;

  try {
    const result: UserCredential = yield call(Api.auth.signUp, {
      email,
      password,
      name,
      surname,
      birthDate,
      gender,
      avatar,
      receiveOffers,
    });

    yield put({
      type: REGISTRATION_SUCCESS,
      payload: result,
    });
  } catch (error) {
    yield put({
      type: REGISTRATION_FAILED,
      payload: error.message,
    });
  }
}

export function* rootSaga(): SagaIterator {
  yield takeLatest(REGISTRATION_REQUEST, startRegistrationProcess);
}
