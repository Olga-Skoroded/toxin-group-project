import {
  ROOMS_REQUEST_PENDING,
  ROOMS_REQUEST_SUCCESS,
  ROOMS_REQUEST_FAILED,
  LOAD_ROOMS,
  CURRENT_ROOM_REQUEST_SUCCESS,
  UPDATE_BOOKED_HISTORY,
  LOAD_BOOKED_HISTORY,
} from '../constants';
import { BookingActions, BookingState } from '../types';

const initialState: BookingState = {
  isRequestSuccessful: true,
  isPending: false,
  rooms: [],
  currentRoom: null,
  error: null,
  bookedRooms: null,
  isRatingProcess: false,
  ratingStatus: null,
  userRating: 0,
};

const booking = (state: BookingState = initialState, action: BookingActions): BookingState => {
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
    case 'RATING_PROCESS_RESPONSE':
      return {
        ...state,
        ratingStatus: action.payload,
      };
    case 'START_RATING_ROOM':
      return {
        ...state,
        isRatingProcess: true,
      };
    case 'FINISH_RATING_ROOM':
      return {
        ...state,
        ratingStatus: '',
        isRatingProcess: false,
      };
    case 'SET_NEW_ROOM_RATING':
      return {
        ...state,
        userRating: action.payload,
      };
    case CURRENT_ROOM_REQUEST_SUCCESS:
      return {
        ...state,
        isPending: false,
        isRequestSuccessful: true,
        currentRoom: {
          ...action.payload,
          number: action.payload.id,
          reviews: action.payload.reviews.map((review) => ({
            ...review,
            date: review.date.seconds * 1000,
          })),
        },
        userRating: action.payload.userRating,
      };
    case ROOMS_REQUEST_FAILED:
      return {
        ...state,
        isPending: false,
        isRequestSuccessful: false,
        error: action.payload,
      };
    case LOAD_BOOKED_HISTORY:
      return {
        ...state,
        isPending: true,
      };
    case UPDATE_BOOKED_HISTORY:
      return {
        ...state,
        isPending: false,
        bookedRooms: { ...action.payload },
      };
    default:
      return state;
  }
};

export default booking;
