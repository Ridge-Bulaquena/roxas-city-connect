import { Link } from "wouter";
import { MapPin, Syringe, MessageCircle, BarChart3, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "../components/health/service-card";

export default function Home() {
  const handleEmergencyContact = () => {
    window.open("tel:911", "_self");
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight font-main">
                Your Health,
                <span className="text-yellow-300"> Our Priority</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed font-main">
                Access comprehensive health services from the comfort of your home. Book appointments, find clinics, chat with our AI nurse, and monitor your health—all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={handleEmergencyContact}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg h-auto shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Hotline
                </Button>
                <Link href="/chat">
                  <Button 
                    variant="outline" 
                    className="border-2 border-white text-blue-900 hover:bg-white hover:text-blue-700 px-8 py-4 text-lg h-auto shadow-xl rounded-full"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Quick Health Chat
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero illustration */}
            <div className="relative">
              <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=500" 
                  alt="Healthcare professional with digital tablet" 
                  className="rounded-2xl w-full h-auto"
                />
              </div>
              
              {/* Floating status indicators */}
              <div className="absolute -top-4 -right-4 bg-green-500 rounded-full p-4 shadow-xl">
                <div className="relative">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-white rounded-full pulse-ring"></div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-yellow-300 rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-700">🛡️</span>
                  <span className="text-sm font-bold text-blue-700">HIPAA Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Grid */}
      <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6 font-main">Health Services at Your Fingertips</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-main">Choose from our comprehensive suite of digital health services designed for maximum convenience and accessibility.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/locator">
              <ServiceCard
                icon={MapPin}
                title="Find Clinics"
                description="Locate nearby health centers and barangay health stations with real-time availability."
                action="Explore Map"
                onClick={() => {}}
                iconBgColor="bg-china-blue/10"
                iconColor="text-china-blue"
              />
            </Link>
            
            <Link href="/scheduler">
              <ServiceCard
                icon={Syringe}
                title="Book Vaccination"
                description="Schedule your vaccination appointments with our easy-to-use calendar system."
                action="Schedule Now"
                onClick={() => {}}
                iconBgColor="bg-green-100"
                iconColor="text-green-600"
              />
            </Link>
            
            <Link href="/chat">
              <ServiceCard
                icon={MessageCircle}
                title="AI Nurse Maria"
                description="Get instant health advice and symptom guidance from our advanced medical AI powered by avant-garde diagnostic technology."
                action="Start Chat"
                onClick={() => {}}
                iconBgColor="bg-purple-100"
                iconColor="text-purple-600"
              />
            </Link>
            
            <Link href="/dashboard">
              <ServiceCard
                icon={BarChart3}
                title="Health Dashboard"
                description="Monitor your vital signs, track appointments, and view your health progress."
                action="View Dashboard"
                onClick={() => {}}
                iconBgColor="bg-orange-100"
                iconColor="text-orange-600"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
