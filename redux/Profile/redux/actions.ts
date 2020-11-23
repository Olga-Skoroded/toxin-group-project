import { AdditionalUserInformation } from 'services/api/entities/model';
import { User } from 'services/api/Firebase/modules/Authentication';

import {
  EmailUpdate,
  EmailUpdateRequest,
  EmailUpdateSuccess,
  EmailUpdateFailed,
  EmailUpdateCompleted,
  GetAdditionalUserDataRequest,
  GetAdditionalUserDataSuccess,
  PasswordUpdate,
  PasswordUpdateRequest,
  PasswordUpdateSuccess,
  PasswordUpdateFailed,
  PasswordUpdateCompleted,
  UpdateAdditionalUserData,
  UsernameUpdate,
  UpdateAdditionalUserDataRequest,
  UpdateAdditionalUserDataSuccess,
  UpdateAdditionalUserDataFailed,
  UpdateAdditionalUserDataCompleted,
  UsernameUpdateRequest,
  UsernameUpdateSuccess,
  UsernameUpdateFailed,
  UsernameUpdateCompleted,
  GetAdditionalUserDataFailed,
} from '../model';

const emailUpdate = (data: EmailUpdate): EmailUpdateRequest => ({
  type: 'EMAIL_UPDATE_PROCESS',
  payload: data,
});

const emailUpdateSuccess = (statusText: string): EmailUpdateSuccess => ({
  type: 'EMAIL_UPDATE_SUCCESS',
  payload: statusText,
});

const emailUpdateFailed = (statusText: string): EmailUpdateFailed => ({
  type: 'EMAIL_UPDATE_FAILED',
  payload: statusText,
});

const completeEmailUpdate = (): EmailUpdateCompleted => ({
  type: 'EMAIL_UPDATE_COMPLETED',
});

const getAdditionalUserData = (user: User): GetAdditionalUserDataRequest => ({
  type: 'GET_ADDITIONAL_USER_DATA_PROCESS',
  payload: user,
});

const getAdditionalUserDataSuccess = (
  data: AdditionalUserInformation,
): GetAdditionalUserDataSuccess => ({
  type: 'GET_ADDITIONAL_USER_DATA_SUCCESS',
  payload: data,
});

const passwordUpdate = (data: PasswordUpdate): PasswordUpdateRequest => ({
  type: 'PASSWORD_UPDATE_PROCESS',
  payload: data,
});

const passwordUpdateSuccess = (statusText: string): PasswordUpdateSuccess => ({
  type: 'PASSWORD_UPDATE_SUCCESS',
  payload: statusText,
});

const passwordUpdateFailed = (statusText: string): PasswordUpdateFailed => ({
  type: 'PASSWORD_UPDATE_FAILED',
  payload: statusText,
});

const completePasswordUpdate = (): PasswordUpdateCompleted => ({
  type: 'PASSWORD_UPDATE_COMPLETED',
});

const updateAdditionalUserData = (
  data: UpdateAdditionalUserData,
): UpdateAdditionalUserDataRequest => ({
  type: 'UPDATE_ADDITIONAL_USER_DATA_PROCESS',
  payload: data,
});

const getAdditionalUserDataFailed = (): GetAdditionalUserDataFailed => ({
  type: 'GET_ADDITIONAL_USER_DATA_FAILED',
});

const updateAdditionalUserDataSuccess = (statusText: string): UpdateAdditionalUserDataSuccess => ({
  type: 'UPDATE_ADDITIONAL_USER_DATA_SUCCESS',
  payload: statusText,
});

const updateAdditionalUserDataFailed = (statusText: string): UpdateAdditionalUserDataFailed => ({
  type: 'UPDATE_ADDITIONAL_USER_DATA_FAILED',
  payload: statusText,
});

const completeAdditionalUserDataUpdate = (): UpdateAdditionalUserDataCompleted => ({
  type: 'UPDATE_ADDITIONAL_USER_DATA_COMPLETED',
});

const usernameUpdate = (data: UsernameUpdate): UsernameUpdateRequest => ({
  type: 'USERNAME_UPDATE_PROCESS',
  payload: data,
});

const usernameUpdateSuccess = (statusText: string): UsernameUpdateSuccess => ({
  type: 'USERNAME_UPDATE_SUCCESS',
  payload: statusText,
});

const usernameUpdateFailed = (statusText: string): UsernameUpdateFailed => ({
  type: 'USERNAME_UPDATE_FAILED',
  payload: statusText,
});

const completeUsernameUpdate = (): UsernameUpdateCompleted => ({
  type: 'USERNAME_UPDATE_COMPLETED',
});

export {
  emailUpdate,
  emailUpdateSuccess,
  emailUpdateFailed,
  completeEmailUpdate,
  getAdditionalUserData,
  getAdditionalUserDataSuccess,
  getAdditionalUserDataFailed,
  passwordUpdate,
  passwordUpdateSuccess,
  passwordUpdateFailed,
  completePasswordUpdate,
  updateAdditionalUserData,
  updateAdditionalUserDataSuccess,
  updateAdditionalUserDataFailed,
  completeAdditionalUserDataUpdate,
  usernameUpdate,
  usernameUpdateSuccess,
  usernameUpdateFailed,
  completeUsernameUpdate,
};
