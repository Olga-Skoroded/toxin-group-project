import {
  AUTH_FAILED,
  AUTH_LOGOUT_DONE,
  AUTH_PROCESS,
  AUTH_REQUIRED,
  AUTH_SUCCESS,
  BREAK_AUTH_PROCESS,
  PASSWORD_RESET_COMPLETED,
  PASSWORD_RESET_FAILED,
  PASSWORD_RESET_PROCESS,
  PASSWORD_RESET_SUCCESS,
  PRELOAD_AUTH_DATA,
} from '../constants';
import { AuthActions, AuthState } from '../types';

const initialState: AuthState = {
  isAuthSuccess: null,
  isAuthProcessNow: null,
  wasFinishedAuthChecking: null,
  user: null,
  displayName: null,
  photoURL: '',
  userEmail: null,
  authStatusText: '',
  isPasswordResetCompleted: false,
  passwordResetStatusText: '',
};

const auth = (state: AuthState = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case AUTH_PROCESS:
      return {
        ...state,
      };
    case PRELOAD_AUTH_DATA:
      return state;
    case BREAK_AUTH_PROCESS:
      return {
        ...state,
        isAuthProcessNow: false,
      };
    case AUTH_REQUIRED:
      return {
        ...state,
        wasFinishedAuthChecking: true,
        isAuthSuccess: false,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthProcessNow: false,
        isAuthSuccess: true,
        wasFinishedAuthChecking: true,
        userEmail: action.payload.email,
        authStatusText: 'Вы успешно авторизованы!',
        user: action.payload,
        displayName: action.payload.displayName || 'Аноним',
        photoURL: action.payload.photoURL,
      };
    case AUTH_FAILED:
      return {
        ...state,
        isAuthProcessNow: true,
        wasFinishedAuthChecking: true,
        authStatusText: action.payload,
      };
    case PASSWORD_RESET_PROCESS:
      return {
        ...state,
        isPasswordResetCompleted: false,
        passwordResetStatusText: '',
      };
    case PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        isPasswordResetCompleted: true,
        passwordResetStatusText: action.payload,
      };
    case PASSWORD_RESET_FAILED:
      return {
        ...state,
        isPasswordResetCompleted: true,
        passwordResetStatusText: action.payload,
      };
    case PASSWORD_RESET_COMPLETED:
      return {
        ...state,
        isPasswordResetCompleted: false,
        passwordResetStatusText: '',
      };
    case AUTH_LOGOUT_DONE:
      return {
        ...state,
        isAuthSuccess: false,
        isAuthProcessNow: false,
        wasFinishedAuthChecking: false,
        displayName: null,
        authStatusText: 'Требуется авторизация',
      };
    default:
      return state;
  }
};

export default auth;
