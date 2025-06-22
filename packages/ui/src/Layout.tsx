import React from 'react';
import { cn } from './utils';
import { Header } from './Header';
import { Footer } from './Footer';

export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  headerProps?: React.ComponentProps<typeof Header>;
  footerProps?: React.ComponentProps<typeof Footer>;
}

export const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ 
    children, 
    className,
    showHeader = true,
    showFooter = true,
    headerProps,
    footerProps,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('min-h-screen bg-background text-foreground flex flex-col', className)}
        {...props}
      >
        {showHeader && <Header {...headerProps} />}
        <main className={cn('flex-1', showHeader && 'pt-16')}>
          {children}
        </main>
        {showFooter && <Footer {...footerProps} />}
      </div>
    );
  }
);

Layout.displayName = 'Layout'; 