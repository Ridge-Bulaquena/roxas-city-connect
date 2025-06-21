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
              <h1 className="text-4xl font-bold text-slate-800 mb-4">City Services at Your Fingertips</h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                From business permits to civil documents, access essential city services online 24/7. 
                Our digital platform makes government services faster, easier, and more transparent.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto text-left">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                  <h3 className="font-semibold text-slate-800 mb-2">Apply for permits and licenses</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                  <h3 className="font-semibold text-slate-800 mb-2">Request civil registry documents</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                  <h3 className="font-semibold text-slate-800 mb-2">Pay taxes and fees online</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                  <h3 className="font-semibold text-slate-800 mb-2">Track your application status</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ServicesGrid />
      </main>
      <Footer />
    </div>
  );
}