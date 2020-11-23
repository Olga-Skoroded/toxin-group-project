import { ProfileState, ProfileActions } from '../model';

const initialState: ProfileState = {
  isEmailUpdatePending: false,
  isEmailUpdateSuccess: false,
  isEmailUpdateCompleted: false,
  emailUpdateStatusText: '',
  isGetAdditionalUserDataSuccess: false,
  additionalUserData: null,
  isPasswordUpdatePending: false,
  isPasswordUpdateSuccess: false,
  isPasswordUpdateCompleted: false,
  passwordUpdateStatusText: '',
  isUpdateAdditionalUserDataPending: false,
  isUpdateAdditionalUserDataSuccess: false,
  isUpdateAdditionalUserDataCompleted: false,
  updateAdditionalUserDataStatusText: '',
  isUsernameUpdatePending: false,
  isUsernameUpdateSuccess: false,
  isUsernameUpdateCompleted: false,
  usernameUpdateStatusText: '',
};

const profile = (state: ProfileState = initialState, action: ProfileActions): ProfileState => {
  switch (action.type) {
    case 'EMAIL_UPDATE_PROCESS':
      return {
        ...state,
        isEmailUpdatePending: true,
        isEmailUpdateSuccess: false,
        isEmailUpdateCompleted: false,
        emailUpdateStatusText: '',
      };
    case 'EMAIL_UPDATE_SUCCESS':
      return {
        ...state,
        isEmailUpdatePending: false,
        isEmailUpdateSuccess: true,
        isEmailUpdateCompleted: true,
        emailUpdateStatusText: action.payload,
      };
    case 'EMAIL_UPDATE_FAILED':
      return {
        ...state,
        isEmailUpdatePending: false,
        isEmailUpdateSuccess: false,
        isEmailUpdateCompleted: true,
        emailUpdateStatusText: action.payload,
      };
    case 'EMAIL_UPDATE_COMPLETED':
      return {
        ...state,
        isEmailUpdatePending: false,
        isEmailUpdateSuccess: false,
        isEmailUpdateCompleted: false,
        emailUpdateStatusText: '',
      };
    case 'GET_ADDITIONAL_USER_DATA_PROCESS':
      return {
        ...state,
        isGetAdditionalUserDataSuccess: false,
        additionalUserData: null,
      };
    case 'GET_ADDITIONAL_USER_DATA_SUCCESS':
      return {
        ...state,
        isGetAdditionalUserDataSuccess: true,
        additionalUserData: action.payload,
      };
    case 'GET_ADDITIONAL_USER_DATA_FAILED':
      return {
        ...state,
        isGetAdditionalUserDataSuccess: false,
        additionalUserData: null,
      };
    case 'PASSWORD_UPDATE_PROCESS':
      return {
        ...state,
        isPasswordUpdatePending: true,
        isPasswordUpdateSuccess: false,
        isPasswordUpdateCompleted: false,
        passwordUpdateStatusText: '',
      };
    case 'PASSWORD_UPDATE_SUCCESS':
      return {
        ...state,
        isPasswordUpdatePending: false,
        isPasswordUpdateSuccess: true,
        isPasswordUpdateCompleted: true,
        passwordUpdateStatusText: action.payload,
      };
    case 'PASSWORD_UPDATE_FAILED':
      return {
        ...state,
        isPasswordUpdatePending: false,
        isPasswordUpdateSuccess: false,
        isPasswordUpdateCompleted: true,
        passwordUpdateStatusText: action.payload,
      };
    case 'PASSWORD_UPDATE_COMPLETED':
      return {
        ...state,
        isPasswordUpdatePending: false,
        isPasswordUpdateSuccess: false,
        isPasswordUpdateCompleted: false,
        passwordUpdateStatusText: '',
      };
    case 'UPDATE_ADDITIONAL_USER_DATA_PROCESS':
      return {
        ...state,
        isUpdateAdditionalUserDataPending: true,
        isUpdateAdditionalUserDataSuccess: false,
        isUpdateAdditionalUserDataCompleted: false,
        updateAdditionalUserDataStatusText: '',
      };
    case 'UPDATE_ADDITIONAL_USER_DATA_SUCCESS':
      return {
        ...state,
        isUpdateAdditionalUserDataPending: false,
        isUpdateAdditionalUserDataSuccess: true,
        isUpdateAdditionalUserDataCompleted: true,
        updateAdditionalUserDataStatusText: action.payload,
      };
    case 'UPDATE_ADDITIONAL_USER_DATA_FAILED':
      return {
        ...state,
        isUpdateAdditionalUserDataPending: false,
        isUpdateAdditionalUserDataSuccess: false,
        isUpdateAdditionalUserDataCompleted: true,
        updateAdditionalUserDataStatusText: action.payload,
      };
    case 'UPDATE_ADDITIONAL_USER_DATA_COMPLETED':
      return {
        ...state,
        isUpdateAdditionalUserDataPending: false,
        isUpdateAdditionalUserDataSuccess: false,
        isUpdateAdditionalUserDataCompleted: false,
        updateAdditionalUserDataStatusText: '',
      };
    case 'USERNAME_UPDATE_PROCESS':
      return {
        ...state,
        isUsernameUpdatePending: true,
        isUsernameUpdateSuccess: false,
        isUsernameUpdateCompleted: false,
        usernameUpdateStatusText: '',
      };
    case 'USERNAME_UPDATE_SUCCESS':
      return {
        ...state,
        isUsernameUpdatePending: false,
        isUsernameUpdateSuccess: true,
        isUsernameUpdateCompleted: true,
        usernameUpdateStatusText: action.payload,
      };
    case 'USERNAME_UPDATE_FAILED':
      return {
        ...state,
        isUsernameUpdatePending: false,
        isUsernameUpdateSuccess: false,
        isUsernameUpdateCompleted: true,
        usernameUpdateStatusText: action.payload,
      };
    case 'USERNAME_UPDATE_COMPLETED':
      return {
        ...state,
        isUsernameUpdatePending: false,
        isUsernameUpdateSuccess: false,
        isUsernameUpdateCompleted: false,
        usernameUpdateStatusText: '',
      };
    default:
      return state;
  }
};

export { profile };
