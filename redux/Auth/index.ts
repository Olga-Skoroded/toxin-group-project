import { auth } from './redux/reducer';
import { rootSaga } from './redux/sagas';

const reduxEntry = {
  reducers: { auth },
  sagas: [rootSaga],
};

export { reduxEntry };
