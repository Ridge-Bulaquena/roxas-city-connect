import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { DigitalParticipation } from "@/components/DigitalParticipation";
import { ComplaintSystem } from "@/components/ComplaintSystem";
import { usePersonalization } from "@/hooks/usePersonalization";

export default function ShareFeedbackPage() {
  const { userType, setUserType, hasVoted } = usePersonalization();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation userType={userType} setUserType={setUserType} />
      <main className="flex-1">
        <div className="py-12 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-slate-800 mb-4">Make Your Voice Heard</h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Democracy works best when citizens actively participate. Join discussions, 
                provide feedback on city projects, and help shape Roxas City's future.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto text-left">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                  <h3 className="font-semibold text-slate-800 mb-2">Submit suggestions and concerns</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                  <h3 className="font-semibold text-slate-800 mb-2">Participate in public consultations</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                  <h3 className="font-semibold text-slate-800 mb-2">Attend virtual town halls</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                  <h3 className="font-semibold text-slate-800 mb-2">Track project progress</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DigitalParticipation hasVoted={hasVoted} />
        <ComplaintSystem />
      </main>
      <Footer />
    </div>
  );
}