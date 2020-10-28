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

type Options = {
  amenities: Amenities;
  additionalAmenities: AdditionalAmenities;
  accessibility: Accessibility;
  opportunities: Opportunities;
};

export type Apartment = {
  id: number;
  overcrowdingPrice: number;
  price: number;
  rating: number;
  reviews: {
    avatarUrl: string;
    userName: string;
    date: Date;
    text: string;
    likesCount: number;
  }[];
  class: 'economy' | 'luxury';
  href: string;
  images: { url: string; alt: string }[];
} & Options;

export type Filters = {
  price: {
    from: number;
    to: number;
  };
  booked: {
    from: number;
    to: number;
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
  birthDate: string;
  gender: 'male' | 'female';
  receiveOffers: boolean;
};

export type BookingData = {
  apartmentId: number;
  from: Date;
  to: Date;
};
