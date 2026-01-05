import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

interface KeyTakeawayProps {
  title: string;
  points: string[];
  index?: number;
}

export const KeyTakeaway = ({ title, points, index = 0 }: KeyTakeawayProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="bg-accent border border-primary/20 rounded-xl p-5"
    >
      <div className="flex items-center gap-2 mb-3">
        <Lightbulb className="h-5 w-5 text-primary" />
        <h4 className="font-semibold text-foreground">{title}</h4>
      </div>
      <ul className="space-y-2">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-primary font-bold">→</span>
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
