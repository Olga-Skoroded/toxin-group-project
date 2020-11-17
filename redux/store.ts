import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

import { Api } from 'services/api/api';

import { apartmentReduxEntry } from './Apartment';
import { reduxEntry as AuthReduxEntry } from './Auth';
import { reduxEntry as BookingReduxEntry } from './Booking';
import { reduxEntry as LanguageReduxEntry } from './Language';
import { profileReduxEntry } from './Profile';
import { reduxEntry as RegistrationReduxEntry } from './Registration';
import { SharedReduxEntries, AvailableReducers, Dependencies } from './store.types';
import { subscriptionsReduxEntry } from './Subscriptions';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const sharedReduxEntries: SharedReduxEntries = [
  apartmentReduxEntry,
  AuthReduxEntry,
  BookingReduxEntry,
  profileReduxEntry,
  RegistrationReduxEntry,
  LanguageReduxEntry,
  subscriptionsReduxEntry,
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

const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

const deps: Dependencies = {
  api: new Api(),
};

sharedReduxEntries.forEach((module) => {
  const { sagas } = module;

  sagas.forEach((saga) => sagaMiddleware.run(saga, deps));
});

export { store };
