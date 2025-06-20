import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { ArrowRight } from "lucide-react";
import { VisitorCard } from "@/components/ui/visitor/VisitorCard";
import { IconCard } from "@/components/ui/visitor/IconCard";

// Simple HeroSlider placeholder
function HeroSlider() {
  return (
    <section className="bg-[#0B1523] text-white py-20 px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        Welcome to Roxas City
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, type: "spring" }}
        className="text-lg text-[#9AAEC4] max-w-2xl mx-auto"
      >
        Explore, invest, and experience culture — all in one platform built for visitors like you.
      </motion.p>
    </section>
  );
}

export default function VisitorHome() {
  return (
    <>
      <HeroSlider />

      {/* DARK SECTION: Visitor Types */}
      <section className="bg-[#0B1523] py-20 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
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
        <h2 className="text-3xl font-bold text-midnight">Why Roxas?</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Beaches, seafood, culture, and community — a true gem of Western Visayas.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <IconCard icon="🌊" title="Unspoiled Beaches" desc="White sands, clear water, and peaceful coastlines." />
          <IconCard icon="🍤" title="Seafood Capital" desc="Fresh talaba, crabs, and shrimp, caught daily." />
          <IconCard icon="🎉" title="Festival Culture" desc="Experience the vibrant 'Sinadya sa Halaran'." />
        </div>
      </section>

      {/* DARK SECTION: Final CTA */}
      <section className="bg-[#121C2E] py-20 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Plan Your Visit</h2>
        <p className="text-[#9AAEC4] max-w-lg mx-auto mb-8">
          From cultural calendars to booking tools — we make it easy.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button asChild className="btn-primary text-[#38E1FF] border border-[#2E3E56] hover:bg-[#22344D]">
            <a href="/tourism-culture/showcase/community">Connect with Locals</a>
          </Button>
          <Button asChild className="btn-primary text-[#38E1FF] border border-[#2E3E56] hover:bg-[#22344D]">
            <a href="/tourism-culture/showcase/attractions">Explore the Map</a>
          </Button>
        </div>
      </section>
    </>
  );
} 