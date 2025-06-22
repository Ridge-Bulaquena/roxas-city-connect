import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Slide {
  title: string;
  subtitle: string;
  description?: string;
  cta1?: string;
  cta1Route?: string;
  cta2?: string;
  cta2Route?: string;
  cta3?: string;
  cta3Route?: string;
}

const slides: Slide[] = [
  {
    title: "Welcome Resident",
    subtitle: "Your City, Your Voice, Your Future",
    description: "Roxas City Connect empowers every citizen to participate in building our community. Access city services, share your ideas, and stay connected with your local government.",
    cta1: "Get Started",
    cta1Route: "/get-started",
    cta2: "City Services",
    cta2Route: "/services",
    cta3: "Share Feedback",
    cta3Route: "/feedback",
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

const SlideContent = ({ slide, isActive }: { slide: Slide; isActive: boolean }) => {
  const navigate = useNavigate();

  const handleCtaClick = (route?: string) => {
    if (route) navigate(route);
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
            {(slide.cta1 || slide.cta2 || slide.cta3) && (
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
                {slide.cta3 && (
                  <motion.button
                    className="px-8 py-4 bg-white text-yellow-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-yellow-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCtaClick(slide.cta3Route)}
                  >
                    {slide.cta3}
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
      {/* Video Background */}
      <video
        src="/Resources/roxas-city-bg-loop.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />
      {/* Overlay PNG */}
      <img
        src="/Resources/video-vignette-overlay.png"
        alt=""
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />
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