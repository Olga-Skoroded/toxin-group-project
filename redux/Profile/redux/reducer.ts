import {
  EMAIL_UPDATE_PROCESS,
  EMAIL_UPDATE_SUCCESS,
  EMAIL_UPDATE_FAILED,
  EMAIL_UPDATE_COMPLETED,
  GET_ADDITIONAL_USER_DATA_PROCESS,
  GET_ADDITIONAL_USER_DATA_SUCCESS,
  GET_ADDITIONAL_USER_DATA_FAILED,
  PASSWORD_UPDATE_PROCESS,
  PASSWORD_UPDATE_SUCCESS,
  PASSWORD_UPDATE_FAILED,
  PASSWORD_UPDATE_COMPLETED,
  UPDATE_ADDITIONAL_USER_DATA_PROCESS,
  UPDATE_ADDITIONAL_USER_DATA_SUCCESS,
  UPDATE_ADDITIONAL_USER_DATA_FAILED,
  UPDATE_ADDITIONAL_USER_DATA_COMPLETED,
  USERNAME_UPDATE_PROCESS,
  USERNAME_UPDATE_SUCCESS,
  USERNAME_UPDATE_FAILED,
  USERNAME_UPDATE_COMPLETED,
} from '../constants';
import { ProfileState, ProfileActions } from '../types';

const initialState: ProfileState = {
  isEmailUpdatePending: false,
  isEmailUpdateCompleted: false,
  emailUpdateStatusText: '',
  isGetAdditionalUserDataSuccess: false,
  additionalUserData: null,
  isPasswordUpdatePending: false,
  isPasswordUpdateCompleted: false,
  passwordUpdateStatusText: '',
  isUpdateAdditionalUserDataPending: false,
  isUpdateAdditionalUserDataCompleted: false,
  updateAdditionalUserDataStatusText: '',
  isUsernameUpdatePending: false,
  isUsernameUpdateCompleted: false,
  usernameUpdateStatusText: '',
};

const profile = (state: ProfileState = initialState, action: ProfileActions): ProfileState => {
  switch (action.type) {
    case EMAIL_UPDATE_PROCESS:
      return {
        ...state,
        isEmailUpdatePending: true,
        isEmailUpdateCompleted: false,
        emailUpdateStatusText: '',
      };
    case EMAIL_UPDATE_SUCCESS:
      return {
        ...state,
        isEmailUpdatePending: false,
        isEmailUpdateCompleted: true,
        emailUpdateStatusText: action.payload,
      };
    case EMAIL_UPDATE_FAILED:
      return {
        ...state,
        isEmailUpdatePending: false,
        isEmailUpdateCompleted: true,
        emailUpdateStatusText: action.payload,
      };
    case EMAIL_UPDATE_COMPLETED:
      return {
        ...state,
        isEmailUpdatePending: false,
        isEmailUpdateCompleted: false,
        emailUpdateStatusText: '',
      };
    case GET_ADDITIONAL_USER_DATA_PROCESS:
      return {
        ...state,
        isGetAdditionalUserDataSuccess: false,
        additionalUserData: null,
      };
    case GET_ADDITIONAL_USER_DATA_SUCCESS:
      return {
        ...state,
        isGetAdditionalUserDataSuccess: true,
        additionalUserData: action.payload,
      };
    case GET_ADDITIONAL_USER_DATA_FAILED:
      return {
        ...state,
        isGetAdditionalUserDataSuccess: false,
        additionalUserData: null,
      };
    case PASSWORD_UPDATE_PROCESS:
      return {
        ...state,
        isPasswordUpdatePending: true,
        isPasswordUpdateCompleted: false,
        passwordUpdateStatusText: '',
      };
    case PASSWORD_UPDATE_SUCCESS:
      return {
        ...state,
        isPasswordUpdatePending: false,
        isPasswordUpdateCompleted: true,
        passwordUpdateStatusText: action.payload,
      };
    case PASSWORD_UPDATE_FAILED:
      return {
        ...state,
        isPasswordUpdatePending: false,
        isPasswordUpdateCompleted: true,
        passwordUpdateStatusText: action.payload,
      };
    case PASSWORD_UPDATE_COMPLETED:
      return {
        ...state,
        isPasswordUpdatePending: false,
        isPasswordUpdateCompleted: false,
        passwordUpdateStatusText: '',
      };
    case UPDATE_ADDITIONAL_USER_DATA_PROCESS:
      return {
        ...state,
        isUpdateAdditionalUserDataPending: true,
        isUpdateAdditionalUserDataCompleted: false,
        updateAdditionalUserDataStatusText: '',
      };
    case UPDATE_ADDITIONAL_USER_DATA_SUCCESS:
      return {
        ...state,
        isUpdateAdditionalUserDataPending: false,
        isUpdateAdditionalUserDataCompleted: true,
        updateAdditionalUserDataStatusText: action.payload,
      };
    case UPDATE_ADDITIONAL_USER_DATA_FAILED:
      return {
        ...state,
        isUpdateAdditionalUserDataPending: false,
        isUpdateAdditionalUserDataCompleted: true,
        updateAdditionalUserDataStatusText: action.payload,
      };
    case UPDATE_ADDITIONAL_USER_DATA_COMPLETED:
      return {
        ...state,
        isUpdateAdditionalUserDataPending: false,
        isUpdateAdditionalUserDataCompleted: false,
        updateAdditionalUserDataStatusText: '',
      };
    case USERNAME_UPDATE_PROCESS:
      return {
        ...state,
        isUsernameUpdatePending: true,
        isUsernameUpdateCompleted: false,
        usernameUpdateStatusText: '',
      };
    case USERNAME_UPDATE_SUCCESS:
      return {
        ...state,
        isUsernameUpdatePending: false,
        isUsernameUpdateCompleted: true,
        usernameUpdateStatusText: action.payload,
      };
    case USERNAME_UPDATE_FAILED:
      return {
        ...state,
        isUsernameUpdatePending: false,
        isUsernameUpdateCompleted: true,
        usernameUpdateStatusText: action.payload,
      };
    case USERNAME_UPDATE_COMPLETED:
      return {
        ...state,
        isUsernameUpdatePending: false,
        isUsernameUpdateCompleted: false,
        usernameUpdateStatusText: '',
      };
    default:
      return state;
  }
};

export { profile };
