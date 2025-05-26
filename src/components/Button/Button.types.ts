import type { ButtonProps as HeroButtonProps } from '@heroui/react';

export interface CustomButtonProps extends Omit<HeroButtonProps, 'color' | 'variant'> {
  variant?: 'flat' | 'solid' | 'bordered' | 'light' | 'faded' | 'shadow' | 'ghost';
  icon?: React.ReactNode;
  loading?: boolean;
}