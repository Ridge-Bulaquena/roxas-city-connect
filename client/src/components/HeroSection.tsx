import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, BarChart3, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  userType: 'resident' | 'official' | 'visitor';
  hasVoted: boolean;
}

export const HeroSection = ({ userType, hasVoted }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const navigate = useNavigate();

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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-yellow-50 overflow-hidden pt-32 md:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%230B1523%22%20fill-opacity=%221%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
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

          {/* Main Title with fade-in */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
              {content.title}
            </span>
          </motion.h1>

          {/* Subtitle with typewriter effect */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed min-h-[3.5rem]"
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
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group ripple pulse-glow"
                >
                  {content.cta}
                  <motion.div
                    className="ml-2 inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </motion.div>
                </Button>
              </motion.div>
              
              {userType === 'resident' && (
                <>
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ripple"
                      onClick={() => navigate('/city-services')}
                    >
                      City Services
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ripple"
                      onClick={() => navigate('/share-feedback')}
                    >
                      Share Feedback
                    </Button>
                  </motion.div>
                </>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <motion.div 
              className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 card-hover cursor-pointer"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                <Users className="w-8 h-8 text-blue-600 mb-3" />
              </motion.div>
              <motion.div 
                className="text-2xl font-bold text-gray-900"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              >
                156,435
              </motion.div>
              <div className="text-gray-600">Active Citizens</div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 card-hover cursor-pointer"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div whileHover={{ scale: 1.2, rotate: -10 }}>
                <BarChart3 className="w-8 h-8 text-yellow-500 mb-3" />
              </motion.div>
              <motion.div 
                className="text-2xl font-bold text-gray-900"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
              >
                ₱2.1B
              </motion.div>
              <div className="text-gray-600">City Budget</div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 card-hover cursor-pointer"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div whileHover={{ scale: 1.2, rotate: 15 }}>
                <Heart className="w-8 h-8 text-red-500 mb-3" />
              </motion.div>
              <motion.div 
                className="text-2xl font-bold text-gray-900"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
              >
                98.2%
              </motion.div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
