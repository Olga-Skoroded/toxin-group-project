import { subscriptions } from './redux/reducer';
import { rootSaga } from './redux/sagas';

const subscriptionsReduxEntry = {
  reducers: { subscriptions },
  sagas: [rootSaga],
};

export { subscriptionsReduxEntry };
