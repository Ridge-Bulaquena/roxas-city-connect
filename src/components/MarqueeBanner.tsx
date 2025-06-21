import { useRef, useLayoutEffect, useState } from "react";
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

function shuffle(array: string[]) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function MarqueeBanner() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [shuffled, setShuffled] = useState(() => shuffle(headlines));

  useLayoutEffect(() => {
    if (marqueeRef.current) {
      setWidth(marqueeRef.current.scrollWidth / 2);
    }
  }, [shuffled]);

  // Reshuffle on every animation loop
  const handleAnimationComplete = () => {
    setShuffled(shuffle(headlines));
  };

  return (
    <div className="overflow-hidden bg-yellow-50 border-b border-yellow-300 py-2">
      <motion.div
        ref={marqueeRef}
        className="flex whitespace-nowrap"
        animate={width ? { x: [0, -width] } : {}}
        transition={{
          repeat: Infinity,
          duration: width ? width / 40 : 60,
          ease: "linear",
        }}
        style={{ willChange: "transform" }}
        onAnimationComplete={handleAnimationComplete}
      >
        {[...shuffled, ...shuffled].map((headline, index) => (
          <span key={index} className="inline-block px-16 text-sm font-semibold text-gray-800">
            {headline}
          </span>
        ))}
      </motion.div>
    </div>
  );
} 