import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Satellite, Bot, BarChart3, Users, Globe, X } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

// Placeholder for Lottie animation
const RoxAILottie = ({ isPlaying }: { isPlaying: boolean }) => (
  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-emerald-300 rounded-full flex items-center justify-center">
    <Bot className="w-6 h-6 text-gray-900" />
  </div>
);

export const FixedFooter = () => {
  const [showCivicPanel, setShowCivicPanel] = useState(false);
  const [showRoxAI, setShowRoxAI] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* Desktop/Tablet Fixed Footer */}
      <motion.footer
        className="hidden md:flex fixed bottom-0 left-0 right-0 w-full bg-gray-900 border-t border-gray-800/50 shadow-2xl z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 25, delay: 0.2 }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Smart Civic Panel */}
            <div className="flex items-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.button
                    whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(34, 197, 246, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowCivicPanel(true)}
                    className="group flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-900/80 to-emerald-900/60 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 text-white font-semibold tracking-wide backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                  >
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Satellite className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                    </motion.div>
                    <span className="hidden lg:inline-block text-cyan-100 group-hover:text-cyan-50">
                      Smart Civic Panel
                    </span>
                  </motion.button>
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-gray-800 text-cyan-100 border-cyan-500/30">
                  View Civic Dashboard
                </TooltipContent>
              </Tooltip>
            </div>

            {/* Center: Copyright */}
            <div className="flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-center"
              >
                <span className="text-sm font-semibold text-white/90 tracking-wide" style={{ fontFamily: 'Figtree, Lato, Inter, sans-serif' }}>
                  © 2025 Roxas City Government
                </span>
              </motion.div>
            </div>

            {/* Right: RoxAI Chatmate */}
            <div className="flex items-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.button
                    whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowRoxAI(true)}
                    className="group flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-900/80 to-cyan-900/60 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 text-white font-semibold tracking-wide backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <RoxAILottie isPlaying={showRoxAI} />
                    </motion.div>
                    <span className="hidden lg:inline-block text-emerald-100 group-hover:text-emerald-50">
                      RoxAI Chatmate
                    </span>
                  </motion.button>
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-gray-800 text-emerald-100 border-emerald-500/30">
                  Talk to RoxAI – Your Smart Companion
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </motion.footer>

      {/* Mobile: Only Copyright + Floating FAB */}
      <motion.footer
        className="md:hidden fixed bottom-0 left-0 right-0 w-full bg-gray-900 border-t border-gray-800/50 shadow-2xl z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 25, delay: 0.2 }}
      >
        <div className="flex items-center justify-center py-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-white/90 tracking-wide" style={{ fontFamily: 'Figtree, Lato, Inter, sans-serif' }}>
              © 2025 Roxas City Government
            </span>
          </motion.div>
        </div>
        
        {/* Mobile Floating FAB for RoxAI */}
        <motion.button
          whileHover={{ scale: 1.15, boxShadow: "0 0 25px rgba(16, 185, 129, 0.5)" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowRoxAI(true)}
          className="fixed bottom-20 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 via-emerald-600 to-cyan-500 shadow-2xl hover:shadow-3xl focus:outline-none focus:ring-2 focus:ring-emerald-400/50 transition-all duration-300"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <RoxAILottie isPlaying={showRoxAI} />
          </motion.div>
        </motion.button>
      </motion.footer>

      {/* Smart Civic Panel Modal */}
      <AnimatePresence>
        {showCivicPanel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setShowCivicPanel(false)}
          >
            <motion.div
              initial={{ y: "100%", opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ y: "100%", opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.6 }}
              className="relative bg-gray-900 rounded-t-2xl md:rounded-2xl shadow-2xl p-6 w-full max-w-4xl border border-cyan-500/30"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-6">
                <Satellite className="w-6 h-6 text-cyan-400" />
                <span className="text-xl font-bold text-cyan-100 tracking-wide">Smart Civic Panel</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <motion.div 
                  className="flex flex-col items-center p-4 rounded-xl bg-gray-800/50 border border-cyan-500/20"
                  whileHover={{ scale: 1.02, borderColor: "rgba(34, 197, 246, 0.4)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <BarChart3 className="w-8 h-8 text-cyan-400 mb-2" />
                  <span className="text-cyan-100 font-semibold text-center">Real-time KPIs</span>
                  <span className="text-xs text-cyan-200/80 text-center mt-1">Performance metrics & trends</span>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col items-center p-4 rounded-xl bg-gray-800/50 border border-emerald-500/20"
                  whileHover={{ scale: 1.02, borderColor: "rgba(16, 185, 129, 0.4)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Users className="w-8 h-8 text-emerald-400 mb-2" />
                  <span className="text-emerald-100 font-semibold text-center">Citizen Polls</span>
                  <span className="text-xs text-emerald-200/80 text-center mt-1">Live feedback & voting</span>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col items-center p-4 rounded-xl bg-gray-800/50 border border-blue-500/20"
                  whileHover={{ scale: 1.02, borderColor: "rgba(59, 130, 246, 0.4)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Globe className="w-8 h-8 text-blue-400 mb-2" />
                  <span className="text-blue-100 font-semibold text-center">Smart Map</span>
                  <span className="text-xs text-blue-200/80 text-center mt-1">GIS & city data</span>
                </motion.div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowCivicPanel(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-cyan-300 text-2xl font-bold focus:outline-none transition-colors"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RoxAI Chatmate Modal */}
      <AnimatePresence>
        {showRoxAI && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setShowRoxAI(false)}
          >
            <motion.div
              initial={{ scale: 0, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 400, damping: 25, duration: 0.5 }}
              className="relative bg-gray-900 rounded-t-2xl md:rounded-2xl shadow-2xl p-6 w-full max-w-md border border-emerald-500/30"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <RoxAILottie isPlaying={true} />
                </motion.div>
                <span className="text-xl font-bold text-emerald-100 tracking-wide">RoxAI Chatmate</span>
              </div>
              
              <div className="mb-4 text-cyan-100 text-sm">
                Your friendly AI companion for all things Roxas City.<br />
                <span className="text-emerald-200">Ask me anything about our city!</span>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="rounded-lg bg-gray-800/80 p-3 text-cyan-200 text-xs">
                  "How can I pay my city taxes online?"
                </div>
                <div className="rounded-lg bg-gray-800/80 p-3 text-cyan-200 text-xs">
                  "What are the requirements for business permit?"
                </div>
                <div className="rounded-lg bg-gray-800/80 p-3 text-cyan-200 text-xs">
                  "Show me the map of Roxas City"
                </div>
              </div>
              
              <div className="flex gap-2 mb-4">
                <button className="px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-200 text-xs font-semibold hover:bg-emerald-400/40 transition">English</button>
                <button className="px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-200 text-xs font-semibold hover:bg-cyan-400/40 transition">Tagalog</button>
                <button className="px-3 py-1 rounded-full bg-blue-400/20 text-blue-200 text-xs font-semibold hover:bg-blue-400/40 transition">Hiligaynon</button>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowRoxAI(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-emerald-300 text-2xl font-bold focus:outline-none transition-colors"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 