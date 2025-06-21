import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { ElementType } from "react";

interface ServiceCardProps {
  icon: keyof typeof LucideIcons;
  title: string;
  description: string;
  cta: string;
  onClick?: () => void;
}

export function ServiceCard({
  icon,
  title,
  description,
  cta,
  onClick,
}: ServiceCardProps) {
  let IconComp = LucideIcons[icon];
  if (typeof IconComp !== "function") {
    IconComp = LucideIcons["Circle"];
  }
  const Icon = IconComp as ElementType;
  return (
    <motion.div
      className="group relative flex flex-col items-center justify-between h-full rounded-2xl bg-[var(--civic-card)] border border-gray-100 shadow transition-all duration-300 cursor-pointer overflow-hidden"
      whileHover={{ y: -4, scale: 1.02, boxShadow: "var(--civic-shadow)" }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      tabIndex={0}
      role="button"
      aria-label={title}
      onClick={onClick}
    >
      {/* Shine swipe effect for card */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute left-[-60%] top-0 h-full w-1/2 bg-gradient-to-r from-white/60 to-transparent opacity-0 group-hover:opacity-80 rounded-2xl"
          initial={{ x: "-60%" }}
          animate={{ x: ["-60%", "120%"] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        />
      </div>
      <div className="flex flex-col items-center justify-center flex-1 py-8 px-4 w-full">
        <span className="mb-4 rounded-xl bg-[var(--civic-bg)] p-3 flex items-center justify-center">
          <Icon size={36} strokeWidth={1.5} className="text-[var(--civic-accent)]" aria-hidden="true" />
        </span>
        <h3 className="text-lg font-inter font-semibold text-gray-900 mb-2 text-center">{title}</h3>
        <p className="text-gray-600 font-normal font-[Figtree] text-sm text-center mb-4 min-h-[48px]">{description}</p>
      </div>
      <div className="w-full px-4 pb-6 flex flex-col items-center">
        <div className="relative w-full flex justify-center items-center">
          <button
            className="btn-primary"
            tabIndex={0}
            onClick={onClick}
            aria-label={cta}
            type="button"
          >
            {cta}
            <span className="shine" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* Add this to your global CSS (e.g., index.css or tailwind.css):
@keyframes shine {
  0% { left: -40%; opacity: 0; }
  40% { opacity: 0.8; }
  100% { left: 120%; opacity: 0; }
}
.animate-shine:hover {
  animation: shine 0.7s linear;
}
*/ 