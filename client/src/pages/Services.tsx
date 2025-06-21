import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  CreditCard, 
  Clock, 
  CheckCircle, 
  Building, 
  Users, 
  Phone,
  Mail,
  MapPin,
  ArrowRight
} from "lucide-react";
import Layout from "@/components/Layout";

const Services = () => {
  const services = [
    {
      title: "Business Permits & Licenses",
      description: "Apply for business permits, licenses, and registrations online",
      icon: Building,
      features: ["Business Permit", "Mayor's Permit", "Fire Safety Permit", "Health Permit"],
      status: "Available",
      processingTime: "3-5 business days"
    },
    {
      title: "Civil Registry Documents",
      description: "Request birth certificates, marriage certificates, and other civil documents",
      icon: FileText,
      features: ["Birth Certificate", "Marriage Certificate", "Death Certificate", "CENOMAR"],
      status: "Available",
      processingTime: "1-2 business days"
    },
    {
      title: "Tax Payments & Fees",
      description: "Pay real property tax, business tax, and other city fees online",
      icon: CreditCard,
      features: ["Real Property Tax", "Business Tax", "Permit Fees", "Other Charges"],
      status: "Available",
      processingTime: "Instant"
    },
    {
      title: "Application Tracking",
      description: "Track the status of your submitted applications and requests",
      icon: Clock,
      features: ["Real-time Updates", "SMS Notifications", "Email Alerts", "Progress Timeline"],
      status: "Available",
      processingTime: "Real-time"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-[#0E1A2A] via-[#0B132B] to-[#1C2E4A]">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2 bg-[#28D7DB]/20 text-[#28D7DB] border-[#28D7DB]/30">
              Digital Services
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-[#E3F6FF] mb-6">
              <span className="bg-gradient-to-r from-[#28D7DB] via-[#00E5FF] to-white bg-clip-text text-transparent">
                City Services at Your Fingertips
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#93A3B5] mb-8 max-w-4xl mx-auto leading-relaxed">
              From business permits to civil documents, access essential city services online 24/7. 
              Our digital platform makes government services faster, easier, and more transparent.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#28D7DB]">24/7</div>
                <div className="text-[#93A3B5]">Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#28D7DB]">100%</div>
                <div className="text-[#93A3B5]">Digital</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#28D7DB]">Fast</div>
                <div className="text-[#93A3B5]">Processing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#28D7DB]">Secure</div>
                <div className="text-[#93A3B5]">Platform</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border">
                <Building className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Apply for permits and licenses</h3>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border">
                <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Request civil registry documents</h3>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border">
                <CreditCard className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Pay taxes and fees online</h3>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border">
                <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Track your application status</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Available Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <service.icon className="w-8 h-8 text-blue-600" />
                        <div>
                          <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                          <Badge variant="secondary" className="mt-1 bg-green-100 text-green-800 border-green-200">
                            {service.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600 text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-700 mb-2">Processing Time:</div>
                      <div className="text-blue-600 font-semibold">{service.processingTime}</div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-sm font-medium text-gray-700 mb-3">Available Services:</div>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group">
                      Access Service
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Need Help with Your Application?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Phone className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-blue-100">(036) 621-0131</p>
                </div>
                
                <div className="text-center">
                  <Mail className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <p className="text-blue-100">services@roxascity.gov.ph</p>
                </div>
                
                <div className="text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                  <h3 className="font-semibold mb-2">Visit Us</h3>
                  <p className="text-blue-100">City Hall, Roxas City</p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-blue-100 mb-4">Office Hours: Monday - Friday, 8:00 AM - 5:00 PM</p>
                <Button variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50">
                  Schedule an Appointment
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;