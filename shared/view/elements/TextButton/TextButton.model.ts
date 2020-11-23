import { AnchorHTMLAttributes, ElementType } from 'react';

export type Props = {
  href?: string;
  isSecondary?: boolean;
  disabled?: boolean;
  as?: ElementType;
} & AnchorHTMLAttributes<HTMLAnchorElement>;
