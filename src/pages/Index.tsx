
import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ComplaintSystem } from "@/components/ComplaintSystem";
import { LiveDashboards } from "@/components/LiveDashboards";
import { DigitalParticipation } from "@/components/DigitalParticipation";
import { OpenDataSpotlight } from "@/components/OpenDataSpotlight";
import { TourismFeed } from "@/components/TourismFeed";
import { Footer } from "@/components/Footer";
import { usePersonalization } from "@/hooks/usePersonalization";

const Index = () => {
  const { userType, setUserType, hasVoted, language } = usePersonalization();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation userType={userType} setUserType={setUserType} />
      
      <main className={`transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <HeroSection userType={userType} hasVoted={hasVoted} />
        <ServicesGrid userType={userType} />
        <ComplaintSystem />
        <LiveDashboards userType={userType} />
        <DigitalParticipation hasVoted={hasVoted} />
        <OpenDataSpotlight />
        <TourismFeed userType={userType} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
