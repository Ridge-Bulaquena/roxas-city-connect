
import { 
  Heart, 
  GraduationCap, 
  Shield, 
  Building, 
  Briefcase, 
  Camera,
  ArrowRight,
  BarChart3,
  Hammer,
  Leaf,
  Wheat,
  Users,
  Database,
  Vote
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
      tooltip: "Access care, wherever you are.",
      preview: "Clinics, hospitals, programs across Roxas",
      route: "/health-services/",
      icon: Heart,
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      priority: userType === 'resident' ? 1 : 3
    },
    {
      title: "Education Support", 
      tooltip: "Building futures, one student at a time.",
      preview: "Scholarships, digital classrooms",
      route: "/education-support/",
      icon: GraduationCap,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      priority: userType === 'resident' ? 2 : 3
    },
    {
      title: "Social Welfare",
      tooltip: "We uplift the vulnerable — together.",
      preview: "Support for seniors, PWDs, solo parents",
      route: "/social-welfare/",
      icon: Shield,
      color: "from-green-500 to-emerald-600", 
      bgColor: "bg-green-50",
      priority: userType === 'resident' ? 2 : 3
    },
    {
      title: "Governance & Transparency",
      tooltip: "Track every peso. Monitor every promise.",
      preview: "Budgets, KPIs, citizen accountability",
      route: "/governance-transparency/",
      icon: BarChart3,
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-50",
      priority: userType === 'official' ? 1 : 2
    },
    {
      title: "Public Works & Infrastructure",
      tooltip: "See what's being built.",
      preview: "Ongoing infra timelines & budgets",
      route: "/public-works-infrastructure/",
      icon: Hammer,
      color: "from-gray-500 to-slate-600",
      bgColor: "bg-gray-50",
      priority: userType === 'official' ? 1 : 2
    },
    {
      title: "Environmental Management", 
      tooltip: "Sustaining our city's future.",
      preview: "Waste, coastal resilience programs",
      route: "/environmental-management/",
      icon: Leaf,
      color: "from-green-600 to-teal-600",
      bgColor: "bg-green-50",
      priority: 2
    },
    {
      title: "Agriculture & Fishery Support",
      tooltip: "Supporting our farming and fishing communities.",
      preview: "Livelihood programs, modern techniques",
      route: "/agriculture-fishery-support/",
      icon: Wheat,
      color: "from-yellow-600 to-amber-600",
      bgColor: "bg-yellow-50",
      priority: 2
    },
    {
      title: "Peace & Order",
      tooltip: "Keeping our community safe.",
      preview: "Public safety, community policing",
      route: "/peace-order/",
      icon: Users,
      color: "from-purple-600 to-violet-600",
      bgColor: "bg-purple-50",
      priority: userType === 'resident' ? 2 : 3
    },
    {
      title: "Open Data Portal",
      tooltip: "Open by design.",
      preview: "Access raw & visualized data",
      route: "/open-data-portal/",
      icon: Database,
      color: "from-indigo-600 to-blue-600",
      bgColor: "bg-indigo-50",
      priority: userType === 'official' ? 1 : 3
    },
    {
      title: "Digital Participation",
      tooltip: "Be heard, be counted.",
      preview: "Votes, forums, town halls",
      route: "/digital-participation/",
      icon: Vote,
      color: "from-cyan-600 to-blue-500",
      bgColor: "bg-cyan-50",
      priority: userType === 'resident' ? 1 : 2
    },
    {
      title: "Business Support", 
      tooltip: "Support to grow and thrive.",
      preview: "MSME assistance and incentives",
      route: "/business-support/",
      icon: Briefcase,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      priority: userType === 'visitor' ? 1 : 2
    },
    {
      title: "Tourism & Culture",
      tooltip: "Roxas, a place worth knowing.",
      preview: "Events, heritage trails",
      route: "/tourism-culture/",
      icon: Camera,
      color: "from-purple-500 to-pink-500",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedServices.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={service.title}
                data-index={index}
                className={`service-card group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover-lift hover-glow ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
                onClick={() => window.location.href = service.route}
              >
                {/* Glassy shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Priority Badge */}
                {service.priority === 1 && (
                  <div className="absolute top-3 right-3 bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                    Priority
                  </div>
                )}

                <div className="p-6 relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${service.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-blue-600 font-medium mb-2 text-sm">
                    {service.tooltip}
                  </p>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.preview}
                  </p>

                  {/* Action */}
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors text-sm">
                    <span>Explore</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
