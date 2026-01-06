import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wallet, 
  TrendingUp, 
  CircleDollarSign, 
  BookOpen, 
  PiggyBank, 
  BarChart3,
  Coins,
  LineChart,
  Info
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ModuleCard } from '@/components/ModuleCard';
import { Disclaimer } from '@/components/Disclaimer';

const LearnPage = () => {
  const { t } = useLanguage();
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  const modules = [
    {
      id: 'whatIsInvesting',
      icon: <Wallet className="h-6 w-6" />,
      ...t.learn.modules.whatIsInvesting,
    },
    {
      id: 'savingVsInvesting',
      icon: <PiggyBank className="h-6 w-6" />,
      ...t.learn.modules.savingVsInvesting,
    },
    {
      id: 'fixedIncome',
      icon: <CircleDollarSign className="h-6 w-6" />,
      ...t.learn.modules.fixedIncome,
    },
    {
      id: 'equities',
      icon: <TrendingUp className="h-6 w-6" />,
      ...t.learn.modules.equities,
    },
    {
      id: 'etfs',
      icon: <BarChart3 className="h-6 w-6" />,
      ...t.learn.modules.etfs,
    },
    {
      id: 'mutualFunds',
      icon: <Coins className="h-6 w-6" />,
      ...t.learn.modules.mutualFunds,
    },
    {
      id: 'derivatives',
      icon: <LineChart className="h-6 w-6" />,
      ...t.learn.modules.derivatives,
    },
  ];

  const toggleModule = (id: string) => {
    setExpandedModule(expandedModule === id ? null : id);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-border mb-6">
            <BookOpen className="h-4 w-4 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.learn.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            {t.learn.subtitle}
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm">
            <Info className="h-3.5 w-3.5" />
            <span>{t.common.educational}</span>
          </div>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid gap-4 max-w-3xl mx-auto">
          {modules.map((module, index) => (
            <ModuleCard
              key={module.id}
              title={module.title}
              description={module.desc}
              icon={module.icon}
              index={index}
              onClick={() => toggleModule(module.id)}
              isExpanded={expandedModule === module.id}
              content={module.content}
            />
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 max-w-2xl mx-auto">
          <Disclaimer variant="inline" />
        </div>
      </div>
    </div>
  );
};

export default LearnPage;
