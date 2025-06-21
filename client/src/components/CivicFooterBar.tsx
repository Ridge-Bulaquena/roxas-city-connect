import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Satellite, Bot, Map, BarChart3, Users, Globe } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export const CivicFooterBar = () => {
  const [showCivicPanel, setShowCivicPanel] = useState(false);
  const [showRoxAI, setShowRoxAI] = useState(false);

  // Responsive: show only on md+ screens
  // Mobile: show only copyright and floating FAB for RoxAI
  return (
    <>
      {/* Desktop/Tablet Footer Bar */}
      <div className="hidden md:block w-full border-t border-gray-800/70 bg-gradient-to-r from-gray-900/90 via-slate-900/95 to-blue-900/90 shadow-[0_0_32px_0_rgba(34,197,246,0.08)] relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Left: Smart Civic Panel */}
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.13, boxShadow: "0 0 12px #38bdf8, 0 0 32px #fbbf24" }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setShowCivicPanel(true)}
                  className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/80 to-yellow-700/40 border border-blue-700/40 shadow-md hover:shadow-blue-400/30 transition-all text-white font-semibold tracking-wide backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label="Open Smart Civic Panel"
                >
                  <Satellite className="w-5 h-5 text-cyan-300 group-hover:text-yellow-300 drop-shadow-glow" />
                  <span className="hidden lg:inline-block text-cyan-100 group-hover:text-yellow-100">Smart Civic Panel</span>
                </motion.button>
              </TooltipTrigger>
              <TooltipContent side="top">Smart Civic Panel: Dashboards, Polls, Smart Map</TooltipContent>
            </Tooltip>
          </div>

          {/* Center: Civic Identity */}
          <div className="flex flex-col items-center">
            <span className="text-xs font-mono tracking-widest text-cyan-200/80 mb-0.5 animate-pulse">Built for Citizens. Inspired by Futures.</span>
            <span className="text-sm md:text-base font-semibold text-white/90 tracking-wide">
              © 2025 Roxas City Government · <span className="text-yellow-300/90">Powered by CivicTechPH</span>
            </span>
          </div>

          {/* Right: RoxAI Chatmate */}
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.13, boxShadow: "0 0 12px #fbbf24, 0 0 32px #38bdf8" }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setShowRoxAI(true)}
                  className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-700/40 to-blue-900/80 border border-yellow-400/30 shadow-md hover:shadow-yellow-400/30 transition-all text-white font-semibold tracking-wide backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label="Open RoxAI Chatmate"
                >
                  <Bot className="w-5 h-5 text-yellow-300 group-hover:text-cyan-300 drop-shadow-glow animate-bounce" />
                  <span className="hidden lg:inline-block text-yellow-100 group-hover:text-cyan-100">RoxAI Chatmate</span>
                </motion.button>
              </TooltipTrigger>
              <TooltipContent side="top">RoxAI: GPT-powered, voice-enabled, multilingual</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Mobile: Only copyright, floating RoxAI FAB */}
      <div className="md:hidden w-full border-t border-gray-800/70 bg-gradient-to-r from-gray-900/90 via-slate-900/95 to-blue-900/90 shadow-[0_0_32px_0_rgba(34,197,246,0.08)] relative z-20">
        <div className="flex flex-col items-center justify-center py-3">
          <span className="text-xs font-mono tracking-widest text-cyan-200/80 mb-0.5 animate-pulse">Built for Citizens. Inspired by Futures.</span>
          <span className="text-sm font-semibold text-white/90 tracking-wide text-center">
            © 2025 Roxas City Government · <span className="text-yellow-300/90">Powered by CivicTechPH</span>
          </span>
        </div>
        {/* Floating FAB for RoxAI */}
        <motion.button
          whileHover={{ scale: 1.13, boxShadow: "0 0 12px #fbbf24, 0 0 32px #38bdf8" }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setShowRoxAI(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-cyan-400 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Open RoxAI Chatmate"
        >
          <Bot className="w-7 h-7 text-white drop-shadow-glow animate-bounce" />
        </motion.button>
      </div>

      {/* Smart Civic Panel Modal (stub) */}
      <AnimatePresence>
        {showCivicPanel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setShowCivicPanel(false)}
          >
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              className="relative bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-xl border border-cyan-400/30"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-6">
                <Satellite className="w-6 h-6 text-cyan-300 drop-shadow-glow" />
                <span className="text-lg font-bold text-cyan-100 tracking-wide">Smart Civic Panel</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <BarChart3 className="w-8 h-8 text-yellow-300 mb-2" />
                  <span className="text-cyan-100 font-semibold">Civic Dashboard</span>
                  <span className="text-xs text-cyan-200/80">Performance, metrics, trends</span>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="w-8 h-8 text-cyan-300 mb-2" />
                  <span className="text-yellow-100 font-semibold">Citizen Polls</span>
                  <span className="text-xs text-cyan-200/80">Live polling, feedback</span>
                </div>
                <div className="flex flex-col items-center">
                  <Globe className="w-8 h-8 text-cyan-200 mb-2" />
                  <span className="text-cyan-100 font-semibold">Smart Map</span>
                  <span className="text-xs text-cyan-200/80">GIS, city data, more</span>
                </div>
              </div>
              <button
                className="absolute top-3 right-3 text-cyan-200 hover:text-yellow-300 text-xl font-bold focus:outline-none"
                onClick={() => setShowCivicPanel(false)}
                aria-label="Close Civic Panel"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RoxAI Chatmate Panel (stub) */}
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
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              className="relative bg-gray-900 rounded-2xl shadow-2xl p-6 w-full max-w-md border border-yellow-400/30"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-4">
                <Bot className="w-6 h-6 text-yellow-300 drop-shadow-glow animate-bounce" />
                <span className="text-lg font-bold text-yellow-100 tracking-wide">RoxAI Chatmate</span>
              </div>
              <div className="mb-4 text-cyan-100 text-sm">
                GPT-powered, voice-enabled, multilingual civic chatmate.<br />
                <span className="text-yellow-200">Try a prompt:</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <button className="px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-200 text-xs font-semibold hover:bg-yellow-400/40 transition">English</button>
                <button className="px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-200 text-xs font-semibold hover:bg-cyan-400/40 transition">Tagalog</button>
                <button className="px-3 py-1 rounded-full bg-blue-400/20 text-blue-200 text-xs font-semibold hover:bg-blue-400/40 transition">Hiligaynon</button>
              </div>
              <div className="rounded-lg bg-gray-800/80 p-3 text-cyan-200 text-xs mb-2">
                "How can I pay my city taxes online?"
              </div>
              <div className="rounded-lg bg-gray-800/80 p-3 text-cyan-200 text-xs mb-2">
                "Ano ang mga requirements para sa business permit?"
              </div>
              <div className="rounded-lg bg-gray-800/80 p-3 text-cyan-200 text-xs mb-2">
                "Paano ko makita ang mapa ng Roxas City?"
              </div>
              <button
                className="absolute top-3 right-3 text-yellow-200 hover:text-cyan-300 text-xl font-bold focus:outline-none"
                onClick={() => setShowRoxAI(false)}
                aria-label="Close RoxAI Chatmate"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 