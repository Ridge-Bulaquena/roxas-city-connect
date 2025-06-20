
import { FileText, Search, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

export const ComplaintSystem = () => {
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

    const cards = document.querySelectorAll('.complaint-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 section-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-content">
            Voice Your Concerns
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Report issues, track progress, and see real solutions. Your complaints drive positive change in our community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* File Complaint Card */}
          <Card 
            data-index="0"
            className={`complaint-card card-dark hover-lift transition-all duration-500 ${
              visibleCards.includes(0) ? 'animate-cascade' : 'opacity-0'
            }`}
            style={{ animationDelay: '0ms' }}
          >
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-highlight/20 mb-4 mx-auto">
                <FileText className="w-8 h-8 accent-highlight" />
              </div>
              <CardTitle className="text-content">File a Complaint</CardTitle>
              <CardDescription className="text-muted">
                Report issues that matter to your community
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="bg-accent-highlight hover:bg-accent-highlight/90 text-black px-8 elastic-button">
                Start Filing
              </Button>
            </CardContent>
          </Card>

          {/* Track Complaint Card */}
          <Card 
            data-index="1"
            className={`complaint-card card-dark hover-lift transition-all duration-500 ${
              visibleCards.includes(1) ? 'animate-cascade' : 'opacity-0'
            }`}
            style={{ animationDelay: '50ms' }}
          >
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4 mx-auto">
                <Search className="w-8 h-8 text-green-400" />
              </div>
              <CardTitle className="text-content">Track Progress</CardTitle>
              <CardDescription className="text-muted">
                Monitor the status of your submitted complaints
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="btn-dark-secondary px-8 elastic-button">
                Track Complaint
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Clock, value: "1,247", label: "Active Cases", color: "text-yellow-400", bgColor: "bg-yellow-500/20" },
            { icon: CheckCircle, value: "3,891", label: "Resolved", color: "text-green-400", bgColor: "bg-green-500/20" },
            { icon: FileText, value: "7.2 days", label: "Avg. Response", color: "accent-highlight", bgColor: "bg-accent-highlight/20" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              data-index={index + 2}
              className={`complaint-card text-center transition-all duration-500 ${
                visibleCards.includes(index + 2) ? 'animate-cascade' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 2) * 50}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${stat.bgColor} mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-content mb-2">{stat.value}</div>
              <div className="text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
