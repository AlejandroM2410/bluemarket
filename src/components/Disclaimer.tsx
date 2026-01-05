import { motion } from 'framer-motion';
import { AlertTriangle, Info } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface DisclaimerProps {
  variant?: 'banner' | 'card' | 'inline';
}

export const Disclaimer = ({ variant = 'card' }: DisclaimerProps) => {
  const { t } = useLanguage();
  const disclaimer = t.disclaimer;

  if (variant === 'banner') {
    return (
      <div className="bg-warning/10 border-y border-warning/20 py-3">
        <div className="container">
          <p className="text-sm text-center text-warning-foreground flex items-center justify-center gap-2">
            <Info className="h-4 w-4 flex-shrink-0" />
            <span>{disclaimer.short}</span>
          </p>
        </div>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <p className="text-xs text-muted-foreground flex items-start gap-2">
        <Info className="h-3 w-3 flex-shrink-0 mt-0.5" />
        <span>{disclaimer.short}</span>
      </p>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card border border-border rounded-2xl p-6 shadow-card"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-warning/10">
          <AlertTriangle className="h-6 w-6 text-warning" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-2">{disclaimer.title}</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {disclaimer.points.map((point: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
