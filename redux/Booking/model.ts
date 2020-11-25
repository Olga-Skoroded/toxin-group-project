import { Action, ActionPayload } from 'redux/action.model';
import { Filters, BookedRoom, Apartment } from 'services/api/entities/model';
import { RoomProps } from 'shared/view/components/Room/Room.model';

type BookedHistoryList = { current: BookedRoom[]; history: BookedRoom[] };

type BookingState = {
  isPending: boolean;
  rooms: RoomProps[];
  isRequestSuccessful: boolean;
  error: Error;
  bookedRooms: BookedHistoryList;
  isBookingPending: boolean;
  isBookingSuccess: boolean;
  isBookingFailed: boolean;
  bookingStatusText: string;
  isCancelBookingPending: boolean;
  isCancelBookingSuccess: boolean;
  isCancelBookingFailed: boolean;
  cancelBookingStatusText: string;
};

type SelectedBookedRoom = {
  apartmentId: number;
  booked: { from: Date; to: Date };
  guests: { adults: number; children: number; babies: number };
  totalPrice: number;
  user: string;
};

type CancelBookingData = Omit<SelectedBookedRoom, 'guests' | 'totalPrice'>;

type RoomsRequest = ActionPayload<'LOAD_ROOMS', Filters>;

type PendingStatusUpdate = ActionPayload<'ROOMS_REQUEST_PENDING', boolean>;
type SetRooms = ActionPayload<'ROOMS_REQUEST_SUCCESS', Apartment[]>;
type SetFailedStatus = ActionPayload<'ROOMS_REQUEST_FAILED', Error>;

type LoadBookedHistory = ActionPayload<'LOAD_BOOKED_HISTORY', string>;
type UpdateBookedHistory = ActionPayload<'UPDATE_BOOKED_HISTORY', BookedHistoryList>;

type Booking = ActionPayload<'BOOKING', SelectedBookedRoom>;
type BookingSuccess = Action<'BOOKING_SUCCESS'>;
type BookingFailed = ActionPayload<'BOOKING_FAILED', string>;
type BookingCompleted = Action<'BOOKING_COMPLETED'>;

type CancelBooking = ActionPayload<'CANCEL_BOOKING', CancelBookingData>;
type CancelBookingSuccess = Action<'CANCEL_BOOKING_SUCCESS'>;
type CancelBookingFailed = ActionPayload<'CANCEL_BOOKING_FAILED', string>;
type CancelBookingCompleted = Action<'CANCEL_BOOKING_COMPLETED'>;

type BookingActions =
  | PendingStatusUpdate
  | SetRooms
  | SetFailedStatus
  | RoomsRequest
  | UpdateBookedHistory
  | LoadBookedHistory
  | Booking
  | BookingSuccess
  | BookingFailed
  | BookingCompleted
  | CancelBooking
  | CancelBookingSuccess
  | CancelBookingFailed
  | CancelBookingCompleted;

export type {
  BookedHistoryList,
  BookingState,
  SelectedBookedRoom,
  CancelBookingData,
  RoomsRequest,
  PendingStatusUpdate,
  SetRooms,
  SetFailedStatus,
  LoadBookedHistory,
  UpdateBookedHistory,
  Booking,
  BookingSuccess,
  BookingFailed,
  BookingCompleted,
  CancelBooking,
  CancelBookingSuccess,
  CancelBookingFailed,
  CancelBookingCompleted,
  BookingActions,
};
