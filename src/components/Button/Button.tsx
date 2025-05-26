import React from 'react';
import { Button as HeroButton } from '@heroui/react';
import type { CustomButtonProps } from './Button.types';


export const Button: React.FC<CustomButtonProps> = ({
  variant = 'primary',
  icon,
  loading = false,
  children,
  disabled,
  ...props
}) => {
  const colorMap = {
    primary: 'primary',
    secondary: 'secondary',
    danger: 'danger',
    success: 'success',
  } as const;

  return (
    <HeroButton
      color={colorMap[variant as keyof typeof colorMap]}
      disabled={disabled || loading}
      startContent={!loading ? icon : undefined}
      isLoading={loading}
      {...props}
    >
      {children}
    </HeroButton>
  );
};