import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Clinic } from "@/types/health";

interface ClinicCardProps {
  clinic: Clinic;
  onSelect?: (clinic: Clinic) => void;
  onGetDirections?: (clinic: Clinic) => void;
}

export function ClinicCard({ clinic, onSelect, onGetDirections }: ClinicCardProps) {
  const handleSelect = () => {
    onSelect?.(clinic);
  };

  const handleDirections = (e: React.MouseEvent) => {
    e.stopPropagation();
    onGetDirections?.(clinic);
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer"
      onClick={handleSelect}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="text-lg font-semibold text-gray-900">{clinic.name}</h4>
          <p className="text-sm text-gray-600">{clinic.address}</p>
        </div>
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
          clinic.isOpen 
            ? "bg-green-100 text-green-800" 
            : "bg-red-100 text-red-800"
        }`}>
          {clinic.isOpen ? "Open" : "Closed"}
        </span>
      </div>

      <div className="flex items-center text-sm text-gray-600 mb-3">
        <Clock className="w-4 h-4 mr-2" />
        <span>{clinic.hours}</span>
      </div>

      <div className="flex items-center text-sm text-gray-600 mb-3">
        <Phone className="w-4 h-4 mr-2" />
        <span>{clinic.phone}</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{clinic.distance ? `${clinic.distance.toFixed(1)} km away` : "Distance calculating..."}</span>
        </div>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={handleDirections}
          className="text-blue-700 hover:text-blue-800 hover:bg-blue-50 font-small"
        >
          Get Directions
        </Button>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-100">
        <div className="flex flex-wrap gap-1">
          {clinic.services.slice(0, 3).map((service, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {service}
            </span>
          ))}
          {clinic.services.length > 3 && (
            <span className="text-xs text-gray-500">+{clinic.services.length - 3} more</span>
          )}
        </div>
      </div>
    </div>
  );
}
