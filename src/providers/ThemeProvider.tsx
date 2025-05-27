import React from "react";
import { HeroUIProvider } from "@heroui/react";

/**
 * Props for the ThemeProvider component
 */
export interface ThemeProviderProps {
  /** The content to be wrapped by the provider */
  children: React.ReactNode;
  /** The locale to apply to the children (default: "en-US") */
  locale?: string;
  /** Provides a client side router to all nested components */
  navigate?: (path: string) => void;
  /** Convert an href to a native href for routing */
  useHref?: (href: string) => string;
  /** Disables animations globally (default: false) */
  disableAnimation?: boolean;
  /** Disables ripple effect globally (default: false) */
  disableRipple?: boolean;
  /** Whether to use native HTML form validation or ARIA (default: "native") */
  validationBehavior?: "native" | "aria";
}

/**
 * ThemeProvider component that wraps HeroUIProvider with enhanced configuration
 * 
 * Note: Theme switching is handled via CSS classes on the root element:
 * - Add "light" class for light theme
 * - Add "dark" class for dark theme  
 * - Add custom theme names like "purple", "green", etc.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 * 
 * // With custom configuration
 * <ThemeProvider 
 *   locale="es-ES"
 *   disableAnimation={false}
 *   validationBehavior="aria"
 * >
 *   <App />
 * </ThemeProvider>
 * ```
 */
export function ThemeProvider({ 
  children, 
  locale = "en-US",
  navigate,
  useHref,
  disableAnimation = false,
  disableRipple = false,
  validationBehavior = "native"
}: ThemeProviderProps) {
  return (
    <HeroUIProvider
      locale={locale}
      navigate={navigate}
      useHref={useHref}
      disableAnimation={disableAnimation}
      disableRipple={disableRipple}
      validationBehavior={validationBehavior}
    >  
      {children}
    </HeroUIProvider>
  );
}
