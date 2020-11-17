import { Filters } from 'api/entities/types';

import { LOAD_ROOMS, LOAD_ROOM_INFO, LOAD_BOOKED_HISTORY, BOOK_ROOM } from '../constants';
import {
  RoomsRequest,
  CurrentRoomRequest,
  LoadBookedHistory,
  BookCurrentRoom,
  SelectedBookedRoom,
  CommentData,
  SetRoomReview,
} from '../types';

const setRoomReview = (data: CommentData): SetRoomReview => ({
  type: 'SET_ROOM_REVIEW',
  payload: data,
});

const bookRoom = (data: SelectedBookedRoom): BookCurrentRoom => ({
  type: BOOK_ROOM,
  payload: data,
});

const requestRooms = (options: Filters): RoomsRequest => ({
  type: LOAD_ROOMS,
  payload: options,
});

const requestCurrentRoomInfo = (id: number): CurrentRoomRequest => ({
  type: LOAD_ROOM_INFO,
  payload: id,
});

const loadBookedHistoryRooms = (email: string): LoadBookedHistory => ({
  type: LOAD_BOOKED_HISTORY,
  payload: email,
});

export { requestRooms, loadBookedHistoryRooms, requestCurrentRoomInfo, bookRoom, setRoomReview };
