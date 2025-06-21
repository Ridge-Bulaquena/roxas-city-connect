import { motion } from "framer-motion";

const headlines = [
  "🚀 Roxas City Goes Digital! – Your voice now powers the city.",
  "💸 Where Did Your Taxes Go? – Track city spending live!",
  "🗳️ You Decide: Shape the 2026 City Budget – Vote now!",
  "📣 Barangay Complaint System Now Online – Report fast!",
  "🧑‍⚕️ Free Health Check-Ups – June 24–30 in all barangays.",
  "📚 Apply Now: City Scholarships – Deadline: July 15.",
  "🌾 Grow With Us! – Volunteer for our Urban Garden Project.",
  "🏖️ Sunset Market Returns at Baybay Beach – Weekends only!",
  "🛠️ See What's Being Built – Live infra and flood updates.",
  "🧾 Faster Services, No Red Tape – File and track online.",
  "📷 Your Photos. Our City. – Submit & get featured!",
  "📢 Public Hearing Alerts – Subscribe for instant updates.",
];

export default function MarqueeBanner() {
  return (
    <div className="overflow-hidden bg-yellow-50 border-b border-yellow-300 py-2">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 1900, // Ultra slow, all 12 headlines visible before restart
          ease: "linear",
        }}
      >
        {/* Duplicate headlines for seamless loop */}
        {[...headlines, ...headlines].map((headline, index) => (
          <span key={index} className="inline-block px-16 text-sm font-semibold text-gray-800">
            {headline}
          </span>
        ))}
      </motion.div>
    </div>
  );
} 