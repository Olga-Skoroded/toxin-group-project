import queryString from 'query-string';

import { Filters } from 'services/api/entities/model';

const getPassedFilters = (path: string): undefined | Filters => {
  const { values } = queryString.parse(`?${path.split('?')[1]}`);
  const isDate = (key: string, value: unknown) =>
    (key === 'from' || key === 'to') && typeof value === 'string';
  return (
    values &&
    JSON.parse(values as string, (key, value) => {
      if (isDate(key, value)) return new Date(value);
      return value;
    })
  );
};

export { getPassedFilters };
