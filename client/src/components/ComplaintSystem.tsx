import { FileText, Search, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const cardData = [
  {
    icon: FileText,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "File a Complaint",
    description: "Report issues that matter to your community",
    buttonText: "Start Filing",
    buttonClass: "bg-blue-600 hover:bg-blue-700 text-white",
  },
  {
    icon: Search,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "Track Progress",
    description: "Monitor the status of your submitted complaints",
    buttonText: "Track Complaint",
    buttonClass: "bg-green-600 hover:bg-green-700 text-white",
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

export const ComplaintSystem = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#181f2e] via-[#20283d] to-[#232b3e] text-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-100 tracking-widest uppercase opacity-80">
            Voice Your Concerns
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Report issues, track progress, and see real solutions. Your complaints drive positive change in our community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
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
              <p className="text-gray-300 mb-6 flex-grow">{card.description}</p>
              <Button className={card.buttonClass}>
                {card.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
