import { Action, ActionPayload } from 'redux/action.model';

type SubscriptionData = {
  hasSpecialOffers: boolean;
};

type SubscriptionUpdate = {
  email: string;
  subscriptions: {
    hasSpecialOffers: boolean;
  };
};

type SubscriptionState = {
  subscriptionData: null | SubscriptionData;
  isUpdatePending: boolean;
  isUpdateCompleted: boolean;
  updateStatusText: string;
};

type GetSubscriptionDataRequest = ActionPayload<'GET_SUBSCRIPTION_DATA_PROCESS', string>;
type GetSubscriptionDataSuccess = ActionPayload<'GET_SUBSCRIPTION_DATA_SUCCESS', SubscriptionData>;
type GetSubscriptionDataFailed = Action<'GET_SUBSCRIPTION_DATA_FAILED'>;

type SubscriptionUpdateRequest = ActionPayload<'SUBSCRIPTION_UPDATE_PROCESS', SubscriptionUpdate>;
type SubscriptionUpdateSuccess = ActionPayload<'SUBSCRIPTION_UPDATE_SUCCESS', string>;
type SubscriptionUpdateFailed = ActionPayload<'SUBSCRIPTION_UPDATE_FAILED', string>;
type SubscriptionUpdateCompleted = Action<'SUBSCRIPTION_UPDATE_COMPLETED'>;

type SubscriptionActions =
  | GetSubscriptionDataRequest
  | GetSubscriptionDataSuccess
  | GetSubscriptionDataFailed
  | SubscriptionUpdateRequest
  | SubscriptionUpdateSuccess
  | SubscriptionUpdateFailed
  | SubscriptionUpdateCompleted;

export type {
  SubscriptionData,
  SubscriptionUpdate,
  SubscriptionState,
  GetSubscriptionDataRequest,
  GetSubscriptionDataSuccess,
  GetSubscriptionDataFailed,
  SubscriptionUpdateRequest,
  SubscriptionUpdateSuccess,
  SubscriptionUpdateFailed,
  SubscriptionUpdateCompleted,
  SubscriptionActions,
};
