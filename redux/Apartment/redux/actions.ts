import { Apartment } from 'services/api/entities/model';

import {
  GetRoomDetailsFailed,
  GetRoomDetailsRequest,
  GetRoomDetailsSuccess,
  SetReviewLike,
  SetReviewLikeRequest,
  SetReviewLikeFailed,
  SetReviewLikeSuccess,
} from '../model';

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

const setReviewLike = (data: SetReviewLike): SetReviewLikeRequest => ({
  type: 'SET_REVIEW_LIKE_PROCESS',
  payload: data,
});

const setReviewLikeSuccess = (): SetReviewLikeSuccess => ({
  type: 'SET_REVIEW_LIKE_SUCCESS',
});

const setReviewLikeFailed = (): SetReviewLikeFailed => ({
  type: 'SET_REVIEW_LIKE_FAILED',
});

export {
  getRoomDetails,
  getRoomDetailsSuccess,
  getRoomDetailsFailed,
  setReviewLike,
  setReviewLikeSuccess,
  setReviewLikeFailed,
};
