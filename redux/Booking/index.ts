import { booking } from './redux/reducer';
import { rootSaga } from './redux/sagas';

const reduxEntry = {
  reducers: { booking },
  sagas: [rootSaga],
};

export { reduxEntry };
