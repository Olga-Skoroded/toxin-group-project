import {
  AUTH_LOGOUT_PROCESS,
  AUTH_PROCESS,
  BREAK_AUTH_PROCESS,
  GOOGLE_AUTH_PROCESS,
  PASSWORD_RESET_COMPLETED,
  PASSWORD_RESET_PROCESS,
  PRELOAD_AUTH_DATA,
} from '../constants';
import {
  AuthData,
  BreakAuthProcess,
  LogoutProcess,
  PasswordResetCompleted,
  PasswordResetRequest,
  PreloadAuthData,
  RequestToAuth,
} from '../types';

const logout = (): LogoutProcess => ({
  type: AUTH_LOGOUT_PROCESS,
});

const requestToAuth = (data: AuthData): RequestToAuth => ({
  type: AUTH_PROCESS,
  payload: data,
});

const requestToAuthWithGoogle = (): RequestToAuth => ({
  type: GOOGLE_AUTH_PROCESS,
});

const breakAuthProcess = (): BreakAuthProcess => ({
  type: BREAK_AUTH_PROCESS,
});

const preloadAuthData = (): PreloadAuthData => ({
  type: PRELOAD_AUTH_DATA,
});

const passwordReset = (email: string): PasswordResetRequest => ({
  type: PASSWORD_RESET_PROCESS,
  payload: email,
});

const passwordResetCompleted = (): PasswordResetCompleted => ({
  type: PASSWORD_RESET_COMPLETED,
});

export {
  breakAuthProcess,
  logout,
  passwordResetCompleted,
  passwordReset,
  preloadAuthData,
  requestToAuth,
  requestToAuthWithGoogle,
};
