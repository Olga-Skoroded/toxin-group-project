import { food } from './redux/reducer';
import { rootSaga } from './redux/sagas';

const foodReduxEntry = {
  reducers: { food },
  sagas: [rootSaga],
};

export { foodReduxEntry };
