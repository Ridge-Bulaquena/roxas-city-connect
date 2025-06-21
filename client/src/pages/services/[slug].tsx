import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Phone, Mail, MapPin } from 'lucide-react';

const SERVICE_DATA = {
  "health-services": {
    title: "Health Services",
    description: "Comprehensive healthcare services for all residents of Roxas City",
    longDescription: "Our health services provide accessible, quality healthcare to every citizen. From primary care to specialized treatments, we ensure that health is a right, not a privilege.",
    features: [
      "Primary healthcare clinics",
      "Emergency medical services",
      "Maternal and child health programs",
      "Vaccination campaigns",
      "Health education and awareness",
      "Mental health support"
    ],
    contact: {
      phone: "+63 36 621-1234",
      email: "health@roxascity.gov.ph",
      address: "Roxas City Health Office, Roxas City, Capiz"
    },
    icon: "🏥"
  },
  "education-support": {
    title: "Education Support",
    description: "Empowering learners through comprehensive educational programs",
    longDescription: "We believe in the power of education to transform lives. Our education support programs ensure that every child and adult has access to quality learning opportunities.",
    features: [
      "Scholarship programs",
      "School feeding programs",
      "Adult literacy classes",
      "Skills training workshops",
      "Educational materials support",
      "School infrastructure projects"
    ],
    contact: {
      phone: "+63 36 621-2345",
      email: "education@roxascity.gov.ph",
      address: "Roxas City Education Office, Roxas City, Capiz"
    },
    icon: "🎓"
  },
  "social-welfare": {
    title: "Social Welfare",
    description: "Supporting vulnerable communities and promoting social inclusion",
    longDescription: "Our social welfare programs are designed to uplift marginalized communities and ensure no one is left behind in our city's development.",
    features: [
      "PWD assistance programs",
      "Senior citizen support",
      "Solo parent assistance",
      "Livelihood programs",
      "Emergency assistance",
      "Community development projects"
    ],
    contact: {
      phone: "+63 36 621-3456",
      email: "welfare@roxascity.gov.ph",
      address: "Roxas City Social Welfare Office, Roxas City, Capiz"
    },
    icon: "🤝"
  },
  "governance-transparency": {
    title: "Governance & Transparency",
    description: "Open and accountable government for the people",
    longDescription: "Transparency is the foundation of good governance. We provide open access to government data, budgets, and decision-making processes.",
    features: [
      "Budget transparency portal",
      "Procurement information",
      "Performance reports",
      "Public consultation platforms",
      "Document access",
      "Real-time project tracking"
    ],
    contact: {
      phone: "+63 36 621-4567",
      email: "transparency@roxascity.gov.ph",
      address: "Roxas City Hall, Roxas City, Capiz"
    },
    icon: "🏛️"
  },
  "public-works-infrastructure": {
    title: "Public Works & Infrastructure",
    description: "Building and maintaining the city's physical foundation",
    longDescription: "Our infrastructure projects create the foundation for a modern, sustainable city that serves all residents effectively.",
    features: [
      "Road construction and maintenance",
      "Bridge projects",
      "Public building construction",
      "Water and sanitation systems",
      "Street lighting",
      "Parks and recreation facilities"
    ],
    contact: {
      phone: "+63 36 621-5678",
      email: "publicworks@roxascity.gov.ph",
      address: "Roxas City Engineering Office, Roxas City, Capiz"
    },
    icon: "🏗️"
  },
  "environmental-management": {
    title: "Environmental Management",
    description: "Protecting and preserving our natural resources",
    longDescription: "We are committed to environmental sustainability and ensuring that Roxas City remains a clean, green, and healthy place to live.",
    features: [
      "Waste management programs",
      "Air quality monitoring",
      "Water conservation",
      "Tree planting initiatives",
      "Environmental education",
      "Climate action programs"
    ],
    contact: {
      phone: "+63 36 621-6789",
      email: "environment@roxascity.gov.ph",
      address: "Roxas City Environment Office, Roxas City, Capiz"
    },
    icon: "🌱"
  },
  "agriculture-fishery-support": {
    title: "Agriculture & Fishery Support",
    description: "Empowering local producers and food security",
    longDescription: "Supporting our farmers and fisherfolk is essential for food security and economic development in Roxas City.",
    features: [
      "Agricultural training programs",
      "Fishery development",
      "Market access support",
      "Technology transfer",
      "Financial assistance",
      "Infrastructure for producers"
    ],
    contact: {
      phone: "+63 36 621-7890",
      email: "agriculture@roxascity.gov.ph",
      address: "Roxas City Agriculture Office, Roxas City, Capiz"
    },
    icon: "🌾"
  },
  "peace-order": {
    title: "Peace & Order",
    description: "Ensuring safety and security for all residents",
    longDescription: "A safe community is a thriving community. We work to maintain peace and order through community-focused policing and safety programs.",
    features: [
      "Community policing",
      "Emergency response",
      "Traffic management",
      "Crime prevention programs",
      "Public safety education",
      "Neighborhood watch support"
    ],
    contact: {
      phone: "+63 36 621-8901",
      email: "peaceorder@roxascity.gov.ph",
      address: "Roxas City Police Office, Roxas City, Capiz"
    },
    icon: "🛡️"
  },
  "open-data-portal": {
    title: "Open Data Portal",
    description: "Transparent access to government data and information",
    longDescription: "Our open data portal provides citizens with easy access to government information, promoting transparency and enabling data-driven decision making.",
    features: [
      "Budget data access",
      "Project timelines",
      "Performance metrics",
      "Statistical reports",
      "Interactive dashboards",
      "Data downloads"
    ],
    contact: {
      phone: "+63 36 621-9012",
      email: "data@roxascity.gov.ph",
      address: "Roxas City IT Office, Roxas City, Capiz"
    },
    icon: "📊"
  },
  "digital-participation": {
    title: "Digital Participation",
    description: "Engaging citizens through digital platforms",
    longDescription: "We leverage technology to make civic participation more accessible and engaging for all residents of Roxas City.",
    features: [
      "Online voting platforms",
      "Digital town halls",
      "Community surveys",
      "Idea submission portals",
      "Feedback systems",
      "Mobile engagement apps"
    ],
    contact: {
      phone: "+63 36 621-0123",
      email: "digital@roxascity.gov.ph",
      address: "Roxas City Digital Office, Roxas City, Capiz"
    },
    icon: "💻"
  },
  "business-support": {
    title: "Business Support",
    description: "Fostering entrepreneurship and economic growth",
    longDescription: "We support local businesses and entrepreneurs to create jobs and drive economic development in Roxas City.",
    features: [
      "Business registration assistance",
      "Permit processing",
      "Financial incentives",
      "Training programs",
      "Market access support",
      "Mentorship programs"
    ],
    contact: {
      phone: "+63 36 621-1235",
      email: "business@roxascity.gov.ph",
      address: "Roxas City Business Office, Roxas City, Capiz"
    },
    icon: "💼"
  },
  "tourism-culture": {
    title: "Tourism & Culture",
    description: "Showcasing the rich heritage and attractions of Roxas City",
    longDescription: "Discover the vibrant culture, delicious cuisine, and beautiful attractions that make Roxas City a must-visit destination.",
    features: [
      "Cultural festivals",
      "Heritage tours",
      "Local cuisine guides",
      "Art and music programs",
      "Tourist information",
      "Cultural preservation"
    ],
    contact: {
      phone: "+63 36 621-2346",
      email: "tourism@roxascity.gov.ph",
      address: "Roxas City Tourism Office, Roxas City, Capiz"
    },
    icon: "🎭"
  }
};

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICE_DATA[slug as keyof typeof SERVICE_DATA];

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/services" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors">
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Back Button */}
        <Link 
          to="/services" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{service.icon}</div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
              {service.title}
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {service.description}
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">About This Service</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.longDescription}
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">{service.contact.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">{service.contact.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">{service.contact.address}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Access Service Portal
                </button>
                <button className="w-full px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-500 hover:text-blue-600 transition-colors">
                  Request Information
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage; 