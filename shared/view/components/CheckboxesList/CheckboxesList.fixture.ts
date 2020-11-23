import { defaultFilters } from 'features/Rooms/SearchRoomForm/SearchRoomForm.fixture';

import { Option } from './CheckboxesList.model';

const { wideCorridor, invalidHelper } = defaultFilters.accessibility;
const { smoking, keepPets, largeNumberOfPersons } = defaultFilters.opportunities;
const { breakfast, desk, chair, crib, tv, shampoo } = defaultFilters.additionalAmenities;

export const checkboxesListData: Required<Option[]> = [
  { name: 'opportunities.smoking', label: 'Smoking is allowed', isChecked: smoking },
  { name: 'opportunities.keepPets', label: 'Pets are allowed', isChecked: keepPets },
  {
    name: 'opportunities.largeNumberOfPersons',
    label: 'Guests can be invited (up to 10 people)',
    isChecked: largeNumberOfPersons,
  },
];

export const richCheckboxesListData: Required<Option[]> = [
  {
    name: 'accessibility.wideCorridor',
    title: 'Wide corridor',
    label: 'The width of the corridors in the room is at least 91 cm.',
    isChecked: wideCorridor,
  },
  {
    name: 'accessibility.invalidHelper',
    title: 'Assistant for disabled people',
    label: 'A specialist will meet you on the 1st floor and will escort you to your room.',
    isChecked: invalidHelper,
  },
];

export const expandableCheckboxesListData: Required<Option[]> = [
  { name: 'additionalAmenities.breakfast', label: 'Breakfast', isChecked: breakfast },
  { name: 'additionalAmenities.desk', label: 'Desk', isChecked: desk },
  { name: 'additionalAmenities.chair', label: 'Feeding chair', isChecked: chair },
  { name: 'additionalAmenities.crib', label: 'Crib', isChecked: crib },
  { name: 'additionalAmenities.TV', label: 'TV', isChecked: tv },
  { name: 'additionalAmenities.shampoo', label: 'Shampoo', isChecked: shampoo },
];
