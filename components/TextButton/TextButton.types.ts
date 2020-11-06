import { AnchorHTMLAttributes, ElementType } from 'react';

type Props = {
  href?: string;
  isSecondary?: boolean;
  disabled?: boolean;
  as?: ElementType;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export type TextButtonProps = Props;
