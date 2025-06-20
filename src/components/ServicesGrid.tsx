import { ServiceCard } from "./ServiceCard";
import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useRef, useState } from "react";

const SERVICES = [
  {
    icon: "Stethoscope",
    title: "Health Services",
    description: "Find nearby health stations, track medicine supply, and report health concerns.",
    cta: "Access Health Support",
    route: "/health-services/",
  },
  {
    icon: "GraduationCap",
    title: "Education Support",
    description: "Scholarships, feeding programs, and lifelong learning resources for all citizens.",
    cta: "Support Learners",
    route: "/education-support/",
  },
  {
    icon: "Handshake",
    title: "Social Welfare",
    description: "Programs for PWDs, solo parents, seniors, and marginalized families.",
    cta: "Uplift Communities",
    route: "/social-welfare/",
  },
  {
    icon: "Landmark",
    title: "Governance & Transparency",
    description: "Access city budgets, procurement records, and performance data in real time.",
    cta: "Track Governance",
    route: "/governance-transparency/",
  },
  {
    icon: "Construction",
    title: "Public Works & Infrastructure",
    description: "Monitor ongoing roadworks, housing projects, and facility upgrades.",
    cta: "View City Projects",
    route: "/public-works-infrastructure/",
  },
  {
    icon: "Leaf",
    title: "Environmental Management",
    description: "Preserve clean air, water, and sustainable land use in Roxas.",
    cta: "Protect Our Environment",
    route: "/environmental-management/",
  },
  {
    icon: "Wheat",
    title: "Agriculture & Fishery Support",
    description: "Empowering local producers with training, access, and innovation.",
    cta: "Support Local Producers",
    route: "/agriculture-fishery-support/",
  },
  {
    icon: "ShieldCheck",
    title: "Peace & Order",
    description: "Community-focused safety with fair enforcement and local patrol programs.",
    cta: "Promote Safety",
    route: "/peace-order/",
  },
  {
    icon: "BarChart",
    title: "Open Data Portal",
    description: "Explore raw civic data, budget flows, and project timelines.",
    cta: "Explore Open Data",
    route: "/open-data-portal/",
  },
  {
    icon: "Globe",
    title: "Digital Participation",
    description: "Submit ideas, vote, and join town halls from your device.",
    cta: "Engage Digitally",
    route: "/digital-participation/",
  },
  {
    icon: "Briefcase",
    title: "Business Support",
    description: "Permits, incentives, and mentorship to help entrepreneurs thrive.",
    cta: "Start or Grow Your Business",
    route: "/business-support/",
  },
  {
    icon: "Compass",
    title: "Tourism & Culture",
    description: "Discover festivals, food, heritage, and sights of Roxas.",
    cta: "Explore Roxas Culture",
    route: "/tourism-culture/",
  },
];

const HERO_TYPEWRITER = `City Services at Your Fingertips\nComprehensive public services designed to serve every citizen, from healthcare to education, infrastructure to cultural preservation.`;

export const ServicesGrid = () => {
  const [startTypewriter, setStartTypewriter] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const typewriterText = useTypewriter(HERO_TYPEWRITER, { speed: 22, delay: 0, onDone: undefined });

  // Only start typewriter when in view
  const handleViewportEnter = () => {
    if (!startTypewriter) setStartTypewriter(true);
  };

  const displayedText = startTypewriter ? typewriterText : "";

  return (
    <motion.section
      className="py-20 section-light"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      onViewportEnter={handleViewportEnter}
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ minHeight: '3.5rem' }}>
            {displayedText.split('\n')[0]}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto min-h-[2.5rem]">
            {displayedText.split('\n')[1] || ''}
          </p>
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
              icon={service.icon as any}
              title={service.title}
              description={service.description}
              cta={service.cta}
              onClick={() => window.location.href = service.route}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
