import { User } from 'services/api/Firebase/modules/Authentication';

import {
  AuthData,
  RequestToAuth,
  RequestToAuthWithGoogle,
  SetAuthRequired,
  SetAuthStatusSuccess,
  SetAuthStatusFailed,
  PreloadAuthData,
  BreakAuthProcess,
  LogoutProcess,
  LogoutDone,
  PasswordResetRequest,
  PasswordResetSuccess,
  PasswordResetFailed,
  PasswordResetCompleted,
} from '../model';

const requestToAuth = (data: AuthData): RequestToAuth => ({
  type: 'AUTH_PROCESS',
  payload: data,
});

const requestToAuthWithGoogle = (): RequestToAuthWithGoogle => ({
  type: 'GOOGLE_AUTH_PROCESS',
});

const setAuthRequired = (): SetAuthRequired => ({
  type: 'AUTH_REQUIRED',
});

const setAuthStatusSuccess = (user: User): SetAuthStatusSuccess => ({
  type: 'AUTH_SUCCESS',
  payload: user,
});

const setAuthStatusFailed = (statusText: string): SetAuthStatusFailed => ({
  type: 'AUTH_FAILED',
  payload: statusText,
});

const preloadAuthData = (): PreloadAuthData => ({
  type: 'PRELOAD_AUTH_DATA',
});

const breakAuthProcess = (): BreakAuthProcess => ({
  type: 'BREAK_AUTH_PROCESS',
});

const logout = (): LogoutProcess => ({
  type: 'AUTH_LOGOUT_PROCESS',
});

const logoutDone = (): LogoutDone => ({
  type: 'AUTH_LOGOUT_DONE',
});

const passwordReset = (email: string): PasswordResetRequest => ({
  type: 'PASSWORD_RESET_PROCESS',
  payload: email,
});

const passwordResetSuccess = (statusText: string): PasswordResetSuccess => ({
  type: 'PASSWORD_RESET_SUCCESS',
  payload: statusText,
});

const passwordResetFailed = (statusText: string): PasswordResetFailed => ({
  type: 'PASSWORD_RESET_FAILED',
  payload: statusText,
});

const completePasswordReset = (): PasswordResetCompleted => ({
  type: 'PASSWORD_RESET_COMPLETED',
});

export {
  requestToAuth,
  requestToAuthWithGoogle,
  setAuthRequired,
  setAuthStatusSuccess,
  setAuthStatusFailed,
  preloadAuthData,
  breakAuthProcess,
  logout,
  logoutDone,
  passwordReset,
  passwordResetSuccess,
  passwordResetFailed,
  completePasswordReset,
};
