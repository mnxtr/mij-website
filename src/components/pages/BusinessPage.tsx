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

  // Unregister image when it leaves viewport (turn back to grayscale)
  const unregisterImage = (imageId: string) => {
    setAnimatedImages(prev => ({ ...prev, [imageId]: false }));
  };

  // Auto-animate registered images in a cascading wave pattern - turn to color and keep until scrolled off
  useEffect(() => {
    if (registeredImages.length === 0) return;

    let currentIndex = 0;

    const interval = setInterval(() => {
      const imageId = registeredImages[currentIndex];

      // Turn current image to color and keep it
      if (imageId && !animatedImages[imageId]) {
        setAnimatedImages(prev => ({ ...prev, [imageId]: true }));
      }

      // Move to next image
      currentIndex = (currentIndex + 1) % registeredImages.length;
    }, 600); // Stagger timing for wave effect

    return () => clearInterval(interval);
  }, [registeredImages, animatedImages]);

  const divisions = [
    {
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
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] border border-primary/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 -left-1/4 w-[800px] h-[800px] border border-primary/5 rounded-full"
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <div className="w-12 h-0.5 bg-gray-300" />
              <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5 px-4 py-1.5 text-xs tracking-widest uppercase rounded-full font-bold">
                {t.business.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-300" />
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter text-gray-950">
              <TextReveal text={t.business.hero.title} />
              <div className="flex flex-wrap justify-center gap-x-4">
                <TextReveal text={t.business.hero.highlight} className="text-[#D4387F]" delay={0.4} />
                <TextReveal text={t.business.hero.subtitle} delay={0.7} />
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light"
            >
              {t.business.hero.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Business Divisions */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-32 max-w-7xl mx-auto">
            {divisions.map((division, index) => {
              const Icon = division.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  onViewportEnter={() => registerImage(`division-${index}`)}
                  onViewportLeave={() => unregisterImage(`division-${index}`)}
                  className="relative"
                >
                  <div className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                    <div className={`space-y-8 ${!isEven ? 'lg:col-start-2' : ''}`}>
                      <div className="w-16 h-16 border-2 border-gray-900 rounded-xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-gray-900" />
                      </div>

                      <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                          {division.title}
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                          {division.description}
                        </p>
                      </div>

                      <div className="space-y-4">
                        {division.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-[#D4387F] rounded-full flex-shrink-0 mt-2" />
                            <span className="text-gray-600 text-lg">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        onClick={() => navigate('/contact')}
                        onTouchStart={() => setTouchedButton(`get-started-${index}`)}
                        onTouchEnd={() => setTimeout(() => setTouchedButton(null), 300)}
                        className={`text-white gap-3 px-8 py-6 transition-all ${touchedButton === `get-started-${index}` ? 'bg-[#FF8FB8]' : 'bg-[#D4387F]'
                          } hover:bg-[#FF8FB8]`}
                        size="lg"
                        style={{ WebkitTapHighlightColor: 'transparent' }}
                      >
                        {t.business.divisions.getStarted}
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </div>

                    <div className={`relative ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <div
                        className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-gray-900 p-2 bg-white"
                      >
                        <div className="relative overflow-hidden rounded-lg">
                          <ImageWithFallback
                            src={division.image}
                            alt={division.title}
                            className={`w-full h-[500px] object-cover transition-all duration-500 ${animatedImages[`division-${index}`] ? 'grayscale-0' : 'grayscale'
                              } hover:grayscale-0`}
                            onTouchStart={() => registerImage(`division-${index}`)}
                            onTouchEnd={() => unregisterImage(`division-${index}`)}
                            style={{ WebkitTapHighlightColor: 'transparent' }}
                          />
                        </div>
                        {/* Pink accent */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#D4387F] rounded-full" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gray-900" />
              <Badge variant="outline" className="border-gray-300 text-gray-700 text-xs tracking-wider uppercase">
                {t.business.whyChoose.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t.business.whyChoose.title} <span className="text-[#D4387F]">{t.business.whyChoose.highlight}</span>
            </h2>
            <p className="text-xl text-gray-600">
              {t.business.whyChoose.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Globe2,
                title: t.business.whyChoose.localExpertise.title,
                description: t.business.whyChoose.localExpertise.description
              },
              {
                icon: Handshake,
                title: t.business.whyChoose.provenTrack.title,
                description: t.business.whyChoose.provenTrack.description
              },
              {
                icon: Zap,
                title: t.business.whyChoose.endToEnd.title,
                description: t.business.whyChoose.endToEnd.description
              }
            ].map((item, index) => {
              const Icon = item.icon;
              const isTouched = touchedCard === `why-${index}`;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onTouchStart={() => setTouchedCard(`why-${index}`)}
                  onTouchEnd={() => setTimeout(() => setTouchedCard(null), 300)}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <div className={`text-center group cursor-pointer bg-white border-2 p-8 rounded-lg transition-all h-full ${isTouched ? 'border-[#D4387F] shadow-lg' : 'border-gray-200'
                    } hover:border-[#D4387F] hover:shadow-lg`}>
                    <div className={`w-20 h-20 border-2 rounded-lg flex items-center justify-center mx-auto mb-6 transition-all ${isTouched ? 'bg-[#D4387F] border-[#D4387F]' : 'border-gray-900'
                      } group-hover:bg-[#D4387F] group-hover:border-[#D4387F]`}>
                      <Icon className={`w-10 h-10 transition-colors ${isTouched ? 'text-white' : 'text-gray-900'
                        } group-hover:text-white`} />
                    </div>
                    <h3 className={`text-xl font-bold mb-3 transition-colors ${isTouched ? 'text-[#D4387F]' : 'text-gray-900'
                      } group-hover:text-[#D4387F]`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-[#D4387F] bg-gradient-to-br from-[#D4387F]/5 to-[#D4387F]/10 max-w-5xl mx-auto">
              <CardContent className="p-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  {t.business.cta.title} <span className="text-[#D4387F]">{t.business.cta.highlight}</span>
                </h2>
                <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                  {t.business.cta.description}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={() => navigate('/contact')}
                    onTouchStart={() => setTouchedButton('schedule-consultation')}
                    onTouchEnd={() => setTimeout(() => setTouchedButton(null), 300)}
                    className={`inline-flex items-center justify-center gap-3 rounded-md px-10 py-7 text-base font-medium transition-all ${touchedButton === 'schedule-consultation' ? 'bg-[#FF8FB8]' : 'bg-[#D4387F]'
                      } text-white hover:bg-[#FF8FB8]`}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    Schedule a Consultation
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => navigate('/services')}
                    onTouchStart={() => setTouchedButton('view-all-services')}
                    onTouchEnd={() => setTimeout(() => setTouchedButton(null), 300)}
                    className={`inline-flex items-center justify-center gap-3 rounded-md px-10 py-7 text-base font-medium transition-all ${touchedButton === 'view-all-services' ? 'bg-[#FF8FB8]' : 'bg-[#D4387F]'
                      } text-white hover:bg-[#FF8FB8]`}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    View All Services
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}