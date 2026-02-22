import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  Briefcase,
  Users,
  Globe2,
  TrendingUp,
  Heart,
  Award,
  ArrowRight,
  MapPin,
  Clock,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';
import teamImage from 'figma:asset/0fcc3f28daffd4c8a9dc7ec084222c8c4169541a.png';
import TextReveal from '../animations/TextReveal';
import Magnetic from '../animations/Magnetic';

export default function RecruitPage() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const benefits = [
    {
      icon: Globe2,
      title: t.recruit.why.global.title,
      description: t.recruit.why.global.description,
    },
    {
      icon: TrendingUp,
      title: t.recruit.why.growth.title,
      description: t.recruit.why.growth.description,
    },
    {
      icon: Heart,
      title: t.recruit.why.balance.title,
      description: t.recruit.why.balance.description,
    },
    {
      icon: Award,
      title: t.recruit.why.benefits.title,
      description: t.recruit.why.benefits.description,
    },
  ];

  const openPositions = [
    {
      title: t.recruit.positions.manager.title,
      department: 'Business Development',
      location: t.recruit.positions.manager.location,
      type: t.recruit.positions.manager.type,
      description: t.recruit.positions.manager.description,
    },
    {
      title: t.recruit.positions.coordinator.title,
      department: 'Logistics',
      location: t.recruit.positions.coordinator.location,
      type: t.recruit.positions.coordinator.type,
      description: t.recruit.positions.coordinator.description,
    },
    {
      title: t.recruit.positions.specialist.title,
      department: 'Research',
      location: t.recruit.positions.specialist.location,
      type: t.recruit.positions.specialist.type,
      description: t.recruit.positions.specialist.description,
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: t.recruit.process.application.title,
      description: t.recruit.process.application.description,
    },
    {
      step: '02',
      title: t.recruit.process.screening.title,
      description: t.recruit.process.screening.description,
    },
    {
      step: '03',
      title: t.recruit.process.interview.title,
      description: t.recruit.process.interview.description,
    },
    {
      step: '04',
      title: t.recruit.process.offer.title,
      description: t.recruit.process.offer.description,
    },
  ];

  return (
    <div className="w-full bg-background transition-colors duration-500 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 bg-background overflow-hidden font-header">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]"
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-6 mb-12"
            >
              <div className="w-16 h-px bg-primary/20" />
              <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5 px-6 py-2 text-sm tracking-[0.3em] uppercase rounded-full font-bold">
                {t.recruit.badge}
              </Badge>
              <div className="w-16 h-px bg-primary/20" />
            </motion.div>

            <h1 className="text-7xl md:text-9xl font-black mb-10 leading-[0.9] tracking-tighter text-foreground">
              <TextReveal text={t.recruit.hero.title} />
              <TextReveal text={t.recruit.hero.highlight} className="text-primary" delay={0.5} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl md:text-3xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light font-body"
            >
              {t.recruit.hero.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Join Us - Premium Grid */}
      <section className="py-32 bg-background relative z-10 font-header">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-24"
          >
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-16 h-px bg-border" />
              <Badge variant="outline" className="border-border text-muted-foreground text-xs tracking-[0.2em] uppercase px-4 py-1">
                {t.recruit.why.badge}
              </Badge>
              <div className="w-16 h-px bg-border" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-foreground tracking-tighter">
              {t.recruit.why.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <Card className="h-full border-2 border-border bg-card/30 backdrop-blur-xl p-10 rounded-[56px] text-center flex flex-col items-center group hover:border-primary/50 hover:shadow-2xl transition-all duration-700">
                  <Magnetic>
                    <div className="w-24 h-24 border-2 border-border bg-background rounded-[32px] flex items-center justify-center mb-10 transition-all duration-700 group-hover:bg-primary group-hover:border-primary group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-primary/30">
                      <benefit.icon className="w-10 h-10 text-foreground group-hover:text-white transition-colors duration-500" />
                    </div>
                  </Magnetic>
                  <h3 className="text-2xl font-black mb-4 text-foreground group-hover:text-primary transition-colors tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed font-light font-body">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture - Immersive Section */}
      <section className="py-40 bg-muted/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/[0.02] -skew-x-12 translate-x-1/4 pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <Badge variant="outline" className="px-6 py-2 border-primary/20 text-primary bg-primary/5 rounded-full uppercase tracking-[0.3em] font-black text-xs font-header">
                  {t.recruit.culture.badge}
                </Badge>
                <h2 className="text-6xl md:text-8xl font-black text-foreground tracking-tighter leading-[0.9] font-header">
                  {t.recruit.culture.title}
                </h2>
              </div>
              <p className="text-2xl text-muted-foreground font-light leading-relaxed font-body">
                {t.recruit.culture.description}
              </p>

              <div className="flex flex-wrap gap-6 pt-6">
                {['Innovation', 'Collaboration', 'Integrity', 'Impact'].map((value, idx) => (
                  <div key={idx} className="px-6 py-3 bg-card border border-border rounded-2xl flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-lg font-bold text-foreground font-header">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative z-10 rounded-[64px] overflow-hidden border-8 border-card shadow-2xl group">
                <ImageWithFallback
                  src={teamImage}
                  alt="Team Collaboration"
                  className="w-full h-[600px] object-cover transition-transform duration-[3s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions - Premium List */}
      <section className="py-32 bg-background relative z-10 font-header">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-24"
          >
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-16 h-px bg-border" />
              <Badge variant="outline" className="border-border text-muted-foreground text-xs tracking-[0.2em] uppercase px-4 py-1">
                {t.recruit.positions.badge}
              </Badge>
              <div className="w-16 h-px bg-border" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-foreground tracking-tighter">
              {t.recruit.positions.title}
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card className="border-2 border-border bg-card/30 backdrop-blur-xl p-12 rounded-[48px] overflow-hidden group hover:border-primary/50 hover:shadow-2xl transition-all duration-700 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />

                  <div className="flex flex-col lg:row lg:items-center justify-between gap-12 relative z-10">
                    <div className="space-y-6 flex-grow">
                      <h3 className="text-3xl md:text-4xl font-black text-foreground group-hover:text-primary transition-colors tracking-tight">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-8">
                        <div className="flex items-center gap-3 text-muted-foreground group/item">
                          <Briefcase className="w-5 h-5 text-primary group-hover/item:scale-125 transition-transform" />
                          <span className="text-lg font-bold font-header uppercase tracking-wider">{position.department}</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground group/item">
                          <MapPin className="w-5 h-5 text-primary group-hover/item:scale-125 transition-transform" />
                          <span className="text-lg font-bold font-header uppercase tracking-wider">{position.location}</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground group/item">
                          <Clock className="w-5 h-5 text-primary group-hover/item:scale-125 transition-transform" />
                          <span className="text-lg font-bold font-header uppercase tracking-wider">{position.type}</span>
                        </div>
                      </div>
                      <p className="text-xl text-muted-foreground font-light font-body leading-relaxed max-w-3xl">
                        {position.description}
                      </p>
                    </div>

                    <div className="flex-shrink-0">
                      <Magnetic>
                        <Button
                          size="lg"
                          className="bg-primary hover:bg-foreground hover:text-background text-white gap-4 px-12 py-10 text-xl rounded-2xl shadow-xl shadow-primary/20 group font-bold font-header transition-all duration-700"
                        >
                          {t.recruit.apply}
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-500" />
                        </Button>
                      </Magnetic>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process - Staggered Steps */}
      <section className="py-40 bg-muted/20 relative overflow-hidden font-header">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-32"
          >
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-16 h-px bg-border" />
              <Badge variant="outline" className="border-border text-muted-foreground text-xs tracking-[0.2em] uppercase px-4 py-1">
                {t.recruit.process.badge}
              </Badge>
              <div className="w-16 h-px bg-border" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-foreground tracking-tighter">
              {t.recruit.process.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-1 bg-border/50 z-0" />

            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10"
              >
                <Card className="h-full border-2 border-border bg-card group p-12 rounded-[56px] text-center flex flex-col items-center hover:border-primary/50 hover:shadow-2xl transition-all duration-700">
                  <div className="w-24 h-24 bg-background border-4 border-border rounded-full flex items-center justify-center mb-10 group-hover:bg-primary group-hover:border-primary group-hover:rotate-[360deg] transition-all duration-1000 shadow-xl group-hover:shadow-primary/40">
                    <span className="text-3xl font-black text-foreground group-hover:text-white transition-colors duration-500">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black mb-6 text-foreground group-hover:text-primary transition-colors tracking-tight uppercase tracking-widest">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed font-light font-body">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - High Impact */}
      <section className="relative py-48 bg-background overflow-hidden font-header">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto text-center"
          >
            <Card className="bg-foreground text-background p-20 md:p-32 rounded-[80px] border-none shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-[2s]" />

              <div className="relative z-10 space-y-12">
                <h2 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85]">
                  {t.recruit.cta.title} <span className="text-primary">{t.recruit.cta.highlight}</span>
                </h2>
                <p className="text-3xl md:text-4xl text-background/70 font-light max-w-4xl mx-auto leading-relaxed font-body">
                  {t.recruit.cta.description}
                </p>

                <div className="pt-10">
                  <Magnetic>
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-white hover:text-primary text-white gap-6 px-20 py-14 text-3xl rounded-[40px] shadow-2xl shadow-primary/50 group/btn font-black transition-all duration-700"
                    >
                      {t.recruit.apply}
                      <ArrowRight className="w-10 h-10 group-hover/btn:translate-x-6 transition-transform duration-700" />
                    </Button>
                  </Magnetic>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
