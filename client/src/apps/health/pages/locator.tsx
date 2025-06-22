import { useState, useEffect } from "react";
import { Search, MapPin, Phone, Clock, Plus, Minus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useQuery } from "@tanstack/react-query";
import { Clinic } from "@/types/health";

export default function ClinicLocator() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [openNowOnly, setOpenNowOnly] = useState(true);
  const [selectedClinic, setSelectedClinic] = useState<Clinic | null>(null);

  const { data: clinics = [], isLoading } = useQuery<Clinic[]>({
    queryKey: ['/api/clinics', searchQuery, selectedServices.join(',')],
  });

  const handleSearch = () => {
    // The query will automatically refetch due to the dependency on searchQuery
  };

  const handleClinicSelect = (clinic: Clinic) => {
    setSelectedClinic(clinic);
  };

  const handleGetDirections = (clinic: Clinic) => {
    const address = encodeURIComponent(clinic.address);
    window.open(`https://maps.google.com/maps?q=${address}`, '_blank');
  };

  const filteredClinics = clinics.filter(clinic => {
    if (openNowOnly && !clinic.isOpen) return false;
    return true;
  });

  return (
    <div className="py-20 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Find Health Centers</h2>
          <p className="text-xl text-blue-700">Locate the nearest health facilities and check their availability in real-time.</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Search and Filter Panel */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Search & Filter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Enter your barangay..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Services" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Services</SelectItem>
                      <SelectItem value="general">General Medicine</SelectItem>
                      <SelectItem value="vaccination">Vaccination</SelectItem>
                      <SelectItem value="emergency">Emergency Care</SelectItem>
                      <SelectItem value="maternal">Maternal Health</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="open-now" 
                        checked={openNowOnly}
                        onCheckedChange={(checked) => setOpenNowOnly(checked as boolean)}
                      />
                      <label htmlFor="open-now" className="text-sm text-gray-600">Open Now</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="24-7" />
                      <label htmlFor="24-7" className="text-sm text-gray-600">24/7 Available</label>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={handleSearch} 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Searching..." : "Search Clinics"}
                </Button>
              </CardContent>
            </Card>
            
            {/* Clinic Results List */}
            <div className="space-y-4">
              {filteredClinics.map((clinic) => (
                <div key={clinic.id} className="p-4 bg-white border rounded shadow">
                  <div className="font-bold text-blue-900">{clinic.name}</div>
                  <div className="text-sm text-gray-600">{clinic.address}</div>
                  <div className="text-xs text-gray-500">{clinic.phone}</div>
                  <button className="mt-2 text-blue-600 underline" onClick={() => handleGetDirections(clinic)}>
                    Get Directions
                  </button>
                </div>
              ))}
              
              {filteredClinics.length === 0 && !isLoading && (
                <div className="text-center py-8 text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>No clinics found matching your criteria.</p>
                  <p className="text-sm mt-2">Try adjusting your search filters.</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Map Panel */}
          <div className="lg:col-span-2">
            <Card className="h-[600px]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Map View</CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="border-blue-300 text-blue-600 hover:bg-blue-50">Satellite</Button>
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">Street</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="h-full p-0">
                <div className="relative h-full bg-gray-100 rounded-lg overflow-hidden">
                  {/* Interactive map placeholder */}
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                    alt="Interactive map showing health center locations" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Map markers */}
                  <div 
                    className="absolute top-1/4 left-1/3 w-8 h-8 bg-china-blue rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200"
                    onClick={() => setSelectedClinic(filteredClinics[0])}
                  >
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  
                  <div 
                    className="absolute top-1/2 right-1/3 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200"
                    onClick={() => setSelectedClinic(filteredClinics[1])}
                  >
                    <Plus className="w-4 h-4 text-white" />
                  </div>
                  
                  {/* Map controls */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2">
                    <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                      <Plus className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                      <Minus className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Current location indicator */}
                  <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                      <div className="w-4 h-4 bg-blue-600 border-2 border-white rounded-full shadow-lg"></div>
                      <div className="absolute inset-0 w-4 h-4 bg-blue-600 rounded-full pulse-ring opacity-30"></div>
                    </div>
                  </div>

                  {/* Clinic Info Popup */}
                  {selectedClinic && (
                    <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-sm">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">{selectedClinic.name}</h4>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => setSelectedClinic(null)}
                          className="h-6 w-6 p-0"
                        >
                          ×
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{selectedClinic.address}</p>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <Phone className="w-3 h-3 mr-1" />
                        <span>{selectedClinic.phone}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{selectedClinic.hours}</span>
                      </div>
                      <Button 
                        size="sm" 
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                        onClick={() => handleGetDirections(selectedClinic)}
                      >
                        Get Directions
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
