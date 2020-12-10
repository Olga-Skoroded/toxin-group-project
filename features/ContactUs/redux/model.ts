import { Action, ActionPayload } from 'redux/action.model';
import { ContactUsData } from 'services/api/entities/model';

type ContactUsState = {
  isPending: boolean;
  isSuccess: boolean;
  isFailed: boolean;
  isCompleted: boolean;
  statusText: string;
};

type ContactUsRequest = ActionPayload<'CONTACT_US_PROCESS', ContactUsData>;
type ContactUsSuccess = ActionPayload<'CONTACT_US_SUCCESS', string>;
type ContactUsFailed = ActionPayload<'CONTACT_US_FAILED', string>;
type ContactUsCompleted = Action<'CONTACT_US_COMPLETED'>;

type ContactUsActions = ContactUsRequest | ContactUsSuccess | ContactUsFailed | ContactUsCompleted;

export type {
  ContactUsState,
  ContactUsRequest,
  ContactUsSuccess,
  ContactUsFailed,
  ContactUsCompleted,
  ContactUsActions,
};
