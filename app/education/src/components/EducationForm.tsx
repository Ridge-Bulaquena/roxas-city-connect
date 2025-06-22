import React, { useState } from 'react';

const steps = [
  { label: 'Personal Info', content: 'Enter your name and contact.' },
  { label: 'Program Selection', content: 'Choose your learning program.' },
  { label: 'Review & Submit', content: 'Review your info and submit.' },
];

export function EducationForm() {
  const [step, setStep] = useState(0);
  return (
    <div className="bg-white rounded-xl shadow p-6 border border-[#CCCCFF]">
      <div className="mb-4 text-lg font-semibold text-[#3299CC]">Step {step + 1}: {steps[step].label}</div>
      <div className="mb-6 min-h-[60px]">{steps[step].content}</div>
      <div className="flex gap-2">
        <button
          className="px-4 py-2 rounded bg-gray-200"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
        >Back</button>
        <button
          className="px-4 py-2 rounded bg-[#3299CC] text-white"
          onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
          disabled={step === steps.length - 1}
        >Next</button>
      </div>
    </div>
  );
} 