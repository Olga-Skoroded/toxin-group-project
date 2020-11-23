import { Apartment } from 'services/api/entities/model';

import { GetRoomDetailsFailed, GetRoomDetailsRequest, GetRoomDetailsSuccess } from '../model';

const getRoomDetails = (id: number): GetRoomDetailsRequest => ({
  type: 'GET_ROOM_DETAILS_PROCESS',
  payload: id,
});

const getRoomDetailsSuccess = (data: Apartment): GetRoomDetailsSuccess => ({
  type: 'GET_ROOM_DETAILS_SUCCESS',
  payload: data,
});

const getRoomDetailsFailed = (): GetRoomDetailsFailed => ({
  type: 'GET_ROOM_DETAILS_FAILED',
});

export { getRoomDetails, getRoomDetailsSuccess, getRoomDetailsFailed };
