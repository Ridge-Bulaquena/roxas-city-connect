import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { usePersonalization } from "@/hooks/usePersonalization";
import WakandaFooter from "./WakandaFooter";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { userType, setUserType } = usePersonalization();
  
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation userType={userType} setUserType={setUserType} />
      <main className="flex-1">{children}</main>
      <Footer />
      <WakandaFooter />
    </div>
  );
} 
