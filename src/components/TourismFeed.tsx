
import { Camera, MapPin, Calendar, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TourismFeedProps {
  userType: 'resident' | 'official' | 'visitor';
}

export const TourismFeed = ({ userType }: TourismFeedProps) => {
  const events = [
    {
      title: "Sinadya sa Halaran Festival",
      description: "Annual cultural celebration featuring traditional dances and local cuisine",
      date: "December 8-12, 2024",
      location: "City Plaza",
      attendees: "50k+",
      image: "🎭"
    },
    {
      title: "Heritage Walking Tour",
      description: "Guided tour through historic downtown Roxas with local experts",
      date: "Every Saturday",
      location: "Heritage District",
      attendees: "150",
      image: "🏛️"
    },
    {
      title: "Seafood Night Market",
      description: "Fresh catches and local delicacies by the waterfront",
      date: "Friday-Sunday",
      location: "Baybay Beach",
      attendees: "2k+",
      image: "🦐"
    }
  ];

  return (
    <section className="py-20 section-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Discover Roxas Culture
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our rich heritage, vibrant festivals, and warm hospitality. 
            From traditional celebrations to modern attractions, there's always something happening in Roxas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="card-dark hover-lift">
              <CardHeader>
                <div className="text-4xl mb-4 text-center">{event.image}</div>
                <CardTitle className="text-content">{event.title}</CardTitle>
                <CardDescription className="text-muted">
                  {event.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-gray-300 text-sm">
                  <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                  {event.date}
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 mr-2 text-green-400" />
                  {event.location}
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <Users className="w-4 h-4 mr-2 text-purple-400" />
                  {event.attendees} expected
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {userType === 'visitor' && (
          <div className="mt-16 text-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-xl font-semibold transition-colors">
              Plan Your Visit
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
