import { Link, useLocation } from "wouter";
import { Heart, Menu, X, Phone, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Find Centers", href: "/locator" },
    { name: "Schedule", href: "/scheduler" },
    { name: "AI Assistant", href: "/chat" },
  ];

  return (
    <>
      {/* Top info bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>(036) 621-0392</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>Roxas City, Capiz</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Globe size={14} />
            <span>Official City Portal</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-lg border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/api/placeholder/50/50" 
                  alt="Roxas City Logo" 
                  className="w-12 h-12"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg" style={{display: 'none'}}>
                  <Heart className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900">ROXAS CITY</h1>
                <p className="text-sm text-blue-600 font-medium">Health Services Portal</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    location === item.href
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-blue-100">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                      location === item.href
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}