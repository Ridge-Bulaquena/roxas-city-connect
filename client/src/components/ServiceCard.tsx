import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { motion, Variants } from "framer-motion";
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

  // Animation variants for cascading children
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        staggerChildren: 0.18,
        delayChildren: 0.18,
      },
    },
  };
  const childVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 180,
        damping: 18,
        delay: i * 0.04,
      },
    }),
  };

  return (
    <motion.div
      className="group relative flex flex-col items-center justify-between h-full rounded-2xl bg-white border border-slate-200 shadow-sm cursor-pointer overflow-hidden card-hover"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
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
        <motion.span
          className="mb-4 rounded-xl bg-blue-50 p-3 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          variants={childVariants}
          custom={0}
        >
          <Icon size={36} strokeWidth={1.5} className="text-blue-700 group-hover:text-blue-800 transition-colors duration-300 icon-bounce" aria-hidden="true" />
        </motion.span>
        <motion.h3
          className="text-lg font-inter font-semibold text-slate-800 mb-2 text-center"
          variants={childVariants}
          custom={1}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-slate-600 font-normal font-[Figtree] text-sm text-center mb-4 min-h-[48px]"
          variants={childVariants}
          custom={2}
        >
          {description}
        </motion.p>
      </div>
      <div className="w-full px-4 pb-6 flex flex-col items-center">
        <div className="relative w-full flex justify-center items-center">
          <motion.button
            className="btn-primary ripple elastic-button bg-gradient-to-b from-amber-100 to-yellow-50 hover:from-amber-200 hover:to-yellow-100 border border-yellow-200 text-yellow-800"
            tabIndex={0}
            onClick={onClick}
            aria-label={cta}
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            variants={childVariants}
            custom={3}
          >
            {cta}
            <span className="shine" />
          </motion.button>
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