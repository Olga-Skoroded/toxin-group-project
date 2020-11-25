import { Timestamp } from '../../../services/api/Firebase/modules/Database/model';
import { ApartmentState, ApartmentActions } from '../model';

const initialState: ApartmentState = {
  isGetRoomDetailsPending: false,
  roomDetails: null,
};

const apartment = (
  state: ApartmentState = initialState,
  actions: ApartmentActions,
): ApartmentState => {
  switch (actions.type) {
    case 'GET_ROOM_DETAILS_PROCESS':
      return {
        ...state,
        isGetRoomDetailsPending: true,
        roomDetails: null,
      };
    case 'GET_ROOM_DETAILS_SUCCESS':
      return {
        ...state,
        isGetRoomDetailsPending: false,
        roomDetails: {
          ...actions.payload,
          reviews: actions.payload.reviews.map((review) => {
            const reviewDate = <Timestamp>review.date;

            return {
              ...review,
              date: reviewDate.toDate(),
            };
          }),
        },
      };
    case 'GET_ROOM_DETAILS_FAILED':
      return {
        ...state,
        isGetRoomDetailsPending: false,
        roomDetails: null,
      };
    default:
      return state;
  }
};

export { apartment };
