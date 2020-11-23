import {
  Accessibility,
  AdditionalAmenities,
  Opportunities,
  Filters,
} from 'services/api/entities/model';

export type Props = {
  isPending?: boolean;
  loadRooms: (options?: Filters) => void;
  initialFilters?: Filters;
};

export type OptionName = keyof (Opportunities & Accessibility & AdditionalAmenities);
