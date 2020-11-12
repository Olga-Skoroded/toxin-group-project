import { TFunction } from 'i18next';

export type Option = {
  name: string;
  label: string;
  title?: string;
  isChecked?: boolean;
};

export type Props = {
  roomOptions: Option[];
  t: TFunction;
};
