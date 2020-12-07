import { SagaIterator } from 'redux-saga';

import { ContactUsState, ContactUsActions } from 'features/ContactUs/redux/model';
import { FoodState, FoodActions } from 'modules/Services/redux/Food/model';

import { ApartmentState, ApartmentActions } from './Apartment/model';
import { Dependencies } from './api.model';
import { AuthState, AuthActions } from './Auth/model';
import { BookingState, BookingActions } from './Booking/model';
import { LanguageState, LanguageActions } from './Language/model';
import { ProfileState, ProfileActions } from './Profile/model';
import { RegistrationState, RegistrationActions } from './Registration/model';
import { SubscriptionState, SubscriptionActions } from './Subscriptions/model';

type AvailableStates =
  | ApartmentState
  | AuthState
  | BookingState
  | ContactUsState
  | FoodState
  | ProfileState
  | RegistrationState
  | LanguageState
  | SubscriptionState;

type AvailableActions =
  | ApartmentActions
  | AuthActions
  | BookingActions
  | ContactUsActions
  | FoodActions
  | ProfileActions
  | RegistrationActions
  | LanguageActions
  | SubscriptionActions;

type AppState = {
  apartment: ApartmentState;
  auth: AuthState;
  booking: BookingState;
  contactUs: ContactUsState;
  food: FoodState;
  language: LanguageState;
  profile: ProfileState;
  registration: RegistrationState;
  subscriptions: SubscriptionState;
};

type AvailableReducers = (state: AvailableStates, action: AvailableActions) => AvailableStates;

type SharedReduxEntries = {
  reducers: Record<string, AvailableReducers>;
  sagas: Array<(deps: Dependencies) => SagaIterator>;
}[];

export type { AvailableStates, AvailableActions, AppState, AvailableReducers, SharedReduxEntries };
