import defaultFilters from 'components/SearchRoomForm/defaultFilters';

import { Option } from './CheckboxesList.types';

const { wideCorridor, invalidHelper } = defaultFilters.accessibility;
const { smoking, keepPets, largeNumberOfPersons } = defaultFilters.opportunities;
const { breakfast, desk, chair, crib, tv, shampoo } = defaultFilters.additionalAmenities;

export const checkboxesListData: Required<Option[]> = [
  { name: 'opportunities.smoking', label: 'Можно курить', isChecked: smoking },
  { name: 'opportunities.keepPets', label: 'Можно с питомцами', isChecked: keepPets },
  {
    name: 'opportunities.largeNumberOfPersons',
    label: 'Можно пригласить гостей (до 10 человек)',
    isChecked: largeNumberOfPersons,
  },
];

export const richCheckboxesListData: Required<Option[]> = [
  {
    name: 'accessibility.wideCorridor',
    title: 'Широкий коридор',
    label: 'Ширина коридоров в номере не менее 91 см.',
    isChecked: wideCorridor,
  },
  {
    name: 'accessibility.invalidHelper',
    title: 'Помощник для инвалидов',
    label: 'На 1 этаже вас встретит специалист и проводит до номера.',
    isChecked: invalidHelper,
  },
];

export const expandableCheckboxesListData: Required<Option[]> = [
  { name: 'additionalAmenities.breakfast', label: 'Завтрак', isChecked: breakfast },
  { name: 'additionalAmenities.desk', label: 'Письменный стол', isChecked: desk },
  { name: 'additionalAmenities.chair', label: 'Стул для кормления', isChecked: chair },
  { name: 'additionalAmenities.crib', label: 'Кроватка', isChecked: crib },
  { name: 'additionalAmenities.tv', label: 'Телевизор', isChecked: tv },
  { name: 'additionalAmenities.shampoo', label: 'Шампунь', isChecked: shampoo },
];
