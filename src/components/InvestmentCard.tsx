import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

interface InvestmentCardProps {
  title: string;
  what: string;
  risk: 'low' | 'medium' | 'high';
  forWhom: string;
  example: string;
  icon: React.ReactNode;
  index: number;
}

export const InvestmentCard = ({
  title,
  what,
  risk,
  forWhom,
  example,
  icon,
  index,
}: InvestmentCardProps) => {
  const { t } = useLanguage();

  const riskColors = {
    low: 'bg-success/10 text-success border-success/20',
    medium: 'bg-warning/10 text-warning border-warning/20',
    high: 'bg-destructive/10 text-destructive border-destructive/20',
  };

  const riskLabels = {
    low: t.investments.risk.low,
    medium: t.investments.risk.medium,
    high: t.investments.risk.high,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="rounded-2xl border border-border bg-card p-6 shadow-card"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-foreground">{title}</h3>
          <span
            className={cn(
              'inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full border',
              riskColors[risk]
            )}
          >
            {t.investments.riskLevel}: {riskLabels[risk]}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-foreground mb-1">
            {t.investments.whatIs}
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{what}</p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-foreground mb-1">
            {t.investments.forWhom}
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{forWhom}</p>
        </div>

        <div className="rounded-xl bg-muted p-4">
          <h4 className="text-sm font-medium text-foreground mb-1">
            {t.investments.example}
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{example}</p>
        </div>
      </div>
    </motion.div>
  );
};
