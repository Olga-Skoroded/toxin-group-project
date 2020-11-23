import { Review } from 'services/api/entities/model';

export type RoomProps = {
  price: number;
  number: number;
  reviews: Review[];
  imagePaths?: string[];
  reviewMeasure?: string;
  roomType?: string;
  measure?: string;
  currency?: string;
  rating?: number;
  bookedData?: {
    from: string;
    to: string;
  };
};
