import { RegistrationState, RegistrationActions } from '../model';

const initialState: RegistrationState = {
  isSuccess: false,
  isProcess: false,
  statusText: '',
};

const registration = (
  state: RegistrationState = initialState,
  action: RegistrationActions,
): RegistrationState => {
  switch (action.type) {
    case 'REGISTRATION_REQUEST':
      return {
        ...state,
        isProcess: true,
        statusText: '',
      };
    case 'REGISTRATION_SUCCESS':
      return {
        ...state,
        isSuccess: true,
      };
    case 'REGISTRATION_FAILED':
      return {
        ...state,
        isSuccess: false,
        statusText: action.payload,
      };
    case 'BREAK_REGISTRATION_PROCESS':
      return {
        ...state,
        isProcess: false,
      };
    default:
      return state;
  }
};

export { registration };
