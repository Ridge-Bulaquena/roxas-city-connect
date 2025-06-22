import { useState } from "react";
import { Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SchedulePicker } from "@/components/health/schedule-picker";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface BookingForm {
  vaccineType: string;
  clinicId: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
}

export default function VaccinationScheduler() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [formData, setFormData] = useState<BookingForm>({
    vaccineType: "",
    clinicId: "",
    patientName: "",
    patientPhone: "",
    patientEmail: "",
  });
  const [isBooked, setIsBooked] = useState(false);
  
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const bookingMutation = useMutation({
    mutationFn: async (appointmentData: any) => {
      return apiRequest('POST', '/api/appointments', appointmentData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/appointments'] });
      setIsBooked(true);
      toast({
        title: "Appointment Booked Successfully!",
        description: "You will receive a confirmation email shortly.",
      });
    },
    onError: () => {
      toast({
        title: "Booking Failed",
        description: "Please try again or contact our health center.",
        variant: "destructive",
      });
    },
  });

  const handleDateTimeSelect = (date: Date, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
  };

  const handleInputChange = (field: keyof BookingForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Please select a date and time",
        variant: "destructive",
      });
      return;
    }

    const appointmentDateTime = new Date(selectedDate);
    const [time, period] = selectedTime.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    
    let finalHours = hours;
    if (period === 'PM' && hours !== 12) finalHours += 12;
    if (period === 'AM' && hours === 12) finalHours = 0;
    
    appointmentDateTime.setHours(finalHours, minutes || 0, 0, 0);

    const appointmentData = {
      ...formData,
      clinicId: parseInt(formData.clinicId || "1"),
      appointmentDate: appointmentDateTime.toISOString(),
    };

    bookingMutation.mutate(appointmentData);
  };

  if (isBooked) {
    return (
      <div className="py-16 bg-white min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Appointment Confirmed!</h2>
          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Appointment Details</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p><span className="font-medium">Date:</span> {selectedDate?.toLocaleDateString()}</p>
              <p><span className="font-medium">Time:</span> {selectedTime}</p>
              <p><span className="font-medium">Vaccine:</span> {formData.vaccineType}</p>
              <p><span className="font-medium">Patient:</span> {formData.patientName}</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              You will receive a confirmation email with all the details and preparation instructions.
            </p>
            <Button 
              onClick={() => {
                setIsBooked(false);
                setSelectedDate(undefined);
                setSelectedTime(undefined);
                setFormData({
                  vaccineType: "",
                  clinicId: "",
                  patientName: "",
                  patientPhone: "",
                  patientEmail: "",
                });
              }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg"
            >
              Book Another Appointment
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Vaccination Scheduler</h2>
          <p className="text-xl text-blue-700">Book your vaccination appointment quickly and securely. Choose your preferred date, time, and location.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Calendar Section */}
          <div>
            <SchedulePicker
              onDateTimeSelect={handleDateTimeSelect}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
            />
          </div>
          
          {/* Booking Form Section */}
          <Card>
            <CardHeader>
              <CardTitle>Booking Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="vaccine-type">Vaccine Type</Label>
                  <Select onValueChange={(value) => handleInputChange('vaccineType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select vaccine type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="covid-booster">COVID-19 Booster</SelectItem>
                      <SelectItem value="influenza">Influenza</SelectItem>
                      <SelectItem value="hepatitis-b">Hepatitis B</SelectItem>
                      <SelectItem value="pneumonia">Pneumonia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="clinic">Preferred Location</Label>
                  <Select onValueChange={(value) => handleInputChange('clinicId', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select clinic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Roxas City Health Center</SelectItem>
                      <SelectItem value="2">Balamban Health Station</SelectItem>
                      <SelectItem value="3">Lawaan Health Station</SelectItem>
                      <SelectItem value="4">Milibili Health Station</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first-name">First Name</Label>
                    <Input
                      id="first-name"
                      type="text"
                      placeholder="Juan"
                      value={formData.patientName.split(' ')[0] || ''}
                      onChange={(e) => {
                        const lastName = formData.patientName.split(' ')[1] || '';
                        handleInputChange('patientName', `${e.target.value} ${lastName}`.trim());
                      }}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input
                      id="last-name"
                      type="text"
                      placeholder="Dela Cruz"
                      value={formData.patientName.split(' ')[1] || ''}
                      onChange={(e) => {
                        const firstName = formData.patientName.split(' ')[0] || '';
                        handleInputChange('patientName', `${firstName} ${e.target.value}`.trim());
                      }}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="phone">Contact Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+63 912 345 6789"
                    value={formData.patientPhone}
                    onChange={(e) => handleInputChange('patientPhone', e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="juan.delacruz@email.com"
                    value={formData.patientEmail}
                    onChange={(e) => handleInputChange('patientEmail', e.target.value)}
                    required
                  />
                </div>
                
                {/* Booking Summary */}
                {selectedDate && selectedTime && (
                  <div className="bg-light-gray rounded-lg p-4 space-y-2">
                    <h4 className="text-sm font-medium text-gray-900">Appointment Summary</h4>
                    <div className="text-sm text-gray-600">
                      <p><span className="font-medium">Date:</span> {selectedDate.toLocaleDateString()}</p>
                      <p><span className="font-medium">Time:</span> {selectedTime}</p>
                      <p><span className="font-medium">Vaccine:</span> {formData.vaccineType || "Not selected"}</p>
                      <p><span className="font-medium">Location:</span> {formData.clinicId ? "Selected" : "Not selected"}</p>
                    </div>
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 h-12 shadow-lg"
                  disabled={bookingMutation.isPending || !selectedDate || !selectedTime}
                >
                  {bookingMutation.isPending ? "Booking..." : "Confirm Appointment"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
