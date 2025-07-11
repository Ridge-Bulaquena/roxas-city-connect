import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { usePersonalization } from '@/hooks/usePersonalization';
import { 
  Stethoscope, GraduationCap, Handshake, Landmark, Construction, Leaf, 
  Wheat, ShieldCheck, BarChart, Globe, Briefcase, Compass 
} from 'lucide-react';

// Color palette inspired by the image
const colors = {
    shadow: '#bcd0ea',
    base: '#dfeaf4',
    text: '#3f5b9c',
};

const SERVICES = [
  { icon: Stethoscope, title: "Health Services", slug: "health-services" },
  { icon: GraduationCap, title: "Education Support", slug: "education-support" },
  { icon: Handshake, title: "Social Welfare", slug: "social-welfare" },
  { icon: Landmark, title: "Governance", slug: "governance-transparency" },
  { icon: Construction, title: "Public Works", slug: "public-works-infrastructure" },
  { icon: Leaf, title: "Environment", slug: "environmental-management" },
  { icon: Wheat, title: "Agri & Fishery", slug: "agriculture-fishery-support" },
  { icon: ShieldCheck, title: "Peace & Order", slug: "peace-order" },
  { icon: BarChart, title: "Open Data", slug: "open-data-portal" },
  { icon: Globe, title: "Digital Gov.", slug: "digital-participation" },
  { icon: Briefcase, title: "Business Support", slug: "business-support" },
  { icon: Compass, title: "Tourism & Culture", slug: "tourism-culture" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring' as const,
            stiffness: 120,
        },
    },
};

const TypewriterText = ({ text, delay = 50 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return (
    <span className="text-slate-400 font-figtree font-light">
      {displayText}
    </span>
  );
};

const ServicesIndexPage = () => {
  const { userType, setUserType } = usePersonalization();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation userType={userType} setUserType={setUserType} />
      <main className="flex-1 pt-16">
        <div className="w-full py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
              <motion.h1 
                  className="text-5xl md:text-6xl font-light text-slate-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
              >
                  Explore City Services
              </motion.h1>
              <motion.p 
                  className="mt-4 text-xl text-slate-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
              >
                  Access health, education, permits, and more — faster, simpler.
              </motion.p>
              <motion.div
                  className="mt-6 max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
              >
                  <p className="text-xs leading-relaxed">
                      <TypewriterText 
                          text="Roxas City Connect transforms public service into a digital, participatory experience — delivering government services directly into every home, empowering citizen researchers, and enabling responsive governance in real time."
                          delay={30}
                      />
                  </p>
              </motion.div>
          </div>

          <motion.div 
              className="mt-20 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
          >
            {SERVICES.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`}>
                <motion.div
                  className="group p-4 rounded-3xl cursor-pointer text-center"
                  style={{
                    backgroundColor: colors.base,
                    boxShadow: `8px 8px 16px ${colors.shadow}, -8px -8px 16px #ffffff`,
                  }}
                  variants={cardVariants}
                  whileHover={{ 
                      scale: 1.05,
                      backgroundColor: '#e6ecf2'
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                    <div className="flex justify-center items-center mb-3">
                        <service.icon 
                          className="w-7 h-7" 
                          style={{ color: colors.text }}
                        />
                    </div>
                    <h3 
                      className="font-medium text-sm"
                      style={{ color: colors.text }}
                    >
                      {service.title}
                    </h3>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesIndexPage; 