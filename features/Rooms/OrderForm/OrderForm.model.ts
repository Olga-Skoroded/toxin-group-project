export type PriceItem = {
  label: string;
  price: number;
  tooltip?: string;
  currency?: string;
};

export type Props = {
  items: PriceItem[];
};

export type MaxGuests = {
  adults: number;
  babies: number;
};
