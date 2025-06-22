// Roxas City Connect UI Components
// Reusable components for consistent design across all apps

// Core Components
export { Button } from './Button';
export type { ButtonProps } from './Button';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';
export type { CardProps, CardHeaderProps, CardTitleProps, CardDescriptionProps, CardContentProps, CardFooterProps } from './Card';

export { Header } from './Header';
export type { HeaderProps, HeaderLink } from './Header';

export { Footer } from './Footer';
export type { FooterProps } from './Footer';

export { Layout } from './Layout';
export type { LayoutProps } from './Layout';

export { Section } from './Section';
export type { SectionProps } from './Section';

// Utilities
export { cn, createVariantProps, getColorClasses, getSpacingClasses } from './utils';

// Re-export theme for convenience
export * from '@roxas/theme';
