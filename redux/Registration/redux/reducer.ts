import {
  REGISTRATION_FAILED,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  BREAK_REGISTRATION_PROCESS,
} from '../constants';
import { RegistrationState, RegistrationActions } from '../types';

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
    case REGISTRATION_REQUEST:
      return {
        ...state,
        statusText: '',
        isProcess: true,
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
      };
    case REGISTRATION_FAILED:
      return {
        ...state,
        isSuccess: false,
        statusText: action.payload,
      };
    case BREAK_REGISTRATION_PROCESS:
      return {
        ...state,
        isProcess: false,
      };
    default:
      return state;
  }
};

export default registration;
