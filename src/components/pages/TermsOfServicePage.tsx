import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { FileText, Scale, AlertCircle, UserCheck, Shield, Gavel, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import Magnetic from '../animations/Magnetic';

export default function TermsOfServicePage() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = getTranslation(language);

  const sections = [
    {
      icon: FileText,
      title: t.terms.sections.acceptance.title,
      content: t.terms.sections.acceptance.content,
    },
    {
      icon: UserCheck,
      title: t.terms.sections.eligibility.title,
      content: t.terms.sections.eligibility.content,
    },
    {
      icon: Scale,
      title: t.terms.sections.services.title,
      content: t.terms.sections.services.content,
    },
    {
      icon: Shield,
      title: t.terms.sections.intellectual.title,
      content: t.terms.sections.intellectual.content,
    },
    {
      icon: AlertCircle,
      title: t.terms.sections.liability.title,
      content: t.terms.sections.liability.content,
    },
    {
      icon: Gavel,
      title: t.terms.sections.governing.title,
      content: t.terms.sections.governing.content,
    },
  ];

  return (
    <div className="w-full bg-background transition-colors duration-500 overflow-x-hidden min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 bg-background overflow-hidden font-header text-center">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.08, 0.05] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -ml-64 -mt-64"
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-6 mb-12"
          >
            <div className="w-16 h-px bg-primary/30" />
            <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5 px-8 py-2 text-sm tracking-[0.3em] uppercase rounded-full font-black">
              Legal Framework
            </Badge>
            <div className="w-16 h-px bg-primary/30" />
          </motion.div>

          <h1 className="text-7xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter text-foreground font-header">
            Terms of <span className="text-primary">Engagement</span>
          </h1>

          <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light font-body mb-8">
            {t.terms.subtitle}
          </p>

          <div className="flex items-center justify-center gap-4 text-sm font-black uppercase tracking-widest text-primary/60">
            <Calendar className="w-5 h-5" />
            {t.terms.lastUpdated}: {t.terms.updateDate}
          </div>
        </div>
      </section>

      {/* Narrative Sections */}
      <section className="py-24 bg-background relative z-10 font-header">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-muted/10 backdrop-blur-xl border-2 border-border/50 rounded-[40px] p-12 mb-24 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
            <p className="text-2xl text-foreground/80 leading-relaxed font-body font-light italic">
              {t.terms.introduction}
            </p>
          </motion.div>

          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Card className="bg-card/50 backdrop-blur-3xl border-2 border-border rounded-[48px] p-12 hover:border-primary/50 hover:shadow-2xl transition-all duration-700 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -ml-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />

                    <div className="flex flex-col md:flex-row items-start gap-12 relative z-10">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-background border-2 border-border rounded-3xl flex items-center justify-center transition-all duration-700 group-hover:bg-primary group-hover:border-primary group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-primary/30">
                          <Icon className="w-10 h-10 text-foreground group-hover:text-white transition-colors" />
                        </div>
                        {/* Connection Line Visual */}
                        {index < sections.length - 1 && (
                          <div className="hidden md:block absolute top-32 left-10 w-0.5 h-24 bg-gradient-to-b from-primary/30 to-transparent" />
                        )}
                      </div>
                      <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-black text-foreground group-hover:text-primary transition-colors tracking-tighter">
                          {section.title}
                        </h2>
                        <div className="text-xl text-muted-foreground leading-relaxed font-light font-body pr-12">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Node - High Impact */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-32 relative group"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <Card className="bg-foreground text-background p-20 md:p-32 rounded-[80px] border-none shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -mr-32 -mt-32 group-hover:scale-125 transition-transform duration-[2s]" />

              <div className="relative z-10 text-center space-y-12">
                <div className="w-24 h-24 bg-primary rounded-3xl mx-auto flex items-center justify-center shadow-2xl shadow-primary/30">
                  <Scale className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight">
                  {t.terms.contact.title}
                </h2>
                <p className="text-2xl md:text-3xl text-background/70 max-w-4xl mx-auto font-light font-body leading-relaxed">
                  {t.terms.contact.description}
                </p>
                <div className="pt-6">
                  <Magnetic>
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-white hover:text-primary text-white gap-6 px-16 py-10 rounded-[40px] text-2xl font-black transition-all duration-700 shadow-2xl shadow-primary/40"
                      onClick={() => navigate('/contact')}
                    >
                      {t.terms.contact.button}
                      <ArrowRight className="w-10 h-10 group-hover:translate-x-6 transition-transform" />
                    </Button>
                  </Magnetic>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Return Navigation */}
          <div className="mt-24 text-center">
            <button
              onClick={() => navigate(-1)}
              className="group flex items-center gap-6 mx-auto text-2xl font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-all duration-500"
            >
              <ArrowLeft className="w-8 h-8 group-hover:-translate-x-4 transition-transform" />
              Return to Sequence
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Custom Calendar icon to match the style
function Calendar(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}
