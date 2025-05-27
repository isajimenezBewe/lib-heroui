import type { ReactNode } from 'react';
import type { InputProps } from '@heroui/react';

export interface Country {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
}

export interface PhoneInputProps extends Omit<InputProps, 'onValueChange' | 'value' | 'type'> {
  /** The current phone number value */
  value?: string;
  /** Default country code (ISO 3166-1 alpha-2) */
  defaultCountry?: string;
  /** Placeholder text for the phone number input */
  placeholder?: string;
  /** Label text for the phone input */
  label?: ReactNode;
  /** Description text below the input */
  description?: ReactNode;
  /** Error message to display */
  errorMessage?: ReactNode;
  /** Whether the input is required */
  isRequired?: boolean;
  /** Whether the input is disabled */
  isDisabled?: boolean;
  /** Whether the input is invalid */
  isInvalid?: boolean;
  /** The visual style variant of the input */
  variant?: 'flat' | 'bordered' | 'faded' | 'underlined';
  /** The color theme of the input */
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  /** The size of the input */
  size?: 'sm' | 'md' | 'lg';
  /** The border radius of the input */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  /** Whether the input should take full width */
  fullWidth?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Callback when phone number value changes */
  onValueChange?: (value: string) => void;
  /** Callback when country selection changes */
  onCountryChange?: (country: Country) => void;
} 