import {
  Apartment as ServerApartment,
  Review as ServerReview,
  BookingData as ServerBookingData,
} from 'services/api/entities/model';

export type Review = Omit<ServerReview, 'date'> & {
  date: Date;
};

export type Apartment = Omit<ServerApartment, 'reviews'> & {
  reviews: Review[];
};

export type BookingData = Omit<ServerBookingData, 'from' & 'to'> & {
  from: Date;
  to: Date;
};
