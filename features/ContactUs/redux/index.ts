import { contactUs } from './redux/reducer';
import { rootSaga } from './redux/sagas';

const contactUsReduxEntry = {
  reducers: { contactUs },
  sagas: [rootSaga],
};

export { contactUsReduxEntry };
