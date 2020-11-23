import { Filters, BookedRoom, Review } from 'api/entities/types';
import { Props as RoomProps } from 'components/Room/Room.types';

import { Apartment } from '../../api/entities/types';
import {
  ROOMS_REQUEST_PENDING,
  ROOMS_REQUEST_SUCCESS,
  ROOMS_REQUEST_FAILED,
  LOAD_ROOMS,
  CURRENT_ROOM_REQUEST_SUCCESS,
  LOAD_ROOM_INFO,
  LOAD_BOOKED_HISTORY,
  UPDATE_BOOKED_HISTORY,
  BOOK_ROOM,
} from './constants';

type Action<Z, T> = {
  type: Z;
  payload?: T;
};

export type CommentData = { commentData: Review; roomId: number };
export type SetRoomReview = Action<'SET_ROOM_REVIEW', CommentData>;
export type SetRoomRating = Action<'SET_ROOM_RATING', RoomRatingRequest>;
export type FinishRoomRating = Action<'FINISH_ROOM_RATING', null>;

export type SelectedBookedRoom = {
  apartmentId: number;
  booked: { from: Date; to: Date };
  totalPrice: number;
  user: string;
};

export type RoomRatingRequest = { userEmail: string; roomId: number; rating: number };
export type BookedHistoryList = { current: BookedRoom[]; history: BookedRoom[] };
export type RoomsRequest = Action<typeof LOAD_ROOMS, Filters>;
export type PendingStatusUpdate = Action<typeof ROOMS_REQUEST_PENDING, boolean>;
export type SetRooms = Action<typeof ROOMS_REQUEST_SUCCESS, Apartment[]>;
export type CurrentRoomRequest = Action<typeof LOAD_ROOM_INFO, { id: number; email: string }>;
export type SetRoom = Action<typeof CURRENT_ROOM_REQUEST_SUCCESS, Apartment & { userRating }>;
export type SetFailedStatus = Action<typeof ROOMS_REQUEST_FAILED, Error>;
export type LoadBookedHistory = Action<typeof LOAD_BOOKED_HISTORY, string>;
export type UpdateBookedHistory = Action<typeof UPDATE_BOOKED_HISTORY, BookedHistoryList>;
export type BookCurrentRoom = Action<typeof BOOK_ROOM, SelectedBookedRoom>;
export type RatingProcessResponse = Action<'RATING_PROCESS_RESPONSE', string>;
export type StartRatingRoom = Action<'START_RATING_ROOM', null>;
export type FinishRatingRoom = Action<'FINISH_RATING_ROOM', null>;
export type SetNewRatingRoom = Action<'SET_NEW_ROOM_RATING', number>;

export type BookingState = {
  isPending: boolean;
  rooms: RoomProps[];
  currentRoom: RoomProps;
  isRequestSuccessful: boolean;
  error: Error;
  bookedRooms: BookedHistoryList;
  isRatingProcess: boolean;
  userRating: number;
  ratingStatus: string;
};

export type BookingActions =
  | PendingStatusUpdate
  | SetRooms
  | SetFailedStatus
  | RoomsRequest
  | SetRoom
  | UpdateBookedHistory
  | LoadBookedHistory
  | CurrentRoomRequest
  | RatingProcessResponse
  | StartRatingRoom
  | FinishRatingRoom
  | SetNewRatingRoom;
