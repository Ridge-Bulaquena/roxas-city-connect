
import { Database, Download, Eye, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const OpenDataSpotlight = () => {
  const datasets = [
    {
      title: "City Budget 2024",
      description: "Complete breakdown of municipal expenditures and allocations",
      downloads: "2.1k",
      lastUpdated: "Updated yesterday",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "Infrastructure Projects",
      description: "Timeline and budget data for ongoing public works",
      downloads: "1.8k", 
      lastUpdated: "Updated 3 days ago",
      icon: Database,
      color: "text-blue-600"
    },
    {
      title: "Public Health Metrics",
      description: "Healthcare statistics and service delivery data",
      downloads: "945",
      lastUpdated: "Updated last week",
      icon: Eye,
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-20 section-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Open Data Portal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access real-time city data, download reports, and explore interactive visualizations 
            that promote transparency and informed decision-making.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {datasets.map((dataset, index) => {
            const Icon = dataset.icon;
            return (
              <Card key={index} className="hover-lift hover-glow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Icon className={`w-8 h-8 ${dataset.color}`} />
                    <div className="flex items-center text-sm text-gray-500">
                      <Download className="w-4 h-4 mr-1" />
                      {dataset.downloads}
                    </div>
                  </div>
                  <CardTitle className="text-gray-900">{dataset.title}</CardTitle>
                  <CardDescription>{dataset.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{dataset.lastUpdated}</span>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      View Data
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8">
            Explore All Datasets
          </Button>
        </div>
      </div>
    </section>
  );
};
