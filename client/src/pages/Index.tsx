
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
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
          <ResidentHome userType={userType} hasVoted={hasVoted} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
