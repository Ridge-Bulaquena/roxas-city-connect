import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { DigitalParticipation } from "@/components/DigitalParticipation";
import { ComplaintSystem } from "@/components/ComplaintSystem";
import { usePersonalization } from "@/hooks/usePersonalization";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useState, useEffect } from "react";

export default function ShareFeedbackPage() {
  const { userType, setUserType, hasVoted } = usePersonalization();
  const [isVisible, setIsVisible] = useState(false);
  const typewriterText = useTypewriter("Democracy works best when citizens actively participate. Join discussions, provide feedback on city projects, and help shape Roxas City's future.", {
    speed: 25,
    delay: 300,
    onDone: undefined,
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation userType={userType} setUserType={setUserType} />
      <main className="flex-1 pt-24 md:pt-16">
        <div className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-slate-50 to-yellow-50 overflow-hidden py-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%230B1523%22%20fill-opacity=%221%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-4 text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
                  Make Your Voice Heard
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-8 leading-relaxed min-h-[3.5rem]">
                {typewriterText}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 max-w-4xl mx-auto text-left">
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