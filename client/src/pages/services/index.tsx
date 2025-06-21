import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  GraduationCap, 
  Handshake, 
  Landmark, 
  Construction, 
  Leaf, 
  Wheat, 
  ShieldCheck, 
  BarChart, 
  Globe, 
  Briefcase, 
  Compass 
} from 'lucide-react';

const SERVICES = [
  {
    icon: Stethoscope,
    title: "Health Services",
    description: "Find nearby health stations, track medicine supply, and report health concerns.",
    slug: "health-services",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: GraduationCap,
    title: "Education Support",
    description: "Scholarships, feeding programs, and lifelong learning resources for all citizens.",
    slug: "education-support",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: Handshake,
    title: "Social Welfare",
    description: "Programs for PWDs, solo parents, seniors, and marginalized families.",
    slug: "social-welfare",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Landmark,
    title: "Governance & Transparency",
    description: "Access city budgets, procurement records, and performance data in real time.",
    slug: "governance-transparency",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: Construction,
    title: "Public Works & Infrastructure",
    description: "Monitor ongoing roadworks, housing projects, and facility upgrades.",
    slug: "public-works-infrastructure",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Leaf,
    title: "Environmental Management",
    description: "Preserve clean air, water, and sustainable land use in Roxas.",
    slug: "environmental-management",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: Wheat,
    title: "Agriculture & Fishery Support",
    description: "Empowering local producers with training, access, and innovation.",
    slug: "agriculture-fishery-support",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: ShieldCheck,
    title: "Peace & Order",
    description: "Community-focused safety with fair enforcement and local patrol programs.",
    slug: "peace-order",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: BarChart,
    title: "Open Data Portal",
    description: "Explore raw civic data, budget flows, and project timelines.",
    slug: "open-data-portal",
    color: "from-gray-500 to-slate-500"
  },
  {
    icon: Globe,
    title: "Digital Participation",
    description: "Submit ideas, vote, and join town halls from your device.",
    slug: "digital-participation",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: Briefcase,
    title: "Business Support",
    description: "Permits, incentives, and mentorship to help entrepreneurs thrive.",
    slug: "business-support",
    color: "from-emerald-500 to-green-500"
  },
  {
    icon: Compass,
    title: "Tourism & Culture",
    description: "Discover festivals, food, heritage, and sights of Roxas.",
    slug: "tourism-culture",
    color: "from-pink-500 to-rose-500"
  }
];

const ServicesIndexPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
              City Services Overview
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive public services designed to serve every citizen of Roxas City. 
            Click on any service to learn more and access its features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 flex-grow">
                  {service.description}
                </p>
                <div className="mt-4 text-blue-600 font-medium text-sm group-hover:underline">
                  Learn More →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Need Help Finding a Service?
            </h2>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Contact our support team or browse our frequently asked questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors">
                Contact Support
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-500 hover:text-blue-600 transition-colors">
                View FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesIndexPage; 