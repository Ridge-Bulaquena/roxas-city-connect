import { motion } from "framer-motion";

interface IconCardProps {
  icon: string;
  title: string;
  desc: string;
}

export function IconCard({ icon, title, desc }: IconCardProps) {
  return (
    <motion.div
      className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </motion.div>
  );
} 