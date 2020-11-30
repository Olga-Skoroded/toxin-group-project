import { FoodData } from 'services/api/entities/model';

import { GetFoodDataRequest, GetFoodDataSuccess, GetFoodDataFailed } from '../model';

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

export { getFoodData, getFoodDataSuccess, getFoodDataFailed };
