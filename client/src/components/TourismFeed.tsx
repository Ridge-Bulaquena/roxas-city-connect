import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Palette, Volume2, Landmark } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

const TourismIcon = ({ Icon }: { Icon: any }) => (
  <span className="relative inline-block w-12 h-12">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="tourism-blue-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      <g className="tourism-icon-glow">
        <Icon className="tourism-icon-mono-blue" size={48} />
      </g>
    </svg>
    <span className="tourism-icon-shine" />
  </span>
);

const discoverCards = [
  {
    icon: <TourismIcon Icon={Palette} />,
    title: "Roxas City Visual Arts Gallery",
    cta: "Explore Local Artistry",
    desc: "Step into a digital gallery of Capiznon visual art — from paintings and murals to modern installations.",
    link: "/discover/art-gallery",
    tooltip: "Browse a virtual gallery of local paintings, murals, and installations. Filter by artist, style, or era, and discover the creative spirit of Roxas City."
  },
  {
    icon: <TourismIcon Icon={Volume2} />,
    title: "Roxas City Performing Arts & Music",
    cta: "Hear the Rhythm of Roxas",
    desc: "Celebrate the sounds and movements of Capiznon culture — from traditional folk dances to contemporary performances.",
    link: "/discover/performing-arts",
    tooltip: "Watch and listen to local performances, music, and dance. See upcoming events, enjoy video and audio showcases, and join the celebration."
  },
  {
    icon: <TourismIcon Icon={Landmark} />,
    title: "Capiznon Culture & Traditions",
    cta: "Dive Into Capiznon Heritage",
    desc: "Discover the deep-rooted traditions, clothing, languages, festivals, and folklore of Roxas City and Capiz.",
    link: "/discover/capiznon-culture",
    tooltip: "Explore Capiznon stories, traditions, and heritage. Enjoy interactive stories, infographics, and quizzes about local culture."
  }
];

const cardVariants = {
  offscreen: { opacity: 0, y: 60, scale: 0.96 },
  onscreen: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.22,
      duration: 0.9,
      delay: i * 0.18,
    },
  }),
};

export const TourismFeed = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#181f2e] via-[#20283d] to-[#232b3e] text-white relative">
      <h2 className="text-4xl md:text-5xl font-bold tracking-widest uppercase text-gray-300 mb-12 text-center opacity-70">
        Discover Roxas Culture
      </h2>
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-16 text-center font-light tracking-wide">
        Experience our rich heritage, vibrant festivals, and warm hospitality. From traditional celebrations to modern attractions, there's always something happening in Roxas.
      </p>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-4">
        {discoverCards.map((card, i) => (
          <motion.div
            key={card.title}
            className="group card-shine-container bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 p-8 flex flex-col items-center transition-all duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
            variants={cardVariants}
            whileHover={{
              y: -8,
              scale: 1.03,
              boxShadow: "0 8px 32px 0 rgba(56, 189, 248, 0.18)",
              transition: { type: "spring", stiffness: 350, damping: 20 },
            }}
          >
            <div className="card-shine-effect" />
            <motion.span
              className="mb-6 transition-transform group-hover:scale-110"
              whileHover={{ y: -6, scale: 1.18 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {card.icon}
            </motion.span>
            <h3 className="text-xl font-semibold text-gray-100 mb-2 tracking-widest uppercase text-center">{card.title}</h3>
            <p className="text-gray-300 text-center mb-4">{card.desc}</p>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to={card.link} className="relative group mt-2 mb-4">
                    <span className="btn-butter px-6 py-2 rounded-full font-semibold text-yellow-900 bg-gradient-to-r from-yellow-200 to-yellow-100 shadow hover:from-yellow-100 hover:to-yellow-200 transition-all duration-200 overflow-hidden inline-flex items-center">
                      {card.cta}
                      <span className="shine absolute left-0 top-0 w-full h-full pointer-events-none" />
                    </span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs text-sm text-gray-900 font-medium">
                  {card.tooltip}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
