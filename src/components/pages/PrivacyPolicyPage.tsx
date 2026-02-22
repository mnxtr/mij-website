import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';
import { motion } from 'motion/react';
import { Eye, Lock, Database, UserCheck, Mail, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import Magnetic from '../animations/Magnetic';

export default function PrivacyPolicyPage() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = getTranslation(language);

  const sections = [
    {
      icon: Database,
      title: t.privacy.sections.collection.title,
      content: t.privacy.sections.collection.content,
    },
    {
      icon: Eye,
      title: t.privacy.sections.usage.title,
      content: t.privacy.sections.usage.content,
    },
    {
      icon: Lock,
      title: t.privacy.sections.security.title,
      content: t.privacy.sections.security.content,
    },
    {
      icon: UserCheck,
      title: t.privacy.sections.rights.title,
      content: t.privacy.sections.rights.content,
    },
  ];

  return (
    <div className="w-full bg-background transition-colors duration-500 overflow-x-hidden min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 bg-background overflow-hidden font-header text-center">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -mr-32 -mt-32"
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
              Data Integrity
            </Badge>
            <div className="w-16 h-px bg-primary/30" />
          </motion.div>

          <h1 className="text-7xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter text-foreground">
            {t.privacy.title}
          </h1>

          <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light font-body mb-8">
            {t.privacy.subtitle}
          </p>

          <div className="flex items-center justify-center gap-4 text-sm font-black uppercase tracking-widest text-primary/60">
            <Calendar className="w-5 h-5" />
            {t.privacy.lastUpdated}: {t.privacy.updateDate}
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
            className="bg-muted/10 backdrop-blur-xl border-2 border-border/50 rounded-[40px] p-12 mb-20 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
            <p className="text-2xl text-foreground/80 leading-relaxed font-body font-light italic">
              {t.privacy.introduction}
            </p>
          </motion.div>

          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Card className="bg-card/50 backdrop-blur-3xl border-2 border-border rounded-[48px] p-12 hover:border-primary/50 hover:shadow-2xl transition-all duration-700 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />

                    <div className="flex flex-col md:flex-row items-start gap-12 relative z-10">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-background border-2 border-border rounded-3xl flex items-center justify-center transition-all duration-700 group-hover:bg-primary group-hover:border-primary group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-primary/30">
                          <Icon className="w-10 h-10 text-foreground group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-black text-foreground group-hover:text-primary transition-colors tracking-tighter">
                          {section.title}
                        </h2>
                        <div className="text-xl text-muted-foreground leading-relaxed font-light font-body whitespace-pre-line pr-12">
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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-32 relative group"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <Card className="bg-foreground text-background p-20 rounded-[80px] border-none shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -mr-32 -mt-32 group-hover:scale-125 transition-transform duration-[2s]" />

              <div className="relative z-10 text-center space-y-10">
                <Mail className="w-20 h-20 mx-auto text-primary" />
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
                  {t.privacy.sections.contact.title}
                </h2>
                <p className="text-2xl text-background/70 max-w-3xl mx-auto font-light font-body leading-relaxed">
                  {t.privacy.sections.contact.description}
                </p>
                <div className="pt-6">
                  <Magnetic>
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-white hover:text-primary text-white gap-6 px-16 py-10 rounded-3xl text-2xl font-black transition-all duration-700 shadow-2xl shadow-primary/40"
                      onClick={() => navigate('/contact')}
                    >
                      {t.privacy.sections.contact.button}
                      <ArrowRight className="w-8 h-8 group-hover:translate-x-4 transition-transform" />
                    </Button>
                  </Magnetic>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Return Navigation */}
          <div className="mt-20 text-center">
            <button
              onClick={() => navigate(-1)}
              className="group flex items-center gap-4 mx-auto text-xl font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-all transition-duration-500"
            >
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-3 transition-transform" />
              Navigate Back
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper component for Calendar as it's not imported but used in text
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
      strokeWidth="2"
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
