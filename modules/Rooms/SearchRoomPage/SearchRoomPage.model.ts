import { RoomProps } from 'shared/view/components/Room/Room.model';

export type SortFunction = (a: RoomProps, b: RoomProps) => number;

export type SortParam = 'price' | 'rating' | 'reviews';

export type SortOrder = 'desc' | 'asc';

export type SortData = {
  parameter: SortParam;
  name: string;
  sortFunction: SortFunction;
};
