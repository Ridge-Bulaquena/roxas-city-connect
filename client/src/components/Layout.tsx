import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-blue-700">Roxas City Connect</Link>
                <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
                    <Link to="/" className="hover:text-blue-700 transition-colors">Home</Link>
                    <Link to="/services" className="hover:text-blue-700 transition-colors">Services</Link>
                    <Link to="/feedback" className="hover:text-blue-700 transition-colors">Feedback</Link>
                    <Link to="/get-started" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">Get Started</Link>
                </nav>
            </div>
        </header>
    );
};

const SimpleFooter = () => {
    return (
        <footer className="bg-transparent text-center py-8 text-xs text-gray-500">
            © Roxas City Portal 2025 · <Link to="/terms" className="hover:text-gray-800">Terms</Link> ·{' '}
            <Link to="/privacy" className="hover:text-gray-800">Privacy</Link> · <Link to="/contact" className="hover:text-gray-800">Contact</Link>
        </footer>
    );
};

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#F0F4FF] to-white">
      <Header />
      <main className="flex-1">{children}</main>
      <SimpleFooter />
    </div>
  );
}; 
