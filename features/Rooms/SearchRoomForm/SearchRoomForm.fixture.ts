import { Filters } from 'services/api/entities/model';

const twoWeeks = 60 * 60 * 24 * 7 * 1000 * 2;

const today = new Date();
const twoWeeksLater = new Date(Date.now() + twoWeeks);

today.setHours(12, 0, 0, 0);
twoWeeksLater.setHours(12, 0, 0, 0);

const defaultFilters: Filters = {
  price: { from: 2000, to: 7000 },
  booked: {
    from: today.getTime(),
    to: twoWeeksLater.getTime(),
  },
  amenities: {
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
  },
  guests: {
    adults: 2,
    children: 0,
    babies: 0,
  },
  additionalAmenities: {
    breakfast: true,
    desk: false,
    chair: false,
    crib: false,
    tv: false,
    shampoo: false,
  },
  accessibility: {
    wideCorridor: false,
    invalidHelper: false,
  },
  opportunities: {
    smoking: false,
    keepPets: false,
    largeNumberOfPersons: false,
  },
};

export { defaultFilters };
