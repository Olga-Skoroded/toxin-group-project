import { FoodData } from 'services/api/entities/model';

import {
  FoodOrderData,
  GetFoodDataRequest,
  GetFoodDataSuccess,
  GetFoodDataFailed,
  FoodOrderRequest,
  FoodOrderSuccess,
  FoodOrderFailed,
  FoodOrderCompleted,
} from '../model';

const getFoodData = (): GetFoodDataRequest => ({
  type: 'GET_FOOD_DATA_PROCESS',
});

const getFoodDataSuccess = (data: FoodData): GetFoodDataSuccess => ({
  type: 'GET_FOOD_DATA_SUCCESS',
  payload: data,
});

const getFoodDataFailed = (): GetFoodDataFailed => ({
  type: 'GET_FOOD_DATA_FAILED',
});

const foodOrder = (data: FoodOrderData): FoodOrderRequest => ({
  type: 'FOOD_ORDER_PROCESS',
  payload: data,
});

const foodOrderSuccess = (statusText: string): FoodOrderSuccess => ({
  type: 'FOOD_ORDER_SUCCESS',
  payload: statusText,
});

const foodOrderFailed = (statusText: string): FoodOrderFailed => ({
  type: 'FOOD_ORDER_FAILED',
  payload: statusText,
});

const completeFoodOrder = (): FoodOrderCompleted => ({
  type: 'FOOD_ORDER_COMPLETED',
});

export {
  getFoodData,
  getFoodDataSuccess,
  getFoodDataFailed,
  foodOrder,
  foodOrderSuccess,
  foodOrderFailed,
  completeFoodOrder,
};
