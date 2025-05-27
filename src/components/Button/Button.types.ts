import type { ReactNode } from 'react';
import type { ButtonProps } from '@heroui/react';

export interface CustomButtonProps extends Omit<ButtonProps, 'startContent' | 'endContent' | 'isLoading' | 'isDisabled'> {
  /** The content of the button */
  children: ReactNode;
  /** Icon to display at the start of the button */
  startIcon?: ReactNode;
  /** Icon to display at the end of the button */
  endIcon?: ReactNode;
  /** Whether the button is in loading state */
  loading?: boolean;
  /** The visual style variant of the button */
  variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
  /** The color theme of the button */
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  /** The size of the button */
  size?: 'sm' | 'md' | 'lg';
  /** The border radius of the button */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  /** Whether the button should take full width */
  fullWidth?: boolean;
}