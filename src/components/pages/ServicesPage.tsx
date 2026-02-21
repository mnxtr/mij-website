import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import { 
  Globe2, 
  FileCheck, 
  Truck, 
  GraduationCap, 
  Languages,
  ArrowRight,
  Package,
  Users,
  Code,
  Briefcase,
  Check,
  Shield,
  Target
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';

export default function ServicesPage() {
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
      if (!animatedImages[imageId]) {
        setAnimatedImages(prev => ({ ...prev, [imageId]: true }));
      }
      
      // Move to next image
      currentIndex = (currentIndex + 1) % registeredImages.length;
    }, 600); // Stagger timing for wave effect

    return () => clearInterval(interval);
  }, [registeredImages, animatedImages]);
  
  const serviceCategories = [
    {
      lucideIcon: Briefcase,
      image: 'https://images.unsplash.com/photo-1758691736084-4ef3e6f6a2cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBzdHJhdGVneXxlbnwxfHx8fDE3NjM0NDQxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: () => t.services.main.consulting.title,
      description: () => t.services.main.consulting.description,
    },
    {
      lucideIcon: Package,
      image: 'https://images.unsplash.com/photo-1725449264087-28926bc1a610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBzaGlwcGluZyUyMGNvbnRhaW5lcnN8ZW58MXx8fHwxNzYzNDQ5ODM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: () => t.services.main.sourcing.title,
      description: () => t.services.main.sourcing.description,
    },
    {
      lucideIcon: Users,
      image: 'https://images.unsplash.com/photo-1600506451234-9e555c0c8d05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYXBhbmVzZSUyMG9mZmljZSUyMHRlYW13b3JrfGVufDF8fHx8MTc2MzMwNjQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: () => t.services.main.partnership.title,
      description: () => t.services.main.partnership.description,
    },
    {
      lucideIcon: Truck,
      image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDF8fHx8MTc2MzM2ODkwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: () => t.services.main.logistics.title,
      description: () => t.services.main.logistics.description,
    },
    {
      lucideIcon: Globe2,
      image: 'https://images.unsplash.com/photo-1515355252367-42ae86cb92f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMG9mZmljZXxlbnwxfHx8fDE3NjM0NjcxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: () => t.services.main.localization.title,
      description: () => t.services.main.localization.description,
    },
    {
      lucideIcon: Shield,
      image: 'https://images.unsplash.com/photo-1762968274962-20c12e6e8ecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzM4MzkyNHww&ixlib=rb-4.1.0&q=80&w=1080',
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
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-0.5 bg-gray-900" />
              <Badge variant="outline" className="border-gray-300 text-gray-700 text-xs tracking-wider uppercase">
                {t.services.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              {t.services.hero.title} <span className="text-[#D4387F]">{t.services.hero.highlight}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t.services.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24">
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
                {t.services.main.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {t.services.main.title}
            </h2>
          </motion.div>

          <div className="space-y-32 max-w-7xl mx-auto">
            {serviceCategories.map((service, index) => {
              const isEven = index % 2 === 0;
              const ServiceIcon = service.lucideIcon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  onViewportEnter={() => registerImage(`service-${index}`)}
                  onViewportLeave={() => unregisterImage(`service-${index}`)}
                  className="relative"
                >
                  <div className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                    <div className={`space-y-8 ${!isEven ? 'lg:col-start-2' : ''}`}>
                      <div className="w-16 h-16 border-2 border-gray-900 rounded-xl flex items-center justify-center">
                        <ServiceIcon className="w-8 h-8 text-gray-900" />
                      </div>
                      
                      <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                          {service.title()}
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                          {service.description()}
                        </p>
                      </div>

                      <Button 
                        onClick={() => navigate('/contact')}
                        onTouchStart={() => setTouchedButton(`learn-more-${index}`)}
                        onTouchEnd={() => setTimeout(() => setTouchedButton(null), 300)}
                        className={`text-white gap-3 px-8 py-6 transition-all ${
                          touchedButton === `learn-more-${index}` ? 'bg-[#FF8FB8]' : 'bg-[#D4387F]'
                        } hover:bg-[#FF8FB8]`}
                        size="lg"
                        style={{ WebkitTapHighlightColor: 'transparent' }}
                      >
                        {t.common.learnMore}
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </div>

                    <div className={`relative ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <div 
                        className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-gray-900 p-2 bg-white"
                      >
                        <div className="relative overflow-hidden rounded-lg">
                          <ImageWithFallback
                            src={service.image}
                            alt={service.title()}
                            className={`w-full h-[500px] object-cover transition-all duration-500 ${
                              animatedImages[`service-${index}`] ? 'grayscale-0' : 'grayscale'
                            } hover:grayscale-0`}
                            onTouchStart={() => registerImage(`service-${index}`)}
                            onTouchEnd={() => unregisterImage(`service-${index}`)}
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

      {/* Why Choose Us */}
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
                {t.services.why.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {t.services.why.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyChoose.map((item, index) => {
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
                  <div className={`text-center group cursor-pointer bg-white border-2 p-8 rounded-lg transition-all h-full ${
                    isTouched ? 'border-[#D4387F] shadow-lg' : 'border-gray-200'
                  } hover:border-[#D4387F] hover:shadow-lg`}>
                    <div className={`w-20 h-20 border-2 rounded-lg flex items-center justify-center mx-auto mb-6 transition-all ${
                      isTouched ? 'bg-[#D4387F] border-[#D4387F]' : 'border-gray-900'
                    } group-hover:bg-[#D4387F] group-hover:border-[#D4387F]`}>
                      <Icon className={`w-10 h-10 transition-colors ${
                        isTouched ? 'text-white' : 'text-gray-900'
                      } group-hover:text-white`} />
                    </div>
                    <h3 className={`text-xl font-bold mb-3 transition-colors ${
                      isTouched ? 'text-[#D4387F]' : 'text-gray-900'
                    } group-hover:text-[#D4387F]`}>
                      {item.title()}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description()}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
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
                {t.services.process.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {t.services.process.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 border-2 border-[#D4387F] rounded-full flex items-center justify-center mx-auto mb-6 bg-[#D4387F]/5">
                  <span className="text-3xl font-bold text-[#D4387F]">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {step.title()}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description()}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-[#D4387F] bg-gradient-to-br from-[#D4387F]/5 to-[#D4387F]/10 max-w-5xl mx-auto">
              <CardContent className="p-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  {t.services.cta.title} <span className="text-[#D4387F]">{t.services.cta.highlight}</span>
                </h2>
                <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                  {t.services.cta.description}
                </p>
                <Button 
                  onClick={() => navigate('/contact')}
                  onTouchStart={() => setTouchedButton('contact-us-today')}
                  onTouchEnd={() => setTimeout(() => setTouchedButton(null), 300)}
                  className={`text-white gap-3 px-10 py-7 transition-all ${
                    touchedButton === 'contact-us-today' ? 'bg-[#FF8FB8]' : 'bg-[#D4387F]'
                  } hover:bg-[#FF8FB8]`}
                  size="lg"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  {t.common.contactUs}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
