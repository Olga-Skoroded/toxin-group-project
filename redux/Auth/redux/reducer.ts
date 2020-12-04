import { AuthActions, AuthState } from '../model';

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
    case 'AUTH_PROCESS':
      return {
        ...state,
      };
    case 'PRELOAD_AUTH_DATA':
      return state;
    case 'BREAK_AUTH_PROCESS':
      return {
        ...state,
        isAuthProcessNow: false,
      };
    case 'AUTH_REQUIRED':
      return {
        ...state,
        wasFinishedAuthChecking: true,
        isAuthSuccess: false,
      };
    case 'AUTH_SUCCESS':
      return {
        ...state,
        isAuthProcessNow: false,
        isAuthSuccess: true,
        wasFinishedAuthChecking: true,
        userEmail: action.payload.email,
        authStatusText: 'Вы успешно авторизованы!',
        photoURL: action.payload.photoURL,
        user: action.payload,
        displayName: action.payload.displayName,
      };
    case 'AUTH_FAILED':
      return {
        ...state,
        isAuthProcessNow: true,
        wasFinishedAuthChecking: true,
        authStatusText: action.payload,
      };
    case 'AUTH_LOGOUT_DONE':
      return {
        ...state,
        isAuthSuccess: false,
        isAuthProcessNow: false,
        wasFinishedAuthChecking: false,
        displayName: null,
        authStatusText: 'Требуется авторизация',
      };
    case 'PASSWORD_RESET_PROCESS':
      return {
        ...state,
        isPasswordResetCompleted: false,
        passwordResetStatusText: '',
      };
    case 'PASSWORD_RESET_SUCCESS':
      return {
        ...state,
        isPasswordResetCompleted: true,
        passwordResetStatusText: action.payload,
      };
    case 'PASSWORD_RESET_FAILED':
      return {
        ...state,
        isPasswordResetCompleted: true,
        passwordResetStatusText: action.payload,
      };
    case 'PASSWORD_RESET_COMPLETED':
      return {
        ...state,
        isPasswordResetCompleted: false,
        passwordResetStatusText: '',
      };
    default:
      return state;
  }
};

export { auth };
