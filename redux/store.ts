import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

import { reduxEntry as AuthReduxEntry } from './Auth';
import { reduxEntry as BookingReduxEntry } from './Booking';
import { emailUpdateReduxEntry } from './EmailUpdate';
import { getAdditionalUserDataReduxEntry } from './GetAdditionalUserData';
import { passwordUpdateReduxEntry } from './PasswordUpdate';
import { reduxEntry as RegistrationReduxEntry } from './Registration';
import { SharedReduxEntries, AvailableReducers } from './store.types';
import { updateAdditionalUserDataReduxEntry } from './UpdateAdditionalUserData';
import { usernameUpdateReduxEntry } from './UsernameUpdate';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const sharedReduxEntries: SharedReduxEntries = [
  AuthReduxEntry,
  BookingReduxEntry,
  getAdditionalUserDataReduxEntry,
  emailUpdateReduxEntry,
  updateAdditionalUserDataReduxEntry,
  passwordUpdateReduxEntry,
  RegistrationReduxEntry,
  usernameUpdateReduxEntry,
];

let preparedReducers: Record<string, AvailableReducers> = {};

sharedReduxEntries.forEach((module) => {
  const { reducers } = module;

  preparedReducers = {
    ...preparedReducers,
    ...reducers,
  };
});

const rootReducer = combineReducers(preparedReducers);

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

sharedReduxEntries.forEach((module) => {
  const { sagas } = module;

  sagas.forEach((saga) => sagaMiddleware.run(saga));
});
