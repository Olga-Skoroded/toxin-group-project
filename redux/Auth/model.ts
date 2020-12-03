import { Action, ActionPayload } from 'redux/action.model';
import { User } from 'services/api/Firebase/modules/Authentication';

type AuthData = {
  email: string;
  password: string;
};

type AuthState = {
  isAuthSuccess: boolean;
  isAuthProcessNow: boolean;
  authStatusText: string;
  user: null | User;
  photoURL: string;
  displayName: null | string;
  wasFinishedAuthChecking: boolean;
  userEmail: string;
  isPasswordResetCompleted: boolean;
  passwordResetStatusText: string;
};

type RequestToAuth = ActionPayload<'AUTH_PROCESS', AuthData>;
type RequestToAuthWithGoogle = Action<'GOOGLE_AUTH_PROCESS'>;
type SetAuthRequired = Action<'AUTH_REQUIRED'>;
type SetAuthStatusSuccess = ActionPayload<'AUTH_SUCCESS', User>;
type SetAuthStatusFailed = ActionPayload<'AUTH_FAILED', string>;
type BreakAuthProcess = Action<'BREAK_AUTH_PROCESS'>;
type PreloadAuthData = Action<'PRELOAD_AUTH_DATA'>;

type LogoutProcess = Action<'AUTH_LOGOUT_PROCESS'>;
type LogoutDone = Action<'AUTH_LOGOUT_DONE'>;

type PasswordResetRequest = ActionPayload<'PASSWORD_RESET_PROCESS', string>;
type PasswordResetSuccess = ActionPayload<'PASSWORD_RESET_SUCCESS', string>;
type PasswordResetFailed = ActionPayload<'PASSWORD_RESET_FAILED', string>;
type PasswordResetCompleted = Action<'PASSWORD_RESET_COMPLETED'>;

type AuthActions =
  | RequestToAuth
  | RequestToAuthWithGoogle
  | SetAuthRequired
  | SetAuthStatusSuccess
  | SetAuthStatusFailed
  | BreakAuthProcess
  | PreloadAuthData
  | LogoutDone
  | PasswordResetCompleted
  | PasswordResetFailed
  | PasswordResetRequest
  | PasswordResetSuccess;

export type {
  AuthData,
  AuthState,
  RequestToAuth,
  RequestToAuthWithGoogle,
  SetAuthRequired,
  SetAuthStatusSuccess,
  SetAuthStatusFailed,
  BreakAuthProcess,
  PreloadAuthData,
  LogoutProcess,
  LogoutDone,
  PasswordResetRequest,
  PasswordResetSuccess,
  PasswordResetFailed,
  PasswordResetCompleted,
  AuthActions,
};
