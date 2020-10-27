import { Accessibility, AdditionalAmenities, Opportunities } from 'api/entities/types';

import { Filters } from '../../api/entities/types';

export type Props = {
  loadRooms: (options?: Filters) => void;
  initialFilters?: Filters;
};

export type OptionName = keyof (Opportunities & Accessibility & AdditionalAmenities);