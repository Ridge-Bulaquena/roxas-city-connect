import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const discoverCards = [
  {
    icon: "🖼️",
    title: "Roxas City Visual Arts Gallery",
    cta: "Explore Local Artistry",
    desc: "Step into a digital gallery of Capiznon visual art — from paintings and murals to modern installations.",
    link: "/discover/art-gallery",
    features: [
      "Virtual tour with zoom and pan",
      "Filter by artist, style, era",
      "Artist spotlight carousel",
      "Interactive mural map",
      "Submit Your Artwork portal"
    ]
  },
  {
    icon: "🎶",
    title: "Roxas City Performing Arts & Music",
    cta: "Hear the Rhythm of Roxas",
    desc: "Celebrate the sounds and movements of Capiznon culture — from traditional folk dances to contemporary performances.",
    link: "/discover/performing-arts",
    features: [
      "Embedded video/audio of performances",
      "Timeline of local performance history",
      "Event calendar for upcoming shows",
      "Live-stream integration",
      "Upload clips or nominate performers"
    ]
  },
  {
    icon: "🧑‍🌾",
    title: "Capiznon Culture & Traditions",
    cta: "Dive Into Capiznon Heritage",
    desc: "Discover the deep-rooted traditions, clothing, languages, festivals, and folklore of Roxas City and Capiz.",
    link: "/discover/capiznon-culture",
    features: [
      "Scroll-based animation of folk stories",
      "Interactive infographic of attire/tools",
      "Quiz: "How Capiznon Are You?"",
      "Voice-over narrations of local tales",
      "Community oral histories"
    ]
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
            className="group bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 p-8 flex flex-col items-center transition-all duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
            variants={cardVariants}
            whileHover={{
              scale: 1.06,
              rotate: -1.5,
              boxShadow: "0 8px 32px 0 rgba(56, 189, 248, 0.18)",
              transition: { type: "spring", stiffness: 300, damping: 18 },
            }}
          >
            <motion.span
              className="text-5xl mb-6 transition-transform group-hover:scale-110"
              whileHover={{ y: -6, scale: 1.18 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {card.icon}
            </motion.span>
            <h3 className="text-xl font-semibold text-gray-100 mb-2 tracking-widest uppercase text-center">{card.title}</h3>
            <p className="text-gray-300 text-center mb-4">{card.desc}</p>
            <Link to={card.link} className="relative group mt-2 mb-4">
              <span className="btn-butter px-6 py-2 rounded-full font-semibold text-yellow-900 bg-gradient-to-r from-yellow-200 to-yellow-100 shadow hover:from-yellow-100 hover:to-yellow-200 transition-all duration-200 overflow-hidden inline-flex items-center">
                {card.cta}
                <span className="shine absolute left-0 top-0 w-full h-full pointer-events-none" />
              </span>
            </Link>
            <ul className="text-xs text-gray-400 mt-2 space-y-1 list-disc list-inside text-left w-full max-w-xs mx-auto opacity-80">
              {card.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
