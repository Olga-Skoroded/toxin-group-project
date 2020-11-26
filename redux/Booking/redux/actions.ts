import { Apartment, Filters, CommentData, RoomRatingData } from 'services/api/entities/model';

import {
  RoomsRequest,
  CurrentRoomRequest,
  LoadBookedHistory,
  SelectedBookedRoom,
  SetRoomReview,
  SetRoomRating,
  FinishRoomRating,
  PendingStatusUpdate,
  SetRooms,
  SetFailedStatus,
  BookedHistoryList,
  UpdateBookedHistory,
  SetRoom,
  StartRatingRoom,
  SetNewRatingRoom,
  RatingProcessResponse,
  RoomData,
  Booking,
  BookingSuccess,
  BookingFailed,
  BookingCompleted,
  CancelBookingData,
  CancelBooking,
  CancelBookingSuccess,
  CancelBookingFailed,
  CancelBookingCompleted,
} from '../model';

const setRoomReview = (data: CommentData): SetRoomReview => ({
  type: 'SET_ROOM_REVIEW',
  payload: data,
});

const setRoomRating = (data: RoomRatingData): SetRoomRating => ({
  type: 'SET_ROOM_RATING',
  payload: data,
});

const finishRoomRating = (): FinishRoomRating => ({
  type: 'FINISH_ROOM_RATING',
});

const requestRooms = (options: Filters): RoomsRequest => ({
  type: 'LOAD_ROOMS',
  payload: options,
});

const pendingStatusUpdate = (value: boolean): PendingStatusUpdate => ({
  type: 'ROOMS_REQUEST_PENDING',
  payload: value,
});

const successRoomRequest = (data: RoomData): SetRoom => ({
  type: 'CURRENT_ROOM_REQUEST_SUCCESS',
  payload: data,
});

const startRatingRoom = (): StartRatingRoom => ({
  type: 'START_RATING_ROOM',
});

const setRooms = (data: Apartment[]): SetRooms => ({
  type: 'ROOMS_REQUEST_SUCCESS',
  payload: data,
});

const setFailedStatus = (error: Error): SetFailedStatus => ({
  type: 'ROOMS_REQUEST_FAILED',
  payload: error,
});

const setNewRoomRating = (data: number): SetNewRatingRoom => ({
  type: 'SET_NEW_ROOM_RATING',
  payload: data,
});

const requestCurrentRoomInfo = (id: number, email: string): CurrentRoomRequest => ({
  type: 'LOAD_ROOM_INFO',
  payload: { id, email },
});

const loadBookedHistoryRooms = (email: string): LoadBookedHistory => ({
  type: 'LOAD_BOOKED_HISTORY',
  payload: email,
});

const updateBookedHistory = (data: BookedHistoryList): UpdateBookedHistory => ({
  type: 'UPDATE_BOOKED_HISTORY',
  payload: data,
});

const booking = (data: SelectedBookedRoom): Booking => ({
  type: 'BOOKING',
  payload: data,
});

const responseRatingProcess = (data: string): RatingProcessResponse => ({
  type: 'RATING_PROCESS_RESPONSE',
  payload: data,
});

const bookingSuccess = (): BookingSuccess => ({
  type: 'BOOKING_SUCCESS',
});

const bookingFailed = (statusText: string): BookingFailed => ({
  type: 'BOOKING_FAILED',
  payload: statusText,
});

const completeBooking = (): BookingCompleted => ({
  type: 'BOOKING_COMPLETED',
});

const cancelBooking = (data: CancelBookingData): CancelBooking => ({
  type: 'CANCEL_BOOKING',
  payload: data,
});

const cancelBookingSuccess = (): CancelBookingSuccess => ({
  type: 'CANCEL_BOOKING_SUCCESS',
});

const cancelBookingFailed = (statusText: string): CancelBookingFailed => ({
  type: 'CANCEL_BOOKING_FAILED',
  payload: statusText,
});

const completeCancelBooking = (): CancelBookingCompleted => ({
  type: 'CANCEL_BOOKING_COMPLETED',
});

export {
  requestRooms,
  pendingStatusUpdate,
  setRooms,
  setFailedStatus,
  loadBookedHistoryRooms,
  updateBookedHistory,
  requestCurrentRoomInfo,
  setNewRoomRating,
  setRoomReview,
  setRoomRating,
  startRatingRoom,
  finishRoomRating,
  successRoomRequest,
  responseRatingProcess,
  booking,
  bookingSuccess,
  bookingFailed,
  completeBooking,
  cancelBooking,
  cancelBookingSuccess,
  cancelBookingFailed,
  completeCancelBooking,
};
