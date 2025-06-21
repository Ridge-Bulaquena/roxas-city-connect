import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const headlines = [
  {
    text: "🚀 2024 City Budget Approved - ₱2.1B for Infrastructure & Social Programs",
    link: "/news/budget-2024"
  },
  {
    text: "🛠️ Major Infrastructure Projects Update - Roads, Bridges & Public Facilities",
    link: "/news/infrastructure-updates"
  },
  {
    text: "🌾 New Community Programs Launch - Supporting Local Families & Entrepreneurs",
    link: "/news/community-programs"
  },
  {
    text: "💸 Where Did Your Taxes Go? – Track city spending live!",
    link: "/city-services"
  },
  {
    text: "🗳️ You Decide: Shape the 2026 City Budget – Vote now!",
    link: "/share-feedback"
  },
  {
    text: "📣 Barangay Complaint System Now Online – Report fast!",
    link: "/share-feedback"
  },
  {
    text: "🧑‍⚕️ Free Health Check-Ups – June 24–30 in all barangays.",
    link: "/city-services"
  },
  {
    text: "📚 Apply Now: City Scholarships – Deadline: July 15.",
    link: "/city-services"
  },
  {
    text: "🌾 Grow With Us! – Volunteer for our Urban Garden Project.",
    link: "/share-feedback"
  },
  {
    text: "🏖️ Sunset Market Returns at Baybay Beach – Weekends only!",
    link: "/visitor"
  },
  {
    text: "🧾 Faster Services, No Red Tape – File and track online.",
    link: "/city-services"
  },
  {
    text: "📷 Your Photos. Our City. – Submit & get featured!",
    link: "/share-feedback"
  }
];

export default function MarqueeBanner() {
  const navigate = useNavigate();

  const handleClick = (link: string) => {
    navigate(link);
  };

  return (
    <div className="overflow-hidden bg-gradient-to-b from-amber-100 to-yellow-50 border-b border-yellow-300 py-2 marquee-container">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          duration: headlines.length * 2, // Slower for mobile to see all items
          ease: "linear",
        }}
      >
        {/* Render headlines multiple times for seamless scroll */}
        {[...Array(3)].map((_, setIndex) => (
          <div key={setIndex} className="flex-shrink-0">
            {headlines.map((headline, index) => (
              <motion.button
                key={`${setIndex}-${index}`}
                className="inline-block px-12 md:px-16 text-sm font-semibold text-gray-800 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
                onClick={() => handleClick(headline.link)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {headline.text}
              </motion.button>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
} 