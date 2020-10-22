import { ProfileData } from 'api/entities/types';

export type FormData = ProfileData;

export type RegistrationFormProps = {
  isSuccess: boolean;
  isProcess: boolean;
  statusText: string;
  requestRegistration: (data: ProfileData) => void;
  stopRegistration: () => void;
};
