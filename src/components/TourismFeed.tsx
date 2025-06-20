
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Calendar, 
  MapPin, 
  Star,
  Users,
  Clock,
  ArrowRight,
  Heart
} from "lucide-react";

interface TourismFeedProps {
  userType: 'resident' | 'official' | 'visitor';
}

export const TourismFeed = ({ userType }: TourismFeedProps) => {
  const [activeTab, setActiveTab] = useState('events');
  const [favoriteEvents, setFavoriteEvents] = useState<string[]>([]);

  const events = [
    {
      id: "1",
      title: "Halawan Festival 2024",
      date: "March 15-17, 2024",
      location: "Roxas City Plaza", 
      image: "/placeholder.svg",
      category: "Festival",
      attendees: "15K+",
      description: "Celebrate our city's famous halawan delicacy with cultural shows, food stalls, and live music.",
      featured: true
    },
    {
      id: "2", 
      title: "Heritage Walking Tour",
      date: "Every Saturday",
      location: "Heritage District",
      image: "/placeholder.svg", 
      category: "Culture",
      attendees: "25-30",
      description: "Guided tours through Roxas City's historical landmarks and colonial architecture.",
      featured: false
    },
    {
      id: "3",
      title: "Seafood Festival Weekend",
      date: "February 10-11, 2024",
      location: "Banica Bay",
      image: "/placeholder.svg",
      category: "Food",
      attendees: "8K+", 
      description: "Fresh seafood, cooking competitions, and waterfront dining experiences.",
      featured: true
    }
  ];

  const attractions = [
    {
      title: "Roxas City Museum",
      rating: 4.8,
      reviews: 234,
      category: "Museum",
      description: "Learn about local history, culture, and heritage",
      image: "/placeholder.svg"
    },
    {
      title: "Banica Bay Sunset",
      rating: 4.9,
      reviews: 187,
      category: "Nature",
      description: "Stunning waterfront views and golden hour photography",
      image: "/placeholder.svg"
    },
    {
      title: "Cathedral of St. Anthony",
      rating: 4.7,
      reviews: 156,
      category: "Religious",
      description: "Historic cathedral with beautiful architecture",
      image: "/placeholder.svg"
    }
  ];

  const toggleFavorite = (eventId: string) => {
    setFavoriteEvents(prev => 
      prev.includes(eventId) 
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
  };

  const getTabContent = () => {
    switch (activeTab) {
      case 'events':
        return (
          <div className="space-y-6">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-1/3 relative">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {event.featured && (
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                        Featured
                      </Badge>
                    )}
                    <button
                      onClick={() => toggleFavorite(event.id)}
                      className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        favoriteEvents.includes(event.id) 
                          ? 'bg-red-500 text-white' 
                          : 'bg-white text-gray-600 hover:text-red-500'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${favoriteEvents.includes(event.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs">
                        {event.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-1" />
                        {event.attendees} attending
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {event.title}
                    </h3>

                    <div className="flex items-center text-gray-600 mb-3 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'attractions':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={attraction.image} 
                    alt={attraction.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-white text-gray-800">
                    {attraction.category}
                  </Badge>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {attraction.title}
                    </h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium">{attraction.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-3">
                    {attraction.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {attraction.reviews} reviews
                    </span>
                    <Button size="sm" variant="outline">
                      <MapPin className="w-4 h-4 mr-1" />
                      Directions
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tourism & Culture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {userType === 'visitor' 
              ? "Discover the heart of Roxas City - from vibrant festivals to historic landmarks, rich culture awaits."
              : "Explore your city's cultural treasures and upcoming events that make Roxas special."
            }
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('events')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'events' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              <Calendar className="w-4 h-4 inline mr-2" />
              Events & Festivals
            </button>
            <button
              onClick={() => setActiveTab('attractions')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'attractions' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              <Camera className="w-4 h-4 inline mr-2" />
              Attractions
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="mb-12">
          {getTabContent()}
        </div>

        {/* Economic Impact Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Tourism Economic Impact</h3>
            <p className="text-gray-600">How tourism drives our local economy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-white">₱</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">₱2.1B</div>
              <div className="text-gray-600 text-sm">Annual Tourism Revenue</div>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">8,540</div>
              <div className="text-gray-600 text-sm">Jobs Created</div>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">456K</div>
              <div className="text-gray-600 text-sm">Annual Visitors</div>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">4.6</div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
