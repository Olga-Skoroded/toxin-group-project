import { defaultFilters } from 'features/Rooms/SearchRoomForm/SearchRoomForm.fixture';

import { Item, Group } from './Dropdown.model';

export const guestsGroups: Required<Group[]> = [
  {
    name: 'guests',
    wordForms: ['Guest', 'GuestsSecondary', 'Guests'],
  },
];

const { adults, children, babies } = defaultFilters.guests;

export const guestsItems: Required<Item[]> = [
  {
    title: 'Adults',
    inputName: 'adults',
    initialValue: adults,
    groupName: 'guests',
  },
  {
    title: 'Children',
    initialValue: children,
    inputName: 'children',
    groupName: 'guests',
  },
  {
    title: 'Babies',
    inputName: 'babies',
    initialValue: babies,
    wordForms: ['Baby', 'BabiesSecondary', 'Babies'],
  },
];

const { beds, bathrooms, bedrooms } = defaultFilters.amenities;

export const amenitiesItems: Required<Item[]> = [
  {
    title: 'Bedrooms',
    inputName: 'bedrooms',
    initialValue: bedrooms,
    wordForms: ['Bedroom', 'BedroomsSecondary', 'Bedrooms'],
  },
  {
    title: 'Beds',
    inputName: 'beds',
    initialValue: beds,
    wordForms: ['Bed', 'BedsSecondary', 'Beds'],
  },
  {
    title: 'Bathrooms',
    inputName: 'bathrooms',
    initialValue: bathrooms,
    wordForms: ['Bathroom', 'BathroomsSecondary', 'Bathrooms'],
  },
];
