import { ServiceCard } from "./ServiceCard";
import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: "🏥",
    title: "Health Services",
    tooltip: "Find nearby health stations, track medicine supply, and report health concerns — instantly.",
    cta: "Access Health Support",
    ctaTooltip: "Get care that responds to your needs.",
    route: "/health-services/",
  },
  {
    icon: "🎓",
    title: "Education Support",
    tooltip: "Scholarships, feeding programs, teacher training — everything for lifelong learning.",
    cta: "Support Learners",
    ctaTooltip: "Fuel futures through inclusive education.",
    route: "/education-support/",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Social Welfare",
    tooltip: "Support for PWDs, seniors, solo parents, and indigents. Leave no one behind.",
    cta: "Uplift Communities",
    ctaTooltip: "Compassion in action.",
    route: "/social-welfare/",
  },
  {
    icon: "🏛️",
    title: "Governance & Transparency",
    tooltip: "See budgets, projects, procurement logs. Accountability in plain sight.",
    cta: "Track Governance",
    ctaTooltip: "Transparency is the first step to trust.",
    route: "/governance-transparency/",
  },
  {
    icon: "🚧",
    title: "Public Works & Infrastructure",
    tooltip: "Monitor roads, drainage, housing, and public facilities. Real-time progress, real impact.",
    cta: "View City Projects",
    ctaTooltip: "Watch Roxas transform.",
    route: "/public-works-infrastructure/",
  },
  {
    icon: "🌱",
    title: "Environmental Management",
    tooltip: "Clean water, clean air, waste management. Your environment matters.",
    cta: "Protect Our Environment",
    ctaTooltip: "A greener Roxas begins here.",
    route: "/environmental-management/",
  },
  {
    icon: "🌾",
    title: "Agriculture & Fishery Support",
    tooltip: "Empowering farmers and fisherfolk with access, tools, and training.",
    cta: "Support Local Producers",
    ctaTooltip: "Grow with Roxas. Feed the nation.",
    route: "/agriculture-fishery-support/",
  },
  {
    icon: "🕊️",
    title: "Peace & Order",
    tooltip: "Safe streets. Fair enforcement. Community-driven safety programs.",
    cta: "Promote Safety",
    ctaTooltip: "Your peace of mind is our priority.",
    route: "/peace-order/",
  },
  {
    icon: "📊",
    title: "Open Data Portal",
    tooltip: "Full data access for journalists, developers, and everyday citizens.",
    cta: "Explore Open Data",
    ctaTooltip: "Truth has nothing to hide.",
    route: "/open-data-portal/",
  },
  {
    icon: "🗳️",
    title: "Digital Participation",
    tooltip: "Public consultations, community polls, and participatory budgeting — online.",
    cta: "Engage Digitally",
    ctaTooltip: "Be heard. Be counted.",
    route: "/digital-participation/",
  },
  {
    icon: "💼",
    title: "Business Support",
    tooltip: "From permits to mentorship — we champion Roxas' entrepreneurs.",
    cta: "Start or Grow Your Business",
    ctaTooltip: "Prosperity begins with partnership.",
    route: "/business-support/",
  },
  {
    icon: "🏖️",
    title: "Tourism & Culture",
    tooltip: "Celebrate heritage, festivals, and local artistry — experience Roxas.",
    cta: "Explore Roxas Culture",
    ctaTooltip: "A city rich in soul and story.",
    route: "/tourism-culture/",
  },
];

export const ServicesGrid = () => {
  return (
    <motion.section
      className="py-20 section-light"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            City Services at Your Fingertips
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Comprehensive public services designed to serve every citizen, from healthcare to education, 
            infrastructure to cultural preservation.
          </motion.p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {SERVICES.map((service, idx) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              tooltip={service.tooltip}
              cta={service.cta}
              ctaTooltip={service.ctaTooltip}
              onClick={() => window.location.href = service.route}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
