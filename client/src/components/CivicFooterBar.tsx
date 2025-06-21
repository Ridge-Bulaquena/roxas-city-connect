import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, AnimationGeneratorType } from "framer-motion";
import { Satellite, X } from "lucide-react";
// Placeholder for Lottie. Replace with your Lottie component and JSON
const RoxAILottie = ({ isOpen }: { isOpen: boolean }) => (
  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-300 flex items-center justify-center shadow-lg">
    {/* <Lottie animationData={pinoyAiLottie} loop={isOpen} /> */}
    <span className="text-3xl">🤖</span>
  </div>
);

export const CivicFooterBar = () => {
  const [showCivicPanel, setShowCivicPanel] = useState(false);
  const [showRoxAI, setShowRoxAI] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (showRoxAI && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [showRoxAI]);

  // Animations
  const fadeRise = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as AnimationGeneratorType, stiffness: 120, damping: 18, delay: 0.2 } }
  };
  const panelVariants = {
    hidden: { y: '100%', opacity: 0, filter: 'blur(10px)' },
    visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { type: 'spring' as AnimationGeneratorType, stiffness: 200, damping: 22 } },
    exit: { y: '100%', opacity: 0, filter: 'blur(10px)', transition: { type: 'spring' as AnimationGeneratorType, stiffness: 300, damping: 30 } }
  };
  const roxAIVariants = {
    hidden: { scale: 0.7, opacity: 0, y: 40 },
    visible: { scale: 1, opacity: 1, y: 0, transition: { type: 'spring' as AnimationGeneratorType, stiffness: 300, damping: 22 } },
    exit: { scale: 0.7, opacity: 0, y: 40, transition: { type: 'spring' as AnimationGeneratorType, stiffness: 400, damping: 30 } }
  };
  const Divider = () => (
    <div className="hidden md:block w-8 h-1 rounded-full mx-4 bg-gradient-to-r from-cyan-400 via-emerald-300 to-yellow-200 shadow-[0_0_16px_2px_rgba(34,197,246,0.25)] animate-pulse" />
  );

  return (
    <>
      {/* Fixed Footer - always at absolute bottom, no gap */}
      <motion.footer
        className="fixed bottom-0 left-0 right-0 w-full z-50 bg-gray-900 border-t border-gray-800/60 shadow-2xl !m-0 !mb-0"
        style={{ margin: 0, padding: 0 }}
        variants={fadeRise}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-2 md:px-8 py-2 md:py-3">
          {/* Left: Smart Civic Panel (desktop only) */}
          {!isMobile && (
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: "0 0 0 4px #38bdf8, 0 0 16px #38bdf8" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowCivicPanel(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-900/80 to-emerald-900/60 border border-cyan-400/30 hover:border-cyan-300/60 transition-all duration-300 text-white font-semibold tracking-wide focus:outline-none focus:ring-2 focus:ring-cyan-400/50 shadow"
              aria-label="Open Smart Civic Panel"
            >
              <motion.span
                animate={{ scale: [1, 1.12, 1], opacity: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Satellite className="w-5 h-5 text-cyan-300" />
              </motion.span>
              <span className="hidden md:inline-block text-cyan-100">Smart Civic Panel</span>
            </motion.button>
          )}
          {!isMobile && <Divider />}
          {/* Center: Copyright only */}
          <div className="flex-1 flex justify-center">
            <span
              className="text-sm font-semibold text-white/90 tracking-wide"
              style={{ fontFamily: "Figtree, Lato, Inter, sans-serif" }}
            >
              © 2025 Roxas City Government
            </span>
          </div>
          {!isMobile && <Divider />}
          {/* Right: RoxAI Chatmate */}
          {!isMobile ? (
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: "0 0 0 4px #34d399, 0 0 16px #34d399" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowRoxAI(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-900/80 to-cyan-900/60 border border-emerald-400/30 hover:border-emerald-300/60 transition-all duration-300 text-white font-semibold tracking-wide focus:outline-none focus:ring-2 focus:ring-emerald-400/50 shadow"
              aria-label="Open RoxAI Chatmate"
            >
              <motion.span
                animate={{ scale: [1, 1.12, 1], opacity: [1, 0.8, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <RoxAILottie isOpen={showRoxAI} />
              </motion.span>
              <span className="hidden md:inline-block text-emerald-100">RoxAI Chatmate</span>
            </motion.button>
          ) : (
            // Mobile FAB
            <motion.button
              whileHover={{ scale: 1.13, boxShadow: "0 0 0 4px #34d399, 0 0 16px #34d399" }}
              whileTap={{ scale: 0.93 }}
              onClick={() => setShowRoxAI(true)}
              className="fixed bottom-20 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 via-emerald-600 to-cyan-500 shadow-2xl focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
              aria-label="Open RoxAI Chatmate"
            >
              <RoxAILottie isOpen={showRoxAI} />
            </motion.button>
          )}
        </div>
      </motion.footer>
      {/* Smart Civic Panel Modal */}
      <AnimatePresence>
        {showCivicPanel && !isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setShowCivicPanel(false)}
          >
            <motion.div
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative bg-gray-900 rounded-t-2xl md:rounded-2xl shadow-2xl p-6 w-full max-w-4xl border border-cyan-400/30"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-6">
                <Satellite className="w-6 h-6 text-cyan-400" />
                <span className="text-xl font-bold text-cyan-100 tracking-wide">Smart Civic Panel</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <motion.div
                  className="flex flex-col items-center p-4 rounded-xl bg-gray-800/50 border border-cyan-400/20"
                  whileHover={{ scale: 1.02, borderColor: "rgba(34, 197, 246, 0.4)" }}
                  transition={{ type: 'spring' as AnimationGeneratorType, stiffness: 300, damping: 20 }}
                >
                  <span className="text-cyan-100 font-semibold text-center">Real-time KPIs</span>
                  <span className="text-xs text-cyan-200/80 text-center mt-1">Performance metrics & trends</span>
                </motion.div>
                <motion.div
                  className="flex flex-col items-center p-4 rounded-xl bg-gray-800/50 border border-emerald-400/20"
                  whileHover={{ scale: 1.02, borderColor: "rgba(16, 185, 129, 0.4)" }}
                  transition={{ type: 'spring' as AnimationGeneratorType, stiffness: 300, damping: 20 }}
                >
                  <span className="text-emerald-100 font-semibold text-center">Citizen Polls</span>
                  <span className="text-xs text-emerald-200/80 text-center mt-1">Live feedback & voting</span>
                </motion.div>
                <motion.div
                  className="flex flex-col items-center p-4 rounded-xl bg-gray-800/50 border border-blue-400/20"
                  whileHover={{ scale: 1.02, borderColor: "rgba(59, 130, 246, 0.4)" }}
                  transition={{ type: 'spring' as AnimationGeneratorType, stiffness: 300, damping: 20 }}
                >
                  <span className="text-blue-100 font-semibold text-center">Smart Map</span>
                  <span className="text-xs text-blue-200/80 text-center mt-1">GIS & city data</span>
                </motion.div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowCivicPanel(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-cyan-300 text-2xl font-bold focus:outline-none transition-colors"
                aria-label="Close Civic Panel"
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
              variants={roxAIVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative bg-gray-900 rounded-t-2xl md:rounded-2xl shadow-2xl p-6 w-full max-w-md border border-emerald-400/30 flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              {/* Lottie Pinoy AI + Chat bubble that transforms into chat input */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ type: 'spring' as AnimationGeneratorType, stiffness: 300, damping: 22 }}
                className="mb-2"
              >
                <RoxAILottie isOpen={showRoxAI} />
              </motion.div>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring' as AnimationGeneratorType, stiffness: 300, damping: 22, delay: 0.15 }}
                className="w-full max-w-xs bg-white rounded-2xl shadow-lg p-4 text-gray-900 text-sm mb-4 relative"
                style={{ minHeight: 60 }}
              >
                <div className="mb-2">Hi! I'm RoxAI. How can I help you today?</div>
                <form className="flex gap-2 mt-2">
                  <input
                    ref={inputRef}
                    type="text"
                    className="flex-1 rounded-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Type your question..."
                  />
                  <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-4 py-2 font-semibold transition">Send</button>
                </form>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowRoxAI(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-emerald-300 text-2xl font-bold focus:outline-none transition-colors"
                aria-label="Close RoxAI Chatmate"
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