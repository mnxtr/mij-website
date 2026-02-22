import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import {
  Globe2,
  Truck,
  ArrowRight,
  Package,
  Users,
  Briefcase,
  Shield,
  Target
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';
import TextReveal from '../animations/TextReveal';
import Magnetic from '../animations/Magnetic';

const FloatingShape = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    animate={{
      y: [0, -20, 0],
      rotate: [0, 10, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    className={`absolute rounded-full mix-blend-multiply filter blur-2xl opacity-20 pointer-events-none ${className}`}
  />
);

export default function ServicesPage() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = getTranslation(language);

  const [animatedImages, setAnimatedImages] = useState<{ [key: string]: boolean }>({});
  const [registeredImages, setRegisteredImages] = useState<string[]>([]);
  const [touchedCard, setTouchedCard] = useState<string | null>(null);

  // Register image when it comes into view
  const registerImage = (imageId: string) => {
    setRegisteredImages(prev => {
      if (!prev.includes(imageId)) {
        return [...prev, imageId];
      }
      return prev;
    });
  };

  // Auto-animate registered images in a cascading wave pattern
  useEffect(() => {
    if (registeredImages.length === 0) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      const imageId = registeredImages[currentIndex];
      if (imageId && !animatedImages[imageId]) {
        setAnimatedImages(prev => ({ ...prev, [imageId]: true }));
      }
      currentIndex = (currentIndex + 1) % registeredImages.length;
    }, 600);

    return () => clearInterval(interval);
  }, [registeredImages, animatedImages]);

  const serviceCategories = [
    {
      id: 'consulting',
      lucideIcon: Briefcase,
      image: 'https://images.unsplash.com/photo-1758691736084-4ef3e6f6a2cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBzdHJhdGVneXxlbnwxfHx8fDE3NjM0NDQxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: () => t.services.main.consulting.title,
      description: () => t.services.main.consulting.description,
    },
    {
      id: 'sourcing',
      lucideIcon: Package,
      image: 'https://images.unsplash.com/photo-1725449264087-28926bc1a610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBzaGlwcGluZyUyMGNvbnRhaW5lcnN8ZW58MXx8fHwxNzYzNDQ5ODM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: () => t.services.main.sourcing.title,
      description: () => t.services.main.sourcing.description,
    },
    {
      id: 'partnership',
      lucideIcon: Users,
      image: 'https://images.unsplash.com/photo-1600506451234-9e555c0c8d05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYXBhbmVzZSUyMG9mZmljZSUyMHRlYW13b3JrfGVufDF8fHx8MTc2MzMwNjQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: () => t.services.main.partnership.title,
      description: () => t.services.main.partnership.description,
    },
    {
      id: 'logistics',
      lucideIcon: Truck,
      image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDF8fHx8MTc2MzM2ODkwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: () => t.services.main.logistics.title,
      description: () => t.services.main.logistics.description,
    },
    {
      id: 'localization',
      lucideIcon: Globe2,
      image: 'https://images.unsplash.com/photo-1515355252367-42ae86cb92f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMG9mZmljZXxlbnwxfHx8fDE3NjM0NjcxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: () => t.services.main.localization.title,
      description: () => t.services.main.localization.description,
    },
    {
      id: 'support',
      lucideIcon: Shield,
      image: 'https://images.unsplash.com/photo-1762968274962-20c12e6e8ecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzI1MTI4OHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: () => t.services.main.support.title,
      description: () => t.services.main.support.description,
    },
  ];

  const whyChoose = [
    {
      icon: Target,
      title: () => t.services.why.expertise.title,
      description: () => t.services.why.expertise.description,
    },
    {
      icon: Globe2,
      title: () => t.services.why.network.title,
      description: () => t.services.why.network.description,
    },
    {
      icon: Shield,
      title: () => t.services.why.quality.title,
      description: () => t.services.why.quality.description,
    },
    {
      icon: Users,
      title: () => t.services.why.support.title,
      description: () => t.services.why.support.description,
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: () => t.services.process.steps.discovery.title,
      description: () => t.services.process.steps.discovery.description,
    },
    {
      number: '02',
      title: () => t.services.process.steps.planning.title,
      description: () => t.services.process.steps.planning.description,
    },
    {
      number: '03',
      title: () => t.services.process.steps.execution.title,
      description: () => t.services.process.steps.execution.description,
    },
    {
      number: '04',
      title: () => t.services.process.steps.optimization.title,
      description: () => t.services.process.steps.optimization.description,
    },
  ];

  return (
    <div className="w-full bg-background transition-colors duration-500 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-32 lg:py-48 bg-background overflow-hidden font-header">
        {/* Floating background elements for premium feel */}
        <FloatingShape className="w-96 h-96 bg-primary/10 -top-10 -left-10" />
        <FloatingShape className="w-80 h-80 bg-primary/5 -bottom-20 right-20" delay={2} />
        <FloatingShape className="w-64 h-64 bg-primary/5 top-40 right-1/4" delay={4} />

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
                {t.services.badge}
              </Badge>
              <div className="w-16 h-px bg-primary/20" />
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-black mb-10 leading-[0.9] tracking-tighter text-foreground">
              <TextReveal text={t.services.hero.title} />
              <TextReveal text={t.services.hero.highlight} className="text-primary" delay={0.5} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light font-body"
            >
              {t.services.hero.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-background relative z-10">
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
                {t.services.main.badge}
              </Badge>
              <div className="w-16 h-px bg-border" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-foreground tracking-tighter font-header">
              {t.services.main.title}
            </h2>
          </motion.div>

          <div className="space-y-20 sm:space-y-28 md:space-y-36 lg:space-y-48 max-w-7xl mx-auto">
            {serviceCategories.map((service, index) => {
              const isEven = index % 2 === 0;
              const ServiceIcon = service.lucideIcon;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  onViewportEnter={() => registerImage(`service-${index}`)}
                  className="relative group"
                >
                  <div className={`grid lg:grid-cols-2 gap-20 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                    <div className={`space-y-12 ${!isEven ? 'lg:col-start-2' : ''}`}>
                      <Magnetic>
                        <div className="w-24 h-24 bg-muted border border-border rounded-3xl flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:border-primary group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-700 group-hover:rotate-12">
                          <ServiceIcon className="w-12 h-12 text-foreground group-hover:text-white transition-colors duration-500" />
                        </div>
                      </Magnetic>

                      <div className="space-y-8">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-foreground leading-[0.95] tracking-tighter font-header">
                          {service.title()}
                        </h2>
                        <p className="text-2xl text-muted-foreground leading-relaxed font-light font-body">
                          {service.description()}
                        </p>
                      </div>

                      <Magnetic>
                        <Button
                          onClick={() => navigate('/contact')}
                          className="bg-primary hover:bg-foreground hover:text-background text-white gap-4 px-12 py-10 rounded-2xl transition-all duration-700 shadow-2xl shadow-primary/20 group font-bold text-xl font-header"
                        >
                          {t.common.learnMore}
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-500" />
                        </Button>
                      </Magnetic>
                    </div>

                    <div className={`relative ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <motion.div
                        whileHover={{ scale: 1.02, rotate: isEven ? 1 : -1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative rounded-[32px] sm:rounded-[40px] md:rounded-[48px] lg:rounded-[64px] overflow-hidden shadow-2xl p-6 bg-card border border-border"
                      >
                        <div className="relative overflow-hidden rounded-[48px]">
                          <ImageWithFallback
                            src={service.image}
                            alt={service.title()}
                            className={`w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover transition-all duration-[2s] ease-[0.16, 1, 0.3, 1] ${animatedImages[`service-${index}`] ? 'grayscale-0' : 'grayscale contrast-125'
                              } group-hover:grayscale-0 group-hover:scale-110`}
                          />
                        </div>
                        {/* Premium accents */}
                        <div className="absolute top-12 right-12 w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center">
                          <ServiceIcon className="w-8 h-8 text-white" />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-muted/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.03)_0%,transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-24"
          >
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-16 h-px bg-border" />
              <Badge variant="outline" className="border-border text-muted-foreground text-xs tracking-[0.2em] uppercase px-4 py-1">
                {t.services.why.badge}
              </Badge>
              <div className="w-16 h-px bg-border" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-foreground tracking-tighter font-header">
              {t.services.why.title}
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {}
            }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          >
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              const isTouched = touchedCard === `why-${index}`;
              return (
                <motion.div
                  key={index}
                  variants={{
                    visible: { opacity: 1, y: 0, scale: 1 },
                    hidden: { opacity: 0, y: 40, scale: 0.95 }
                  }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  onTouchStart={() => setTouchedCard(`why-${index}`)}
                  onTouchEnd={() => setTimeout(() => setTouchedCard(null), 300)}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <Card className={`border-2 text-center h-full transition-all duration-700 group cursor-pointer p-6 sm:p-8 md:p-10 lg:p-12 rounded-[32px] sm:rounded-[40px] lg:rounded-[48px] overflow-hidden ${isTouched ? 'border-primary shadow-2xl bg-primary/5 shadow-primary/10' : 'border-border bg-background hover:border-primary hover:shadow-2xl hover:shadow-primary/5'
                    }`}>
                    <CardContent className="p-0 space-y-8">
                      <Magnetic>
                        <div className={`w-24 h-24 border-2 rounded-[28px] flex items-center justify-center mx-auto transition-all duration-700 ${isTouched ? 'bg-primary border-primary scale-110 rotate-12 shadow-xl shadow-primary/30' : 'border-border bg-background group-hover:bg-primary group-hover:border-primary group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-primary/30'
                          }`}>
                          <Icon className={`w-12 h-12 transition-colors duration-500 ${isTouched ? 'text-white' : 'text-foreground group-hover:text-white'
                            }`} />
                        </div>
                      </Magnetic>
                      <h3 className={`text-xl sm:text-2xl lg:text-3xl font-black transition-colors duration-500 ${isTouched ? 'text-primary' : 'text-foreground group-hover:text-primary'} tracking-tight font-header`}>
                        {item.title()}
                      </h3>
                      <p className="text-xl text-muted-foreground leading-relaxed font-light font-body">
                        {item.description()}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-background relative">
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
                {t.services.process.badge}
              </Badge>
              <div className="w-16 h-px bg-border" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-foreground tracking-tighter font-header">
              {t.services.process.title}
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.25 } },
              hidden: {}
            }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 60 }
                }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center group"
              >
                <Magnetic>
                  <div className="w-32 h-32 border-2 border-primary/20 rounded-full flex items-center justify-center mx-auto mb-10 bg-primary/5 group-hover:bg-primary group-hover:border-primary transition-all duration-700 shadow-xl shadow-primary/5 group-hover:shadow-primary/30 relative">
                    <span className="text-4xl font-black text-primary group-hover:text-white transition-colors duration-500 font-header">{step.number}</span>
                    <div className="absolute inset-0 rounded-full border border-primary/40 scale-110 opacity-0 group-hover:opacity-100 group-hover:animate-ping pointer-events-none" />
                  </div>
                </Magnetic>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-6 text-foreground group-hover:text-primary transition-all duration-500 font-header tracking-tight">
                  {step.title()}
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed font-light font-body">
                  {step.description()}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card className="border-2 border-primary/30 bg-card/50 backdrop-blur-2xl max-w-6xl mx-auto rounded-[32px] sm:rounded-[40px] md:rounded-[48px] lg:rounded-[64px] overflow-hidden shadow-2xl relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
              <CardContent className="p-8 sm:p-12 md:p-16 lg:p-20 text-center relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black mb-10 text-foreground tracking-tighter leading-[0.9] font-header">
                  <TextReveal text={t.services.cta.title} />
                  <span className="text-primary">{t.services.cta.highlight}</span>
                </h2>
                <p className="text-2xl md:text-3xl text-muted-foreground mb-16 max-w-3xl mx-auto font-light leading-relaxed font-body">
                  {t.services.cta.description}
                </p>
                <Magnetic>
                  <Button
                    onClick={() => navigate('/contact')}
                    className="bg-primary hover:bg-foreground hover:text-background text-white gap-4 px-16 py-12 rounded-3xl transition-all duration-700 shadow-2xl shadow-primary/30 group font-bold text-2xl font-header"
                  >
                    {t.common.contactUs}
                    <ArrowRight className="w-8 h-8 group-hover:translate-x-4 transition-transform duration-500" />
                  </Button>
                </Magnetic>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
