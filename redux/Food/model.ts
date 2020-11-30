import { Action, ActionPayload } from 'redux/action.model';
import { FoodData } from 'services/api/entities/model';

type FoodState = {
  isGetFoodDataPending: boolean;
  foodData: null | FoodData;
};

type GetFoodDataRequest = Action<'GET_FOOD_DATA_PROCESS'>;
type GetFoodDataSuccess = ActionPayload<'GET_FOOD_DATA_SUCCESS', FoodData>;
type GetFoodDataFailed = Action<'GET_FOOD_DATA_FAILED'>;

type FoodActions = GetFoodDataRequest | GetFoodDataSuccess | GetFoodDataFailed;

export type { FoodState, GetFoodDataRequest, GetFoodDataSuccess, GetFoodDataFailed, FoodActions };
