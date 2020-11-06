import { SagaIterator } from 'redux-saga';
import { put, takeLatest, takeLeading, call, PutEffect } from 'redux-saga/effects';

import Api from 'api/api';
import { User, UserCredential } from 'api/Firebase/modules/Authentication/types';

import {
  AUTH_FAILED,
  AUTH_LOGOUT_DONE,
  AUTH_LOGOUT_PROCESS,
  AUTH_PROCESS,
  AUTH_REQUIRED,
  AUTH_SUCCESS,
  GOOGLE_AUTH_PROCESS,
  PASSWORD_RESET_FAILED,
  PASSWORD_RESET_PROCESS,
  PASSWORD_RESET_SUCCESS,
  PRELOAD_AUTH_DATA,
} from '../../constants';
import {
  AuthData,
  SetAuthStatusSuccess,
  SetAuthStatusFailed,
  SetAuthRequired,
  PasswordResetRequest,
} from '../../types';

function* startAuthProcess(data: {
  type: typeof AUTH_PROCESS | typeof GOOGLE_AUTH_PROCESS;
  payload: AuthData;
}): Generator | Generator<PutEffect<SetAuthStatusSuccess | SetAuthStatusFailed>, void, never> {
  const { type } = data;

  try {
    if (type === AUTH_PROCESS) {
      const { email, password } = data.payload;
      const { user }: UserCredential = yield call(Api.auth.signIn, email, password);

      yield put({
        type: AUTH_SUCCESS,
        payload: user,
      });
    } else if (type === GOOGLE_AUTH_PROCESS) {
      const { user }: UserCredential = yield call(Api.auth.signInWithGoogle);

      yield put({
        type: AUTH_SUCCESS,
        payload: user,
      });
    }
  } catch (error) {
    yield put({
      type: AUTH_FAILED,
      payload: error.message,
    });
  }
}

const authStateChangedCallback = (): Promise<User> => {
  return new Promise((resolve, reject) => {
    Api.auth.onStateChanged((data) => {
      if (data) resolve(data);
      else reject(new Error('Пользователь не авторизован.'));
    });
  });
};

function* prepareAuthData():
  | Generator
  | Generator<
      PutEffect<SetAuthStatusSuccess | SetAuthStatusFailed | SetAuthRequired>,
      void,
      never
    > {
  try {
    const result: User = yield call(authStateChangedCallback);

    yield put({
      type: AUTH_SUCCESS,
      payload: result,
    });
  } catch (error) {
    yield put({
      type: AUTH_REQUIRED,
    });
  }
}

function* passwordReset({ payload: email }: PasswordResetRequest) {
  try {
    const userAuthInfo: string[] = yield call(Api.auth.fetchSignInMethodsForEmail, email);
    const isEmailAuth = userAuthInfo.includes('password');
    if (isEmailAuth) {
      yield call(Api.auth.resetPassword, email);
      yield put({
        type: PASSWORD_RESET_SUCCESS,
        payload: `Ссылка для восстановления пароля была отправлена на ${email}`,
      });
    } else {
      throw new Error('Пользователь с указанным электронным адресом не зарегистрирован');
    }
  } catch (err) {
    yield put({
      type: PASSWORD_RESET_FAILED,
      payload:
        err.message === 'Пользователь с указанным электронным адресом не зарегистрирован'
          ? err.message
          : 'Произошла ошибка повторите попытку позже',
    });
  }
}

function* logoutUser(): Generator {
  yield call(Api.auth.signOut);
  yield put({ type: AUTH_LOGOUT_DONE });
}

export function* rootSaga(): SagaIterator {
  yield takeLatest(AUTH_LOGOUT_PROCESS, logoutUser);
  yield takeLatest(AUTH_PROCESS, startAuthProcess);
  yield takeLatest(GOOGLE_AUTH_PROCESS, startAuthProcess);
  yield takeLatest(PRELOAD_AUTH_DATA, prepareAuthData);
  yield takeLeading(PASSWORD_RESET_PROCESS, passwordReset);
}
