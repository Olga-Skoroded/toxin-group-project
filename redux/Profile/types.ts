import { AdditionalUserInformation } from 'api/entities/types';
import { User } from 'api/Firebase/modules/Authentication/types';

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
} from './constants';

type Action<Z, T> = {
  type: Z;
  payload?: T;
};

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
    receiveOffers?: boolean;
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

type EmailUpdateRequest = Action<typeof EMAIL_UPDATE_PROCESS, EmailUpdate>;
type EmailUpdateSuccess = Action<typeof EMAIL_UPDATE_SUCCESS, string>;
type EmailUpdateFailed = Action<typeof EMAIL_UPDATE_FAILED, string>;
type EmailUpdateCompleted = Action<typeof EMAIL_UPDATE_COMPLETED, string>;
type GetAdditionalUserDataRequest = Action<typeof GET_ADDITIONAL_USER_DATA_PROCESS, User>;
type GetAdditionalUserDataSuccess = Action<
  typeof GET_ADDITIONAL_USER_DATA_SUCCESS,
  AdditionalUserInformation
>;
type GetAdditionalUserDataFailed = Action<typeof GET_ADDITIONAL_USER_DATA_FAILED, null>;
type PasswordUpdateRequest = Action<typeof PASSWORD_UPDATE_PROCESS, PasswordUpdate>;
type PasswordUpdateSuccess = Action<typeof PASSWORD_UPDATE_SUCCESS, string>;
type PasswordUpdateFailed = Action<typeof PASSWORD_UPDATE_FAILED, string>;
type PasswordUpdateCompleted = Action<typeof PASSWORD_UPDATE_COMPLETED, string>;
type UpdateAdditionalUserDataRequest = Action<
  typeof UPDATE_ADDITIONAL_USER_DATA_PROCESS,
  UpdateAdditionalUserData
>;
type UpdateAdditionalUserDataSuccess = Action<typeof UPDATE_ADDITIONAL_USER_DATA_SUCCESS, string>;
type UpdateAdditionalUserDataFailed = Action<typeof UPDATE_ADDITIONAL_USER_DATA_FAILED, string>;
type UpdateAdditionalUserDataCompleted = Action<
  typeof UPDATE_ADDITIONAL_USER_DATA_COMPLETED,
  string
>;
type UsernameUpdateRequest = Action<typeof USERNAME_UPDATE_PROCESS, UsernameUpdate>;
type UsernameUpdateSuccess = Action<typeof USERNAME_UPDATE_SUCCESS, string>;
type UsernameUpdateFailed = Action<typeof USERNAME_UPDATE_FAILED, string>;
type UsernameUpdateCompleted = Action<typeof USERNAME_UPDATE_COMPLETED, string>;

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
