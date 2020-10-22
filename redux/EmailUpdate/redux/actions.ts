import { EMAIL_UPDATE_PROCESS } from '../constants';
import { SentData, EmailUpdateRequest } from '../types';

const emailUpdateRequest = (data: SentData): EmailUpdateRequest => ({
  type: EMAIL_UPDATE_PROCESS,
  payload: data,
});

export { emailUpdateRequest };