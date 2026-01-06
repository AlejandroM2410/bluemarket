import { motion } from 'framer-motion';
import { 
  Wallet, 
  Landmark, 
  TrendingUp, 
  BarChart3, 
  Building2,
  Info
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { InvestmentCard } from '@/components/InvestmentCard';
import { Disclaimer } from '@/components/Disclaimer';

const InvestmentsPage = () => {
  const { t } = useLanguage();

  const investments = [
    {
      id: 'cdt',
      icon: <Landmark className="h-6 w-6" />,
      ...t.investments.items.cdt,
    },
    {
      id: 'stocks',
      icon: <TrendingUp className="h-6 w-6" />,
      ...t.investments.items.stocks,
    },
    {
      id: 'etfs',
      icon: <BarChart3 className="h-6 w-6" />,
      ...t.investments.items.etfs,
    },
    {
      id: 'bonds',
      icon: <Building2 className="h-6 w-6" />,
      ...t.investments.items.bonds,
    },
    {
      id: 'funds',
      icon: <Wallet className="h-6 w-6" />,
      ...t.investments.items.funds,
    },
  ];

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
            <TrendingUp className="h-4 w-4 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.investments.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            {t.investments.subtitle}
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm">
            <Info className="h-3.5 w-3.5" />
            <span>{t.common.educational}</span>
          </div>
        </motion.div>

        {/* Investment Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investments.map((investment, index) => (
            <InvestmentCard
              key={investment.id}
              title={investment.title}
              what={investment.what}
              risk={investment.risk as 'low' | 'medium' | 'high'}
              forWhom={investment.forWhom}
              example={investment.example}
              icon={investment.icon}
              index={index}
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

export default InvestmentsPage;
