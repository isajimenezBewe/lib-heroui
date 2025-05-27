import React from "react";
import { Button as HeroUIButton} from "@heroui/react";
import type { CustomButtonProps } from "./Button.types";

/**
 * Button component with HeroUI styling
 * Provides a consistent interface for button interactions across the application
 */
export const ButtonPrueba: React.FC<CustomButtonProps> = ({
  children,
  startIcon,
  endIcon,
  loading = false,
  disabled,
  variant = "solid",
  color = "primary",
  size = "md",
  radius,
  fullWidth = false,
  className = "",
  ...props
}) => {
  return (
    <HeroUIButton
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      fullWidth={fullWidth}
      isLoading={loading}
      isDisabled={disabled}
      startContent={startIcon}
      endContent={endIcon}
      className={className}
      {...props}
    >
      {children}
    </HeroUIButton>
  );
};
