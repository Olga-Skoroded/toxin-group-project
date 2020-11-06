import auth from './redux/reducer';
import { rootSaga } from './redux/sagas';

export const reduxEntry = {
  reducers: { auth },
  sagas: [rootSaga],
};
