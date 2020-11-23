import { WithTranslation } from 'react-i18next';

export type Option = {
  name: string;
  label: string;
  title?: string;
  isChecked?: boolean;
};

export type Props = WithTranslation & {
  roomOptions: Option[];
};
