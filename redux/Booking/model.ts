import { Action, ActionPayload } from 'redux/action.model';
import { Filters, BookedRoom, Apartment } from 'services/api/entities/model';
import { Review } from 'services/api/entities/model';
import { RoomProps } from 'shared/view/components/Room/Room.model';

type RoomRatingRequest = { userEmail: string; roomId: number; rating: number };
type BookedHistoryList = { current: BookedRoom[]; history: BookedRoom[] };

type BookingState = {
  isPending: boolean;
  rooms: RoomProps[];
  isRequestSuccessful: boolean;
  error: Error;
  bookedRooms: BookedHistoryList;
  currentRoom: RoomProps;
  isRatingProcess: boolean;
  userRating: number;
  ratingStatus: string;
};

type SelectedBookedRoom = {
  apartmentId: number;
  booked: { from: Date; to: Date };
  totalPrice: number;
  user: string;
};

type RoomsRequest = ActionPayload<'LOAD_ROOMS', Filters>;

type PendingStatusUpdate = ActionPayload<'ROOMS_REQUEST_PENDING', boolean>;
type SetRooms = ActionPayload<'ROOMS_REQUEST_SUCCESS', Apartment[]>;
type SetFailedStatus = ActionPayload<'ROOMS_REQUEST_FAILED', Error>;

type LoadBookedHistory = ActionPayload<'LOAD_BOOKED_HISTORY', string>;
type UpdateBookedHistory = ActionPayload<'UPDATE_BOOKED_HISTORY', BookedHistoryList>;
type RatingProcessResponse = ActionPayload<'RATING_PROCESS_RESPONSE', string>;
type StartRatingRoom = Action<'START_RATING_ROOM'>;
type FinishRatingRoom = Action<'FINISH_RATING_ROOM'>;
type SetNewRatingRoom = ActionPayload<'SET_NEW_ROOM_RATING', number>;
type CommentData = { commentData: Review; roomId: number };
type SetRoomReview = ActionPayload<'SET_ROOM_REVIEW', CommentData>;
type SetRoomRating = ActionPayload<'SET_ROOM_RATING', RoomRatingRequest>;
type FinishRoomRating = Action<'FINISH_ROOM_RATING'>;
type CurrentRoomRequest = ActionPayload<'LOAD_ROOM_INFO', { id: number; email: string }>;
type SetRoom = ActionPayload<'CURRENT_ROOM_REQUEST_SUCCESS', Apartment & { userRating }>;

type BookCurrentRoom = ActionPayload<'BOOK_ROOM', SelectedBookedRoom>;

type BookingActions =
  | PendingStatusUpdate
  | SetRooms
  | SetFailedStatus
  | RoomsRequest
  | SetRoom
  | UpdateBookedHistory
  | LoadBookedHistory
  | LoadBookedHistory
  | CurrentRoomRequest
  | RatingProcessResponse
  | StartRatingRoom
  | FinishRatingRoom
  | SetNewRatingRoom;

export type {
  CurrentRoomRequest,
  SetRoom,
  RoomRatingRequest,
  SelectedBookedRoom,
  BookedHistoryList,
  RoomsRequest,
  PendingStatusUpdate,
  SetRooms,
  SetFailedStatus,
  LoadBookedHistory,
  UpdateBookedHistory,
  BookCurrentRoom,
  BookingState,
  BookingActions,
  RatingProcessResponse,
  StartRatingRoom,
  FinishRatingRoom,
  SetNewRatingRoom,
  CommentData,
  SetRoomReview,
  SetRoomRating,
  FinishRoomRating,
};
