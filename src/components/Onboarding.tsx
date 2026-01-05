import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, BookOpen, Shield, Target, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

interface OnboardingProps {
  onComplete: () => void;
}

export const Onboarding = ({ onComplete }: OnboardingProps) => {
  const { t } = useLanguage();
  const onboarding = t.onboarding;
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      icon: BookOpen,
      title: onboarding.steps.welcome.title,
      description: onboarding.steps.welcome.description,
      color: 'bg-primary',
    },
    {
      icon: Target,
      title: onboarding.steps.learn.title,
      description: onboarding.steps.learn.description,
      color: 'bg-secondary',
    },
    {
      icon: Sparkles,
      title: onboarding.steps.noExperience.title,
      description: onboarding.steps.noExperience.description,
      color: 'bg-success',
    },
    {
      icon: Shield,
      title: onboarding.steps.disclaimer.title,
      description: onboarding.steps.disclaimer.description,
      color: 'bg-warning',
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      localStorage.setItem('bluemarket-onboarding-complete', 'true');
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    localStorage.setItem('bluemarket-onboarding-complete', 'true');
    onComplete();
  };

  const CurrentIcon = steps[currentStep].icon;

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="bg-card border border-border rounded-3xl p-8 shadow-card">
          {/* Progress dots */}
          <div className="flex justify-center gap-2 mb-8">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentStep
                    ? 'w-8 bg-primary'
                    : index < currentStep
                    ? 'w-2 bg-primary/50'
                    : 'w-2 bg-muted'
                }`}
              />
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className={`inline-flex p-4 rounded-2xl ${steps[currentStep].color} mb-6`}>
                <CurrentIcon className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {steps[currentStep].title}
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                {steps[currentStep].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="opacity-70"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              {onboarding.prev}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleSkip}
              className="text-muted-foreground"
            >
              {onboarding.skip}
            </Button>

            <Button
              onClick={handleNext}
              size="sm"
            >
              {currentStep === steps.length - 1 ? onboarding.start : onboarding.next}
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary">
            <span className="text-sm font-bold text-primary-foreground">B</span>
          </div>
          <span className="text-lg font-bold text-foreground">BlueMarket</span>
        </div>
      </motion.div>
    </div>
  );
};
