import { Review } from 'api/entities/types';

export type Props = {
  price: number;
  number: number;
  reviews: Review[];
  bookedData?: {
    from: string;
    to: string;
  };
  imagePaths?: string[];
  reviewMeasure?: string;
  roomType?: string;
  measure?: string;
  currency?: string;
  rating?: number;
};
