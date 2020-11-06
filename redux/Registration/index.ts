import registration from './redux/reducer';
import { rootSaga } from './redux/sagas';

export const reduxEntry = {
  reducers: { registration },
  sagas: [rootSaga],
};
