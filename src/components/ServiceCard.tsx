import { ReactNode } from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: string;
  title: string;
  tooltip: string;
  cta: string;
  ctaTooltip?: string;
  onClick?: () => void;
}

export function ServiceCard({
  icon,
  title,
  tooltip,
  cta,
  ctaTooltip,
  onClick,
}: ServiceCardProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          className="group relative flex flex-col items-center justify-between h-full rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100"
          whileHover={{ y: -8, scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          tabIndex={0}
          role="button"
          aria-label={title}
          onClick={onClick}
        >
          {/* Glossy shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          <div className="flex flex-col items-center justify-center flex-1 py-8 px-4 w-full">
            <span className="text-4xl mb-3" aria-hidden="true">{icon}</span>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{title}</h3>
          </div>

          <div className="w-full px-4 pb-6 flex flex-col items-center">
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium rounded-lg shadow group/button transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                  as={motion.button}
                  tabIndex={0}
                  onClick={onClick}
                  aria-label={cta}
                >
                  {cta}
                </Button>
              </TooltipTrigger>
              {ctaTooltip && (
                <TooltipContent side="top">{ctaTooltip}</TooltipContent>
              )}
            </Tooltip>
          </div>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent side="right" className="max-w-xs text-center">
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
} 