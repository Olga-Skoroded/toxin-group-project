import { ContactUsData } from 'services/api/entities/model';

import { ContactUsRequest, ContactUsSuccess, ContactUsFailed, ContactUsCompleted } from '../model';

const contactUs = (data: ContactUsData): ContactUsRequest => ({
  type: 'CONTACT_US_PROCESS',
  payload: data,
});

const contactUsSuccess = (statusText: string): ContactUsSuccess => ({
  type: 'CONTACT_US_SUCCESS',
  payload: statusText,
});

const contactUsFailed = (statusText: string): ContactUsFailed => ({
  type: 'CONTACT_US_FAILED',
  payload: statusText,
});

const completeContactUs = (): ContactUsCompleted => ({
  type: 'CONTACT_US_COMPLETED',
});

export { contactUs, contactUsSuccess, contactUsFailed, completeContactUs };
