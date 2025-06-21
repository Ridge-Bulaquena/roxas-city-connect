
import { BarChart3, TrendingUp, Users, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface LiveDashboardsProps {
  userType: 'resident' | 'official' | 'visitor';
}

export const LiveDashboards = ({ userType }: LiveDashboardsProps) => {
  return (
    <section className="py-20 section-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Live City Metrics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time insights into city performance, budget utilization, and citizen satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Budget Utilized
              </CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">₱1.8B</div>
              <p className="text-xs text-green-600">
                +12% from last quarter
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Active Projects
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">142</div>
              <p className="text-xs text-blue-600">
                +8 new this month
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Citizen Engagement
              </CardTitle>
              <Users className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">89.4%</div>
              <p className="text-xs text-purple-600">
                +2.1% this week
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Performance Score
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">94.2</div>
              <p className="text-xs text-orange-600">
                +5.3 points
              </p>
            </CardContent>
          </Card>
        </div>

        {userType === 'official' && (
          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
              Access Full Dashboard
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
