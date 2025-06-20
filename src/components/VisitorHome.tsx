import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

export default function VisitorHome() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1 – LIGHT */}
      <section className="bg-white text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", delay: 0.1 }}
          className="text-4xl font-bold text-midnight"
        >
          Welcome to Roxas City
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto"
        >
          Explore, invest, and experience culture — all in one platform built for visitors like you.
        </motion.p>
      </section>

      {/* SECTION 2 – DARK */}
      <section className="bg-[#0B1523] py-20 px-6 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* TOURIST */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.03, boxShadow: "0 8px 32px rgba(56,225,255,0.10)" }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="bg-[#1A263B] p-6 rounded-xl shadow-lg hover:bg-[#22344D] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">🌴 Tourist</h3>
            <p className="text-sm text-[#9AAEC4] mb-4">
              Discover stunning sights, seasonal events, and must-see places through interactive maps and virtual tours.
            </p>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary" className="text-[#38E1FF]" asChild>
                  <a href="/tourism-culture/showcase/attractions">Explore Roxas Now <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top" className="bg-[#0B1523] text-white rounded-lg px-4 py-3 text-[14px] font-[Figtree] shadow-lg" sideOffset={8}>
                Discover our best sights, tastes, and stories
              </TooltipContent>
            </Tooltip>
          </motion.div>

          {/* CULTURAL */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.03, boxShadow: "0 8px 32px rgba(56,225,255,0.10)" }}
            transition={{ type: "spring", stiffness: 300, damping: 22, delay: 0.1 }}
            className="bg-[#1A263B] p-6 rounded-xl shadow-lg hover:bg-[#22344D] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">🎭 Cultural Explorer</h3>
            <p className="text-sm text-[#9AAEC4] mb-4">
              Dive into our rich history through virtual museums, art galleries, and timelines of heritage.
            </p>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary" className="text-[#38E1FF]" asChild>
                  <a href="/tourism-culture/showcase/cultural-heritage">Enter the Heritage Portal <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top" className="bg-[#0B1523] text-white rounded-lg px-4 py-3 text-[14px] font-[Figtree] shadow-lg" sideOffset={8}>
                Experience Roxas beyond the surface
              </TooltipContent>
            </Tooltip>
          </motion.div>

          {/* INVESTOR */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.03, boxShadow: "0 8px 32px rgba(56,225,255,0.10)" }}
            transition={{ type: "spring", stiffness: 300, damping: 22, delay: 0.2 }}
            className="bg-[#1A263B] p-6 rounded-xl shadow-lg hover:bg-[#22344D] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">📈 Investor</h3>
            <p className="text-sm text-[#9AAEC4] mb-4">
              Analyze tourism impact, revenue flows, and growth projections for your next business move.
            </p>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary" className="text-[#38E1FF]" asChild>
                  <a href="/tourism-culture/showcase/economic-impact">See Economic Insights <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top" className="bg-[#0B1523] text-white rounded-lg px-4 py-3 text-[14px] font-[Figtree] shadow-lg" sideOffset={8}>
                Make data-backed investment decisions
              </TooltipContent>
            </Tooltip>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 – LIGHT */}
      <section className="bg-[#F8FAFC] py-20 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring" }}
          className="text-3xl font-bold text-midnight"
        >
          Stay Connected with Roxas
        </motion.h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Join events, support locals, or follow your favorite destinations — all through our community portal.
        </p>
      </section>
    </div>
  );
} 