
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Building,
  Zap,
  ArrowUp,
  ArrowDown
} from "lucide-react";

interface LiveDashboardsProps {
  userType: 'resident' | 'official' | 'visitor';
}

export const LiveDashboards = ({ userType }: LiveDashboardsProps) => {
  const [animatedValues, setAnimatedValues] = useState({
    budget: 0,
    projects: 0,
    satisfaction: 0,
    efficiency: 0
  });

  useEffect(() => {
    const targetValues = {
      budget: 78.5,
      projects: 142,
      satisfaction: 92.3,
      efficiency: 95.8
    };

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setAnimatedValues({
        budget: targetValues.budget * easeOut,
        projects: Math.floor(targetValues.projects * easeOut),
        satisfaction: targetValues.satisfaction * easeOut,
        efficiency: targetValues.efficiency * easeOut
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timer = setTimeout(() => {
      animate();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const kpiCards = [
    {
      title: "Budget Utilization",
      value: `${animatedValues.budget.toFixed(1)}%`,
      change: "+2.3%",
      trend: "up",
      icon: DollarSign,
      color: "blue",
      description: "City budget execution rate"
    },
    {
      title: "Active Projects", 
      value: animatedValues.projects.toString(),
      change: "+8",
      trend: "up",
      icon: Building,
      color: "green",
      description: "Infrastructure & development"
    },
    {
      title: "Citizen Satisfaction",
      value: `${animatedValues.satisfaction.toFixed(1)}%`,
      change: "+0.8%",
      trend: "up", 
      icon: Users,
      color: "yellow",
      description: "Public service ratings"
    },
    {
      title: "Service Efficiency",
      value: `${animatedValues.efficiency.toFixed(1)}%`,
      change: "+1.2%",
      trend: "up",
      icon: Zap,
      color: "purple",
      description: "Response time metrics"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-50 text-blue-600",
      green: "from-green-500 to-green-600 bg-green-50 text-green-600", 
      yellow: "from-yellow-500 to-yellow-600 bg-yellow-50 text-yellow-600",
      purple: "from-purple-500 to-purple-600 bg-purple-50 text-purple-600"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Badge className="bg-green-100 text-green-800 mr-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Live Data
            </Badge>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            City Performance Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time insights into city operations, budget utilization, and citizen satisfaction metrics.
            {userType === 'official' && " Full administrative access available."}
          </p>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {kpiCards.map((kpi, index) => {
            const Icon = kpi.icon;
            const colorClasses = getColorClasses(kpi.color);
            
            return (
              <div 
                key={kpi.title}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center text-sm font-medium ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {kpi.trend === 'up' ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
                    {kpi.change}
                  </div>
                </div>

                {/* Value */}
                <div className="mb-2">
                  <div className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {kpi.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600 mt-1">
                    {kpi.title}
                  </div>
                </div>

                {/* Description */}
                <div className="text-xs text-gray-500">
                  {kpi.description}
                </div>

                {/* Progress bar for percentage values */}
                {kpi.value.includes('%') && (
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} transition-all duration-1000 ease-out`}
                        style={{ width: kpi.value }}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Charts Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Budget Chart */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Budget Allocation</h3>
              <Badge variant="outline">2024</Badge>
            </div>
            
            <div className="space-y-4">
              {[
                { category: "Infrastructure", amount: "₱892M", percentage: 42, color: "blue" },
                { category: "Health Services", amount: "₱456M", percentage: 22, color: "red" },
                { category: "Education", amount: "₱378M", percentage: 18, color: "green" },
                { category: "Social Welfare", amount: "₱273M", percentage: 13, color: "yellow" },
                { category: "Other Services", amount: "₱101M", percentage: 5, color: "gray" }
              ].map((item, index) => (
                <div key={item.category} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700">{item.category}</span>
                    <span className="text-gray-900 font-semibold">{item.amount}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${item.percentage}%`,
                        animationDelay: `${index * 200}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Timeline */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Major Projects</h3>
              <Badge className="bg-green-100 text-green-800">On Track</Badge>
            </div>

            <div className="space-y-6">
              {[
                { project: "Roxas Port Modernization", progress: 78, status: "In Progress", deadline: "Q3 2024" },
                { project: "City Hall Renovation", progress: 45, status: "In Progress", deadline: "Q4 2024" },
                { project: "Digital Infrastructure", progress: 92, status: "Near Completion", deadline: "Q2 2024" },
                { project: "Flood Control System", progress: 23, status: "Planning", deadline: "Q1 2025" }
              ].map((project, index) => (
                <div key={project.project} className="space-y-2">
                  <div className="flex justify-between">
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{project.project}</div>
                      <div className="text-xs text-gray-500">{project.deadline}</div>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        project.progress > 80 ? 'border-green-200 text-green-700' :
                        project.progress > 50 ? 'border-blue-200 text-blue-700' :
                        'border-yellow-200 text-yellow-700'
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                        project.progress > 80 ? 'bg-gradient-to-r from-green-400 to-green-600' :
                        project.progress > 50 ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                        'bg-gradient-to-r from-yellow-400 to-yellow-600'
                      }`}
                      style={{ 
                        width: `${project.progress}%`,
                        animationDelay: `${index * 300}ms`
                      }}
                    />
                  </div>
                  <div className="text-right text-xs text-gray-500">
                    {project.progress}% Complete
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Access Message for Different User Types */}
        {userType === 'official' && (
          <div className="mt-12 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-blue-900 mb-2">Full Dashboard Access Available</h4>
              <p className="text-blue-700">
                As an official, you have access to detailed analytics, budget controls, and administrative tools.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
