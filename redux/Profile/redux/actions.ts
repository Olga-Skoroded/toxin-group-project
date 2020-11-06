import { User } from 'firebase';

import {
  EMAIL_UPDATE_PROCESS,
  EMAIL_UPDATE_COMPLETED,
  GET_ADDITIONAL_USER_DATA_PROCESS,
  PASSWORD_UPDATE_PROCESS,
  PASSWORD_UPDATE_COMPLETED,
  UPDATE_ADDITIONAL_USER_DATA_PROCESS,
  UPDATE_ADDITIONAL_USER_DATA_COMPLETED,
  USERNAME_UPDATE_PROCESS,
  USERNAME_UPDATE_COMPLETED,
} from '../constants';
import {
  EmailUpdate,
  PasswordUpdate,
  UpdateAdditionalUserData,
  UsernameUpdate,
  EmailUpdateRequest,
  EmailUpdateCompleted,
  GetAdditionalUserDataRequest,
  PasswordUpdateRequest,
  PasswordUpdateCompleted,
  UpdateAdditionalUserDataRequest,
  UpdateAdditionalUserDataCompleted,
  UsernameUpdateRequest,
  UsernameUpdateCompleted,
} from '../types';

const emailUpdate = (data: EmailUpdate): EmailUpdateRequest => ({
  type: EMAIL_UPDATE_PROCESS,
  payload: data,
});

const emailUpdateCompleted = (): EmailUpdateCompleted => ({
  type: EMAIL_UPDATE_COMPLETED,
});

const getAdditionalUserData = (user: User): GetAdditionalUserDataRequest => ({
  type: GET_ADDITIONAL_USER_DATA_PROCESS,
  payload: user,
});

const passwordUpdate = (data: PasswordUpdate): PasswordUpdateRequest => ({
  type: PASSWORD_UPDATE_PROCESS,
  payload: data,
});

const passwordUpdateCompleted = (): PasswordUpdateCompleted => ({
  type: PASSWORD_UPDATE_COMPLETED,
});

const updateAdditionalUserData = (
  data: UpdateAdditionalUserData,
): UpdateAdditionalUserDataRequest => ({
  type: UPDATE_ADDITIONAL_USER_DATA_PROCESS,
  payload: data,
});

const updateAdditionalUserDataCompleted = (): UpdateAdditionalUserDataCompleted => ({
  type: UPDATE_ADDITIONAL_USER_DATA_COMPLETED,
});

const usernameUpdate = (data: UsernameUpdate): UsernameUpdateRequest => ({
  type: USERNAME_UPDATE_PROCESS,
  payload: data,
});

const usernameUpdateCompleted = (): UsernameUpdateCompleted => ({
  type: USERNAME_UPDATE_COMPLETED,
});

export {
  emailUpdate,
  emailUpdateCompleted,
  getAdditionalUserData,
  passwordUpdate,
  passwordUpdateCompleted,
  updateAdditionalUserData,
  updateAdditionalUserDataCompleted,
  usernameUpdate,
  usernameUpdateCompleted,
};
