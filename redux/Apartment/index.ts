import { apartment } from './redux/reducer';
import { rootSaga } from './redux/sagas';

export const apartmentReduxEntry = {
  reducers: { apartment },
  sagas: [rootSaga],
};
