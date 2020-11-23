import queryString from 'query-string';

import { Filters } from 'services/api/entities/model';

const getPassedFilters = (path: string): undefined | Filters => {
  const { values } = queryString.parse(`?${path.split('?')[1]}`);
  return values && JSON.parse(values as string);
};

export { getPassedFilters };
