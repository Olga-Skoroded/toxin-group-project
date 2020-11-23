import { SagaIterator } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import { takeLatestAction, takeLeadingAction } from 'redux/action.model';
import { Dependencies } from 'redux/api.model';
import { User, UserCredential } from 'services/api/Firebase/modules/Authentication';

import {
  RequestToAuth,
  RequestToAuthWithGoogle,
  LogoutProcess,
  PreloadAuthData,
  PasswordResetRequest,
} from '../../model';
import {
  setAuthRequired,
  setAuthStatusSuccess,
  setAuthStatusFailed,
  logoutDone,
  passwordResetFailed,
  passwordResetSuccess,
} from '../actions';

function* auth({ api }: Dependencies, { payload }: RequestToAuth) {
  try {
    const { email, password } = payload;
    const { user }: UserCredential = yield call(api.auth.signIn, email, password);

    yield put(setAuthStatusSuccess(user));
  } catch ({ message }) {
    yield put(setAuthStatusFailed(message));
  }
}

function* authWithGoogle({ api }: Dependencies) {
  try {
    const { user }: UserCredential = yield call(api.auth.signInWithGoogle);

    yield put(setAuthStatusSuccess(user));
  } catch ({ message }) {
    yield put(setAuthStatusFailed(message));
  }
}

const authStateChangedCallback = ({ api }: Dependencies): Promise<User> => {
  return new Promise((resolve, reject) => {
    api.auth.onStateChanged((data) => {
      if (data) resolve(data);
      else reject(new Error('Пользователь не авторизован.'));
    });
  });
};

function* prepareAuthData({ api }) {
  try {
    const user: User = yield call(authStateChangedCallback, { api });

    yield put(setAuthStatusSuccess(user));
  } catch (error) {
    yield put(setAuthRequired());
  }
}

function* logoutUser({ api }: Dependencies) {
  yield call(api.auth.signOut);
  yield put(logoutDone());
}

function* passwordReset({ api }: Dependencies, { payload: email }: PasswordResetRequest) {
  try {
    const userAuthInfo: string[] = yield call(api.auth.fetchSignInMethodsForEmail, email);
    const isEmailAuth = userAuthInfo.includes('password');
    if (isEmailAuth) {
      yield call(api.auth.resetPassword, email);
      yield put(
        passwordResetSuccess('A link to reset your password has been sent to the specified email'),
      );
      yield call(api.auth.resetPassword, email);
    } else {
      throw new Error('The user with the specified email address is not registered');
    }
  } catch ({ message }) {
    yield put(passwordResetFailed(message));
  }
}

function* rootSaga(deps: Dependencies): SagaIterator {
  yield takeLatestAction<RequestToAuth['type']>('AUTH_PROCESS', auth, deps);
  yield takeLatestAction<RequestToAuthWithGoogle['type']>(
    'GOOGLE_AUTH_PROCESS',
    authWithGoogle,
    deps,
  );
  yield takeLatestAction<PreloadAuthData['type']>('PRELOAD_AUTH_DATA', prepareAuthData, deps);
  yield takeLatestAction<LogoutProcess['type']>('AUTH_LOGOUT_PROCESS', logoutUser, deps);
  yield takeLeadingAction<PasswordResetRequest['type']>(
    'PASSWORD_RESET_PROCESS',
    passwordReset,
    deps,
  );
}

export { rootSaga };
