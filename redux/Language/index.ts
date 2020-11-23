import { language } from './redux/reducer';
import { rootSaga } from './redux/sagas';

const reduxEntry = {
  reducers: { language },
  sagas: [rootSaga],
};

export { reduxEntry };
