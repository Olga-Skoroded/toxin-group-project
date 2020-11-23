import { Apartment, Filters } from 'services/api/entities/model';

import {
  RoomsRequest,
  CurrentRoomRequest,
  LoadBookedHistory,
  BookCurrentRoom,
  SelectedBookedRoom,
  CommentData,
  SetRoomReview,
  SetRoomRating,
  FinishRoomRating,
  RoomRatingRequest,
  PendingStatusUpdate,
  SetRooms,
  SetFailedStatus,
  BookedHistoryList,
  UpdateBookedHistory,
} from '../model';

const setRoomReview = (data: CommentData): SetRoomReview => ({
  type: 'SET_ROOM_REVIEW',
  payload: data,
});

const setRoomRating = (data: RoomRatingRequest): SetRoomRating => ({
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

const setRooms = (data: Apartment[]): SetRooms => ({
  type: 'ROOMS_REQUEST_SUCCESS',
  payload: data,
});

const setFailedStatus = (error: Error): SetFailedStatus => ({
  type: 'ROOMS_REQUEST_FAILED',
  payload: error,
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

const bookRoom = (data: SelectedBookedRoom): BookCurrentRoom => ({
  type: 'BOOK_ROOM',
  payload: data,
});

export {
  requestRooms,
  pendingStatusUpdate,
  setRooms,
  setFailedStatus,
  loadBookedHistoryRooms,
  updateBookedHistory,
  bookRoom,
  requestCurrentRoomInfo,
  setRoomReview,
  setRoomRating,
  finishRoomRating
};
