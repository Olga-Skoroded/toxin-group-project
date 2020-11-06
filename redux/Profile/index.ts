import { profile } from './redux/reducer';
import { rootSaga } from './redux/sagas';

const profileReduxEntry = {
  reducers: { profile },
  sagas: [rootSaga],
};

export { profileReduxEntry };
