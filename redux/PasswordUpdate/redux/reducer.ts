import {
  PASSWORD_UPDATE_PROCESS,
  PASSWORD_UPDATE_SUCCESS,
  PASSWORD_UPDATE_FAILED,
} from '../constants';
import { PasswordUpdateActions, PasswordUpdateState } from '../types';

const initialState: PasswordUpdateState = {
  isCompleted: false,
  statusText: '',
};

const passwordUpdateReducer = (
  state: PasswordUpdateState = initialState,
  action: PasswordUpdateActions,
): PasswordUpdateState => {
  switch (action.type) {
    case PASSWORD_UPDATE_PROCESS:
      return {
        isCompleted: false,
        statusText: '',
      };
    case PASSWORD_UPDATE_SUCCESS:
      return {
        isCompleted: true,
        statusText: action.payload,
      };
    case PASSWORD_UPDATE_FAILED:
      return {
        isCompleted: true,
        statusText: action.payload,
      };
    default:
      return state;
  }
};

export { passwordUpdateReducer };
