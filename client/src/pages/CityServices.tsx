import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServicesGrid } from "@/components/ServicesGrid";
import { usePersonalization } from "@/hooks/usePersonalization";

export default function CityServicesPage() {
  const { userType, setUserType } = usePersonalization();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation userType={userType} setUserType={setUserType} />
      <main className="flex-1">
        <div className="py-12 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-slate-800 mb-4">City Services</h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Access comprehensive public services designed to serve every citizen of Roxas City.
              </p>
            </div>
          </div>
        </div>
        <ServicesGrid />
      </main>
      <Footer />
    </div>
  );
}