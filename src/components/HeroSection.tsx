
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, BarChart3, Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  userType: 'resident' | 'official' | 'visitor';
  hasVoted: boolean;
}

export const HeroSection = ({ userType, hasVoted }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getHeroContent = () => {
    switch (userType) {
      case 'resident':
        return {
          title: "Shape Roxas with Every Click",
          subtitle: "Your voice matters. Participate in city decisions, track government progress, and build a better community together.",
          cta: hasVoted ? "View Results" : "Vote Now",
          badge: hasVoted ? "Already Voted" : "Voting Open"
        };
      case 'official':
        return {
          title: "Data-Driven Governance",
          subtitle: "Access real-time city metrics, manage citizen feedback, and make informed decisions with comprehensive dashboards.",
          cta: "View Dashboard",
          badge: "Admin Access"
        };
      case 'visitor':
        return {
          title: "Discover Roxas City",
          subtitle: "Explore our vibrant culture, business opportunities, and transparent governance. See how innovation meets tradition.",
          cta: "Explore City",
          badge: "Welcome"
        };
      default:
        return {
          title: "Shape Roxas with Every Click",
          subtitle: "Empowering citizens, councilors, and visitors through data-driven engagement.",
          cta: "Get Started",
          badge: "Get Involved"
        };
    }
  };

  const content = getHeroContent();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-yellow-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%230B1523%22%20fill-opacity=%221%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Badge */}
          <Badge 
            variant="secondary" 
            className="mb-6 px-4 py-2 text-sm font-medium bg-yellow-100 text-yellow-800 border-yellow-200 animate-fade-in"
          >
            {content.badge}
          </Badge>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
              {content.title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>

          {/* CTA Button */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              {content.cta}
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Stats */}
          <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
              <Users className="w-8 h-8 text-blue-600 mb-3" />
              <div className="text-2xl font-bold text-gray-900">156,435</div>
              <div className="text-gray-600">Active Citizens</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
              <BarChart3 className="w-8 h-8 text-yellow-500 mb-3" />
              <div className="text-2xl font-bold text-gray-900">₱2.1B</div>
              <div className="text-gray-600">City Budget</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
              <Heart className="w-8 h-8 text-red-500 mb-3" />
              <div className="text-2xl font-bold text-gray-900">98.2%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
