import { User } from 'api/Firebase/modules/Authentication/types';

import {
  AUTH_PROCESS,
  BREAK_AUTH_PROCESS,
  AUTH_SUCCESS,
  AUTH_FAILED,
  PRELOAD_AUTH_DATA,
  AUTH_REQUIRED,
  GOOGLE_AUTH_PROCESS,
  AUTH_LOGOUT_PROCESS,
  AUTH_LOGOUT_DONE,
} from './constants';

export type AuthData = {
  email: string;
  password: string;
};

type Action<Z, T> = {
  type: Z;
  payload?: T;
};

export type AuthState = {
  isAuthSuccess: boolean;
  isAuthProcessNow: boolean;
  authStatusText: string;
  displayName: null | string;
  photoURL: string;
  wasFinishedAuthChecking: boolean;
};

export type PreloadAuthData = Action<typeof PRELOAD_AUTH_DATA, null>;

export type RequestToAuth = Action<typeof AUTH_PROCESS | typeof GOOGLE_AUTH_PROCESS, AuthData>;

export type BreakAuthProcess = Action<typeof BREAK_AUTH_PROCESS, null>;

export type SetAuthStatusSuccess = Action<typeof AUTH_SUCCESS, User>;

export type SetAuthRequired = Action<typeof AUTH_REQUIRED, null>;

export type SetAuthStatusFailed = Action<typeof AUTH_FAILED, string>;

export type LogoutProcess = Action<typeof AUTH_LOGOUT_PROCESS, null>;

export type LogoutDone = Action<typeof AUTH_LOGOUT_DONE, null>;

export type AuthActions =
  | RequestToAuth
  | BreakAuthProcess
  | SetAuthStatusSuccess
  | SetAuthRequired
  | SetAuthStatusFailed
  | PreloadAuthData
  | LogoutDone;
