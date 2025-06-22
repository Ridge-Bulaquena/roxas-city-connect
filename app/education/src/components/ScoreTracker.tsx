import { motion } from 'framer-motion';
import React, { useState } from 'react';

export function ScoreTracker() {
  const [score] = useState(42);
  return (
    <div className="mt-4">
      <div className="text-[#3299CC] font-semibold mb-1">Score: {score}</div>
      <motion.div
        className="h-3 rounded bg-[#CCCCFF]"
        initial={{ width: 0 }}
        animate={{ width: `${score * 2}%` }}
        transition={{ duration: 1 }}
        style={{ maxWidth: 200 }}
      />
    </div>
  );
} 