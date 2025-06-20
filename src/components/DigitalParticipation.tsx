
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Vote, 
  Users, 
  MessageSquare, 
  BarChart3,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";

interface DigitalParticipationProps {
  hasVoted: boolean;
}

export const DigitalParticipation = ({ hasVoted }: DigitalParticipationProps) => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const budgetProjects = [
    {
      id: "roxas-park",
      title: "Roxas City Park Renovation",
      budget: "₱15M",
      votes: 2847,
      percentage: 34.2,
      description: "Modernize park facilities, add playground equipment, improve lighting"
    },
    {
      id: "flood-control",
      title: "Flood Control Infrastructure", 
      budget: "₱25M",
      votes: 2156,
      percentage: 25.9,
      description: "Drainage system upgrades and flood prevention measures"
    },
    {
      id: "road-repairs",
      title: "Major Road Repairs Program",
      budget: "₱18M", 
      votes: 1893,
      percentage: 22.8,
      description: "Citywide road resurfacing and pothole repair initiative"
    },
    {
      id: "digital-services",
      title: "Digital Services Expansion",
      budget: "₱8M",
      votes: 1426,
      percentage: 17.1,
      description: "Online portal improvements and digital government services"
    }
  ];

  const townHallTopics = [
    {
      title: "Climate Change Adaptation Plan",
      questions: 47,
      status: "live",
      time: "Tonight 7:00 PM"
    },
    {
      title: "Business District Development",
      questions: 23,
      status: "upcoming",
      time: "Jan 25, 2024"
    },
    {
      title: "Traffic Management Solutions",
      questions: 89,
      status: "completed",
      time: "Jan 10, 2024"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Digital Participation Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your voice shapes our city's future. Vote on budget priorities, join town halls, 
            and participate in democratic decision-making.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Participatory Budgeting */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Vote className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Budget Voting</h3>
                  <p className="text-gray-600">Choose city priorities</p>
                </div>
              </div>
              {hasVoted ? (
                <Badge className="bg-green-100 text-green-800">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Voted
                </Badge>
              ) : (
                <Badge className="bg-yellow-100 text-yellow-800">
                  <Clock className="w-4 h-4 mr-1" />
                  Open
                </Badge>
              )}
            </div>

            <div className="space-y-6">
              {budgetProjects.map((project) => (
                <div 
                  key={project.id}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                    selectedProject === project.id 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedProject(
                    selectedProject === project.id ? null : project.id
                  )}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm">{project.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{project.description}</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="font-bold text-blue-600">{project.budget}</div>
                      <div className="text-xs text-gray-500">{project.votes} votes</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Support Level</span>
                      <span className="font-medium">{project.percentage}%</span>
                    </div>
                    <Progress 
                      value={project.percentage} 
                      className="h-2"
                    />
                  </div>
                </div>
              ))}

              {!hasVoted && (
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                  disabled={!selectedProject}
                >
                  {selectedProject ? 'Cast Your Vote' : 'Select a Project to Vote'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              )}

              {hasVoted && (
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-green-800 font-medium">Thank you for participating!</p>
                  <p className="text-green-600 text-sm">Results will be announced on February 1st</p>
                </div>
              )}
            </div>
          </div>

          {/* Digital Town Hall */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Town Hall Meetings</h3>
                <p className="text-gray-600">Join the conversation</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {townHallTopics.map((topic, index) => (
                <div 
                  key={index}
                  className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900 text-sm">{topic.title}</h4>
                    <Badge 
                      variant="outline"
                      className={
                        topic.status === 'live' ? 'border-red-200 text-red-700 bg-red-50' :
                        topic.status === 'upcoming' ? 'border-blue-200 text-blue-700 bg-blue-50' :
                        'border-gray-200 text-gray-700 bg-gray-50'
                      }
                    >
                      {topic.status === 'live' && <div className="w-2 h-2 bg-red-500 rounded-full mr-1 animate-pulse" />}
                      {topic.status.charAt(0).toUpperCase() + topic.status.slice(1)}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      {topic.questions} questions submitted
                    </div>
                    <div className="text-xs text-gray-500">{topic.time}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="flex items-center justify-center">
                <MessageSquare className="w-4 h-4 mr-2" />
                Submit Question
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Users className="w-4 h-4 mr-2" />
                Join Live Session
              </Button>
            </div>
          </div>
        </div>

        {/* Participation Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Vote className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">8,322</div>
            <div className="text-gray-600 text-sm">Active Voters</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <MessageSquare className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">159</div>
            <div className="text-gray-600 text-sm">Questions Asked</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <BarChart3 className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">12</div>
            <div className="text-gray-600 text-sm">Completed Polls</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Users className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">73%</div>
            <div className="text-gray-600 text-sm">Participation Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};
