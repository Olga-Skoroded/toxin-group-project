import { sortRooms } from 'shared/helpers/sortRooms';

import { BookingActions, BookingState } from '../model';

const initialState: BookingState = {
  isRequestSuccessful: true,
  isPending: false,
  rooms: [],
  sortedRooms: [],
  sortOrder: 'asc',
  sortParam: 'price',
  currentRoom: null,
  error: null,
  bookedRooms: null,
  isRatingProcess: false,
  ratingStatus: null,
  userRating: 0,
  isBookingPending: false,
  isBookingSuccess: false,
  isBookingFailed: false,
  bookingStatusText: '',
  isCancelBookingPending: false,
  isCancelBookingSuccess: false,
  isCancelBookingFailed: false,
  cancelBookingStatusText: '',
};

const booking = (state: BookingState = initialState, action: BookingActions): BookingState => {
  switch (action.type) {
    case 'LOAD_ROOMS':
      return { ...state, rooms: [] };
    case 'ROOMS_REQUEST_PENDING':
      return {
        ...state,
        isPending: action.payload,
        error: null,
      };
    case 'ROOMS_REQUEST_SUCCESS':
      return {
        ...state,
        rooms: action.payload.map((room) => ({ ...room, number: room.id })),
        isPending: false,
        isRequestSuccessful: true,
      };
    case 'SORT_ROOMS':
      return {
        ...state,
        sortOrder: action.payload.order,
        sortParam: action.payload.param,
        sortedRooms: state.rooms
          ? sortRooms(state.rooms.slice(), state.sortOrder, state.sortParam)
          : [],
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
    case 'CURRENT_ROOM_REQUEST_SUCCESS':
      return {
        ...state,
        isPending: false,
        isRequestSuccessful: true,
        currentRoom: {
          ...action.payload,
          number: action.payload.id,
          reviews: action.payload.reviews.map((review) => ({
            ...review,
            date: review.date.toDate(),
          })),
        },
        userRating: action.payload.userRating,
      };
    case 'ROOMS_REQUEST_FAILED':
      return {
        ...state,
        isPending: false,
        isRequestSuccessful: false,
        error: action.payload,
      };
    case 'LOAD_BOOKED_HISTORY':
      return {
        ...state,
        isPending: true,
      };
    case 'UPDATE_BOOKED_HISTORY':
      return {
        ...state,
        isPending: false,
        bookedRooms: { ...action.payload },
      };
    case 'BOOKING': {
      return {
        ...state,
        isBookingPending: true,
        isBookingSuccess: false,
        isBookingFailed: false,
        bookingStatusText: '',
      };
    }
    case 'BOOKING_SUCCESS': {
      return {
        ...state,
        isBookingPending: false,
        isBookingSuccess: true,
        isBookingFailed: false,
        bookingStatusText: '',
      };
    }
    case 'BOOKING_FAILED': {
      return {
        ...state,
        isBookingPending: false,
        isBookingSuccess: false,
        isBookingFailed: true,
        bookingStatusText: action.payload,
      };
    }
    case 'BOOKING_COMPLETED': {
      return {
        ...state,
        isBookingPending: false,
        isBookingSuccess: false,
        isBookingFailed: false,
        bookingStatusText: '',
      };
    }
    case 'CANCEL_BOOKING': {
      return {
        ...state,
        isCancelBookingPending: true,
        isCancelBookingSuccess: false,
        isCancelBookingFailed: false,
        cancelBookingStatusText: '',
      };
    }
    case 'CANCEL_BOOKING_SUCCESS': {
      return {
        ...state,
        isCancelBookingPending: false,
        isCancelBookingSuccess: true,
        isCancelBookingFailed: false,
        cancelBookingStatusText: '',
      };
    }
    case 'CANCEL_BOOKING_FAILED': {
      return {
        ...state,
        isCancelBookingPending: false,
        isCancelBookingSuccess: false,
        isCancelBookingFailed: true,
        cancelBookingStatusText: action.payload,
      };
    }
    case 'CANCEL_BOOKING_COMPLETED': {
      return {
        ...state,
        isCancelBookingPending: false,
        isCancelBookingSuccess: false,
        isCancelBookingFailed: false,
        cancelBookingStatusText: '',
      };
    }
    default:
      return state;
  }
};

export { booking };
