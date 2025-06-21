import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Users, 
  Video, 
  BarChart3, 
  Send,
  Calendar,
  FileText,
  ThumbsUp,
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  Megaphone
} from "lucide-react";
import Layout from "@/components/Layout";

const CivicEngagement = () => {
  const engagementOptions = [
    {
      title: "Submit Suggestions & Concerns",
      description: "Share your ideas and report issues directly to city officials",
      icon: MessageSquare,
      features: ["Anonymous submissions", "Category selection", "Photo attachments", "Status tracking"],
      color: "blue",
      action: "Submit Now"
    },
    {
      title: "Public Consultations",
      description: "Participate in official consultations on city policies and projects",
      icon: Users,
      features: ["Online surveys", "Comment periods", "Expert Q&A", "Document review"],
      color: "green",
      action: "Join Discussion"
    },
    {
      title: "Virtual Town Halls",
      description: "Attend live meetings with city officials and community leaders",
      icon: Video,
      features: ["Live streaming", "Q&A sessions", "Recording access", "Multi-language support"],
      color: "purple",
      action: "View Schedule"
    },
    {
      title: "Project Progress Tracking",
      description: "Monitor the status and impact of ongoing city initiatives",
      icon: BarChart3,
      features: ["Real-time updates", "Budget transparency", "Timeline tracking", "Community metrics"],
      color: "yellow",
      action: "Track Projects"
    }
  ];

  const upcomingEvents = [
    {
      title: "Budget Planning Session 2024",
      date: "January 25, 2024",
      time: "7:00 PM",
      type: "Virtual Town Hall",
      participants: "234 registered"
    },
    {
      title: "Traffic Improvement Consultation",
      date: "January 30, 2024",
      time: "6:00 PM",
      type: "Public Consultation",
      participants: "89 responses"
    },
    {
      title: "Environmental Policy Review",
      date: "February 5, 2024",
      time: "7:30 PM",
      type: "Discussion Forum",
      participants: "156 comments"
    }
  ];

  const recentActivity = [
    {
      type: "suggestion",
      title: "New bike lanes on Arnaldo Boulevard",
      status: "Under Review",
      votes: 127,
      date: "2 days ago"
    },
    {
      type: "consultation",
      title: "Public Market renovation plans",
      status: "Active",
      votes: 89,
      date: "1 week ago"
    },
    {
      type: "project",
      title: "Roxas Bridge repair project",
      status: "In Progress",
      votes: 203,
      date: "2 weeks ago"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-100 text-blue-800 border-blue-200",
      green: "from-green-500 to-green-600 bg-green-100 text-green-800 border-green-200",
      purple: "from-purple-500 to-purple-600 bg-purple-100 text-purple-800 border-purple-200",
      yellow: "from-yellow-500 to-yellow-600 bg-yellow-100 text-yellow-800 border-yellow-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-[#0E1A2A] via-[#0B132B] to-[#1C2E4A]">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2 bg-[#28D7DB]/20 text-[#28D7DB] border-[#28D7DB]/30">
              Civic Engagement
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-[#E3F6FF] mb-6">
              <span className="bg-gradient-to-r from-[#28D7DB] via-[#00E5FF] to-white bg-clip-text text-transparent">
                Make Your Voice Heard
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#93A3B5] mb-8 max-w-4xl mx-auto leading-relaxed">
              Democracy works best when citizens actively participate. Join discussions, 
              provide feedback on city projects, and help shape Roxas City's future.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">1,247</div>
                <div className="text-gray-600">Active Participants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">89</div>
                <div className="text-gray-600">Open Consultations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">45</div>
                <div className="text-gray-600">Projects Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">12</div>
                <div className="text-gray-600">Monthly Events</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border">
                <MessageSquare className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Submit suggestions and concerns</h3>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Participate in public consultations</h3>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border">
                <Video className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Attend virtual town halls</h3>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border">
                <BarChart3 className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Track project progress</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement Options */}
        <section className="py-16 px-4 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Ways to Participate
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {engagementOptions.map((option, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 bg-gradient-to-br ${getColorClasses(option.color).split(' ')[0]} ${getColorClasses(option.color).split(' ')[1]} rounded-lg flex items-center justify-center`}>
                          <option.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-gray-900">{option.title}</CardTitle>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600 text-base mt-3">
                      {option.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="mb-6">
                      <div className="text-sm font-medium text-gray-700 mb-3">Features:</div>
                      <div className="grid grid-cols-1 gap-2">
                        {option.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button className={`w-full bg-gradient-to-r ${getColorClasses(option.color).split(' ')[0]} ${getColorClasses(option.color).split(' ')[1]} text-white hover:opacity-90 group`}>
                      {option.action}
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Upcoming Events
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                        {event.type}
                      </Badge>
                      <Calendar className="w-5 h-5 text-gray-400" />
                    </div>
                    <CardTitle className="text-lg text-gray-900 mt-2">{event.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{event.participants}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                      Join Event
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="py-16 px-4 bg-white/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Recent Community Activity
            </h2>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          {activity.type === 'suggestion' && <MessageSquare className="w-5 h-5 text-blue-600" />}
                          {activity.type === 'consultation' && <Users className="w-5 h-5 text-green-600" />}
                          {activity.type === 'project' && <BarChart3 className="w-5 h-5 text-purple-600" />}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{activity.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <span className="flex items-center space-x-1">
                              <ThumbsUp className="w-4 h-4" />
                              <span>{activity.votes} votes</span>
                            </span>
                            <span>{activity.date}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Badge 
                        variant="secondary" 
                        className={`${
                          activity.status === 'Active' ? 'bg-green-100 text-green-800 border-green-200' :
                          activity.status === 'In Progress' ? 'bg-blue-100 text-blue-800 border-blue-200' :
                          'bg-yellow-100 text-yellow-800 border-yellow-200'
                        }`}
                      >
                        {activity.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                View All Activity
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-600 to-blue-700 rounded-2xl p-8 text-white text-center">
              <Megaphone className="w-16 h-16 mx-auto mb-6 text-purple-200" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Get Involved?
              </h2>
              <p className="text-purple-100 mb-8 text-lg">
                Your participation makes Roxas City stronger. Start engaging with your community today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" className="bg-white text-purple-700 hover:bg-purple-50">
                  Submit Your First Suggestion
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700">
                  Join Next Town Hall
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CivicEngagement;