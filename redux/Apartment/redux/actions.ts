import { GET_ROOM_DETAILS_PROCESS } from '../constants';
import { GetRoomDetailsRequest } from '../types';

const getRoomDetails = (id: number): GetRoomDetailsRequest => ({
  type: GET_ROOM_DETAILS_PROCESS,
  payload: id,
});

export { getRoomDetails };
