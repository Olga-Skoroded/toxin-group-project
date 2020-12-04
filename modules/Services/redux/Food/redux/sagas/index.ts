import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { takeLeadingAction } from 'redux/action.model';
import { Dependencies } from 'redux/api.model';
import { FoodData } from 'services/api/entities/model';

import { FoodOrderRequest, GetFoodDataRequest } from '../../model';
import {
  foodOrderFailed,
  foodOrderSuccess,
  getFoodDataFailed,
  getFoodDataSuccess,
} from '../actions';

function* getFoodData({ api }: Dependencies) {
  try {
    const foodData: FoodData = yield call(api.food.load);
    yield put(getFoodDataSuccess(foodData));
  } catch (err) {
    yield put(getFoodDataFailed());
  }
}

function* foodOrder({ api }: Dependencies, { payload }: FoodOrderRequest) {
  try {
    const { user, room, food } = payload;
    if (!room) throw new Error('Please select a room for food delivery');
    if (!user || !food) throw new Error('Failed to place food order');

    yield call(api.food.order, payload);
    yield put(foodOrderSuccess('Order has been successfully placed'));
  } catch ({ message }) {
    yield put(foodOrderFailed(message));
  }
}

function* rootSaga(deps: Dependencies): SagaIterator {
  yield takeLeadingAction<GetFoodDataRequest['type']>('GET_FOOD_DATA_PROCESS', getFoodData, deps);
  yield takeLeadingAction<FoodOrderRequest['type']>('FOOD_ORDER_PROCESS', foodOrder, deps);
}

export { rootSaga };
