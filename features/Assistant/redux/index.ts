import { assistant } from './redux/reducer';
import { rootSaga } from './redux/sagas';

const reduxEntry = {
  reducers: { assistant },
  sagas: [rootSaga],
};

export { reduxEntry };
