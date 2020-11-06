import booking from './redux/reducer';
import { rootSaga } from './redux/sagas';

export const reduxEntry = {
  reducers: { booking },
  sagas: [rootSaga],
};
