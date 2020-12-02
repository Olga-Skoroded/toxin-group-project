import { Action, ActionPayload } from 'redux/action.model';
import { FoodData, FoodOrderData } from 'services/api/entities/model';

type FoodState = {
  isGetFoodDataPending: boolean;
  foodData: null | FoodData;
  isFoodOrderPending: boolean;
  isFoodOrderSuccess: boolean;
  isFoodOrderFailed: boolean;
  isFoodOrderCompleted: boolean;
  foodOrderStatusText: string;
};

type GetFoodDataRequest = Action<'GET_FOOD_DATA_PROCESS'>;
type GetFoodDataSuccess = ActionPayload<'GET_FOOD_DATA_SUCCESS', FoodData>;
type GetFoodDataFailed = Action<'GET_FOOD_DATA_FAILED'>;

type FoodOrderRequest = ActionPayload<'FOOD_ORDER_PROCESS', FoodOrderData>;
type FoodOrderSuccess = ActionPayload<'FOOD_ORDER_SUCCESS', string>;
type FoodOrderFailed = ActionPayload<'FOOD_ORDER_FAILED', string>;
type FoodOrderCompleted = Action<'FOOD_ORDER_COMPLETED'>;

type FoodActions =
  | GetFoodDataRequest
  | GetFoodDataSuccess
  | GetFoodDataFailed
  | FoodOrderRequest
  | FoodOrderSuccess
  | FoodOrderFailed
  | FoodOrderCompleted;

export type {
  FoodState,
  FoodOrderData,
  GetFoodDataRequest,
  GetFoodDataSuccess,
  GetFoodDataFailed,
  FoodOrderRequest,
  FoodOrderSuccess,
  FoodOrderFailed,
  FoodOrderCompleted,
  FoodActions,
};
