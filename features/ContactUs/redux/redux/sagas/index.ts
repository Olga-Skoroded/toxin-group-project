import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { takeLeadingAction } from 'redux/action.model';
import { Dependencies } from 'redux/api.model';

import { ContactUsRequest } from '../../model';
import { contactUsFailed, contactUsSuccess } from '../actions';

function* contactUs({ api }: Dependencies, { payload }: ContactUsRequest) {
  try {
    yield call(api.contactUs.add, payload);
    yield put(
      contactUsSuccess(
        'Your question has been accepted for consideration, we will contact you shortly',
      ),
    );
  } catch ({ message }) {
    yield put(contactUsFailed('An error occured, please try again later'));
  }
}

function* rootSaga(deps: Dependencies): SagaIterator {
  yield takeLeadingAction<ContactUsRequest['type']>('CONTACT_US_PROCESS', contactUs, deps);
}

export { rootSaga };
