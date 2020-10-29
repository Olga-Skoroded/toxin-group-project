import {
  AUTH_PROCESS,
  AUTH_SUCCESS,
  AUTH_FAILED,
  PRELOAD_AUTH_DATA,
  BREAK_AUTH_PROCESS,
  AUTH_REQUIRED,
  AUTH_LOGOUT_DONE,
} from '../constants';
import { AuthActions, AuthState } from '../types';

const initialState: AuthState = {
  isAuthSuccess: null,
  isAuthProcessNow: null,
  wasFinishedAuthChecking: null,
  displayName: null,
  photoURL: '',
  authStatusText: '',
};

const authReducer = (state: AuthState = initialState, action: AuthActions): AuthState => {
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
        authStatusText: 'Вы успешно авторизованы!',
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

export default authReducer;
