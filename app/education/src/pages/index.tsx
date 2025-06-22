import { Layout } from 'packages/ui';
import { motion } from 'framer-motion';

const features = [
  { title: 'Scholarship Wizard', desc: 'Find the right scholarship for you.', href: '/wizard' },
  { title: 'Knowledge Map', desc: 'Explore barangay learning sites.', href: '/map' },
  { title: 'E-Learning Application', desc: 'Apply for digital learning programs.', href: '/apply' },
  { title: 'Brain Trainer', desc: 'Play civic games and quizzes.', href: '/brain' },
];

export default function EducationHome() {
  return (
    <Layout>
      <div className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4">
        {/* Subtle background animation placeholder */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="w-96 h-96 bg-[#CCCCFF] rounded-full blur-3xl absolute -top-24 -left-24 animate-pulse" />
          <div className="w-80 h-80 bg-[#3299CC] rounded-full blur-2xl absolute bottom-0 right-0 animate-pulse" />
        </div>
        <h1 className="text-4xl font-bold text-[#3299CC] mb-2">Your Barangay is Your Campus</h1>
        <p className="text-lg text-gray-700 mb-8">Empowering learners with inclusive civic tools.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-10">
          {features.map((f) => (
            <motion.a
              key={f.title}
              href={f.href}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow p-6 border border-[#CCCCFF] transition-all cursor-pointer"
            >
              <div className="font-semibold text-[#3299CC] text-xl mb-2">{f.title}</div>
              <div className="text-gray-600">{f.desc}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </Layout>
  );
} 