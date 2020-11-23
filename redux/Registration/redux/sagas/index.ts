import { SagaIterator } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import { takeLatestAction } from 'redux/action.model';
import { Dependencies } from 'redux/api.model';
import { UserCredential } from 'services/api/Firebase/modules/Authentication';
import { dateValidator } from 'utils/validators';

import { RegistrationRequest } from '../../model';
import { registrationStatusFailed, registrationStatusSuccess } from '../actions';

function* registration({ api }: Dependencies, { payload }: RegistrationRequest) {
  const { email, password, name, surname, birthDate, gender, avatar, hasSpecialOffers } = payload;
  try {
    const dateValidationResult = dateValidator(birthDate);

    if (dateValidationResult === 'Invalid date') {
      throw new Error('All fields must be filled in correctly!');
    }

    const maxSymbolLength = 50;

    if (name.length > maxSymbolLength || surname.length > maxSymbolLength) {
      throw new Error('First name or last name is too long');
    }

    const userCredential: UserCredential = yield call(api.auth.signUp, {
      email,
      password,
      name,
      surname,
      birthDate,
      gender,
      avatar,
    });

    yield call(api.subscriptions.add, email, { hasSpecialOffers });

    yield put(registrationStatusSuccess(userCredential));
  } catch ({ message }) {
    yield put(registrationStatusFailed(message));
  }
}

function* rootSaga(deps: Dependencies): SagaIterator {
  yield takeLatestAction<RegistrationRequest['type']>('REGISTRATION_REQUEST', registration, deps);
}

export { rootSaga };
