import { Filters } from 'api/entities/types';

import { LOAD_ROOMS, LOAD_ROOM_INFO, LOAD_BOOKED_HISTORY } from '../constants';
import { RoomsRequest, CurrentRoomRequest, LoadBookedHistory } from '../types';

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

export { requestRooms, loadBookedHistoryRooms, requestCurrentRoomInfo };
