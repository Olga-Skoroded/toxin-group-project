import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { takeLeadingAction } from 'redux/action.model';
import { Dependencies } from 'redux/api.model';
import { FoodData } from 'services/api/entities/model';

import { GetFoodDataRequest } from '../../model';
import { getFoodDataFailed, getFoodDataSuccess } from '../actions';

function* getFoodData({ api }: Dependencies) {
  try {
    const foodData: FoodData = yield call(api.food.load);
    yield put(getFoodDataSuccess(foodData));
  } catch (err) {
    yield put(getFoodDataFailed());
  }
}

function* rootSaga(deps: Dependencies): SagaIterator {
  yield takeLeadingAction<GetFoodDataRequest['type']>('GET_FOOD_DATA_PROCESS', getFoodData, deps);
}

export { rootSaga };
