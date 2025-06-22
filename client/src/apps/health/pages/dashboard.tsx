import { useEffect } from "react";
import { Heart, Activity, Footprints, CheckCircle, Info, AlertTriangle, Calendar, Flame, Moon, Droplets, Weight, Dumbbell, Target, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VitalsCard } from "@/components/health/vitals-card";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Vitals, HealthInsight } from "@/types/health";

const healthInsights: HealthInsight[] = [
  {
    id: "1",
    type: "success",
    title: "Great progress on your step goal!",
    description: "You're 85% toward your daily target. Keep it up!",
  },
  {
    id: "2",
    type: "info",
    title: "Vaccination reminder",
    description: "Your flu shot is scheduled for next week.",
  },
  {
    id: "3",
    type: "warning",
    title: "Health checkup due",
    description: "It's time for your annual physical examination.",
  },
];

const upcomingAppointments = [
  {
    id: "1",
    type: "COVID-19 Booster",
    location: "Roxas City Health Center",
    datetime: "Dec 15, 2024 at 1:00 PM",
    icon: "💉",
  },
  {
    id: "2",
    type: "Annual Checkup",
    location: "Dr. Santos Clinic",
    datetime: "Dec 22, 2024 at 10:00 AM",
    icon: "👨‍⚕️",
  },
];

export default function HealthDashboard() {
  const { data: vitals, isLoading } = useQuery<Vitals>({
    queryKey: ['/api/health/vitals'],
  });

  const getInsightStyles = (type: HealthInsight['type']) => {
    switch (type) {
      case 'success':
        return {
          bgColor: 'bg-blue-50',
          iconBg: 'bg-blue-100',
          iconColor: 'text-blue-600',
          icon: CheckCircle,
        };
      case 'info':
        return {
          bgColor: 'bg-blue-100',
          iconBg: 'bg-blue-200',
          iconColor: 'text-blue-700',
          icon: Info,
        };
      case 'warning':
        return {
          bgColor: 'bg-yellow-50',
          iconBg: 'bg-yellow-100',
          iconColor: 'text-blue-600',
          icon: AlertTriangle,
        };
    }
  };

  if (isLoading) {
    return (
      <div className="py-16 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-gray-200 rounded-xl h-40"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Health Dashboard</h2>
          <p className="text-xl text-blue-700">Monitor your health metrics, track appointments, and view your wellness progress in one place.</p>
        </div>
        
        {/* Quick Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
            <CardContent className="p-4 text-center">
              <Target className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">85%</div>
              <div className="text-sm opacity-90">Goals Achieved</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">7</div>
              <div className="text-sm opacity-90">Days Streak</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-lg">
            <CardContent className="p-4 text-center">
              <Award className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm opacity-90">Badges Earned</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-yellow-400 to-blue-500 text-white shadow-lg">
            <CardContent className="p-4 text-center">
              <Flame className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">2,450</div>
              <div className="text-sm opacity-90">Total Calories</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Health Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {vitals && (
            <>
              <VitalsCard
                title="Heart Rate"
                subtitle="Latest reading"
                value={vitals.heartRate.value}
                unit={vitals.heartRate.unit}
                status={vitals.heartRate.status}
                timestamp="2 mins ago"
                icon={Heart}
                iconBgColor="bg-blue-100"
                iconColor="text-blue-700"
                statusType="success"
                hasAnimation={true}
              />
              
              <VitalsCard
                title="Daily Steps"
                subtitle="Today's progress"
                value={vitals.steps.value.toLocaleString()}
                unit={`of ${vitals.steps.goal.toLocaleString()} goal`}
                status={`${vitals.steps.percentage}% complete`}
                timestamp="Live"
                icon={Footprints}
                iconBgColor="bg-blue-200"
                iconColor="text-blue-800"
                statusType="success"
                progress={vitals.steps.percentage}
              />

              <VitalsCard
                title="Calories Burned"
                subtitle="Today's burn"
                value={vitals.calories.burned.toLocaleString()}
                unit={`of ${vitals.calories.goal.toLocaleString()} goal`}
                status={`${vitals.calories.percentage}% complete`}
                timestamp="Live"
                icon={Flame}
                iconBgColor="bg-yellow-100"
                iconColor="text-blue-700"
                statusType="success"
                progress={vitals.calories.percentage}
              />

              <VitalsCard
                title="Sleep Quality"
                subtitle="Last night"
                value={vitals.sleep.hours}
                unit={`of ${vitals.sleep.goal}h goal`}
                status={vitals.sleep.quality}
                timestamp="Last night"
                icon={Moon}
                iconBgColor="bg-blue-50"
                iconColor="text-blue-600"
                statusType="success"
              />
            </>
          )}
        </div>

        {/* Secondary Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {vitals && (
            <>
              <VitalsCard
                title="Water Intake"
                subtitle="Today's hydration"
                value={vitals.water.intake}
                unit={`of ${vitals.water.goal}L goal`}
                status={`${vitals.water.percentage}% complete`}
                timestamp="Live"
                icon={Droplets}
                iconBgColor="bg-blue-100"
                iconColor="text-blue-600"
                statusType="success"
                progress={vitals.water.percentage}
              />

              <VitalsCard
                title="Weight & BMI"
                subtitle="Latest measurement"
                value={vitals.weight.value}
                unit={vitals.weight.unit}
                status={`BMI: ${vitals.weight.bmi} (${vitals.weight.status})`}
                timestamp={vitals.weight.timestamp}
                icon={Weight}
                iconBgColor="bg-blue-200"
                iconColor="text-blue-700"
                statusType="success"
              />

              <VitalsCard
                title="Exercise"
                subtitle="Last workout"
                value={vitals.exercise.duration}
                unit="minutes"
                status={`${vitals.exercise.type} - ${vitals.exercise.intensity}`}
                timestamp={vitals.exercise.timestamp}
                icon={Dumbbell}
                iconBgColor="bg-yellow-100"
                iconColor="text-blue-700"
                statusType="success"
              />
            </>
          )}
        </div>
        
        {/* Fitness Goals & Achievements */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Today's Goals */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-900">
                <Target className="w-5 h-5 text-blue-600" />
                <span>Today's Goals</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Steps</span>
                  <span className="text-sm font-medium">8,542 / 10,000</span>
                </div>
                <div className="w-full bg-blue-100 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Calories</span>
                  <span className="text-sm font-medium">1,890 / 2,200</span>
                </div>
                <div className="w-full bg-blue-100 rounded-full h-2">
                  <div className="bg-gradient-to-r from-yellow-400 to-blue-500 h-2 rounded-full" style={{ width: '86%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Water</span>
                  <span className="text-sm font-medium">1.8 / 2.5L</span>
                </div>
                <div className="w-full bg-blue-100 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weekly Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-900">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span>Weekly Summary</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Avg Steps/Day</span>
                  <span className="text-sm font-medium">9,234</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Calories</span>
                  <span className="text-sm font-medium">14,560</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Workouts</span>
                  <span className="text-sm font-medium">5 sessions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Sleep Quality</span>
                  <span className="text-sm font-medium">7.8/10</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Active Days</span>
                  <span className="text-sm font-medium">6/7 days</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-900">
                <Award className="w-5 h-5 text-blue-600" />
                <span>Achievements</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-lg">🏆</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-900">Step Master</p>
                    <p className="text-xs text-blue-600">10,000 steps for 7 days</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-lg">💧</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-900">Hydration Hero</p>
                    <p className="text-xs text-blue-600">Met water goal 5 days</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-lg">💪</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-900">Workout Warrior</p>
                    <p className="text-xs text-blue-600">5 workouts this week</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Health Insights and Appointments */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Health Insights */}
          <Card>
            <CardHeader>
              <CardTitle>Health Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {healthInsights.map((insight) => {
                  const styles = getInsightStyles(insight.type);
                  const IconComponent = styles.icon;
                  
                  return (
                    <div key={insight.id} className={`flex items-start space-x-4 p-4 ${styles.bgColor} rounded-lg`}>
                      <div className={`w-8 h-8 ${styles.iconBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className={`w-4 h-4 ${styles.iconColor}`} />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{insight.title}</h4>
                        <p className="text-sm text-gray-600">{insight.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
          
          {/* Upcoming Appointments */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Upcoming Appointments</CardTitle>
                <Link href="/scheduler">
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50">
                    Schedule New
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-12 h-12 bg-china-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">{appointment.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{appointment.type}</h4>
                      <p className="text-sm text-gray-600">{appointment.location}</p>
                      <p className="text-sm text-gray-600">{appointment.datetime}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50">
                      View
                    </Button>
                  </div>
                ))}
                
                <div className="text-center">
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50">
                    View All Appointments
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
