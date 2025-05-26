import React from 'react';
import type { CustomButtonProps } from './Button.types';

/**
 * Button component with HeroUI styling
 * Provides a consistent interface for button interactions across the application
 */
export const Button: React.FC<CustomButtonProps> = ({
  children,
  startIcon,
  endIcon,
  loading = false,
  disabled,
  variant = 'solid',
  color = 'primary',
  size = 'md',
  radius,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const buttonClass = [
    'heroui-button',
    fullWidth ? 'w-full' : '',
    className
  ].filter(Boolean).join(' ');

  const buttonStyle: React.CSSProperties = {
    borderRadius: radius === 'none' ? '0' : 
                 radius === 'sm' ? '0.25rem' :
                 radius === 'lg' ? '0.75rem' :
                 radius === 'full' ? '9999px' : '0.5rem',
    width: fullWidth ? '100%' : 'auto'
  };

  return (
    <button
      className={buttonClass}
      style={buttonStyle}
      data-variant={variant}
      data-color={color}
      data-size={size}
      data-loading={loading}
      disabled={disabled || loading}
      {...props}
    >
      {!loading && startIcon && <span>{startIcon}</span>}
      {loading && <div className="heroui-spinner" />}
      <span>{children}</span>
      {!loading && endIcon && <span>{endIcon}</span>}
    </button>
  );
};