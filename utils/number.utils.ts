const formattingOptions = {
  style: 'currency',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
};

function formatNumber(
  target: number,
  currencyCode = 'RUB',
  separator = '\u00A0',
  locale = 'ru',
): string {
  const formatter = new Intl.NumberFormat(locale, {
    currency: currencyCode,
    ...formattingOptions,
  });

  if (formatter.formatToParts) {
    const initialParts = formatter.formatToParts(target);
    const formattedParts = initialParts.map(({ type, value }) => {
      switch (type) {
        case 'group':
          return separator;
        case 'literal':
          return '';
        default:
          return value;
      }
    });
    return formattedParts.reduce((acc, part) => acc + part, '');
  }

  return formatter.format(target);
}

export { formatNumber };
