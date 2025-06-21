import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Slide {
  title: string;
  subtitle: string;
  description?: string;
  cta1?: string;
  cta2?: string;
  cta1Route?: string;
  cta2Route?: string;
}

const slides: Slide[] = [
  {
    title: "Welcome Resident",
    subtitle: "Your City, Your Voice, Your Future",
    description: "Roxas City Connect empowers every citizen to participate in building our community. Access city services, share your ideas, and stay connected with your local government.",
    cta1: "Get Started",
    cta2: "City Services / Share Feedback",
    cta1Route: "/services",
    cta2Route: "/share-feedback"
  },
  {
    title: "Your City, Your Voice.",
    subtitle: "Real-time platforms for public participation in governance."
  },
  {
    title: "Transparency That Inspires Trust.",
    subtitle: "Budgets, projects, and decisions — visible and accountable."
  },
  {
    title: "Smart Services for Every Citizen.",
    subtitle: "Access health, education, permits, and more — faster, simpler."
  },
  {
    title: "A Government That Listens.",
    subtitle: "Submit feedback, report issues, and shape policies online."
  },
  {
    title: "Innovation Rooted in Community.",
    subtitle: "Built by and for the people of Roxas, with civic technology."
  },
  {
    title: "From Roxas to the World.",
    subtitle: "A digital city that welcomes residents, tourists, and investors."
  }
];

// Animated SVG Components
const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
        style={{
          left: `${20 + i * 15}%`,
          top: `${30 + i * 10}%`,
        }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3 + i * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

const ConstellationLines = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
    <motion.path
      d="M 100 200 Q 300 100 500 200 T 900 200"
      stroke="url(#gradient)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    <motion.path
      d="M 200 300 Q 400 200 600 300 T 1000 300"
      stroke="url(#gradient)"
      strokeWidth="1.5"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
    />
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
        <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
      </linearGradient>
    </defs>
  </svg>
);

const Waveform = () => (
  <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
    <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <motion.path
        d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
        fill="url(#waveGradient)"
        initial={{ d: "M0,120 Q300,120 600,120 T1200,120 L1200,120 L0,120 Z" }}
        animate={{ d: "M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z" }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const ParallaxBackground = ({ slideIndex }: { slideIndex: number }) => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Gradient Background */}
    <motion.div
      className="absolute inset-0"
      style={{
        background: `linear-gradient(${135 + slideIndex * 30}deg, 
          rgba(59, 130, 246, 0.05) 0%, 
          rgba(255, 255, 255, 0.8) 50%, 
          rgba(245, 158, 11, 0.05) 100%)`
      }}
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    
    {/* Animated Elements */}
    <FloatingOrbs />
    <ConstellationLines />
    <Waveform />
  </div>
);

const SlideContent = ({ slide, isActive }: { slide: Slide; isActive: boolean }) => {
  const navigate = useNavigate();

  const handleCtaClick = (route?: string) => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            key={slide.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Title */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-500 bg-clip-text text-transparent">
                {slide.title}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-medium max-w-3xl mx-auto"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {slide.subtitle}
            </motion.p>

            {/* Description */}
            {slide.description && (
              <motion.p
                className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {slide.description}
              </motion.p>
            )}

            {/* CTAs */}
            {(slide.cta1 || slide.cta2) && (
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {slide.cta1 && (
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCtaClick(slide.cta1Route)}
                  >
                    {slide.cta1}
                  </motion.button>
                )}
                {slide.cta2 && (
                  <motion.button
                    className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCtaClick(slide.cta2Route)}
                  >
                    {slide.cta2}
                  </motion.button>
                )}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <ParallaxBackground slideIndex={currentSlide} />

      {/* Slide Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <SlideContent slide={slides[currentSlide]} isActive={true} />
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Play/Pause Button */}
          <motion.button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </motion.button>

          {/* Previous Button */}
          <motion.button
            onClick={prevSlide}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={20} />
          </motion.button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/40'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={nextSlide}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}; 