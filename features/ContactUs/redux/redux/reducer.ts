import { ContactUsState, ContactUsActions } from '../model';

const initialState: ContactUsState = {
  isPending: false,
  isSuccess: false,
  isFailed: false,
  isCompleted: false,
  statusText: '',
};

const contactUs = (
  state: ContactUsState = initialState,
  actions: ContactUsActions,
): ContactUsState => {
  switch (actions.type) {
    case 'CONTACT_US_PROCESS':
      return {
        ...state,
        isPending: true,
        isSuccess: false,
        isFailed: false,
        isCompleted: false,
        statusText: '',
      };
    case 'CONTACT_US_SUCCESS':
      return {
        ...state,
        isPending: false,
        isSuccess: true,
        isFailed: false,
        isCompleted: true,
        statusText: actions.payload,
      };
    case 'CONTACT_US_FAILED':
      return {
        ...state,
        isPending: false,
        isSuccess: false,
        isFailed: true,
        isCompleted: true,
        statusText: actions.payload,
      };
    case 'CONTACT_US_COMPLETED':
      return {
        ...state,
        isPending: false,
        isSuccess: false,
        isFailed: false,
        isCompleted: false,
        statusText: '',
      };
    default:
      return state;
  }
};

export { contactUs };
