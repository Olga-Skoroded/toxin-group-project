import { Props as RoomProps } from 'components/Room/Room.types';
import { Filters, BookedRoom } from 'services/api/entities/types';

import { Apartment } from '../../services/api/entities/types';
import {
  ROOMS_REQUEST_PENDING,
  ROOMS_REQUEST_SUCCESS,
  ROOMS_REQUEST_FAILED,
  LOAD_ROOMS,
  LOAD_BOOKED_HISTORY,
  UPDATE_BOOKED_HISTORY,
  BOOK_ROOM,
} from './constants';

type Action<Z, T> = {
  type: Z;
  payload?: T;
};

export type SelectedBookedRoom = {
  apartmentId: number;
  booked: { from: Date; to: Date };
  totalPrice: number;
  user: string;
};

export type BookedHistoryList = { current: BookedRoom[]; history: BookedRoom[] };
export type RoomsRequest = Action<typeof LOAD_ROOMS, Filters>;
export type PendingStatusUpdate = Action<typeof ROOMS_REQUEST_PENDING, boolean>;
export type SetRooms = Action<typeof ROOMS_REQUEST_SUCCESS, Apartment[]>;
export type SetFailedStatus = Action<typeof ROOMS_REQUEST_FAILED, Error>;
export type LoadBookedHistory = Action<typeof LOAD_BOOKED_HISTORY, string>;
export type UpdateBookedHistory = Action<typeof UPDATE_BOOKED_HISTORY, BookedHistoryList>;
export type BookCurrentRoom = Action<typeof BOOK_ROOM, SelectedBookedRoom>;

export type BookingState = {
  isPending: boolean;
  rooms: RoomProps[];
  isRequestSuccessful: boolean;
  error: Error;
  bookedRooms: BookedHistoryList;
};

export type BookingActions =
  | PendingStatusUpdate
  | SetRooms
  | SetFailedStatus
  | RoomsRequest
  | UpdateBookedHistory
  | LoadBookedHistory;
