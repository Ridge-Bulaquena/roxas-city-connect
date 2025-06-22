import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { MapPin, Clock, Users, Accessibility, ZoomIn, ZoomOut, Crosshair } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { LearningCenter } from "@shared/schema";
import type { LearningCenterFilter } from "@/types";

export default function MapViewer() {
  const [filters, setFilters] = useState<LearningCenterFilter>({
    categories: ["library", "school"],
    ageGroup: "all",
    accessibility: false,
  });

  const { data: centers, isLoading } = useQuery<LearningCenter[]>({
    queryKey: ["/api/learning-centers"],
  });

  const filteredCenters = centers?.filter(center => {
    if (filters.categories.length > 0 && !filters.categories.includes(center.category)) {
      return false;
    }
    if (filters.ageGroup !== "all" && center.ageGroups && !center.ageGroups.includes(filters.ageGroup)) {
      return false;
    }
    if (filters.accessibility && !center.accessibility) {
      return false;
    }
    return true;
  }) || [];

  const handleCategoryChange = (category: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      categories: checked 
        ? [...prev.categories, category]
        : prev.categories.filter(c => c !== category)
    }));
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      library: "bg-blue-500",
      school: "bg-green-500",
      training: "bg-orange-500",
      community: "bg-purple-500",
    };
    return colors[category as keyof typeof colors] || "bg-gray-500";
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      library: "📚",
      school: "🏫",
      training: "💻",
      community: "👥",
    };
    return icons[category as keyof typeof icons] || "📍";
  };

  if (isLoading) {
    return (
      <div className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="h-96 bg-gray-300 rounded-xl"></div>
              <div className="lg:col-span-3 h-96 bg-gray-300 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Learning Centers Map</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover educational resources, libraries, and learning centers throughout Roxas City. 
            Find the perfect place to continue your educational journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Map Filters */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Filter Locations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <div className="space-y-2">
                    {[
                      { id: "library", label: "Libraries" },
                      { id: "school", label: "Schools" },
                      { id: "training", label: "Training Centers" },
                      { id: "community", label: "Community Centers" },
                    ].map((category) => (
                      <div key={category.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={category.id}
                          checked={filters.categories.includes(category.id)}
                          onCheckedChange={(checked) => 
                            handleCategoryChange(category.id, checked as boolean)
                          }
                        />
                        <label htmlFor={category.id} className="text-sm">
                          {category.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Age Group</label>
                  <Select value={filters.ageGroup} onValueChange={(value) => 
                    setFilters(prev => ({ ...prev, ageGroup: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Ages</SelectItem>
                      <SelectItem value="children">Children (6-12)</SelectItem>
                      <SelectItem value="teens">Teens (13-17)</SelectItem>
                      <SelectItem value="adults">Adults (18+)</SelectItem>
                      <SelectItem value="seniors">Seniors (60+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Accessibility</label>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="accessibility"
                      checked={filters.accessibility}
                      onCheckedChange={(checked) => 
                        setFilters(prev => ({ ...prev, accessibility: checked as boolean }))
                      }
                    />
                    <label htmlFor="accessibility" className="text-sm">
                      Wheelchair Accessible
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Display */}
          <div className="lg:col-span-3">
            <Card className="overflow-hidden">
              {/* Map Header */}
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h4 className="text-lg font-medium text-gray-900">Interactive Map</h4>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ZoomOut className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Crosshair className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Map Container */}
              <div 
                className="relative h-96 bg-gradient-to-br from-green-100 to-blue-100"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Map Pins */}
                {filteredCenters.map((center, index) => (
                  <motion.div
                    key={center.id}
                    className="absolute cursor-pointer group"
                    style={{
                      top: `${20 + (index * 15) % 60}%`,
                      left: `${20 + (index * 20) % 60}%`,
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className={`w-8 h-8 ${getCategoryColor(center.category)} rounded-full flex items-center justify-center shadow-lg map-pin`}>
                      <span className="text-white text-sm">{getCategoryIcon(center.category)}</span>
                    </div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-current"></div>
                    
                    {/* Tooltip */}
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-3 min-w-max opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                      <div className="text-sm font-medium text-gray-900">{center.name}</div>
                      <div className="text-xs text-gray-500">{center.hours || "Contact for hours"}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Location List */}
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <h5 className="text-sm font-medium text-gray-700 mb-3">
                  Nearby Learning Centers ({filteredCenters.length} found)
                </h5>
                <div className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
                  {filteredCenters.map((center) => (
                    <motion.div
                      key={center.id}
                      className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow duration-200 card-hover"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 ${getCategoryColor(center.category)} rounded-full flex items-center justify-center`}>
                          <span className="text-white text-sm">{getCategoryIcon(center.category)}</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">{center.name}</div>
                          <div className="text-xs text-gray-500">{center.address}</div>
                          <div className="flex items-center space-x-2 mt-1">
                            {center.hours && (
                              <div className="flex items-center text-xs text-gray-500">
                                <Clock className="w-3 h-3 mr-1" />
                                {center.hours}
                              </div>
                            )}
                            {center.accessibility && (
                              <Badge variant="secondary" className="text-xs">
                                <Accessibility className="w-3 h-3 mr-1" />
                                Accessible
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">
                        {(Math.random() * 2).toFixed(1)} km
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
