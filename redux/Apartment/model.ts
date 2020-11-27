import { Action, ActionPayload } from 'redux/action.model';
import { Apartment } from 'services/api/entities/model';
import { Apartment as ClientApartment, Review } from 'shared/model';

type ApartmentState = {
  isGetRoomDetailsPending: boolean;
  isSetReviewLikePending: boolean;
  roomDetails: ClientApartment | null;
};

type SetReviewLike = {
  id: string;
  reviews: Review[];
};

type GetRoomDetailsRequest = ActionPayload<'GET_ROOM_DETAILS_PROCESS', number>;
type GetRoomDetailsSuccess = ActionPayload<'GET_ROOM_DETAILS_SUCCESS', Apartment>;
type GetRoomDetailsFailed = Action<'GET_ROOM_DETAILS_FAILED'>;

type SetReviewLikeRequest = ActionPayload<'SET_REVIEW_LIKE_PROCESS', SetReviewLike>;
type SetReviewLikeSuccess = Action<'SET_REVIEW_LIKE_SUCCESS'>;
type SetReviewLikeFailed = Action<'SET_REVIEW_LIKE_FAILED'>;

type ApartmentActions =
  | GetRoomDetailsRequest
  | GetRoomDetailsSuccess
  | GetRoomDetailsFailed
  | SetReviewLikeRequest
  | SetReviewLikeSuccess
  | SetReviewLikeFailed;

export type {
  ApartmentState,
  GetRoomDetailsRequest,
  GetRoomDetailsSuccess,
  GetRoomDetailsFailed,
  ApartmentActions,
  SetReviewLike,
  SetReviewLikeRequest,
  SetReviewLikeSuccess,
  SetReviewLikeFailed,
};
