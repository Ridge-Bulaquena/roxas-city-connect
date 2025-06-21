import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import VisitorHome from "@/components/VisitorHome";
import { usePersonalization } from "@/hooks/usePersonalization";

export default function VisitorPage() {
  const { userType, setUserType } = usePersonalization();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation userType={userType} setUserType={setUserType} />
      <main className="flex-1">
        <VisitorHome />
      </main>
      <Footer />
    </div>
  );
} 