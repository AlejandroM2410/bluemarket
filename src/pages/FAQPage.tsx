import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Disclaimer } from '@/components/Disclaimer';

const FAQPage = () => {
  const { t } = useLanguage();
  const faq = t.faq;

  const questions = [
    { q: faq.questions.isAdvice.q, a: faq.questions.isAdvice.a },
    { q: faq.questions.loseMoney.q, a: faq.questions.loseMoney.a },
    { q: faq.questions.onlyRich.q, a: faq.questions.onlyRich.a },
    { q: faq.questions.safestInvestment.q, a: faq.questions.safestInvestment.a },
    { q: faq.questions.howToStart.q, a: faq.questions.howToStart.a },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-border mb-6">
            <HelpCircle className="h-4 w-4 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {faq.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {faq.subtitle}
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-12"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {questions.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Disclaimer />
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;
