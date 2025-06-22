import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import WizardStep from "@/components/wizard-step";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  GraduationCap, 
  DollarSign, 
  Heart, 
  CheckCircle, 
  Award,
  Calendar,
  Users,
  BookOpen 
} from "lucide-react";
import { getScholarshipMatches } from "@/lib/openai";
import type { ScholarshipResult } from "@/lib/openai";

const wizardSchema = z.object({
  educationLevel: z.string().min(1, "Please select your education level"),
  incomeRange: z.string().min(1, "Please select your income range"),
  fieldOfInterest: z.string().min(1, "Please select your field of interest"),
  additionalInfo: z.string().optional(),
});

type WizardData = z.infer<typeof wizardSchema>;

export default function Wizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [scholarshipResults, setScholarshipResults] = useState<ScholarshipResult | null>(null);
  const { toast } = useToast();

  const form = useForm<WizardData>({
    resolver: zodResolver(wizardSchema),
    defaultValues: {
      educationLevel: "",
      incomeRange: "",
      fieldOfInterest: "",
      additionalInfo: "",
    },
  });

  const scholarshipMutation = useMutation({
    mutationFn: getScholarshipMatches,
    onSuccess: (data) => {
      setScholarshipResults(data);
      setCurrentStep(5);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to find scholarship matches. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 4) {
      const formData = form.getValues();
      scholarshipMutation.mutate(formData);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canGoNext = () => {
    const values = form.getValues();
    switch (currentStep) {
      case 1:
        return values.educationLevel !== "";
      case 2:
        return values.incomeRange !== "";
      case 3:
        return values.fieldOfInterest !== "";
      case 4:
        return true;
      default:
        return false;
    }
  };

  const educationLevels = [
    { value: "elementary", label: "Elementary", description: "Grades 1-6" },
    { value: "high-school", label: "High School", description: "Grades 7-12" },
    { value: "college", label: "College", description: "Undergraduate" },
    { value: "graduate", label: "Graduate", description: "Master's/PhD" },
  ];

  const incomeRanges = [
    { value: "below-50k", label: "Below ₱50,000" },
    { value: "50k-100k", label: "₱50,000 - ₱100,000" },
    { value: "100k-200k", label: "₱100,000 - ₱200,000" },
    { value: "above-200k", label: "Above ₱200,000" },
  ];

  const fieldsOfInterest = [
    "Science & Technology",
    "Arts & Humanities", 
    "Business",
    "Healthcare",
    "Education",
    "Engineering",
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <WizardStep
            step={1}
            totalSteps={4}
            title="Tell us about yourself"
            description="We'll use this information to find scholarships that match your profile"
            icon={<GraduationCap />}
            onNext={handleNext}
            onPrevious={handlePrevious}
            canGoNext={canGoNext()}
            canGoPrevious={false}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What is your current education level?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {educationLevels.map((level) => (
                  <button
                    key={level.value}
                    type="button"
                    onClick={() => form.setValue("educationLevel", level.value)}
                    className={`p-4 border-2 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-china-blue focus:ring-opacity-50 transition-all duration-200 ${
                      form.watch("educationLevel") === level.value
                        ? "border-china-blue bg-blue-50"
                        : "border-gray-200 hover:border-china-blue hover:bg-blue-50"
                    }`}
                  >
                    <div className={`font-medium ${
                      form.watch("educationLevel") === level.value ? "china-blue" : ""
                    }`}>
                      {level.label}
                    </div>
                    <div className={`text-sm ${
                      form.watch("educationLevel") === level.value ? "text-blue-600" : "text-gray-500"
                    }`}>
                      {level.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </WizardStep>
        );

      case 2:
        return (
          <WizardStep
            step={2}
            totalSteps={4}
            title="Financial Information"
            description="This helps us find scholarships based on financial need"
            icon={<DollarSign />}
            onNext={handleNext}
            onPrevious={handlePrevious}
            canGoNext={canGoNext()}
            canGoPrevious={true}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Family Income Range
              </label>
              <div className="space-y-2">
                {incomeRanges.map((range) => (
                  <button
                    key={range.value}
                    type="button"
                    onClick={() => form.setValue("incomeRange", range.value)}
                    className={`w-full p-3 border-2 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-china-blue focus:ring-opacity-50 transition-all duration-200 ${
                      form.watch("incomeRange") === range.value
                        ? "border-china-blue bg-blue-50 china-blue"
                        : "border-gray-200 hover:border-china-blue hover:bg-blue-50"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </WizardStep>
        );

      case 3:
        return (
          <WizardStep
            step={3}
            totalSteps={4}
            title="Field of Interest"
            description="Select your academic or career interests"
            icon={<Heart />}
            onNext={handleNext}
            onPrevious={handlePrevious}
            canGoNext={canGoNext()}
            canGoPrevious={true}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Field of Interest
              </label>
              <div className="flex flex-wrap gap-2">
                {fieldsOfInterest.map((field) => (
                  <button
                    key={field}
                    type="button"
                    onClick={() => form.setValue("fieldOfInterest", field)}
                    className={`px-4 py-2 rounded-full text-sm cursor-pointer transition-colors duration-200 ${
                      form.watch("fieldOfInterest") === field
                        ? "bg-china-blue text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {field}
                  </button>
                ))}
              </div>
            </div>
          </WizardStep>
        );

      case 4:
        return (
          <WizardStep
            step={4}
            totalSteps={4}
            title="Additional Information"
            description="Any additional details that might help us find better matches"
            icon={<BookOpen />}
            onNext={handleNext}
            onPrevious={handlePrevious}
            canGoNext={canGoNext()}
            canGoPrevious={true}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tell us more about your goals and circumstances (Optional)
              </label>
              <Textarea
                placeholder="Any additional information about your academic goals, achievements, or special circumstances..."
                value={form.watch("additionalInfo") || ""}
                onChange={(e) => form.setValue("additionalInfo", e.target.value)}
                className="h-32 resize-none focus-enhanced transition-enhanced"
              />
            </div>
          </WizardStep>
        );

      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden">
              <CardHeader className="gradient-hero text-white text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">Scholarship Matches Found!</CardTitle>
                <CardDescription className="text-blue-100">
                  Based on your profile, here are the best scholarship opportunities for you.
                </CardDescription>
              </CardHeader>

              <CardContent className="p-8">
                {scholarshipResults && (
                  <div className="space-y-6">
                    <div className="grid gap-6">
                      {scholarshipResults.scholarships.map((scholarship, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow card-hover"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-semibold text-gray-900">
                              {scholarship.name}
                            </h3>
                            <Badge variant="secondary" className="ml-2">
                              {scholarship.amount}
                            </Badge>
                          </div>
                          
                          <p className="text-gray-600 mb-4">{scholarship.description}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center text-gray-500">
                              <Users className="w-4 h-4 mr-2" />
                              <span>{scholarship.eligibility}</span>
                            </div>
                            <div className="flex items-center text-gray-500">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span>Deadline: {scholarship.deadline}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h4 className="flex items-center text-lg font-semibold text-blue-900 mb-2">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Next Steps
                      </h4>
                      <p className="text-blue-800">{scholarshipResults.nextSteps}</p>
                    </div>

                    <div className="flex justify-center space-x-4">
                      <Button
                        onClick={() => {
                          setCurrentStep(1);
                          setScholarshipResults(null);
                          form.reset();
                        }}
                        variant="outline"
                      >
                        Start Over
                      </Button>
                      <Button className="bg-china-blue hover:bg-blue-800">
                        Apply for Programs
                      </Button>
                    </div>
                  </div>
                )}
                
                {scholarshipMutation.isPending && (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-china-blue mx-auto mb-4"></div>
                    <p className="text-gray-600">Finding your perfect scholarship matches...</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Scholarship Eligibility Wizard</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let our AI-powered assistant guide you through finding the perfect scholarship opportunities 
            tailored to your needs and qualifications.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>
      </div>
    </section>
  );
}
