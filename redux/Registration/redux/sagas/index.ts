import { SagaIterator } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import { takeLatestAction } from 'redux/action.model';
import Api from 'services/api/api';
import { UserCredential } from 'services/api/Firebase/modules/Authentication/types';

import { RegistrationRequest } from '../../model';
import { registrationStatusFailed, registrationStatusSuccess } from '../actions';

function* registration({ payload }: RegistrationRequest) {
  try {
    const { email, password, name, surname, birthDate, gender, avatar, hasSpecialOffers } = payload;

    const userCredential: UserCredential = yield call(Api.auth.signUp, {
      email,
      password,
      name,
      surname,
      birthDate,
      gender,
      avatar,
    });

    yield call(Api.subscriptions.add, email, { hasSpecialOffers });

    yield put(registrationStatusSuccess(userCredential));
  } catch ({ message }) {
    yield put(registrationStatusFailed(message));
  }
}

function* rootSaga(): SagaIterator {
  yield takeLatestAction<RegistrationRequest['type']>('REGISTRATION_REQUEST', registration);
}

export { rootSaga };
