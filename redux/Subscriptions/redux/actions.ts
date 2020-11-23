import {
  SubscriptionData,
  GetSubscriptionDataRequest,
  GetSubscriptionDataSuccess,
  GetSubscriptionDataFailed,
  SubscriptionUpdate,
  SubscriptionUpdateRequest,
  SubscriptionUpdateSuccess,
  SubscriptionUpdateFailed,
  SubscriptionUpdateCompleted,
} from '../model';

const getSubscriptionData = (email: string): GetSubscriptionDataRequest => ({
  type: 'GET_SUBSCRIPTION_DATA_PROCESS',
  payload: email,
});

const getSubscriptionDataSuccess = (data: SubscriptionData): GetSubscriptionDataSuccess => ({
  type: 'GET_SUBSCRIPTION_DATA_SUCCESS',
  payload: data,
});

const getSubscriptionDataFailed = (): GetSubscriptionDataFailed => ({
  type: 'GET_SUBSCRIPTION_DATA_FAILED',
});

const subscriptionUpdate = (data: SubscriptionUpdate): SubscriptionUpdateRequest => ({
  type: 'SUBSCRIPTION_UPDATE_PROCESS',
  payload: data,
});

const subscriptionUpdateSuccess = (statusText: string): SubscriptionUpdateSuccess => ({
  type: 'SUBSCRIPTION_UPDATE_SUCCESS',
  payload: statusText,
});

const subscriptionUpdateFailed = (statusText: string): SubscriptionUpdateFailed => ({
  type: 'SUBSCRIPTION_UPDATE_FAILED',
  payload: statusText,
});

const completeSubscriptionUpdate = (): SubscriptionUpdateCompleted => ({
  type: 'SUBSCRIPTION_UPDATE_COMPLETED',
});

export {
  getSubscriptionData,
  getSubscriptionDataSuccess,
  getSubscriptionDataFailed,
  subscriptionUpdate,
  subscriptionUpdateSuccess,
  subscriptionUpdateFailed,
  completeSubscriptionUpdate,
};
