import { FoodState, FoodActions } from '../model';

const initialState: FoodState = {
  isGetFoodDataPending: false,
  foodData: null,
  isFoodOrderPending: false,
  isFoodOrderSuccess: false,
  isFoodOrderFailed: false,
  isFoodOrderCompleted: false,
  foodOrderStatusText: '',
};

const food = (state: FoodState = initialState, actions: FoodActions): FoodState => {
  switch (actions.type) {
    case 'GET_FOOD_DATA_PROCESS':
      return {
        ...state,
        isGetFoodDataPending: true,
        foodData: null,
      };
    case 'GET_FOOD_DATA_SUCCESS':
      return {
        ...state,
        isGetFoodDataPending: false,
        foodData: actions.payload,
      };
    case 'GET_FOOD_DATA_FAILED':
      return {
        ...state,
        isGetFoodDataPending: false,
        foodData: null,
      };
    case 'FOOD_ORDER_PROCESS':
      return {
        ...state,
        isFoodOrderPending: true,
        isFoodOrderSuccess: false,
        isFoodOrderFailed: false,
        isFoodOrderCompleted: false,
        foodOrderStatusText: '',
      };
    case 'FOOD_ORDER_SUCCESS':
      return {
        ...state,
        isFoodOrderPending: false,
        isFoodOrderSuccess: true,
        isFoodOrderFailed: false,
        isFoodOrderCompleted: true,
        foodOrderStatusText: actions.payload,
      };
    case 'FOOD_ORDER_FAILED':
      return {
        ...state,
        isFoodOrderPending: false,
        isFoodOrderSuccess: false,
        isFoodOrderFailed: true,
        isFoodOrderCompleted: true,
        foodOrderStatusText: actions.payload,
      };
    case 'FOOD_ORDER_COMPLETED':
      return {
        ...state,
        isFoodOrderPending: false,
        isFoodOrderSuccess: false,
        isFoodOrderFailed: false,
        isFoodOrderCompleted: false,
        foodOrderStatusText: '',
      };
    default:
      return state;
  }
};

export { food };
