import { useState } from "react";
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
import VisitorHome from "@/components/VisitorHome";
import ResidentHome from "@/components/ResidentHome";

const Index = () => {
  const { userType, setUserType, hasVoted, language } = usePersonalization();
  const [isLoaded, setIsLoaded] = useState(true); // Always true, or use a loading state if needed

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation userType={userType} setUserType={setUserType} />
      <main className={`flex-1 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {userType === 'visitor' ? (
          <VisitorHome />
        ) : (
          <>
            <HeroSection userType={userType} hasVoted={hasVoted} />
            <ServicesGrid userType={userType} />
            <ComplaintSystem />
            <LiveDashboards userType={userType} />
            <DigitalParticipation hasVoted={hasVoted} />
            <OpenDataSpotlight />
            <TourismFeed userType={userType} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
