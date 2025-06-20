
import { Vote, MessageSquare, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface DigitalParticipationProps {
  hasVoted: boolean;
}

export const DigitalParticipation = ({ hasVoted }: DigitalParticipationProps) => {
  return (
    <section className="py-20 section-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Shape Your City's Future
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Participate in democratic processes, join town halls, and help decide how public funds are allocated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Participatory Budgeting */}
          <Card className="card-dark hover-lift">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 mb-4 mx-auto">
                <Vote className="w-8 h-8 text-blue-400" />
              </div>
              <CardTitle className="text-content">Budget Voting</CardTitle>
              <CardDescription className="text-muted">
                {hasVoted ? "Thank you for voting!" : "Vote on next year's budget priorities"}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                className={hasVoted ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"}
                disabled={hasVoted}
              >
                {hasVoted ? "View Results" : "Cast Your Vote"}
              </Button>
            </CardContent>
          </Card>

          {/* Digital Town Hall */}
          <Card className="card-dark hover-lift">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 mb-4 mx-auto">
                <MessageSquare className="w-8 h-8 text-purple-400" />
              </div>
              <CardTitle className="text-content">Town Halls</CardTitle>
              <CardDescription className="text-muted">
                Join live discussions with city officials
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                Join Discussion
              </Button>
            </CardContent>
          </Card>

          {/* Community Polls */}
          <Card className="card-dark hover-lift">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4 mx-auto">
                <BarChart3 className="w-8 h-8 text-green-400" />
              </div>
              <CardTitle className="text-content">Community Polls</CardTitle>
              <CardDescription className="text-muted">
                Quick surveys on local issues
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                Take Survey
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Participation Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">12,845</div>
            <div className="text-gray-400">Total Votes Cast</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">89.2%</div>
            <div className="text-gray-400">Participation Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">247</div>
            <div className="text-gray-400">Active Discussions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">156</div>
            <div className="text-gray-400">Policy Changes</div>
          </div>
        </div>
      </div>
    </section>
  );
};
