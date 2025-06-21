import { ServiceCard } from "./ServiceCard";
import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: "Stethoscope",
    title: "Health Services",
    description: "Find nearby health stations, track medicine supply, and report health concerns.",
    cta: "Access Health Support",
    route: "/services/health-services",
  },
  {
    icon: "GraduationCap",
    title: "Education Support",
    description: "Scholarships, feeding programs, and lifelong learning resources for all citizens.",
    cta: "Support Learners",
    route: "/services/education-support",
  },
  {
    icon: "Handshake",
    title: "Social Welfare",
    description: "Programs for PWDs, solo parents, seniors, and marginalized families.",
    cta: "Uplift Communities",
    route: "/services/social-welfare",
  },
  {
    icon: "Landmark",
    title: "Governance & Transparency",
    description: "Access city budgets, procurement records, and performance data in real time.",
    cta: "Track Governance",
    route: "/services/governance-transparency",
  },
  {
    icon: "Construction",
    title: "Public Works & Infrastructure",
    description: "Monitor ongoing roadworks, housing projects, and facility upgrades.",
    cta: "View City Projects",
    route: "/services/public-works-infrastructure",
  },
  {
    icon: "Leaf",
    title: "Environmental Management",
    description: "Preserve clean air, water, and sustainable land use in Roxas.",
    cta: "Protect Our Environment",
    route: "/services/environmental-management",
  },
  {
    icon: "Wheat",
    title: "Agriculture & Fishery Support",
    description: "Empowering local producers with training, access, and innovation.",
    cta: "Support Local Producers",
    route: "/services/agriculture-fishery-support",
  },
  {
    icon: "ShieldCheck",
    title: "Peace & Order",
    description: "Community-focused safety with fair enforcement and local patrol programs.",
    cta: "Promote Safety",
    route: "/services/peace-order",
  },
  {
    icon: "BarChart",
    title: "Open Data Portal",
    description: "Explore raw civic data, budget flows, and project timelines.",
    cta: "Explore Open Data",
    route: "/services/open-data-portal",
  },
  {
    icon: "Globe",
    title: "Digital Participation",
    description: "Submit ideas, vote, and join town halls from your device.",
    cta: "Engage Digitally",
    route: "/services/digital-participation",
  },
  {
    icon: "Briefcase",
    title: "Business Support",
    description: "Permits, incentives, and mentorship to help entrepreneurs thrive.",
    cta: "Start or Grow Your Business",
    route: "/services/business-support",
  },
  {
    icon: "Compass",
    title: "Tourism & Culture",
    description: "Discover festivals, food, heritage, and sights of Roxas.",
    cta: "Explore Roxas Culture",
    route: "/services/tourism-culture",
  },
];

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export const ServicesGrid = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">
            City Services at Your Fingertips
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive public services designed to serve every citizen.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {SERVICES.map((service) => (
            <motion.div key={service.title} variants={cardVariants}>
              <ServiceCard
                icon={service.icon as any}
                title={service.title}
                description={service.description}
                cta={service.cta}
                route={service.route}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
