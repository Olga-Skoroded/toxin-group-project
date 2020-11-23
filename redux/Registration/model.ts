import { Action, ActionPayload } from 'redux/action.model';
import { UserCredential } from 'services/api/Firebase/modules/Authentication';

type ProfileData = {
  email: string;
  password: string;
  name: string;
  surname: string;
  birthDate: string;
  gender: 'male' | 'female';
  avatar: ArrayBuffer | Blob | Uint8Array;
  hasSpecialOffers: boolean;
};

type RegistrationState = {
  isSuccess: boolean;
  isProcess: boolean;
  statusText: string;
};

type RegistrationRequest = ActionPayload<'REGISTRATION_REQUEST', ProfileData>;
type RegistrationStatusSuccess = ActionPayload<'REGISTRATION_SUCCESS', UserCredential>;
type RegistrationStatusFailed = ActionPayload<'REGISTRATION_FAILED', string>;
type BreakRegistrationProcess = Action<'BREAK_REGISTRATION_PROCESS'>;

type RegistrationActions =
  | RegistrationRequest
  | RegistrationStatusSuccess
  | RegistrationStatusFailed
  | BreakRegistrationProcess;

export type {
  ProfileData,
  RegistrationState,
  RegistrationRequest,
  RegistrationStatusSuccess,
  RegistrationStatusFailed,
  BreakRegistrationProcess,
  RegistrationActions,
};
