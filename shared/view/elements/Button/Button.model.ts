import { ButtonHTMLAttributes, ElementType } from 'react';

export type Props = {
  isFilled?: boolean;
  isFlat?: boolean;
  as?: ElementType;
  href?: string;
  isDisabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
