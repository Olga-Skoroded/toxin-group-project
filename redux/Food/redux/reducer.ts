import { FoodState, FoodActions } from '../model';

const initialState: FoodState = {
  isGetFoodDataPending: false,
  foodData: null,
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
    default:
      return state;
  }
};

export { food };
