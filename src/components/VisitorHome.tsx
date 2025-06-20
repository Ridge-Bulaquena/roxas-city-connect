import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { ArrowRight } from "lucide-react";
import HeroSlider from "@/components/ui/visitor/HeroSlider";

function VisitorCard({ title, subtitle, description, href, tooltip }: { title: string, subtitle: string, description: string, href: string, tooltip: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.03, boxShadow: "0 8px 32px rgba(56,225,255,0.10)" }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="bg-[#1A263B] p-6 rounded-xl shadow-lg hover:bg-[#22344D] transition-all duration-300 text-center flex flex-col items-center"
    >
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <div className="text-[#38E1FF] font-medium mb-2">{subtitle}</div>
      <p className="text-sm text-[#9AAEC4] mb-4">{description}</p>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button className="btn-primary mx-auto mt-2 block" asChild>
            <a href={href}>
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top" className="bg-[#0B1523] text-white rounded-lg px-4 py-3 text-[14px] font-[Figtree] shadow-lg" sideOffset={8}>
          {tooltip}
        </TooltipContent>
      </Tooltip>
    </motion.div>
  );
}

function IconCard({ icon, title, desc }: { icon: string, title: string, desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-gray-100"
    >
      <span className="text-3xl mb-2">{icon}</span>
      <div className="font-semibold text-lg mb-1 text-midnight">{title}</div>
      <div className="text-gray-500 text-sm">{desc}</div>
    </motion.div>
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