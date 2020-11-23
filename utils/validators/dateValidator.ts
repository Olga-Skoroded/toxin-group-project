const isCorrectDate = (value: string): boolean => {
  const params = value.split(/[.\-/]/);
  const year = parseInt(params[2], 10);
  const minAgeValidation = 18;
  const maxAgeValidation = 120;
  const maxAvailableYear = new Date().getFullYear() - minAgeValidation;
  const minAvailableYear = new Date().getFullYear() - maxAgeValidation;

  if (year < minAvailableYear || year > maxAvailableYear) return false;

  const month = parseInt(params[1], 10);
  const day = parseInt(params[0], 10);
  const date = new Date(year, month - 1, day, 0, 0, 0, 0);
  return month === date.getMonth() + 1 && day === date.getDate() && year === date.getFullYear();
};

const dateValidator = (date: string): string | null =>
  date && isCorrectDate(date) ? null : 'Invalid date';
const dateFormatMask = [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/];

export { dateValidator, dateFormatMask };
