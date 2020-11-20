import { ActionPayload } from 'redux/action.model';
import { Filters, BookedRoom, Apartment } from 'services/api/entities/model';
import { RoomProps } from 'shared/view/components/Room/Room.model';

type BookedHistoryList = { current: BookedRoom[]; history: BookedRoom[] };

type BookingState = {
  isPending: boolean;
  rooms: RoomProps[];
  isRequestSuccessful: boolean;
  error: Error;
  bookedRooms: BookedHistoryList;
};

type SelectedBookedRoom = {
  apartmentId: number;
  booked: { from: Date; to: Date };
  totalPrice: number;
  user: string;
};

type RoomsRequest = ActionPayload<'LOAD_ROOMS', Filters>;

type PendingStatusUpdate = ActionPayload<'ROOMS_REQUEST_PENDING', boolean>;
type SetRooms = ActionPayload<'ROOMS_REQUEST_SUCCESS', Apartment[]>;
type SetFailedStatus = ActionPayload<'ROOMS_REQUEST_FAILED', Error>;

type LoadBookedHistory = ActionPayload<'LOAD_BOOKED_HISTORY', string>;
type UpdateBookedHistory = ActionPayload<'UPDATE_BOOKED_HISTORY', BookedHistoryList>;

type BookCurrentRoom = ActionPayload<'BOOK_ROOM', SelectedBookedRoom>;

type BookingActions =
  | PendingStatusUpdate
  | SetRooms
  | SetFailedStatus
  | RoomsRequest
  | UpdateBookedHistory
  | LoadBookedHistory;

export type {
  SelectedBookedRoom,
  BookedHistoryList,
  RoomsRequest,
  PendingStatusUpdate,
  SetRooms,
  SetFailedStatus,
  LoadBookedHistory,
  UpdateBookedHistory,
  BookCurrentRoom,
  BookingState,
  BookingActions,
};
