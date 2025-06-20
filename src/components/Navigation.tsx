import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  X, 
  ChevronDown,
  Home,
  BarChart3,
  Vote,
  Building2,
  Info
} from "lucide-react";

interface NavigationProps {
  userType: 'resident' | 'official' | 'visitor';
  setUserType: (type: 'resident' | 'official' | 'visitor') => void;
}

export const Navigation = ({ userType, setUserType }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync userType to localStorage
  useEffect(() => {
    localStorage.setItem('userType', userType);
  }, [userType]);

  const navItems = [
    {
      id: 'services',
      title: 'Public Services',
      tooltip: 'Access vital local programs.',
      items: [
        { title: 'Health Services', desc: 'Clinics, emergency care, health programs' },
        { title: 'Education Support', desc: 'Schools, scholarships, student assistance' },
        { title: 'Social Welfare', desc: 'PWD support, senior care, livelihood programs' },
        { title: 'Public Works', desc: 'Infrastructure, road repairs, utilities' }
      ]
    },
    {
      id: 'transparency',
      title: 'Transparency & Data',
      tooltip: 'See how government works.',
      items: [
        { title: 'Budget Dashboard', desc: 'Track spending and allocations' },
        { title: 'Infrastructure Timeline', desc: 'Project progress and updates' },
        { title: 'Performance KPIs', desc: 'City metrics and achievements' },
        { title: 'Procurement Logs', desc: 'Contract and bidding transparency' }
      ]
    },
    {
      id: 'participation',
      title: 'Participation',
      tooltip: 'Engage in real governance.',
      items: [
        { title: 'Complaint System', desc: 'File and track complaints' },
        { title: 'Budget Voting', desc: 'Participatory budget allocation' },
        { title: 'Digital Town Hall', desc: 'Community meetings and Q&A' },
        { title: 'Community Polls', desc: 'Voice your opinion on city matters' }
      ]
    },
    {
      id: 'business',
      title: 'Business & Tourism',
      tooltip: 'Opportunities await.',
      items: [
        { title: 'MSME Hub', desc: 'Small business support and resources' },
        { title: 'Business Tools', desc: 'Permits, licensing, guidance' },
        { title: 'Culture Portal', desc: 'Heritage sites and local culture' },
        { title: 'Events Calendar', desc: 'Festivals, markets, community events' }
      ]
    },
    {
      id: 'about',
      title: 'About the City',
      tooltip: 'Meet your city leaders and history.',
      items: [
        { title: 'Mayor & Council', desc: 'Leadership profiles and contact' },
        { title: 'City Districts', desc: 'Barangay information and services' },
        { title: 'Contact Us', desc: 'Government offices and hotlines' },
        { title: 'City History', desc: 'Heritage and historical timeline' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-900">Roxas City</h1>
              <p className="text-xs text-gray-600">Citizen Platform</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors group">
                  <span className="font-medium">{item.title}</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>

                {/* Mega Dropdown */}
                {activeDropdown === item.id && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in">
                    <div className="p-2">
                      <div className="text-xs text-gray-500 mb-2 px-3">{item.tooltip}</div>
                      {item.items.map((subItem, index) => (
                        <div
                          key={index}
                          className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                        >
                          <div className="font-medium text-gray-900">{subItem.title}</div>
                          <div className="text-sm text-gray-600 mt-1">{subItem.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* User Type Selector & Mobile Menu */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-2">
              <span className="text-sm text-gray-600">I am a:</span>
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value as any)}
                className="text-sm border border-gray-300 rounded-md px-2 py-1 bg-white"
              >
                <option value="resident">Resident</option>
                <option value="visitor">Visitor</option>
                <option value="official">Official</option>
              </select>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-sm text-gray-600">I am a:</span>
                <select
                  value={userType}
                  onChange={(e) => setUserType(e.target.value as any)}
                  className="text-sm border border-gray-300 rounded-md px-2 py-1"
                >
                  <option value="resident">Resident</option>
                  <option value="visitor">Visitor</option>
                  <option value="official">Official</option>
                </select>
              </div>
              {navItems.map((item) => (
                <div key={item.id} className="border-b border-gray-100 pb-3">
                  <div className="font-medium text-gray-900 mb-2">{item.title}</div>
                  <div className="space-y-1 ml-4">
                    {item.items.map((subItem, index) => (
                      <div key={index} className="text-sm text-gray-600 py-1">
                        {subItem.title}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Role-based notification banner */}
      {userType === 'resident' && (
        <div className="relative overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm h-9 flex items-center">
          <div
            className="whitespace-nowrap animate-marquee px-4 flex"
            aria-label="Participatory Budget voting is open today! Have your say in city spending."
          >
            <span className="mr-12">
              <span role="img" aria-label="lightbulb">💡</span> Participatory Budget voting is open today! Have your say in city spending.
            </span>
            <span>
              <span role="img" aria-label="lightbulb">💡</span> Participatory Budget voting is open today! Have your say in city spending.
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};
