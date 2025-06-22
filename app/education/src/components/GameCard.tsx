import { motion } from 'framer-motion';

export function GameCard({ title, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, backgroundColor: '#CCCCFF' }}
      className="rounded-lg p-4 bg-[#F4F4F5] shadow cursor-pointer transition"
    >
      <div className="font-bold text-[#3299CC]">{title}</div>
      <div className="text-gray-600">{desc}</div>
    </motion.div>
  );
} 