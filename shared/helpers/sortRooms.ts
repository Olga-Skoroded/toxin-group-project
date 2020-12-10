import { SortOrder, SortParam } from 'redux/Booking/model';
import { RoomProps } from 'shared/view/components/Room/Room.model';

const sortRooms = (rooms: RoomProps[], order: SortOrder, param: SortParam): RoomProps[] => {
  switch (param) {
    case 'price':
      return order === 'asc'
        ? rooms.sort((a, b) => a.price - b.price)
        : rooms.sort((a, b) => b.price - a.price);
    case 'rating':
      return order === 'asc'
        ? rooms.sort((a, b) => a.rating - b.rating)
        : rooms.sort((a, b) => b.rating - a.rating);
    case 'reviews':
      return order === 'asc'
        ? rooms.sort((a, b) => a.rating - b.rating)
        : rooms.sort((a, b) => b.rating - a.rating);
    default:
      return rooms;
  }
};

export { sortRooms };
