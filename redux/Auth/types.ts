import { User } from 'api/Firebase/modules/Authentication/types';

import {
  AUTH_FAILED,
  AUTH_LOGOUT_DONE,
  AUTH_LOGOUT_PROCESS,
  AUTH_PROCESS,
  AUTH_REQUIRED,
  AUTH_SUCCESS,
  BREAK_AUTH_PROCESS,
  GOOGLE_AUTH_PROCESS,
  PASSWORD_RESET_COMPLETED,
  PASSWORD_RESET_FAILED,
  PASSWORD_RESET_PROCESS,
  PASSWORD_RESET_SUCCESS,
  PRELOAD_AUTH_DATA,
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
  user: null | User;
  displayName: null | string;
  photoURL: string;
  wasFinishedAuthChecking: boolean;
  userEmail: string;
  isPasswordResetCompleted: boolean;
  passwordResetStatusText: string;
};

export type BreakAuthProcess = Action<typeof BREAK_AUTH_PROCESS, null>;
export type LogoutDone = Action<typeof AUTH_LOGOUT_DONE, null>;
export type LogoutProcess = Action<typeof AUTH_LOGOUT_PROCESS, null>;
export type PasswordResetCompleted = Action<typeof PASSWORD_RESET_COMPLETED, string>;
export type PasswordResetFailed = Action<typeof PASSWORD_RESET_FAILED, string>;
export type PasswordResetRequest = Action<typeof PASSWORD_RESET_PROCESS, string>;
export type PasswordResetSuccess = Action<typeof PASSWORD_RESET_SUCCESS, string>;
export type PreloadAuthData = Action<typeof PRELOAD_AUTH_DATA, null>;
export type RequestToAuth = Action<typeof AUTH_PROCESS | typeof GOOGLE_AUTH_PROCESS, AuthData>;
export type SetAuthRequired = Action<typeof AUTH_REQUIRED, null>;
export type SetAuthStatusFailed = Action<typeof AUTH_FAILED, string>;
export type SetAuthStatusSuccess = Action<typeof AUTH_SUCCESS, User>;

export type AuthActions =
  | BreakAuthProcess
  | LogoutDone
  | PasswordResetCompleted
  | PasswordResetFailed
  | PasswordResetRequest
  | PasswordResetSuccess
  | PreloadAuthData
  | RequestToAuth
  | SetAuthRequired
  | SetAuthStatusFailed
  | SetAuthStatusSuccess;
