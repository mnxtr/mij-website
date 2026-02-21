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
  DollarSign
} from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';
import teamImage from 'figma:asset/0fcc3f28daffd4c8a9dc7ec084222c8c4169541a.png';

export function RecruitPage() {
  const { language } = useLanguage();
  const t = getTranslation(language);
  
  const [touchedButton, setTouchedButton] = useState<string | null>(null);
  const [touchedImage, setTouchedImage] = useState<string | null>(null);
  const [teamImageColorActive, setTeamImageColorActive] = useState(false);
  
  // Auto-animate team image - cycles every 6 seconds for 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTeamImageColorActive(true);
      setTimeout(() => setTeamImageColorActive(false), 2000);
    }, 6000);

    // Initial animation
    const initialTimeout = setTimeout(() => {
      setTeamImageColorActive(true);
      setTimeout(() => setTeamImageColorActive(false), 2000);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);
  
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

  const process = [
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
                {t.recruit.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              {t.recruit.hero.title} <span className="text-[#D4387F]">{t.recruit.hero.highlight}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t.recruit.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 md:py-32 bg-white">
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
                {t.recruit.why.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t.recruit.why.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-2 border-gray-200 bg-white hover:border-[#D4387F] hover:shadow-lg transition-all h-full group">
                  <CardContent className="p-8 space-y-4 text-center">
                    <div className="w-16 h-16 border-2 border-gray-900 rounded-xl flex items-center justify-center mx-auto group-hover:bg-[#D4387F] group-hover:border-[#D4387F] transition-all">
                      <benefit.icon className="w-8 h-8 text-gray-900 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#D4387F] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gray-900" />
              <Badge variant="outline" className="border-gray-300 text-gray-700 text-xs tracking-wider uppercase">
                {t.recruit.culture.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t.recruit.culture.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.recruit.culture.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div 
              className="relative border-4 border-gray-900 rounded-2xl overflow-hidden p-2 bg-white"
              onTouchStart={() => setTouchedImage('team-collaboration')}
              onTouchEnd={() => setTimeout(() => setTouchedImage(null), 500)}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <div className="relative overflow-hidden rounded-lg">
                <ImageWithFallback
                  src={teamImage}
                  alt="Team Collaboration"
                  className={`w-full h-[500px] object-cover transition-all duration-500 hover:grayscale-0 ${
                    teamImageColorActive || touchedImage === 'team-collaboration' ? 'grayscale-0' : 'grayscale'
                  }`}
                />
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#D4387F] rounded-full" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-[#D4387F] rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 md:py-32 bg-white">
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
                {t.recruit.positions.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t.recruit.positions.title}
            </h2>
          </motion.div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-2 border-gray-200 bg-white hover:border-[#D4387F] hover:shadow-lg transition-all group">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#D4387F] transition-colors">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4 text-[#D4387F]" />
                            <span>{position.department}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-[#D4387F]" />
                            <span>{position.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-[#D4387F]" />
                            <span>{position.type}</span>
                          </div>
                        </div>
                      </div>
                      <Button 
                        onTouchStart={() => setTouchedButton(`apply-${index}`)}
                        onTouchEnd={() => setTimeout(() => setTouchedButton(null), 300)}
                        className={`gap-2 whitespace-nowrap transition-all ${
                          touchedButton === `apply-${index}` ? 'bg-[#FF8FB8]' : 'bg-[#D4387F]'
                        } hover:bg-[#FF8FB8] text-white`}
                        style={{ WebkitTapHighlightColor: 'transparent' }}
                      >
                        {t.recruit.apply}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {position.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
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
                {t.recruit.process.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t.recruit.process.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-2 border-gray-200 bg-white hover:border-[#D4387F] hover:shadow-lg transition-all h-full group">
                  <CardContent className="p-8 space-y-4 text-center">
                    <div className="text-6xl font-bold text-[#D4387F]/20 group-hover:text-[#D4387F]/30 transition-colors">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#D4387F] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#D4387F]/5 to-[#D4387F]/10 rounded-3xl p-12 md:p-16 border-2 border-[#D4387F]/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t.recruit.cta.title} <span className="text-[#D4387F]">{t.recruit.cta.highlight}</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t.recruit.cta.description}
            </p>
            <Button 
              size="lg" 
              onTouchStart={() => setTouchedButton('cta-apply')}
              onTouchEnd={() => setTimeout(() => setTouchedButton(null), 300)}
              className={`gap-3 py-7 px-10 transition-all ${
                touchedButton === 'cta-apply' ? 'bg-[#FF8FB8]' : 'bg-[#D4387F]'
              } hover:bg-[#FF8FB8] text-white`}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              {t.recruit.apply}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
