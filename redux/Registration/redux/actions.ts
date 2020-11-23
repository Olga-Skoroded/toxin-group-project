import { UserCredential } from 'services/api/Firebase/modules/Authentication';

import {
  BreakRegistrationProcess,
  ProfileData,
  RegistrationRequest,
  RegistrationStatusFailed,
  RegistrationStatusSuccess,
} from '../model';

const registration = (data: ProfileData): RegistrationRequest => ({
  type: 'REGISTRATION_REQUEST',
  payload: data,
});

const registrationStatusSuccess = (user: UserCredential): RegistrationStatusSuccess => ({
  type: 'REGISTRATION_SUCCESS',
  payload: user,
});

const registrationStatusFailed = (statusText: string): RegistrationStatusFailed => ({
  type: 'REGISTRATION_FAILED',
  payload: statusText,
});

const cancelRegistration = (): BreakRegistrationProcess => ({
  type: 'BREAK_REGISTRATION_PROCESS',
});

export { registration, registrationStatusSuccess, registrationStatusFailed, cancelRegistration };
