import { Link } from "wouter";
import { motion } from "framer-motion";
import { Wand2, MapPin, FileText, Book, Lightbulb, PenTool } from "lucide-react";

export default function HeroSection() {
  const quickActions = [
    {
      icon: Wand2,
      title: "Scholarship Wizard",
      description: "Find your perfect scholarship match with our AI-guided questionnaire",
      href: "/wizard",
      color: "bg-white bg-opacity-10",
    },
    {
      icon: MapPin,
      title: "Learning Map",
      description: "Discover local learning centers, libraries, and educational hubs",
      href: "/map",
      color: "bg-white bg-opacity-10",
    },
    {
      icon: FileText,
      title: "Apply Now",
      description: "Submit applications for programs, courses, and opportunities",
      href: "/apply",
      color: "bg-white bg-opacity-10",
    },
  ];

  return (
    <section className="relative gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      {/* Floating education elements animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Book className="w-12 h-12" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 opacity-20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Lightbulb className="w-10 h-10" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-1/4 opacity-20"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <PenTool className="w-8 h-8" />
        </motion.div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-[115px] pb-[115px] pl-[65px] pr-[65px]">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Empowering every citizen of Roxas City with accessible learning opportunities, 
            scholarships, and educational resources from the comfort of home.
          </p>
          
          {/* Quick Action Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={action.href}>
                  <div className="gradient-card rounded-xl p-6 cursor-pointer group transition-all duration-300">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <action.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{action.title}</h3>
                    <p className="text-blue-100">{action.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
