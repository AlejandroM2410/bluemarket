import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

interface MistakeCardProps {
  title: string;
  description: string;
  tip: string;
  index: number;
}

export const MistakeCard = ({ title, description, tip, index }: MistakeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-card transition-shadow"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-warning/10 shrink-0">
          <AlertTriangle className="h-5 w-5 text-warning" />
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          <div className="bg-success/10 rounded-lg px-3 py-2">
            <p className="text-sm text-success font-medium">✓ {tip}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
