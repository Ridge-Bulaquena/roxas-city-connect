"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const linkVariants = {
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

interface FooterProps {
  className?: string;
}

export const Footer = ({ className = "" }: FooterProps) => {
  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Feedback", href: "/feedback" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className={`bg-white py-6 ${className}`}>
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            variants={itemVariants}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="font-bold text-white text-sm">RC</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-slate-900 font-sans">
                Roxas City Connect
              </h3>
              <p className="text-xs text-slate-500 font-sans">
                Digital Citizen Platform
              </p>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.nav
            className="flex flex-wrap justify-center items-center space-x-6 md:space-x-8"
            variants={itemVariants}
          >
            {footerLinks.map((link, index) => (
              <motion.div
                key={link.name}
                variants={itemVariants}
                whileHover="hover"
                className="relative group"
              >
                <Link
                  to={link.href}
                  className="text-sm text-slate-600 hover:text-slate-900 font-medium font-sans transition-colors duration-200 relative"
                >
                  {link.name}
                  {/* Elastic underline animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-slate-400 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Copyright */}
          <motion.div
            className="text-center md:text-right"
            variants={itemVariants}
          >
            <p className="text-xs text-slate-500 font-sans">
              © {new Date().getFullYear()} Roxas City Government
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}; 