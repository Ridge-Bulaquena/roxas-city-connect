import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, BarChart3, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { motion } from "framer-motion";

interface HeroSectionProps {
  userType: 'resident' | 'official' | 'visitor';
  hasVoted: boolean;
}

export const HeroSection = ({ userType, hasVoted }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getHeroContent = () => {
    switch (userType) {
      case 'resident':
        return {
          title: "Your City, Your Voice, Your Future",
          subtitle: "Roxas City Connect empowers every citizen to participate in building our community. Access city services, share your ideas, and stay connected with your local government.",
          cta: "Get Started",
          badge: "Welcome Resident"
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

  // Typewriter effect for subtitle
  const typewriterText = useTypewriter(content.subtitle, {
    speed: 28,
    delay: 0,
    onDone: undefined,
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0E1A2A] via-[#0B132B] to-[#1C2E4A] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%230B1523%22%20fill-opacity=%221%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Badge */}
          <Badge 
            variant="secondary" 
            className="mb-6 px-4 py-2 text-sm font-medium bg-[#28D7DB]/20 text-[#28D7DB] border-[#28D7DB]/30 animate-fade-in"
          >
            {content.badge}
          </Badge>

          {/* Main Title with fade-in */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#E3F6FF] mb-6 leading-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-[#28D7DB] via-[#00E5FF] to-white bg-clip-text text-transparent">
              {content.title}
            </span>
          </motion.h1>

          {/* Subtitle with typewriter effect */}
          <motion.p
            className="text-xl md:text-2xl text-[#93A3B5] mb-8 max-w-4xl mx-auto leading-relaxed min-h-[3.5rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            aria-label={content.subtitle}
          >
            {typewriterText}
          </motion.p>

          {/* CTA Buttons */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#28D7DB] via-[#00E5FF] to-white text-[#0B132B] hover:from-[#00E5FF] hover:to-[#28D7DB] px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105 active:scale-95"
              >
                {content.cta}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              {userType === 'resident' && (
                <>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-[#28D7DB] text-[#28D7DB] hover:bg-gradient-to-r hover:from-[#28D7DB] hover:via-[#00E5FF] hover:to-white hover:text-[#0B132B] px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                    onClick={() => window.location.href = '/services'}
                  >
                    City Services
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-[#28D7DB] text-[#28D7DB] hover:bg-gradient-to-r hover:from-[#28D7DB] hover:via-[#00E5FF] hover:to-white hover:text-[#0B132B] px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                    onClick={() => window.location.href = '/civic-engagement'}
                  >
                    Share Feedback
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex flex-col items-center p-6 bg-[#1C2E4A]/60 backdrop-blur-sm rounded-xl border border-[#28D7DB]/20">
              <Users className="w-8 h-8 text-[#28D7DB] mb-3" />
              <div className="text-2xl font-bold text-[#E3F6FF]">156,435</div>
              <div className="text-[#93A3B5]">Active Citizens</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-[#1C2E4A]/60 backdrop-blur-sm rounded-xl border border-[#28D7DB]/20">
              <BarChart3 className="w-8 h-8 text-[#28D7DB] mb-3" />
              <div className="text-2xl font-bold text-[#E3F6FF]">₱2.1B</div>
              <div className="text-[#93A3B5]">City Budget</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-[#1C2E4A]/60 backdrop-blur-sm rounded-xl border border-[#28D7DB]/20">
              <Heart className="w-8 h-8 text-[#28D7DB] mb-3" />
              <div className="text-2xl font-bold text-[#E3F6FF]">98.2%</div>
              <div className="text-[#93A3B5]">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
