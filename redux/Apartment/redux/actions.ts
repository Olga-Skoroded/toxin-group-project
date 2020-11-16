import { GET_ROOM_DETAILS_PROCESS } from '../constants';
import { GetRoomDetailsRequest, SetRoomReview, CommentData } from '../types';

const getRoomDetails = (id: number): GetRoomDetailsRequest => ({
  type: GET_ROOM_DETAILS_PROCESS,
  payload: id,
});

const setRoomReview = (data: CommentData): SetRoomReview => ({
  type: 'SET_ROOM_REVIEW',
  payload: data,
});

export { getRoomDetails, setRoomReview };
