import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  ArrowRight,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
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

// Elastic underline animation for links
const linkVariants = {
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    }
  }
};

export const Footer = () => {
  return (
    <footer className="bg-white">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Main Footer Content - Simplified Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8">
          
          {/* Column 1: City Info & Social */}
          <motion.div className="md:col-span-4" variants={itemVariants}>
            <div className="flex items-center space-x-3 mb-6">
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="font-bold text-white text-xl font-inter">RC</span>
              </motion.div>
              <div>
                <h3 className="font-bold text-2xl text-slate-900 font-inter">Roxas City</h3>
                <p className="text-slate-500 font-figtree font-light">Citizen Platform</p>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed max-w-sm mb-6 font-figtree font-light">
              A modern hub for civic engagement, transparency, and community connection.
            </p>
            <div className="flex space-x-2">
              <motion.div variants={itemVariants}>
                <Button variant="ghost" size="icon" className="text-slate-500 hover:bg-slate-100 hover:text-slate-900">
                  <Facebook className="w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Button variant="ghost" size="icon" className="text-slate-500 hover:bg-slate-100 hover:text-slate-900">
                  <Twitter className="w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Button variant="ghost" size="icon" className="text-slate-500 hover:bg-slate-100 hover:text-slate-900">
                  <Instagram className="w-5 h-5" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Column 2: Quick Links */}
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <h4 className="font-semibold text-lg text-slate-900 mb-5 font-inter">Navigate</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'Feedback', href: '/share-feedback' },
                { name: 'Visitor Portal', href: '/visitor' },
                { name: 'City Official Portal', href: '/admin' },
              ].map((link, index) => (
                <motion.li key={link.name} variants={itemVariants}>
                  <motion.a 
                    href={link.href} 
                    className="text-slate-600 hover:text-slate-900 transition-colors font-figtree font-light relative group"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    {link.name}
                    <motion.span 
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ease-out"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    />
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Newsletter */}
          <motion.div className="md:col-span-5" variants={itemVariants}>
            <h4 className="font-semibold text-lg text-slate-900 mb-5 font-inter">Stay Connected</h4>
            <p className="text-slate-600 mb-6 font-figtree font-light">
              Get city updates and news delivered to your inbox.
            </p>
            <div className="flex w-full max-w-md">
              <Input 
                placeholder="Email address"
                className="flex-1 bg-slate-100 border-slate-200 text-slate-900 placeholder-slate-500 rounded-l-[100px] pl-6 pr-4 focus:ring-blue-500 focus:border-blue-500 font-figtree font-light"
                type="email"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-r-[100px] px-6 ml-3 transition-all duration-300 hover:shadow-lg">
                <ArrowRight className="w-5 h-5" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </div>
            <p className="text-xs text-slate-500 mt-3 font-figtree font-light">
              We care about your data. Read our{' '}
              <motion.a 
                href="/privacy" 
                className="underline hover:text-slate-800 relative group"
                variants={linkVariants}
                whileHover="hover"
              >
                privacy policy
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ease-out"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </motion.a>.
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-16 sm:mt-24 pt-8 border-t border-slate-200 text-center text-sm text-slate-500 font-figtree font-light"
          variants={itemVariants}
        >
          <p>&copy; {new Date().getFullYear()} Roxas City Government. All Rights Reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};
