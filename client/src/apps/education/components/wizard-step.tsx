import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface WizardStepProps {
  step: number;
  totalSteps: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
}

export default function WizardStep({
  step,
  totalSteps,
  title,
  description,
  icon,
  children,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious,
}: WizardStepProps) {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span>Step {step} of {totalSteps}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Wizard Card */}
      <motion.div
        className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-periwinkle rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="china-blue text-2xl">{icon}</div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>

          <div className="space-y-6">
            {children}
          </div>

          <div className="flex justify-between mt-8">
            <Button
              onClick={onPrevious}
              disabled={!canGoPrevious}
              variant="ghost"
              className="px-6 py-3"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            <Button
              onClick={onNext}
              disabled={!canGoNext}
              className="px-8 py-3 bg-china-blue hover:bg-blue-800 transition-colors duration-200 font-medium"
            >
              Next Step
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
