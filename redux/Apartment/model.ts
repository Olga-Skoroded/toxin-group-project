import { Action, ActionPayload } from 'redux/action.model';
import { Apartment } from 'services/api/entities/model';
import { Apartment as ClientApartment } from 'shared/model';

type ApartmentState = {
  isGetRoomDetailsPending: boolean;
  roomDetails: ClientApartment | null;
};

type GetRoomDetailsRequest = ActionPayload<'GET_ROOM_DETAILS_PROCESS', number>;
type GetRoomDetailsSuccess = ActionPayload<'GET_ROOM_DETAILS_SUCCESS', Apartment>;
type GetRoomDetailsFailed = Action<'GET_ROOM_DETAILS_FAILED'>;

type ApartmentActions = GetRoomDetailsRequest | GetRoomDetailsSuccess | GetRoomDetailsFailed;

export type {
  ApartmentState,
  GetRoomDetailsRequest,
  GetRoomDetailsSuccess,
  GetRoomDetailsFailed,
  ApartmentActions,
};
