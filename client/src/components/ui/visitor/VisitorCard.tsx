import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

interface VisitorCardProps {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  tooltip: string;
}

export function VisitorCard({
  title,
  subtitle,
  description,
  href,
  tooltip,
}: VisitorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-2xl flex flex-col shadow-lg hover:shadow-xl transition-shadow"
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <h3 className="text-xl font-bold text-content mb-2 cursor-help">
              {title}
            </h3>
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <p className="text-muted text-sm mb-4">{subtitle}</p>
      <p className="text-muted flex-grow">{description}</p>
      <Button asChild className="btn-visitor mt-6 self-start">
        <a href={href}>
          Explore
          <ArrowRight className="ml-2" />
          <span className="shine" />
        </a>
      </Button>
    </motion.div>
  );
} 