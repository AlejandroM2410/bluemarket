import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Wallet, Calendar, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

export const InvestmentCalculator = () => {
  const { t } = useLanguage();
  const calc = t.tools.calculator;

  const [initialAmount, setInitialAmount] = useState(1000);
  const [monthlyContribution, setMonthlyContribution] = useState(100);
  const [years, setYears] = useState(10);
  const [riskProfile, setRiskProfile] = useState<'low' | 'medium' | 'high'>('medium');

  const getExpectedReturn = (risk: 'low' | 'medium' | 'high') => {
    switch (risk) {
      case 'low': return 0.04; // 4%
      case 'medium': return 0.07; // 7%
      case 'high': return 0.10; // 10%
    }
  };

  const results = useMemo(() => {
    const annualReturn = getExpectedReturn(riskProfile);
    const monthlyReturn = annualReturn / 12;
    const totalMonths = years * 12;

    // Future value formula with compound interest
    let futureValue = initialAmount * Math.pow(1 + monthlyReturn, totalMonths);
    
    // Future value of monthly contributions (annuity formula)
    if (monthlyContribution > 0) {
      futureValue += monthlyContribution * ((Math.pow(1 + monthlyReturn, totalMonths) - 1) / monthlyReturn);
    }

    const totalInvested = initialAmount + (monthlyContribution * totalMonths);
    const estimatedGain = futureValue - totalInvested;

    return {
      finalValue: Math.round(futureValue),
      totalInvested: Math.round(totalInvested),
      estimatedGain: Math.round(estimatedGain),
      returnPercentage: annualReturn * 100,
    };
  }, [initialAmount, monthlyContribution, years, riskProfile]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-primary">
          <Calculator className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">{calc.title}</h2>
          <p className="text-sm text-muted-foreground">{calc.subtitle}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-6">
          {/* Initial Amount */}
          <div className="space-y-3">
            <Label className="flex items-center gap-2 text-foreground">
              <Wallet className="h-4 w-4 text-primary" />
              {calc.initialAmount}
            </Label>
            <Input
              type="number"
              value={initialAmount}
              onChange={(e) => setInitialAmount(Math.max(0, Number(e.target.value)))}
              className="text-lg"
              min={0}
            />
          </div>

          {/* Monthly Contribution */}
          <div className="space-y-3">
            <Label className="flex items-center gap-2 text-foreground">
              <TrendingUp className="h-4 w-4 text-primary" />
              {calc.monthlyContribution}
            </Label>
            <Input
              type="number"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Math.max(0, Number(e.target.value)))}
              className="text-lg"
              min={0}
            />
          </div>

          {/* Years */}
          <div className="space-y-3">
            <Label className="flex items-center gap-2 text-foreground">
              <Calendar className="h-4 w-4 text-primary" />
              {calc.years}: {years}
            </Label>
            <Slider
              value={[years]}
              onValueChange={(value) => setYears(value[0])}
              min={1}
              max={40}
              step={1}
              className="py-4"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1</span>
              <span>40</span>
            </div>
          </div>

          {/* Risk Profile */}
          <div className="space-y-3">
            <Label className="flex items-center gap-2 text-foreground">
              <Target className="h-4 w-4 text-primary" />
              {calc.riskProfile}
            </Label>
            <div className="grid grid-cols-3 gap-2">
              {(['low', 'medium', 'high'] as const).map((risk) => (
                <Button
                  key={risk}
                  variant={riskProfile === risk ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setRiskProfile(risk)}
                  className="w-full"
                >
                  {calc.risk[risk]}
                </Button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              {calc.expectedReturn}: {results.returnPercentage}%
            </p>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className="bg-primary rounded-xl p-6 text-primary-foreground">
            <p className="text-sm opacity-80 mb-1">{calc.finalValue}</p>
            <p className="text-3xl font-bold">{formatCurrency(results.finalValue)}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted rounded-xl p-4">
              <p className="text-xs text-muted-foreground mb-1">{calc.totalInvested}</p>
              <p className="text-lg font-semibold text-foreground">
                {formatCurrency(results.totalInvested)}
              </p>
            </div>
            <div className="bg-success/10 rounded-xl p-4">
              <p className="text-xs text-success mb-1">{calc.estimatedGain}</p>
              <p className="text-lg font-semibold text-success">
                +{formatCurrency(results.estimatedGain)}
              </p>
            </div>
          </div>

          {/* Visual Bar */}
          <div className="space-y-2">
            <div className="h-4 rounded-full bg-muted overflow-hidden flex">
              <div 
                className="bg-secondary transition-all duration-500"
                style={{ width: `${(results.totalInvested / results.finalValue) * 100}%` }}
              />
              <div 
                className="bg-success transition-all duration-500"
                style={{ width: `${(results.estimatedGain / results.finalValue) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{calc.invested}</span>
              <span>{calc.gain}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 p-4 bg-accent/50 rounded-lg border border-border">
        <p className="text-xs text-muted-foreground">
          ⚠️ {calc.disclaimer}
        </p>
      </div>
    </motion.div>
  );
};
