import { Filters } from 'api/entities/types';

import { LOAD_ROOMS, LOAD_ROOM_INFO } from '../constants';
import { RoomsRequest, CurrentRoomRequest } from '../types';

const requestRooms = (options: Filters): RoomsRequest => ({
  type: LOAD_ROOMS,
  payload: options,
});

const requestCurrentRoomInfo = (id: number): CurrentRoomRequest => ({
  type: LOAD_ROOM_INFO,
  payload: id,
});

export { requestRooms, requestCurrentRoomInfo };
