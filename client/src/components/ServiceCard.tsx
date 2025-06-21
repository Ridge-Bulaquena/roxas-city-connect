import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { motion, Variants } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { createElement, ElementType } from "react";

interface ServiceCardProps {
  icon: keyof typeof LucideIcons;
  title: string;
  description: string;
  cta: string;
  route: string;
}

const cardContentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Staggered delay for internal elements
    },
  },
};

const elementVariants: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};

export function ServiceCard({
  icon,
  title,
  description,
  cta,
  route,
}: ServiceCardProps) {
  const Icon = (LucideIcons[icon] as ElementType) || LucideIcons.HelpCircle;

  const handleClick = () => {
    window.location.href = route;
  };

  return (
    <motion.div
      className="group relative flex flex-col items-center justify-between h-full rounded-2xl bg-white border border-slate-200 shadow-sm cursor-pointer overflow-hidden p-6 text-center"
      onClick={handleClick}
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
      variants={cardContentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div variants={elementVariants} className="mb-4">
        <span className="inline-block p-3 bg-blue-100 rounded-xl">
          <Icon size={32} className="text-blue-600" />
        </span>
      </motion.div>
      <motion.h3
        variants={elementVariants}
        className="text-lg font-bold text-slate-800 mb-2"
      >
        {title}
      </motion.h3>
      <motion.p
        variants={elementVariants}
        className="text-sm text-slate-600 mb-4 flex-grow"
      >
        {description}
      </motion.p>
      <motion.div variants={elementVariants} className="w-full">
        <Button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          onClick={handleClick}
        >
          {cta}
        </Button>
      </motion.div>
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