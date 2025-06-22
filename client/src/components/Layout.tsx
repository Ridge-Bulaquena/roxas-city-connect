import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center space-x-2">
                        <motion.div 
                            className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"
                            whileHover={{ scale: 1.1, rotate: 15 }}
                        />
                        <span className="text-xl font-bold text-slate-800">Roxas City Connect</span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
                        <Link to="/" className="text-slate-600 hover:text-slate-900 transition-colors">Home</Link>
                        <Link to="/services" className="text-slate-600 hover:text-slate-900 transition-colors">Services</Link>
                        <Link to="/feedback" className="text-slate-600 hover:text-slate-900 transition-colors">Feedback</Link>
                        <Link to="/contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

const SimpleFooter = () => {
    return (
        <footer className="w-full py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500">
                <div className="flex justify-center space-x-6">
                    <Link to="/privacy" className="hover:text-slate-800 transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-slate-800 transition-colors">Terms of Use</Link>
                    <Link to="/contact" className="hover:text-slate-800 transition-colors">Contact</Link>
                </div>
                <p className="mt-4">&copy; {new Date().getFullYear()} Roxas City Government. All Rights Reserved.</p>
            </div>
        </footer>
    );
};


interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#eef2f9] font-sans">
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <SimpleFooter />
    </div>
  );
}; 
