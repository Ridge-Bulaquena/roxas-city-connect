import { Vote, MessageSquare, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface DigitalParticipationProps {
  hasVoted: boolean;
}

const cardData = [
  { 
    icon: Vote, 
    iconBg: "bg-yellow-100", 
    iconColor: "text-yellow-600", 
    title: "Budget Voting", 
    description: (hasVoted: boolean) => hasVoted ? "Thank you for voting!" : "Vote on next year's budget priorities",
    buttonText: (hasVoted: boolean) => hasVoted ? "View Results" : "Cast Your Vote",
    buttonClass: (hasVoted: boolean) => hasVoted ? "bg-slate-600 hover:bg-slate-700 text-white" : "bg-yellow-500 hover:bg-yellow-600 text-slate-900",
    disabled: (hasVoted: boolean) => hasVoted,
  },
  { 
    icon: MessageSquare,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Town Halls",
    description: () => "Join live discussions with city officials",
    buttonText: () => "Join Discussion",
    buttonClass: () => "bg-blue-600 hover:bg-blue-700 text-white",
    disabled: () => false,
  },
  { 
    icon: BarChart3,
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    title: "Community Polls",
    description: () => "Quick surveys on local issues",
    buttonText: () => "Take Survey",
    buttonClass: () => "bg-slate-600 hover:bg-slate-700 text-white",
    disabled: () => false,
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      bounce: 0.3,
      duration: 0.8,
      delay: i * 0.15,
    },
  }),
};

export const DigitalParticipation = ({ hasVoted }: DigitalParticipationProps) => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#181f2e] via-[#20283d] to-[#232b3e] text-white relative">
      <div className="max-w-7xl mx-auto px-8 md:px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-100 tracking-widest uppercase opacity-80">
            Shape Your City's Future
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Participate in democratic processes, join town halls, and help decide how public funds are allocated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, i) => (
            <motion.div
              key={card.title}
              className="group card-shine-container bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 p-8 flex flex-col items-center text-center transition-all duration-300"
              custom={i}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0 8px 32px 0 rgba(113, 148, 246, 0.15)",
                transition: { type: "spring" as const, stiffness: 350, damping: 20 },
              }}
            >
              <div className="card-shine-effect" />
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${card.iconBg} mb-6`}>
                <card.icon className={`w-8 h-8 ${card.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-2">{card.title}</h3>
              <p className="text-gray-300 mb-6 flex-grow">{card.description(hasVoted)}</p>
              <Button 
                className={card.buttonClass(hasVoted)}
                disabled={card.disabled(hasVoted)}
              >
                {card.buttonText(hasVoted)}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};