
import { Vote, MessageSquare, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface DigitalParticipationProps {
  hasVoted: boolean;
}

export const DigitalParticipation = ({ hasVoted }: DigitalParticipationProps) => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 50);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('.participation-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 section-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-content">
            Shape Your City's Future
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Participate in democratic processes, join town halls, and help decide how public funds are allocated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Participatory Budgeting */}
          <Card 
            data-index="0"
            className={`participation-card card-dark hover-lift transition-all duration-500 ${
              visibleCards.includes(0) ? 'animate-cascade' : 'opacity-0'
            }`}
            style={{ animationDelay: '0ms' }}
          >
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 mb-4 mx-auto">
                <Vote className="w-8 h-8 text-yellow-600" />
              </div>
              <CardTitle className="text-content">Budget Voting</CardTitle>
              <CardDescription className="text-muted">
                {hasVoted ? "Thank you for voting!" : "Vote on next year's budget priorities"}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                className={`elastic-button ${hasVoted ? "bg-slate-600 hover:bg-slate-700 text-white" : "bg-yellow-500 hover:bg-yellow-600 text-slate-900"}`}
                disabled={hasVoted}
              >
                {hasVoted ? "View Results" : "Cast Your Vote"}
              </Button>
            </CardContent>
          </Card>

          {/* Digital Town Hall */}
          <Card 
            data-index="1"
            className={`participation-card card-dark hover-lift transition-all duration-500 ${
              visibleCards.includes(1) ? 'animate-cascade' : 'opacity-0'
            }`}
            style={{ animationDelay: '50ms' }}
          >
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4 mx-auto">
                <MessageSquare className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-content">Town Halls</CardTitle>
              <CardDescription className="text-muted">
                Join live discussions with city officials
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white elastic-button">
                Join Discussion
              </Button>
            </CardContent>
          </Card>

          {/* Community Polls */}
          <Card 
            data-index="2"
            className={`participation-card card-dark hover-lift transition-all duration-500 ${
              visibleCards.includes(2) ? 'animate-cascade' : 'opacity-0'
            }`}
            style={{ animationDelay: '100ms' }}
          >
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4 mx-auto">
                <BarChart3 className="w-8 h-8 text-slate-600" />
              </div>
              <CardTitle className="text-content">Community Polls</CardTitle>
              <CardDescription className="text-muted">
                Quick surveys on local issues
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="bg-slate-600 hover:bg-slate-700 text-white elastic-button">
                Take Survey
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Participation Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { value: "12,845", label: "Total Votes Cast" },
            { value: "89.2%", label: "Participation Rate" },
            { value: "247", label: "Active Discussions" },
            { value: "156", label: "Policy Changes" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              data-index={index + 3}
              className={`participation-card text-center transition-all duration-500 ${
                visibleCards.includes(index + 3) ? 'animate-cascade' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 3) * 50}ms` }}
            >
              <div className="text-3xl font-bold text-content mb-2">{stat.value}</div>
              <div className="text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
