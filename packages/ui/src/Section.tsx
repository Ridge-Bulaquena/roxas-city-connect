import React from 'react';
import { motion } from 'framer-motion';
import { cn } from './utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 'default' | 'alternate' | 'hero' | 'narrow';
  background?: 'white' | 'gray' | 'primary' | 'transparent';
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  animate?: boolean;
}

const sectionVariants = {
  default: 'bg-white',
  alternate: 'bg-gray-50',
  hero: 'bg-gradient-to-br from-primary-50 to-white',
  narrow: 'bg-white max-w-4xl mx-auto',
};

const backgroundVariants = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  primary: 'bg-primary-50',
  transparent: 'bg-transparent',
};

const spacingVariants = {
  xs: 'py-8',
  sm: 'py-12',
  md: 'py-16',
  lg: 'py-20',
  xl: 'py-24',
  '2xl': 'py-32',
};

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ 
    className, 
    variant = 'default',
    background,
    spacing = 'md',
    children,
    animate = true,
    ...props 
  }, ref) => {
    const backgroundClass = background ? backgroundVariants[background] : sectionVariants[variant];
    
    const Component = animate ? motion.section : 'section';
    const motionProps = animate ? {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: '-100px' },
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    } : {};

    return (
      <Component
        ref={ref}
        className={cn(
          'w-full',
          backgroundClass,
          spacingVariants[spacing],
          variant === 'narrow' && 'px-4 sm:px-6 lg:px-8',
          className
        )}
        {...motionProps}
        {...props}
      >
        <div className={cn(
          'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
          variant === 'narrow' && 'max-w-4xl'
        )}>
          {children}
        </div>
      </Component>
    );
  }
);

Section.displayName = 'Section'; 