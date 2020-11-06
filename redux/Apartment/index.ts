import { apartment } from './redux/reducer';
import { rootSaga } from './redux/sagas';

const apartmentReduxEntry = {
  reducers: { apartment },
  sagas: [rootSaga],
};

export { apartmentReduxEntry };
