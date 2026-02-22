import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Package, Users, Code, TrendingUp, ArrowRight, Globe2, Handshake, Zap } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Badge } from '../ui/badge';
import { useState, useEffect } from 'react';
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

export default function BusinessPage() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = getTranslation(language);

  const [touchedButton, setTouchedButton] = useState<string | null>(null);
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

  // Unregister image when it leaves viewport
  const unregisterImage = (imageId: string) => {
    setAnimatedImages(prev => ({ ...prev, [imageId]: false }));
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

  const divisions = [
    {
      id: 'products',
      icon: Package,
      title: t.home.business.mijProducts.title,
      description: t.home.business.mijProducts.description,
      features: [
        t.home.business.mijProducts.feature1,
        t.home.business.mijProducts.feature2,
        t.home.business.mijProducts.feature3,
        t.business.divisions.mijProducts.feature4,
        t.business.divisions.mijProducts.feature5,
      ],
      image: 'https://images.unsplash.com/photo-1760243875166-390e30ffe049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHByb2R1Y3RzJTIwZGlzcGxheXxlbnwxfHx8fDE3NjM0NjMyODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'hr',
      icon: Users,
      title: t.home.business.hrRecruitment.title,
      description: t.home.business.hrRecruitment.description,
      features: [
        t.home.business.hrRecruitment.feature1,
        t.home.business.hrRecruitment.feature2,
        t.home.business.hrRecruitment.feature3,
        t.business.divisions.hrRecruitment.feature4,
        t.business.divisions.hrRecruitment.feature5,
      ],
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNydWl0bWVudCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MzI1MTI3MHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'it',
      icon: Code,
      title: t.home.business.itDigital.title,
      description: t.home.business.itDigital.description,
      features: [
        t.home.business.itDigital.feature1,
        t.home.business.itDigital.feature2,
        t.home.business.itDigital.feature3,
        t.business.divisions.itDigital.feature4,
        t.business.divisions.itDigital.feature5,
      ],
      image: 'https://images.unsplash.com/photo-1683813479742-4730f91fa3ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29kaW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MzI1MTExOHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'consulting',
      icon: TrendingUp,
      title: t.home.business.businessConsulting.title,
      description: t.home.business.businessConsulting.description,
      features: [
        t.home.business.businessConsulting.feature1,
        t.home.business.businessConsulting.feature2,
        t.home.business.businessConsulting.feature3,
      ],
      image: 'https://images.unsplash.com/photo-1726315185844-b4cb8e95cab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGxvZ2lzdGljcyUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MzQ2Mzc1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="w-full bg-background transition-colors duration-500 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 bg-background overflow-hidden font-header">
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
                {t.business.badge}
              </Badge>
              <div className="w-16 h-px bg-primary/20" />
            </motion.div>

            <h1 className="text-7xl md:text-9xl font-black mb-10 leading-[0.9] tracking-tighter text-foreground">
              <TextReveal text={t.business.hero.title} />
              <div className="flex flex-wrap justify-center gap-x-6">
                <TextReveal text={t.business.hero.highlight} className="text-primary" delay={0.4} />
                <TextReveal text={t.business.hero.subtitle} delay={0.7} />
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light font-body"
            >
              {t.business.hero.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Business Divisions */}
      <section className="py-32 bg-background relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-48 max-w-7xl mx-auto">
            {divisions.map((division, index) => {
              const Icon = division.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={division.id}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  onViewportEnter={() => registerImage(`division-${index}`)}
                  onViewportLeave={() => unregisterImage(`division-${index}`)}
                  className="relative group"
                >
                  <div className={`grid lg:grid-cols-2 gap-20 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                    <div className={`space-y-12 ${!isEven ? 'lg:col-start-2' : ''}`}>
                      <Magnetic>
                        <div className="w-24 h-24 bg-muted border border-border rounded-3xl flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:border-primary group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-700 group-hover:rotate-12">
                          <Icon className="w-12 h-12 text-foreground group-hover:text-white transition-colors duration-500" />
                        </div>
                      </Magnetic>

                      <div className="space-y-8">
                        <h2 className="text-5xl md:text-7xl font-black text-foreground leading-[0.95] tracking-tighter font-header">
                          {division.title}
                        </h2>
                        <p className="text-2xl text-muted-foreground leading-relaxed font-light font-body">
                          {division.description}
                        </p>
                      </div>

                      <div className="space-y-6">
                        {division.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-4 group/feature"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full transition-all duration-500 group-hover/feature:scale-150 group-hover/feature:shadow-lg group-hover/feature:shadow-primary/50" />
                            <span className="text-muted-foreground text-xl font-light font-body group-hover:text-foreground transition-colors">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      <Magnetic>
                        <Button
                          onClick={() => navigate('/contact')}
                          className="bg-primary hover:bg-foreground hover:text-background text-white gap-4 px-12 py-10 rounded-2xl transition-all duration-700 shadow-2xl shadow-primary/20 group font-bold text-xl font-header"
                        >
                          {t.business.divisions.getStarted}
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-500" />
                        </Button>
                      </Magnetic>
                    </div>

                    <div className={`relative ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <motion.div
                        whileHover={{ scale: 1.02, rotate: isEven ? 1 : -1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative rounded-[64px] overflow-hidden shadow-2xl p-6 bg-card border border-border"
                      >
                        <div className="relative overflow-hidden rounded-[48px]">
                          <ImageWithFallback
                            src={division.image}
                            alt={division.title}
                            className={`w-full h-[600px] object-cover transition-all duration-[2s] ease-[0.16, 1, 0.3, 1] ${animatedImages[`division-${index}`] ? 'grayscale-0' : 'grayscale contrast-125'} group-hover:grayscale-0 group-hover:scale-110`}
                          />
                        </div>
                        {/* Premium accent */}
                        <div className="absolute top-12 right-12 w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
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

      {/* Why Choose Us Section */}
      <section className="py-32 bg-muted/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.02)_0%,transparent_70%)] pointer-events-none" />

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
                {t.business.whyChoose.badge}
              </Badge>
              <div className="w-16 h-px bg-border" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-foreground tracking-tighter font-header">
              {t.business.whyChoose.title} <span className="text-primary">{t.business.whyChoose.highlight}</span>
            </h2>
            <p className="text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed font-body">
              {t.business.whyChoose.description}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {}
            }}
            className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto"
          >
            {[
              {
                id: 'local',
                icon: Globe2,
                title: t.business.whyChoose.localExpertise.title,
                description: t.business.whyChoose.localExpertise.description
              },
              {
                id: 'proven',
                icon: Handshake,
                title: t.business.whyChoose.provenTrack.title,
                description: t.business.whyChoose.provenTrack.description
              },
              {
                id: 'endtoend',
                icon: Zap,
                title: t.business.whyChoose.endToEnd.title,
                description: t.business.whyChoose.endToEnd.description
              }
            ].map((item, index) => {
              const Icon = item.icon;
              const isTouched = touchedCard === `why-${index}`;
              return (
                <motion.div
                  key={item.id}
                  variants={{
                    visible: { opacity: 1, y: 0, scale: 1 },
                    hidden: { opacity: 0, y: 40, scale: 0.95 }
                  }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  onTouchStart={() => setTouchedCard(`why-${index}`)}
                  onTouchEnd={() => setTimeout(() => setTouchedCard(null), 300)}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  className="h-full"
                >
                  <Card className={`text-center group cursor-pointer border-2 p-12 rounded-[48px] transition-all duration-700 h-full ${isTouched ? 'border-primary shadow-2xl bg-primary/5 shadow-primary/10' : 'border-border bg-background hover:border-primary hover:shadow-2xl hover:shadow-primary/5'}`}>
                    <CardContent className="p-0 space-y-8">
                      <Magnetic>
                        <div className={`w-24 h-24 border-2 rounded-[28px] flex items-center justify-center mx-auto transition-all duration-700 ${isTouched ? 'bg-primary border-primary scale-110 rotate-12 shadow-xl shadow-primary/30' : 'border-border bg-background group-hover:bg-primary group-hover:border-primary group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-primary/30'}`}>
                          <Icon className={`w-12 h-12 transition-colors duration-500 ${isTouched ? 'text-white' : 'text-foreground group-hover:text-white'}`} />
                        </div>
                      </Magnetic>
                      <h3 className={`text-3xl font-black transition-colors duration-500 ${isTouched ? 'text-primary' : 'text-foreground group-hover:text-primary'} tracking-tight font-header`}>
                        {item.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed font-light font-body">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card className="border-2 border-primary/30 bg-card/50 backdrop-blur-2xl max-w-6xl mx-auto rounded-[64px] overflow-hidden shadow-2xl relative">
              <CardContent className="p-20 text-center relative z-10">
                <h2 className="text-6xl md:text-8xl font-black mb-10 text-foreground tracking-tighter leading-[0.9] font-header">
                  {t.business.cta.title} <span className="text-primary">{t.business.cta.highlight}</span>
                </h2>
                <p className="text-2xl md:text-3xl text-muted-foreground mb-16 max-w-3xl mx-auto font-light leading-relaxed font-body">
                  {t.business.cta.description}
                </p>
                <div className="flex flex-wrap gap-8 justify-center">
                  <Magnetic>
                    <Button
                      onClick={() => navigate('/contact')}
                      className="bg-primary hover:bg-foreground hover:text-background text-white gap-4 px-16 py-12 rounded-3xl transition-all duration-700 shadow-2xl shadow-primary/30 group font-bold text-2xl font-header"
                    >
                      Schedule Consultation
                      <ArrowRight className="w-8 h-8 group-hover:translate-x-4 transition-transform duration-500" />
                    </Button>
                  </Magnetic>
                  <Magnetic>
                    <Button
                      onClick={() => navigate('/services')}
                      variant="outline"
                      className="border-2 border-primary/30 hover:border-primary text-foreground gap-4 px-16 py-12 rounded-3xl transition-all duration-700 group font-bold text-2xl font-header bg-transparent"
                    >
                      View All Services
                    </Button>
                  </Magnetic>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}