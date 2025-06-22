import React from 'react';
import { cn } from './utils';

export interface HeaderLink {
  href: string;
  label: string;
  external?: boolean;
}

export interface HeaderProps {
  links?: HeaderLink[];
  showGetStarted?: boolean;
  className?: string;
}

export const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ links = [], showGetStarted = false, className, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn('bg-white border-b border-gray-200 sticky top-0 z-50', className)}
        {...props}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Roxas City Connect</h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            
            {showGetStarted && (
              <div className="flex items-center space-x-4">
                <button className="bg-primary-600 text-white px-4 py-2 rounded-full hover:bg-primary-700 transition-colors">
                  Get Started
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
);

Header.displayName = 'Header'; 