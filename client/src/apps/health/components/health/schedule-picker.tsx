import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SchedulePickerProps {
  onDateTimeSelect: (date: Date, time: string) => void;
  selectedDate?: Date;
  selectedTime?: string;
}

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", 
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
];

export function SchedulePicker({ onDateTimeSelect, selectedDate, selectedTime }: SchedulePickerProps) {
  const [date, setDate] = useState<Date | undefined>(selectedDate);

  const handleDateSelect = (newDate: Date | undefined) => {
    setDate(newDate);
    if (newDate && selectedTime) {
      onDateTimeSelect(newDate, selectedTime);
    }
  };

  const handleTimeSelect = (time: string) => {
    if (date) {
      onDateTimeSelect(date, time);
    }
  };

  const isDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Disable past dates and Sundays
    return date < today || date.getDay() === 0;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Select Date & Time</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            disabled={isDisabled}
            className="rounded-md border"
          />
        </div>

        {date && (
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">
              Available Time Slots ({date.toLocaleDateString()})
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleTimeSelect(time)}
                  className={selectedTime === time ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800" : "border-blue-200 text-blue-700 hover:bg-blue-50"}
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
        )}

        {date && selectedTime && (
          <div className="p-4 bg-light-gray rounded-lg">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Selected Appointment</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <p><span className="font-medium">Date:</span> {date.toLocaleDateString()}</p>
              <p><span className="font-medium">Time:</span> {selectedTime}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
