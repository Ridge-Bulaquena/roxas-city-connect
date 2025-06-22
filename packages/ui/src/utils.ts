import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes with proper conflict resolution
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Utility function to create variant props for components
 */
export function createVariantProps<T extends Record<string, any>>(
  variants: T,
  defaultVariant?: keyof T
) {
  return {
    variants,
    defaultVariants: defaultVariant ? { [defaultVariant]: defaultVariant } : undefined,
  };
}

/**
 * Utility function to get theme-aware color classes
 */
export function getColorClasses(
  color: 'primary' | 'secondary' | 'accent' | 'civic',
  shade: '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' = '500'
) {
  const colorMap = {
    primary: `bg-primary-${shade} text-white`,
    secondary: `bg-secondary-${shade} text-secondary-900`,
    accent: `bg-accent-${shade} text-white`,
    civic: `bg-civic-${shade} text-white`,
  };
  
  return colorMap[color] || colorMap.primary;
}

/**
 * Utility function to get responsive spacing classes
 */
export function getSpacingClasses(
  spacing: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl',
  direction: 'x' | 'y' | 't' | 'r' | 'b' | 'l' = 'y'
) {
  const spacingMap = {
    xs: '2',
    sm: '4',
    md: '6',
    lg: '8',
    xl: '12',
    '2xl': '16',
  };
  
  const value = spacingMap[spacing];
  return `p${direction}-${value}`;
}
