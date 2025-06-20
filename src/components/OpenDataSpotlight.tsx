
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  Download, 
  Eye, 
  Calendar,
  BarChart3,
  FileText,
  TrendingUp,
  ArrowRight
} from "lucide-react";

export const OpenDataSpotlight = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll('.data-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const datasets = [
    {
      title: "City Budget & Expenditures",
      description: "Complete financial records, budget allocations, and spending transparency",
      format: "CSV, JSON, PDF",
      size: "15.2 MB",
      lastUpdated: "2024-01-20",
      downloads: "2,847",
      category: "Finance",
      icon: BarChart3,
      color: "blue",
      confidence: 98
    },
    {
      title: "Infrastructure Projects",
      description: "Timeline, status, and budget information for all public works projects",
      format: "JSON, GeoJSON",
      size: "8.7 MB", 
      lastUpdated: "2024-01-18",
      downloads: "1,523",
      category: "Infrastructure",
      icon: TrendingUp,
      color: "green",
      confidence: 95
    },
    {
      title: "Public Health Data",
      description: "Health facility locations, capacity, and public health program metrics",
      format: "CSV, XML",
      size: "4.3 MB",
      lastUpdated: "2024-01-19",
      downloads: "934",
      category: "Health",
      icon: FileText,
      color: "red",
      confidence: 92
    },
    {
      title: "Education Statistics",
      description: "School enrollment, infrastructure, teacher ratios, and educational outcomes",
      format: "CSV, PDF",
      size: "6.1 MB",
      lastUpdated: "2024-01-17",
      downloads: "1,256",
      category: "Education", 
      icon: Database,
      color: "purple",
      confidence: 96
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-50 text-blue-600 border-blue-200",
      green: "from-green-500 to-green-600 bg-green-50 text-green-600 border-green-200",
      red: "from-red-500 to-red-600 bg-red-50 text-red-600 border-red-200",
      purple: "from-purple-500 to-purple-600 bg-purple-50 text-purple-600 border-purple-200"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Open Data Portal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparency through data. Access real government datasets, explore analytics, 
            and use public information for research, journalism, and civic engagement.
          </p>
        </div>

        {/* Featured Datasets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {datasets.map((dataset, index) => {
            const Icon = dataset.icon;
            const colorClasses = getColorClasses(dataset.color);
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={dataset.title}
                data-index={index}
                className={`data-card bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-500 group cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <Badge className={`${colorClasses.split(' ')[2]} ${colorClasses.split(' ')[3]} ${colorClasses.split(' ')[4]} mb-2`}>
                        {dataset.category}
                      </Badge>
                      <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {dataset.title}
                      </h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Data Confidence</div>
                    <div className={`text-sm font-bold ${dataset.confidence > 95 ? 'text-green-600' : 'text-yellow-600'}`}>
                      {dataset.confidence}%
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {dataset.description}
                </p>

                {/* Metadata */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <div className="text-gray-500">Format</div>
                    <div className="font-medium text-gray-900">{dataset.format}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Size</div>
                    <div className="font-medium text-gray-900">{dataset.size}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      Updated
                    </div>
                    <div className="font-medium text-gray-900">{dataset.lastUpdated}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 flex items-center">
                      <Download className="w-3 h-3 mr-1" />
                      Downloads
                    </div>
                    <div className="font-medium text-gray-900">{dataset.downloads}</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                </div>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl`} />
              </div>
            );
          })}
        </div>

        {/* Data Portal Stats */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Open Data by the Numbers</h3>
            <p className="text-gray-300">Transparency and accessibility metrics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Database className="w-8 h-8 mx-auto mb-3 text-blue-400" />
              <div className="text-3xl font-bold">47</div>
              <div className="text-gray-300">Datasets Available</div>
            </div>
            <div className="text-center">
              <Download className="w-8 h-8 mx-auto mb-3 text-green-400" />
              <div className="text-3xl font-bold">12.3K</div>
              <div className="text-gray-300">Total Downloads</div>
            </div>
            <div className="text-center">
              <Calendar className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
              <div className="text-3xl font-bold">Weekly</div>
              <div className="text-gray-300">Update Frequency</div>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-3 text-purple-400" />
              <div className="text-3xl font-bold">96%</div>
              <div className="text-gray-300">Data Quality Score</div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button className="bg-white text-gray-900 hover:bg-gray-100">
              Explore Full Data Portal
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
