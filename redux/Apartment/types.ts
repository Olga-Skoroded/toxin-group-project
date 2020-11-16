import { Apartment, Review } from 'api/entities/types';

import {
  GET_ROOM_DETAILS_PROCESS,
  GET_ROOM_DETAILS_SUCCESS,
  GET_ROOM_DETAILS_FAILED,
} from './constants';

type Action<Z, T> = {
  type: Z;
  payload?: T;
};

type ApartmentState = {
  isGetRoomDetailsPending: boolean;
  roomDetails: Apartment | null;
};

type CommentData = { commentData: Review; roomId: any };

type GetRoomDetailsRequest = Action<typeof GET_ROOM_DETAILS_PROCESS, number>;
type GetRoomDetailsSuccess = Action<typeof GET_ROOM_DETAILS_SUCCESS, Apartment>;
type GetRoomDetailsFailed = Action<typeof GET_ROOM_DETAILS_FAILED, null>;
type SetRoomReview = Action<'SET_ROOM_REVIEW', CommentData>;

type ApartmentActions = GetRoomDetailsRequest | GetRoomDetailsSuccess | GetRoomDetailsFailed;

export type {
  ApartmentState,
  GetRoomDetailsRequest,
  GetRoomDetailsSuccess,
  GetRoomDetailsFailed,
  ApartmentActions,
  SetRoomReview,
  CommentData,
};
