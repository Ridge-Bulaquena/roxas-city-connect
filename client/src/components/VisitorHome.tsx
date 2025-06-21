import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { ArrowRight } from "lucide-react";
import { VisitorCard } from "@/components/ui/visitor/VisitorCard";
import { IconCard } from "@/components/ui/visitor/IconCard";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useState, useEffect } from "react";

// Enhanced HeroSlider with typewriter effect
function HeroSlider() {
  const [isVisible, setIsVisible] = useState(false);
  const typewriterText = useTypewriter("Explore, invest, and experience culture — all in one platform built for visitors like you.", {
    speed: 30,
    delay: 800,
    onDone: undefined,
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden pt-24 md:pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23FFFFFF%22%20fill-opacity=%221%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
          >
            Welcome to Roxas City
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-xl md:text-2xl text-slate-200 mb-8 max-w-4xl mx-auto leading-relaxed min-h-[3.5rem]"
            aria-label="Explore, invest, and experience culture — all in one platform built for visitors like you."
          >
            {typewriterText}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default function VisitorHome() {
  return (
    <>
      <HeroSlider />

      {/* Visitor Types */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 md:gap-6 px-8 md:px-6">
          <VisitorCard
            title="🌴 Tourist"
            subtitle="Discover & Explore"
            description="Interactive maps, virtual tours, festivals, and nature."
            href="/tourism-culture/showcase/attractions"
            tooltip="Discover our best sights, tastes, and stories"
          />
          <VisitorCard
            title="🎭 Cultural Explorer"
            subtitle="Uncover Heritage"
            description="Virtual museums, art galleries, and historical trails."
            href="/tourism-culture/showcase/cultural-heritage"
            tooltip="Experience Roxas beyond the surface"
          />
          <VisitorCard
            title="📈 Investor"
            subtitle="Build With Us"
            description="Track economic growth, tourism revenue, and market entry."
            href="/tourism-culture/showcase/economic-impact"
            tooltip="Make data-backed investment decisions"
          />
        </div>
      </section>

      {/* LIGHT SECTION: Why Roxas */}
      <section className="bg-white py-20 text-center px-6">
        <h2 className="text-3xl font-bold text-slate-900">Why Roxas?</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Beaches, seafood, culture, and community — a true gem of Western Visayas.
        </p>
        <div className="mt-12 md:mt-10 grid md:grid-cols-3 gap-10 md:gap-6 max-w-6xl mx-auto px-8 md:px-0">
          <IconCard icon="🌊" title="Unspoiled Beaches" desc="White sands, clear water, and peaceful coastlines." />
          <IconCard icon="🍤" title="Seafood Capital" desc="Fresh talaba, crabs, and shrimp, caught daily." />
          <IconCard icon="🎉" title="Festival Culture" desc="Experience the vibrant 'Sinadya sa Halaran'." />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-50 py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-4 text-slate-900">Plan Your Visit</h2>
        <p className="text-slate-600 max-w-lg mx-auto mb-8">
          From cultural calendars to booking tools — we make it easy.
        </p>
        <div className="flex justify-center gap-6 md:gap-4 flex-wrap px-8 md:px-0">
          <Button asChild className="btn-visitor bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 text-white border border-slate-700">
            <a href="/tourism-culture/showcase/community">
              Connect with Locals
              <span className="shine" />
            </a>
          </Button>
          <Button asChild className="btn-visitor bg-white hover:bg-slate-100 text-slate-800 border border-slate-200">
            <a href="/tourism-culture/showcase/attractions">
              Explore the Map
              <span className="shine" />
            </a>
          </Button>
        </div>
      </section>
    </>
  );
} 