import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Satellite, Bot, BarChart3, Users, Globe, X } from "lucide-react";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

// Updated Lottie placeholder for the new theme
const LingkodBotLottie = () => (
  <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center shrink-0">
    <Bot className="w-5 h-5 text-white" />
  </div>
);

export const FixedFooter = () => {
  const [showCivicPanel, setShowCivicPanel] = useState(false);
  const [showLingkodBot, setShowLingkodBot] = useState(false);

  return (
    <>
      {/* Unified White Footer */}
      <motion.footer
        className="fixed bottom-0 left-0 right-0 w-full bg-white/80 backdrop-blur-sm border-t border-slate-200/80 shadow-lg z-50"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            
            <div className="flex-1 flex justify-start">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center gap-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 px-3"
                      onClick={() => setShowCivicPanel(true)}
                    >
                      <Satellite className="w-5 h-5" />
                      <span className="font-semibold text-sm hidden sm:inline">Smart Civic Panel</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">View Civic Dashboard</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="flex-1 flex justify-center">
              <p className="text-sm text-slate-600 font-medium text-center">
                &copy; {new Date().getFullYear()} Roxas City
              </p>
            </div>

            <div className="flex-1 flex justify-end">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center gap-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 px-3"
                      onClick={() => setShowLingkodBot(true)}
                    >
                      <span className="font-semibold text-sm hidden sm:inline">LingkodBot</span>
                      <div className="hidden sm:block">
                        <LingkodBotLottie />
                      </div>
                       <Bot className="w-5 h-5 sm:hidden" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">Talk to LingkodBot</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

          </div>
        </div>
      </motion.footer>

      {/* Smart Civic Panel Modal - Light Theme */}
      <AnimatePresence>
        {showCivicPanel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={() => setShowCivicPanel(false)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-2xl border border-slate-200"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Satellite className="w-6 h-6 text-slate-800" />
                  <h3 className="text-xl font-bold text-slate-900">Smart Civic Panel</h3>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setShowCivicPanel(false)} className="text-slate-500 hover:bg-slate-100 rounded-full">
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: BarChart3, title: "Real-time KPIs", desc: "Performance metrics & trends" },
                  { icon: Users, title: "Citizen Polls", desc: "Live feedback & voting" },
                  { icon: Globe, title: "Smart Map", desc: "GIS & city data" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-50 border border-slate-200/80 transition-all hover:shadow-md hover:border-slate-300">
                    <item.icon className="w-8 h-8 text-slate-700 mb-3" />
                    <span className="text-slate-800 font-semibold">{item.title}</span>
                    <span className="text-xs text-slate-500 mt-1">{item.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LingkodBot Chat Interface Modal - Light Theme */}
      <AnimatePresence>
        {showLingkodBot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-end justify-center sm:justify-end bg-black/40"
            onClick={() => setShowLingkodBot(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 40 }}
              className="relative bg-white h-full w-full max-w-md shadow-2xl flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-200 shrink-0">
                <div className="flex items-center gap-3">
                  <Bot className="w-6 h-6 text-slate-800" />
                  <h3 className="text-xl font-bold text-slate-900">LingkodBot Chatmate</h3>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setShowLingkodBot(false)} className="text-slate-500 hover:bg-slate-100 rounded-full">
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="flex-1 p-6 text-center flex flex-col items-center justify-center bg-slate-50/50">
                <div className="mb-4">
                  <LingkodBotLottie />
                </div>
                <p className="text-slate-700 font-medium">LingkodBot is getting ready.</p>
                <p className="text-sm text-slate-500">Chat interface coming soon.</p>
              </div>

              <div className="p-4 border-t border-slate-200 shrink-0">
                <p className="text-xs text-slate-500 text-center">Powered by CivicTechPH</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 