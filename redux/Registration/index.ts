import { registration } from './redux/reducer';
import { rootSaga } from './redux/sagas';

const reduxEntry = {
  reducers: { registration },
  sagas: [rootSaga],
};

export { reduxEntry };
