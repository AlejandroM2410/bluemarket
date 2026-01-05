import { motion } from 'framer-motion';
import { Shield, Scale, Zap } from 'lucide-react';
import { ReactNode } from 'react';

interface ProfileCardProps {
  type: 'conservative' | 'moderate' | 'aggressive';
  title: string;
  description: string;
  suitable: readonly string[];
  index: number;
}

export const ProfileCard = ({ type, title, description, suitable, index }: ProfileCardProps) => {
  const getProfileConfig = (): { icon: ReactNode; bgColor: string; borderColor: string } => {
    switch (type) {
      case 'conservative':
        return {
          icon: <Shield className="h-6 w-6 text-success" />,
          bgColor: 'bg-success/10',
          borderColor: 'border-success/30',
        };
      case 'moderate':
        return {
          icon: <Scale className="h-6 w-6 text-warning" />,
          bgColor: 'bg-warning/10',
          borderColor: 'border-warning/30',
        };
      case 'aggressive':
        return {
          icon: <Zap className="h-6 w-6 text-destructive" />,
          bgColor: 'bg-destructive/10',
          borderColor: 'border-destructive/30',
        };
    }
  };

  const config = getProfileConfig();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.4 }}
      className={`bg-card border ${config.borderColor} rounded-xl p-6 shadow-card`}
    >
      <div className={`inline-flex p-3 rounded-xl ${config.bgColor} mb-4`}>
        {config.icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      
      <div className="space-y-2">
        {suitable.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
};
