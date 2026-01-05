import { motion } from 'framer-motion';
import { TrendingUp, AlertTriangle, Scale } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const RiskReturnCard = () => {
  const { t } = useLanguage();
  const riskReturn = t.tools.riskReturn;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-accent">
          <Scale className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">{riskReturn.title}</h2>
          <p className="text-sm text-muted-foreground">{riskReturn.subtitle}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Risk */}
        <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <h3 className="font-semibold text-foreground">{riskReturn.riskTitle}</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">{riskReturn.riskDesc}</p>
          <div className="bg-card rounded-lg p-3">
            <p className="text-xs text-muted-foreground italic">💡 {riskReturn.riskAnalogy}</p>
          </div>
        </div>

        {/* Return */}
        <div className="bg-success/5 border border-success/20 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="h-5 w-5 text-success" />
            <h3 className="font-semibold text-foreground">{riskReturn.returnTitle}</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">{riskReturn.returnDesc}</p>
          <div className="bg-card rounded-lg p-3">
            <p className="text-xs text-muted-foreground italic">💡 {riskReturn.returnAnalogy}</p>
          </div>
        </div>
      </div>

      {/* The Relationship */}
      <div className="bg-gradient-to-r from-destructive/10 via-warning/10 to-success/10 rounded-xl p-5">
        <h3 className="font-semibold text-foreground mb-3">{riskReturn.relationshipTitle}</h3>
        <p className="text-sm text-muted-foreground mb-4">{riskReturn.relationshipDesc}</p>
        
        {/* Visual scale */}
        <div className="relative h-12 bg-card rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex">
            <div className="flex-1 bg-success/20 flex items-center justify-center border-r border-border">
              <span className="text-xs font-medium text-success">{riskReturn.lowRisk}</span>
            </div>
            <div className="flex-1 bg-warning/20 flex items-center justify-center border-r border-border">
              <span className="text-xs font-medium text-warning">{riskReturn.mediumRisk}</span>
            </div>
            <div className="flex-1 bg-destructive/20 flex items-center justify-center">
              <span className="text-xs font-medium text-destructive">{riskReturn.highRisk}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          <span>{riskReturn.lowerReturn}</span>
          <span>{riskReturn.higherReturn}</span>
        </div>
      </div>
    </motion.div>
  );
};
