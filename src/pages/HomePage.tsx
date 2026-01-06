import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Eye, Globe2, Users, TrendingUp, Shield, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { FeatureCard } from '@/components/FeatureCard';
import { WelcomeGuide } from '@/components/WelcomeGuide';
import { Disclaimer } from '@/components/Disclaimer';

const HomePage = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: t.home.features.simple.title,
      description: t.home.features.simple.desc,
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: t.home.features.visual.title,
      description: t.home.features.visual.desc,
    },
    {
      icon: <Globe2 className="h-6 w-6" />,
      title: t.home.features.bilingual.title,
      description: t.home.features.bilingual.desc,
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: t.home.features.accessible.title,
      description: t.home.features.accessible.desc,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="container py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-border mb-8"
            >
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">{t.appName}</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {t.home.welcome}
            </h1>
            
            <p className="text-xl md:text-2xl text-primary font-medium mb-4">
              {t.slogan}
            </p>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              {t.home.welcomeDesc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/learn">
                  {t.home.startLearning}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/investments">
                  {t.home.exploreInvestments}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </section>

      {/* Why Learn Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-border mb-6">
              <Shield className="h-4 w-4 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.home.whyLearn}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.home.whyLearnDesc}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Guide for First-Time Users */}
      <WelcomeGuide />

      {/* Quick Links Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/learn"
                className="group block h-full p-8 rounded-2xl bg-primary text-primary-foreground shadow-card hover:shadow-lg transition-all duration-300"
              >
                <BookOpen className="h-10 w-10 mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-2 text-primary-foreground">{t.nav.learn}</h3>
                <p className="opacity-80 mb-4">
                  {t.learn.subtitle}
                </p>
                <span className="inline-flex items-center gap-2 font-medium">
                  {t.common.learnMore}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                to="/investments"
                className="group block h-full p-8 rounded-2xl border-2 border-primary bg-card text-foreground shadow-card hover:shadow-lg transition-all duration-300"
              >
                <TrendingUp className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-2">{t.nav.investments}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.investments.subtitle}
                </p>
                <span className="inline-flex items-center gap-2 font-medium text-primary">
                  {t.common.learnMore}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <section className="pb-12">
        <div className="container max-w-3xl">
          <Disclaimer variant="inline" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
