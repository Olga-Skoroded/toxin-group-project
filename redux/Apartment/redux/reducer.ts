import {
  GET_ROOM_DETAILS_PROCESS,
  GET_ROOM_DETAILS_SUCCESS,
  GET_ROOM_DETAILS_FAILED,
} from '../constants';
import { ApartmentState, ApartmentActions } from '../types';

const initialState: ApartmentState = {
  isGetRoomDetailsPending: false,
  roomDetails: null,
};

const apartment = (
  state: ApartmentState = initialState,
  actions: ApartmentActions,
): ApartmentState => {
  switch (actions.type) {
    case GET_ROOM_DETAILS_PROCESS:
      return {
        ...state,
        isGetRoomDetailsPending: true,
        roomDetails: null,
      };
    case GET_ROOM_DETAILS_SUCCESS:
      return {
        ...state,
        isGetRoomDetailsPending: false,
        roomDetails: actions.payload,
      };
    case GET_ROOM_DETAILS_FAILED:
      return {
        ...state,
        isGetRoomDetailsPending: false,
        roomDetails: null,
      };
    default:
      return state;
  }
};

export { apartment };
