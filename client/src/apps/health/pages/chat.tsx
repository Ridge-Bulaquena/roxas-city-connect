import { PuterChatBot } from "@/components/health/puter-chat-bot";

export default function AINurseAssistant() {
  return (
    <div className="py-20 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-6 font-main">AI Nurse Assistant</h2>
          <p className="text-xl text-slate-600 font-main">Get instant health guidance, symptom assessment, and medical advice from our advanced medical AI powered by avant-garde diagnostic technology.</p>
        </div>
        
        <PuterChatBot />
      </div>
    </div>
  );
}
