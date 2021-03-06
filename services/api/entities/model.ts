import { Review as ClientReview } from 'shared/model';

import { Timestamp } from '../Firebase/modules/Database/model';

export type AdditionalAmenities = {
  breakfast: boolean;
  desk: boolean;
  chair: boolean;
  crib: boolean;
  tv: boolean;
  shampoo: boolean;
};

export type Accessibility = {
  wideCorridor: boolean;
  invalidHelper: boolean;
};

export type Opportunities = {
  smoking: boolean;
  keepPets: boolean;
  largeNumberOfPersons: boolean;
};

export type Amenities = {
  bedrooms: number;
  beds: number;
  bathrooms: number;
};

export type Review = {
  avatarUrl: string;
  userName: string;
  date: Timestamp;
  text: string;
  likesCount: number;
  userEmail: string;
};

export type RoomClasses = 'economy' | 'luxury';

export type RoomClass = {
  [Z in RoomClasses]: boolean;
};

type Options = {
  amenities: Amenities;
  additionalAmenities: AdditionalAmenities;
  accessibility: Accessibility;
  opportunities: Opportunities;
  class: RoomClass;
};

export type Apartment = {
  id: number;
  overcrowdingPrice: number;
  price: number;
  rating: number;
  numberOfRatings: {
    excellent: number;
    good: number;
    normal: number;
    bad: number;
  };
  reviews: Review[];
  class: RoomClasses;
  href: string;
  images: { url: string; alt: string }[];
  breakfastPricePerGuest: number;
} & Options;

export type Filters = {
  price: {
    from: number;
    to: number;
  };
  booked: {
    from: Date;
    to: Date;
  };
  guests: {
    adults: number;
    children: number;
    babies: number;
  };
} & Options;

export type ApartmentsList = { [k: number]: Apartment };

export type ProfileData = {
  email: string;
  password: string;
  name: string;
  surname: string;
  avatar: ArrayBuffer | Blob | Uint8Array;
} & AdditionalUserInformation;

export type AdditionalUserInformation = {
  birthDate?: string;
  gender?: 'male' | 'female';
};

export type BookingData = {
  apartmentId: number;
  from: Timestamp;
  to: Timestamp;
  reservationBy?: string;
};

export type BookedRoom = {
  room: Apartment;
  bookedData: { from: Date; to: Date };
};

export type SubscriptionData = {
  hasSpecialOffers: boolean;
};

export type BookedRoomsHistory = Record<string, BookedRoom[]>;

export type FoodData = {
  [key: string]: {
    [key: string]: {
      grams: number;
      price: number;
      description: string;
      image: string;
    };
  };
};

export type FoodOrderData = {
  user: string;
  room: number;
  food: string;
};
export type CommentData = { commentData: ClientReview; roomId: number };

export type RoomRatingData = { userEmail?: string; roomId: number; rating: number };

export type ContactUsData = { name: string; email: string; phone: string; message: string };
