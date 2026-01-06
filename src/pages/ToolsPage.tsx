import { motion } from 'framer-motion';
import { 
  Wrench, 
  ArrowLeftRight, 
  AlertTriangle,
  Users,
  Lightbulb,
  Info
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { InvestmentCalculator } from '@/components/InvestmentCalculator';
import { RiskReturnCard } from '@/components/RiskReturnCard';
import { ComparisonCard } from '@/components/ComparisonCard';
import { MistakeCard } from '@/components/MistakeCard';
import { ProfileCard } from '@/components/ProfileCard';
import { KeyTakeaway } from '@/components/KeyTakeaway';
import { Disclaimer } from '@/components/Disclaimer';

const ToolsPage = () => {
  const { t } = useLanguage();
  const tools = t.tools;

  const comparisons = [
    {
      title: tools.comparisons.cdtVsSavings.title,
      optionA: tools.comparisons.cdtVsSavings.optionA,
      optionB: tools.comparisons.cdtVsSavings.optionB,
      mainDifference: tools.comparisons.cdtVsSavings.mainDifference,
    },
    {
      title: tools.comparisons.cdtVsEtf.title,
      optionA: tools.comparisons.cdtVsEtf.optionA,
      optionB: tools.comparisons.cdtVsEtf.optionB,
      mainDifference: tools.comparisons.cdtVsEtf.mainDifference,
    },
    {
      title: tools.comparisons.stockVsEtf.title,
      optionA: tools.comparisons.stockVsEtf.optionA,
      optionB: tools.comparisons.stockVsEtf.optionB,
      mainDifference: tools.comparisons.stockVsEtf.mainDifference,
    },
    {
      title: tools.comparisons.fixedVsEquities.title,
      optionA: tools.comparisons.fixedVsEquities.optionA,
      optionB: tools.comparisons.fixedVsEquities.optionB,
      mainDifference: tools.comparisons.fixedVsEquities.mainDifference,
    },
  ];

  const mistakes = [
    tools.mistakes.noUnderstanding,
    tools.mistakes.quickProfits,
    tools.mistakes.noDiversification,
    tools.mistakes.emotionalDecisions,
  ];

  const profiles = [
    { type: 'conservative' as const, ...tools.profiles.conservative },
    { type: 'moderate' as const, ...tools.profiles.moderate },
    { type: 'aggressive' as const, ...tools.profiles.aggressive },
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
            <Wrench className="h-4 w-4 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {tools.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            {tools.subtitle}
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm">
            <Info className="h-3.5 w-3.5" />
            <span>{t.common.educational}</span>
          </div>
        </motion.div>

        {/* Risk vs Return */}
        <section className="mb-16">
          <RiskReturnCard />
        </section>

        {/* Investment Calculator */}
        <section className="mb-16">
          <InvestmentCalculator />
        </section>

        {/* Comparisons */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="p-2 rounded-lg bg-accent">
              <ArrowLeftRight className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">{tools.comparisons.title}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {comparisons.map((comparison, index) => (
              <ComparisonCard key={index} {...comparison} index={index} />
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="p-2 rounded-lg bg-warning/10">
              <AlertTriangle className="h-5 w-5 text-warning" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">{tools.mistakes.title}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {mistakes.map((mistake, index) => (
              <MistakeCard key={index} {...mistake} index={index} />
            ))}
          </div>
        </section>

        {/* Investor Profiles */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="p-2 rounded-lg bg-accent">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">{tools.profiles.title}</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {profiles.map((profile, index) => (
              <ProfileCard key={profile.type} {...profile} index={index} />
            ))}
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="p-2 rounded-lg bg-accent">
              <Lightbulb className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">{tools.takeaways.title}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {tools.takeaways.items.map((takeaway, index) => (
              <KeyTakeaway key={index} {...takeaway} index={index} />
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <div className="mt-12 max-w-2xl mx-auto">
          <Disclaimer variant="card" />
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;
