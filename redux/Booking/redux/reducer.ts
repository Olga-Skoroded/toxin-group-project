import {
  ROOMS_REQUEST_PENDING,
  ROOMS_REQUEST_SUCCESS,
  ROOMS_REQUEST_FAILED,
  LOAD_ROOMS,
  CURRENT_ROOM_REQUEST_SUCCESS,
} from '../constants';
import { BookingActions, BookingState } from '../types';

const initialState: BookingState = {
  isRequestSuccessful: true,
  isPending: false,
  rooms: [],
  currentRoom: null,
  error: null,
};

const bookingReducer = (
  state: BookingState = initialState,
  action: BookingActions,
): BookingState => {
  switch (action.type) {
    case LOAD_ROOMS:
      return { ...state, rooms: [] };
    case ROOMS_REQUEST_PENDING:
      return {
        ...state,
        isPending: action.payload,
        error: null,
      };
    case ROOMS_REQUEST_SUCCESS:
      return {
        ...state,
        rooms: action.payload.map((room) => ({ ...room, number: room.id })),
        isPending: false,
        isRequestSuccessful: true,
      };
    case CURRENT_ROOM_REQUEST_SUCCESS:
      return {
        ...state,
        isPending: false,
        isRequestSuccessful: true,
        currentRoom: { ...action.payload, number: action.payload.id },
      };
    case ROOMS_REQUEST_FAILED:
      return {
        ...state,
        isPending: false,
        isRequestSuccessful: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default bookingReducer;
