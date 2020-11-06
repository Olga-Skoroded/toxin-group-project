import { Filters, BookedRoom } from 'api/entities/types';
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
} from './constants';

type Action<Z, T> = {
  type: Z;
  payload?: T;
};

export type BookedHistoryList = { current: BookedRoom[]; history: BookedRoom[] };
export type RoomsRequest = Action<typeof LOAD_ROOMS, Filters>;
export type PendingStatusUpdate = Action<typeof ROOMS_REQUEST_PENDING, boolean>;
export type SetRooms = Action<typeof ROOMS_REQUEST_SUCCESS, Apartment[]>;
export type CurrentRoomRequest = Action<typeof LOAD_ROOM_INFO, number>;
export type SetRoom = Action<typeof CURRENT_ROOM_REQUEST_SUCCESS, Apartment>;
export type SetFailedStatus = Action<typeof ROOMS_REQUEST_FAILED, Error>;
export type LoadBookedHistory = Action<typeof LOAD_BOOKED_HISTORY, string>;
export type UpdateBookedHistory = Action<typeof UPDATE_BOOKED_HISTORY, BookedHistoryList>;

export type BookingState = {
  isPending: boolean;
  rooms: RoomProps[];
  currentRoom: RoomProps;
  isRequestSuccessful: boolean;
  error: Error;
  bookedRooms: BookedHistoryList;
};

export type BookingActions =
  | PendingStatusUpdate
  | SetRooms
  | SetFailedStatus
  | RoomsRequest
  | SetRoom
  | UpdateBookedHistory
  | LoadBookedHistory
  | CurrentRoomRequest;
