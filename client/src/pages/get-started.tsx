import React from 'react';
import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
        },
    },
};

const GetStartedPage = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            Welcome to Roxas City Connect
          </motion.h1>
          <motion.p 
            className="text-gray-500 mb-10 text-lg"
            variants={itemVariants}
          >
            Whether you're a resident, visitor, or investor — this platform gives you the tools to connect, participate, and grow with Roxas City.
          </motion.p>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 text-gray-700"
            variants={itemVariants}
          >
            <div>
              <h2 className="font-semibold text-gray-800 mb-3 text-lg">For Residents</h2>
              <ul className="space-y-2">
                {[
                  'Access services like health, education, and permits',
                  'Report issues or give feedback to city officials',
                  'Track budgets and local projects transparently',
                ].map(item => (
                    <motion.li key={item} className="flex items-start gap-3" whileHover={{x: 4}}>
                        <span className="text-blue-500 mt-1">✓</span>
                        <span>{item}</span>
                    </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-gray-800 mb-3 text-lg">For Visitors</h2>
              <ul className="space-y-2">
              {[
                  'Discover Roxas City\'s culture and landmarks',
                  'Explore local businesses and opportunities',
                  'Plan your trip with smart city services',
                ].map(item => (
                    <motion.li key={item} className="flex items-start gap-3" whileHover={{x: 4}}>
                        <span className="text-blue-500 mt-1">✓</span>
                        <span>{item}</span>
                    </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <Link to="/services">
                <motion.button 
                    className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                    whileTap={{scale: 0.95}}
                >
                    Explore Services
                </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default GetStartedPage; 