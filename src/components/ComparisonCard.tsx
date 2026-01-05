import { motion } from 'framer-motion';
import { ArrowLeftRight } from 'lucide-react';

interface ComparisonCardProps {
  title: string;
  optionA: {
    name: string;
    risk: string;
    whenToUse: string;
  };
  optionB: {
    name: string;
    risk: string;
    whenToUse: string;
  };
  mainDifference: string;
  index: number;
}

export const ComparisonCard = ({
  title,
  optionA,
  optionB,
  mainDifference,
  index,
}: ComparisonCardProps) => {
  const getRiskColor = (risk: string) => {
    if (risk.toLowerCase().includes('low') || risk.toLowerCase().includes('bajo')) {
      return 'bg-success/10 text-success';
    }
    if (risk.toLowerCase().includes('high') || risk.toLowerCase().includes('alto')) {
      return 'bg-destructive/10 text-destructive';
    }
    return 'bg-warning/10 text-warning';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="bg-card border border-border rounded-xl p-6 shadow-card"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-accent">
          <ArrowLeftRight className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        {/* Option A */}
        <div className="bg-muted rounded-lg p-4">
          <h4 className="font-semibold text-foreground mb-2">{optionA.name}</h4>
          <div className={`inline-block px-2 py-1 rounded-md text-xs font-medium mb-2 ${getRiskColor(optionA.risk)}`}>
            {optionA.risk}
          </div>
          <p className="text-sm text-muted-foreground">{optionA.whenToUse}</p>
        </div>

        {/* Option B */}
        <div className="bg-muted rounded-lg p-4">
          <h4 className="font-semibold text-foreground mb-2">{optionB.name}</h4>
          <div className={`inline-block px-2 py-1 rounded-md text-xs font-medium mb-2 ${getRiskColor(optionB.risk)}`}>
            {optionB.risk}
          </div>
          <p className="text-sm text-muted-foreground">{optionB.whenToUse}</p>
        </div>
      </div>

      <div className="bg-accent/50 rounded-lg p-3">
        <p className="text-sm text-foreground">
          <span className="font-medium">💡 </span>
          {mainDifference}
        </p>
      </div>
    </motion.div>
  );
};
