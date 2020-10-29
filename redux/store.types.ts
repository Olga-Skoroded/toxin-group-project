import { SagaIterator } from 'redux-saga';

import { ApartmentActions, ApartmentState } from './Apartment/types';
import { AuthActions, AuthState } from './Auth/types';
import { BookingActions, BookingState } from './Booking/types';
import { RegistrationActions, RegistrationState } from './Registration/types';

export type AvailableStates = ApartmentState | AuthState | BookingState | RegistrationState;
export type AvailableActions =
  | ApartmentActions
  | AuthActions
  | BookingActions
  | RegistrationActions;

export type AppState = {
  apartment: ApartmentState;
  auth: AuthState;
  bookingReducer: BookingState;
  RegistrationReducer: RegistrationState;
};

export type AvailableReducers = (
  state: AvailableStates,
  action: AvailableActions,
) => AvailableStates;

export type SharedReduxEntries = {
  reducers: Record<string, AvailableReducers>;
  sagas: Array<() => SagaIterator>;
}[];
