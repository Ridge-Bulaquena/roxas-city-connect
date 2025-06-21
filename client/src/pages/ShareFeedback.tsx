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
              <h1 className="text-4xl font-bold text-slate-800 mb-4">Share Your Feedback</h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Your voice matters. Participate in city decisions, submit feedback, and help shape Roxas City's future.
              </p>
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