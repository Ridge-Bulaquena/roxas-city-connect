export interface Clinic {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  latitude: string;
  longitude: string;
  services: string[];
  isOpen: boolean;
  distance?: number;
}

export interface Appointment {
  id: number;
  clinicId: number;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  appointmentDate: Date;
  vaccineType: string;
  status: string;
}

export interface ChatMessage {
  id: string;
  message: string;
  response: string;
  timestamp: Date;
  isFromUser: boolean;
}

export interface Vitals {
  heartRate: {
    value: number;
    unit: string;
    status: string;
    timestamp: string;
  };
  bloodPressure: {
    systolic: number;
    diastolic: number;
    unit: string;
    status: string;
    timestamp: string;
  };
  steps: {
    value: number;
    goal: number;
    percentage: number;
    timestamp: string;
  };
  calories: {
    burned: number;
    goal: number;
    percentage: number;
    timestamp: string;
  };
  sleep: {
    hours: number;
    goal: number;
    quality: string;
    timestamp: string;
  };
  water: {
    intake: number;
    goal: number;
    percentage: number;
    timestamp: string;
  };
  weight: {
    value: number;
    unit: string;
    bmi: number;
    status: string;
    timestamp: string;
  };
  exercise: {
    duration: number;
    type: string;
    intensity: string;
    timestamp: string;
  };
}

export interface HealthInsight {
  id: string;
  type: 'success' | 'info' | 'warning';
  title: string;
  description: string;
}
