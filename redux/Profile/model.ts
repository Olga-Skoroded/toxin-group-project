import { Action, ActionPayload } from 'redux/action.model';
import { AdditionalUserInformation } from 'services/api/entities/types';
import { User } from 'services/api/Firebase/modules/Authentication/types';

type EmailUpdate = {
  user: User;
  email: string;
};

type PasswordUpdate = {
  user: User;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

type UpdateAdditionalUserData = {
  user: User;
  data: {
    birthDate?: string;
    gender?: 'female' | 'male';
  };
};

type UsernameUpdate = {
  user: User;
  displayName: string;
};

type ProfileState = {
  isEmailUpdatePending: boolean;
  isEmailUpdateCompleted: boolean;
  emailUpdateStatusText: string;
  isGetAdditionalUserDataSuccess: boolean;
  additionalUserData: AdditionalUserInformation;
  isPasswordUpdatePending: boolean;
  isPasswordUpdateCompleted: boolean;
  passwordUpdateStatusText: string;
  isUpdateAdditionalUserDataPending: boolean;
  isUpdateAdditionalUserDataCompleted: boolean;
  updateAdditionalUserDataStatusText: string;
  isUsernameUpdatePending: boolean;
  isUsernameUpdateCompleted: boolean;
  usernameUpdateStatusText: string;
};

type EmailUpdateRequest = ActionPayload<'EMAIL_UPDATE_PROCESS', EmailUpdate>;
type EmailUpdateSuccess = ActionPayload<'EMAIL_UPDATE_SUCCESS', string>;
type EmailUpdateFailed = ActionPayload<'EMAIL_UPDATE_FAILED', string>;
type EmailUpdateCompleted = Action<'EMAIL_UPDATE_COMPLETED'>;

type GetAdditionalUserDataRequest = ActionPayload<'GET_ADDITIONAL_USER_DATA_PROCESS', User>;
type GetAdditionalUserDataSuccess = ActionPayload<
  'GET_ADDITIONAL_USER_DATA_SUCCESS',
  AdditionalUserInformation
>;
type GetAdditionalUserDataFailed = Action<'GET_ADDITIONAL_USER_DATA_FAILED'>;

type PasswordUpdateRequest = ActionPayload<'PASSWORD_UPDATE_PROCESS', PasswordUpdate>;
type PasswordUpdateSuccess = ActionPayload<'PASSWORD_UPDATE_SUCCESS', string>;
type PasswordUpdateFailed = ActionPayload<'PASSWORD_UPDATE_FAILED', string>;
type PasswordUpdateCompleted = Action<'PASSWORD_UPDATE_COMPLETED'>;

type UpdateAdditionalUserDataRequest = ActionPayload<
  'UPDATE_ADDITIONAL_USER_DATA_PROCESS',
  UpdateAdditionalUserData
>;
type UpdateAdditionalUserDataSuccess = ActionPayload<'UPDATE_ADDITIONAL_USER_DATA_SUCCESS', string>;
type UpdateAdditionalUserDataFailed = ActionPayload<'UPDATE_ADDITIONAL_USER_DATA_FAILED', string>;
type UpdateAdditionalUserDataCompleted = Action<'UPDATE_ADDITIONAL_USER_DATA_COMPLETED'>;

type UsernameUpdateRequest = ActionPayload<'USERNAME_UPDATE_PROCESS', UsernameUpdate>;
type UsernameUpdateSuccess = ActionPayload<'USERNAME_UPDATE_SUCCESS', string>;
type UsernameUpdateFailed = ActionPayload<'USERNAME_UPDATE_FAILED', string>;
type UsernameUpdateCompleted = Action<'USERNAME_UPDATE_COMPLETED'>;

type ProfileActions =
  | EmailUpdateRequest
  | EmailUpdateSuccess
  | EmailUpdateFailed
  | EmailUpdateCompleted
  | GetAdditionalUserDataRequest
  | GetAdditionalUserDataSuccess
  | GetAdditionalUserDataFailed
  | PasswordUpdateRequest
  | PasswordUpdateSuccess
  | PasswordUpdateFailed
  | PasswordUpdateCompleted
  | UpdateAdditionalUserDataRequest
  | UpdateAdditionalUserDataSuccess
  | UpdateAdditionalUserDataFailed
  | UpdateAdditionalUserDataCompleted
  | UsernameUpdateRequest
  | UsernameUpdateSuccess
  | UsernameUpdateFailed
  | UsernameUpdateCompleted;

export type {
  EmailUpdate,
  PasswordUpdate,
  UpdateAdditionalUserData,
  UsernameUpdate,
  ProfileState,
  EmailUpdateRequest,
  EmailUpdateSuccess,
  EmailUpdateFailed,
  EmailUpdateCompleted,
  GetAdditionalUserDataRequest,
  GetAdditionalUserDataSuccess,
  GetAdditionalUserDataFailed,
  PasswordUpdateRequest,
  PasswordUpdateSuccess,
  PasswordUpdateFailed,
  PasswordUpdateCompleted,
  UpdateAdditionalUserDataRequest,
  UpdateAdditionalUserDataSuccess,
  UpdateAdditionalUserDataFailed,
  UpdateAdditionalUserDataCompleted,
  UsernameUpdateRequest,
  UsernameUpdateSuccess,
  UsernameUpdateFailed,
  UsernameUpdateCompleted,
  ProfileActions,
};
