export interface WizardStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  component: React.ComponentType<any>;
}

export interface ScholarshipMatch {
  name: string;
  description: string;
  eligibility: string;
  deadline: string;
  amount: string;
}

export interface ScholarshipResult {
  scholarships: ScholarshipMatch[];
  nextSteps: string;
}

export interface LearningCenterFilter {
  categories: string[];
  ageGroup: string;
  accessibility: boolean;
}

export interface MapPin {
  id: number;
  name: string;
  address: string;
  category: string;
  latitude: number;
  longitude: number;
  hours?: string;
  programs?: string[];
  accessibility: boolean;
  distance?: number;
}

export interface ChatMessage {
  id: number;
  message: string;
  isBot: boolean;
  timestamp: Date;
}

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  program?: string;
  motivation?: string;
  educationLevel?: string;
  incomeRange?: string;
  fieldOfInterest?: string;
}
