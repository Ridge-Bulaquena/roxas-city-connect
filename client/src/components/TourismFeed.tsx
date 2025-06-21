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
    <section className="py-24 bg-gradient-to-b from-[#181f2e] via-[#20283d] to-[#232b3e] text-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-widest uppercase text-gray-300 mb-12 text-center opacity-70">
          Discover Roxas Culture
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-16 text-center font-light tracking-wide">
          Experience our rich heritage, vibrant festivals, and warm hospitality. From traditional celebrations to modern attractions, there's always something happening in Roxas.
        </p>
        <div className="flex justify-center">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 p-16 max-w-md mx-auto flex flex-col items-center">
            <span className="text-5xl mb-6">🎭</span>
            <h3 className="text-xl font-semibold text-gray-100 mb-2 tracking-widest uppercase text-center">Discover Roxas Culture</h3>
          </div>
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
