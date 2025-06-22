import React from 'react';
import { cn } from './utils';

export interface FooterProps {
  className?: string;
}

export const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className={cn('bg-gray-900 text-white py-12', className)}
        {...props}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Roxas City Connect</h3>
              <p className="text-gray-300 mb-4">
                Empowering citizens with digital services and transparent governance.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">City Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Permits</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Utilities</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Emergency</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Email: info@roxascity.gov.ph</li>
                <li>Phone: (036) 621-1234</li>
                <li>Address: Roxas City Hall</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Roxas City Government. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
);

Footer.displayName = 'Footer'; 