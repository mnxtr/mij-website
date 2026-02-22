import { useNavigate } from 'react-router-dom';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Building2, Handshake, Globe2, ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';
import TextReveal from '../animations/TextReveal';
import Magnetic from '../animations/Magnetic';

export default function PartnersPage() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = getTranslation(language);

  const partnerCategories = [
    {
      id: 'japanese',
      title: () => t.partners.japanese.title,
      badge: () => t.partners.japanese.badge,
      description: () => t.partners.japanese.description,
      flag: '🇯🇵',
      partners: [
        {
          name: 'Tokyo Trade Association',
          type: 'Trade Organization',
          description: 'Strategic partnership for facilitating Japan-Bangladesh trade relations and business development.',
          since: '2010',
        },
        {
          name: 'Japan Tech Consortium',
          type: 'Technology',
          description: 'Collaboration on technology transfer and digital innovation projects across markets.',
          since: '2018',
        },
        {
          name: 'Osaka Manufacturing Group',
          type: 'Manufacturing',
          description: 'Partnership for product sourcing, quality assurance, and manufacturing excellence.',
          since: '2012',
        },
        {
          name: 'Kyoto Cultural Institute',
          type: 'Education',
          description: 'Cultural exchange and language training programs for business professionals.',
          since: '2015',
        },
        {
          name: 'Tokyo Financial Services',
          type: 'Finance',
          description: 'Financial services and investment facilitation for cross-border ventures.',
          since: '2019',
        },
        {
          name: 'Japan Logistics Network',
          type: 'Logistics',
          description: 'Comprehensive logistics and supply chain solutions for international trade.',
          since: '2016',
        },
      ],
    },
    {
      id: 'bangladeshi',
      title: () => t.partners.bangladeshi.title,
      badge: () => t.partners.bangladeshi.badge,
      description: () => t.partners.bangladeshi.description,
      flag: '🇧🇩',
      partners: [
        {
          name: 'Dhaka Chamber of Commerce',
          type: 'Trade Organization',
          description: 'Leading business association supporting international trade and economic growth.',
          since: '2011',
        },
        {
          name: 'Bangladesh IT Society',
          type: 'Technology',
          description: 'Technology sector collaboration and talent development initiatives.',
          since: '2017',
        },
        {
          name: 'Chittagong Port Authority',
          type: 'Logistics',
          description: 'Port services and import/export facilitation through Bangladesh\'s main port.',
          since: '2013',
        },
        {
          name: 'Dhaka University',
          type: 'Education',
          description: 'Academic collaboration and research partnerships in business studies.',
          since: '2014',
        },
        {
          name: 'Bangladesh Export Association',
          type: 'Trade',
          description: 'Export promotion and market access support for Bangladeshi businesses.',
          since: '2016',
        },
        {
          name: 'Sylhet Business Forum',
          type: 'Business Network',
          description: 'Regional business network facilitating trade and investment opportunities.',
          since: '2020',
        },
      ],
    },
  ];

  const benefits = [
    {
      icon: Globe2,
      title: () => t.partners.benefits.network.title,
      description: () => t.partners.benefits.network.description,
    },
    {
      icon: Handshake,
      title: () => t.partners.benefits.expertise.title,
      description: () => t.partners.benefits.expertise.description,
    },
    {
      icon: Building2,
      title: () => t.partners.benefits.support.title,
      description: () => t.partners.benefits.support.description,
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: () => t.partners.process.inquiry.title,
      description: () => t.partners.process.inquiry.description,
    },
    {
      number: '02',
      title: () => t.partners.process.evaluation.title,
      description: () => t.partners.process.evaluation.description,
    },
    {
      number: '03',
      title: () => t.partners.process.agreement.title,
      description: () => t.partners.process.agreement.description,
    },
    {
      number: '04',
      title: () => t.partners.process.collaboration.title,
      description: () => t.partners.process.collaboration.description,
    },
  ];

  return (
    <div className="w-full bg-background transition-colors duration-500 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 bg-background overflow-hidden font-header">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -mr-64 -mt-64"
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
                {t.partners.badge}
              </Badge>
              <div className="w-16 h-px bg-primary/20" />
            </motion.div>

            <h1 className="text-7xl md:text-9xl font-black mb-10 leading-[0.9] tracking-tighter text-foreground">
              <TextReveal text={t.partners.hero.title} />
              <TextReveal text={t.partners.hero.highlight} className="text-primary" delay={0.5} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl md:text-3xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light font-body"
            >
              {t.partners.hero.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Benefits - Modern Icon Cards */}
      <section className="py-24 bg-background relative z-10 font-header">
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
                {t.partners.benefits.badge}
              </Badge>
              <div className="w-16 h-px bg-border" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-foreground tracking-tighter">
              {t.partners.benefits.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Card className="h-full border-2 border-border bg-card/30 backdrop-blur-xl p-12 rounded-[56px] text-center flex flex-col items-center group hover:border-primary/50 hover:shadow-2xl transition-all duration-700">
                    <Magnetic>
                      <div className="w-24 h-24 border-2 border-border bg-background rounded-[32px] flex items-center justify-center mb-10 transition-all duration-700 group-hover:bg-primary group-hover:border-primary group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-primary/30">
                        <Icon className="w-10 h-10 text-foreground group-hover:text-white transition-colors duration-500" />
                      </div>
                    </Magnetic>
                    <h3 className="text-2xl font-black mb-6 text-foreground group-hover:text-primary transition-colors tracking-tight">
                      {benefit.title()}
                    </h3>
                    <p className="text-xl text-muted-foreground leading-relaxed font-light font-body">
                      {benefit.description()}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Categories */}
      {partnerCategories.map((category, categoryIndex) => (
        <section key={category.id} className={`py-32 relative overflow-hidden font-header ${categoryIndex % 2 === 0 ? 'bg-muted/20' : 'bg-background'}`}>
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-5xl mx-auto mb-24"
            >
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="w-12 h-px bg-border" />
                <Badge variant="outline" className="border-border text-muted-foreground text-xs tracking-[0.2em] uppercase px-4 py-1">
                  {category.badge()}
                </Badge>
                <div className="w-12 h-px bg-border" />
              </div>
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="w-20 h-20 bg-background border-2 border-border rounded-3xl flex items-center justify-center text-5xl shadow-xl">
                  {category.flag}
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter">
                  {category.title()}
                </h2>
              </div>
              <p className="text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed font-body">
                {category.description()}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {category.partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Card className="h-full border-2 border-border bg-card/50 backdrop-blur-xl p-10 rounded-[48px] overflow-hidden group hover:border-primary/50 hover:shadow-2xl transition-all duration-700 relative">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-1000" />

                    <div className="flex items-start justify-between mb-8 relative z-10">
                      <div className="w-14 h-14 bg-muted border border-border rounded-2xl flex items-center justify-center transition-all duration-700 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-primary/30">
                        <Building2 className="w-7 h-7 text-foreground group-hover:text-white transition-colors" />
                      </div>
                      <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 px-4 font-bold">
                        {partner.type}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-black mb-4 text-foreground group-hover:text-primary transition-colors tracking-tight font-header relative z-10">
                      {partner.name}
                    </h3>

                    <p className="text-lg text-muted-foreground font-light font-body leading-relaxed mb-8 relative z-10">
                      {partner.description}
                    </p>

                    <div className="pt-6 border-t border-border/50 flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Partner since {partner.since}</span>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all group-hover:rotate-[-45deg]" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Partnership Process - Minimalist Timeline */}
      <section className="py-40 bg-background relative overflow-hidden font-header">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-32"
          >
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-16 h-px bg-border" />
              <Badge variant="outline" className="border-border text-muted-foreground text-xs tracking-[0.2em] uppercase px-4 py-1">
                {t.partners.process.badge}
              </Badge>
              <div className="w-16 h-px bg-border" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-foreground tracking-tighter">
              {t.partners.process.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-1 bg-border/50 z-0" />

            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10"
              >
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-background border-4 border-primary rounded-3xl flex items-center justify-center mb-10 shadow-2xl shadow-primary/10 group hover:rotate-[360deg] transition-all duration-[1s]">
                    <span className="text-4xl font-black text-primary group-hover:scale-125 transition-transform">{step.number}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-6 text-foreground text-center tracking-tight uppercase tracking-widest">
                    {step.title()}
                  </h3>
                  <p className="text-lg text-muted-foreground text-center leading-relaxed font-light font-body">
                    {step.description()}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Sophisticated Glassmorphism */}
      <section className="relative py-48 bg-background overflow-hidden font-header">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <Card className="bg-card/50 backdrop-blur-3xl p-20 md:p-32 rounded-[80px] border-4 border-border shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-[2s]" />

              <div className="relative z-10 space-y-12">
                <h2 className="text-6xl md:text-9xl font-black text-foreground tracking-tighter leading-[0.85]">
                  {t.partners.cta.title} <span className="text-primary">{t.partners.cta.highlight}</span>
                </h2>
                <p className="text-2xl md:text-4xl text-muted-foreground font-light max-w-4xl mx-auto leading-relaxed font-body">
                  {t.partners.cta.description}
                </p>

                <div className="pt-10">
                  <Magnetic>
                    <Button
                      size="lg"
                      onClick={() => navigate('/contact')}
                      className="bg-primary hover:bg-foreground hover:text-background text-white gap-6 px-20 py-14 text-3xl rounded-[40px] shadow-2xl shadow-primary/50 group/btn font-black transition-all duration-700"
                    >
                      {t.common.contactUs}
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
