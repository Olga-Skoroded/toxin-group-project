import { ButtonHTMLAttributes } from 'react';

export type CustomProps = {
  buttonId: number;
  isActive: boolean;
};

export type DotButtonProps = CustomProps & ButtonHTMLAttributes<HTMLButtonElement>;
