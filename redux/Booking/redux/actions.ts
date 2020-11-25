import { Apartment, Filters } from 'services/api/entities/model';

import {
  RoomsRequest,
  PendingStatusUpdate,
  SetRooms,
  SetFailedStatus,
  BookedHistoryList,
  LoadBookedHistory,
  UpdateBookedHistory,
  SelectedBookedRoom,
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

const requestRooms = (options: Filters): RoomsRequest => ({
  type: 'LOAD_ROOMS',
  payload: options,
});

const pendingStatusUpdate = (value: boolean): PendingStatusUpdate => ({
  type: 'ROOMS_REQUEST_PENDING',
  payload: value,
});

const setRooms = (data: Apartment[]): SetRooms => ({
  type: 'ROOMS_REQUEST_SUCCESS',
  payload: data,
});

const setFailedStatus = (error: Error): SetFailedStatus => ({
  type: 'ROOMS_REQUEST_FAILED',
  payload: error,
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
  booking,
  bookingSuccess,
  bookingFailed,
  completeBooking,
  cancelBooking,
  cancelBookingSuccess,
  cancelBookingFailed,
  completeCancelBooking,
};
