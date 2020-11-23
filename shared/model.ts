import { Apartment as ServerApartment, Review as ServerReview } from 'services/api/entities/model';

export type Review = Omit<ServerReview, 'date'> & {
  date: Date;
};

export type Apartment = Omit<ServerApartment, 'reviews'> & {
  reviews: Review[];
};
