
import { 
  Heart, 
  GraduationCap, 
  Shield, 
  Building, 
  Briefcase, 
  Camera,
  ArrowRight 
} from "lucide-react";
import { useEffect, useState } from "react";

interface ServicesGridProps {
  userType: 'resident' | 'official' | 'visitor';
}

export const ServicesGrid = ({ userType }: ServicesGridProps) => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Health Services",
      description: "Access care, wherever you are",
      details: "Medical centers, emergency services, maternal care, and health programs across all barangays.",
      icon: Heart,
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      priority: userType === 'resident' ? 1 : 3
    },
    {
      title: "Education Support", 
      description: "Building futures, one student at a time",
      details: "School infrastructure, scholarships, feeding programs, and educational assistance.",
      icon: GraduationCap,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      priority: userType === 'resident' ? 2 : 3
    },
    {
      title: "Social Welfare",
      description: "Uplifting the vulnerable — together",
      details: "PWD support, senior citizen care, livelihood programs, and disaster relief.",
      icon: Shield,
      color: "from-green-500 to-emerald-600", 
      bgColor: "bg-green-50",
      priority: userType === 'resident' ? 2 : 3
    },
    {
      title: "Public Works & Infrastructure",
      description: "See what's being built",
      details: "Road construction, utilities, drainage systems, and infrastructure development.",
      icon: Building,
      color: "from-gray-500 to-slate-600",
      bgColor: "bg-gray-50",
      priority: userType === 'official' ? 1 : 2
    },
    {
      title: "Business Support", 
      description: "Grow and thrive in Roxas",
      details: "MSME assistance, business permits, market development, and entrepreneurship programs.",
      icon: Briefcase,
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50",
      priority: userType === 'visitor' ? 1 : 2
    },
    {
      title: "Tourism & Culture",
      description: "Roxas, a place worth knowing",
      details: "Cultural heritage, festivals, attractions, dining, and heritage conservation.",
      icon: Camera,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      priority: userType === 'visitor' ? 1 : 3
    }
  ];

  const sortedServices = [...services].sort((a, b) => a.priority - b.priority);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            City Services at Your Fingertips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive public services designed to serve every citizen, from healthcare to education, 
            infrastructure to cultural preservation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedServices.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={service.title}
                data-index={index}
                className={`service-card group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Priority Badge */}
                {service.priority === 1 && (
                  <div className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                    Priority
                  </div>
                )}

                <div className="p-8">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${service.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-blue-600 font-medium mb-3 text-sm">
                    {service.description}
                  </p>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.details}
                  </p>

                  {/* Action */}
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
