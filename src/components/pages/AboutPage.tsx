import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Target, Users, Globe2, Heart, Award, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';

export default function AboutPage() {
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

  const leadership = [
    {
      name: 'Takeshi Yamamoto',
      position: 'Founder & CEO',
      bio: 'Visionary leader with 20+ years in international business',
    },
    {
      name: 'Sarah Rahman',
      position: 'COO',
      bio: 'Operations expert bridging Japan-Bangladesh markets',
    },
    {
      name: 'Kenji Tanaka',
      position: 'CTO',
      bio: 'Technology innovator driving digital transformation',
    },
    {
      name: 'Fatima Hassan',
      position: 'HR Director',
      bio: 'Talent acquisition specialist with global expertise',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: t.about.coreValues.culturalHarmony.title,
      description: t.about.coreValues.culturalHarmony.description,
    },
    {
      icon: TrendingUp,
      title: t.about.coreValues.innovationFirst.title,
      description: t.about.coreValues.innovationFirst.description,
    },
    {
      icon: Users,
      title: t.about.coreValues.peopleFocused.title,
      description: t.about.coreValues.peopleFocused.description,
    },
    {
      icon: Award,
      title: t.about.coreValues.excellence.title,
      description: t.about.coreValues.excellence.description,
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gray-50">
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
                {t.about.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              {t.about.hero.title} <span className="text-[#D4387F]">{t.about.hero.highlight}</span>
              <br />{t.about.hero.subtitle}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t.about.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card 
                className={`border-2 h-full transition-all group ${
                  touchedCard === 'mission' ? 'border-[#D4387F] shadow-lg' : 'border-gray-200'
                } hover:border-[#D4387F]`}
                onTouchStart={() => setTouchedCard('mission')}
                onTouchEnd={() => setTimeout(() => setTouchedCard(null), 300)}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <CardContent className="p-10 space-y-6">
                  <div className={`w-16 h-16 border-2 border-gray-900 rounded-xl flex items-center justify-center transition-all ${
                    touchedCard === 'mission' ? 'bg-[#D4387F] border-[#D4387F]' : ''
                  } group-hover:bg-[#D4387F] group-hover:border-[#D4387F]`}>
                    <Target className={`w-8 h-8 transition-colors ${
                      touchedCard === 'mission' ? 'text-white' : 'text-gray-900'
                    } group-hover:text-white`} />
                  </div>
                  <h2 className={`text-3xl font-bold transition-colors ${
                    touchedCard === 'mission' ? 'text-[#D4387F]' : 'text-gray-900'
                  } group-hover:text-[#D4387F]`}>{t.about.mission.badge}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {t.about.mission.description}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {t.about.mission.values}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card 
                className={`border-2 h-full transition-all group ${
                  touchedCard === 'vision' ? 'border-[#D4387F] shadow-lg' : 'border-gray-200'
                } hover:border-[#D4387F]`}
                onTouchStart={() => setTouchedCard('vision')}
                onTouchEnd={() => setTimeout(() => setTouchedCard(null), 300)}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <CardContent className="p-10 space-y-6">
                  <div className={`w-16 h-16 border-2 border-gray-900 rounded-xl flex items-center justify-center transition-all ${
                    touchedCard === 'vision' ? 'bg-[#D4387F] border-[#D4387F]' : ''
                  } group-hover:bg-[#D4387F] group-hover:border-[#D4387F]`}>
                    <Globe2 className={`w-8 h-8 transition-colors ${
                      touchedCard === 'vision' ? 'text-white' : 'text-gray-900'
                    } group-hover:text-white`} />
                  </div>
                  <h2 className={`text-3xl font-bold transition-colors ${
                    touchedCard === 'vision' ? 'text-[#D4387F]' : 'text-gray-900'
                  } group-hover:text-[#D4387F]`}>{t.about.vision.title}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {t.about.vision.description}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {t.about.vision.future}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Japan × Bangladesh */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gray-900" />
              <Badge variant="outline" className="border-gray-300 text-gray-700 text-xs tracking-wider uppercase">
                {t.about.synergy.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t.about.synergy.title} <span className="text-[#D4387F]">{t.about.synergy.highlight}</span>
            </h2>
            <p className="text-xl text-gray-600">
              {t.about.synergy.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-10 shadow-sm border-2 border-gray-200 hover:border-[#D4387F] hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D4387F]/10 transition-colors">
                <span className="text-3xl">🇯🇵</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">{t.about.synergy.japan.title}</h3>
              <ul className="space-y-4">
                {t.about.synergy.japan.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-[#D4387F] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-10 shadow-sm border-2 border-gray-200 hover:border-[#D4387F] hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D4387F]/10 transition-colors">
                <span className="text-3xl">🇧🇩</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">{t.about.synergy.bangladesh.title}</h3>
              <ul className="space-y-4">
                {t.about.synergy.bangladesh.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-[#D4387F] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
                {t.about.coreValues.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t.about.coreValues.title} <span className="text-[#D4387F]">{t.about.coreValues.highlight}</span>
            </h2>
            <p className="text-xl text-gray-600">
              {t.about.coreValues.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              const isTouched = touchedCard === `value-${index}`;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onTouchStart={() => setTouchedCard(`value-${index}`)}
                  onTouchEnd={() => setTimeout(() => setTouchedCard(null), 300)}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <Card 
                    className={`border-2 text-center h-full transition-all group cursor-pointer ${
                      isTouched ? 'border-[#D4387F] shadow-lg' : 'border-gray-200'
                    } hover:border-[#D4387F] hover:shadow-lg`}
                  >
                    <CardContent className="p-8 space-y-4">
                      <div className={`w-16 h-16 border-2 rounded-xl flex items-center justify-center mx-auto transition-all ${
                        isTouched ? 'bg-[#D4387F] border-[#D4387F]' : 'border-gray-900'
                      } group-hover:bg-[#D4387F] group-hover:border-[#D4387F]`}>
                        <Icon className={`w-8 h-8 transition-colors ${
                          isTouched ? 'text-white' : 'text-gray-900'
                        } group-hover:text-white`} />
                      </div>
                      <h3 className={`text-xl font-bold transition-colors ${
                        isTouched ? 'text-[#D4387F]' : 'text-gray-900'
                      } group-hover:text-[#D4387F]`}>{value.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
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
                {t.about.leadership.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t.about.leadership.title} <span className="text-[#D4387F]">{t.about.leadership.highlight}</span> {t.about.leadership.subtitle}
            </h2>
            <p className="text-xl text-gray-600">
              {t.about.leadership.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                name: 'Yohei Sato',
                position: 'Owner & Founder',
                bio: 'Owner & Founder of This Project. General manager on the Japanese side.'
              },
              {
                name: 'Rhythm Shahnil Bashar',
                position: 'Bangladeshi General Manager',
                bio: 'Bangladeshi General Manager. Head of Sales & Legal. Professional in Japanese language.'
              },
              {
                name: 'Mohammad Muhtasim Newaz',
                position: 'Head of Technology & Marketing',
                bio: 'Head of Technology & Marketing. Professional in Japanese language.'
              },
              {
                name: 'Maida Khan',
                position: 'Head of Product Planning & Promotion',
                bio: 'Head of Product Planning & Promotion. Professional in Japanese language.'
              }
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onViewportEnter={() => registerImage(`leader-${index}`)}
                onViewportLeave={() => unregisterImage(`leader-${index}`)}
              >
                <Card 
                  className={`border-2 overflow-hidden transition-all group ${
                    touchedButton === `leader-${index}` ? 'border-[#D4387F] shadow-lg' : 'border-gray-200'
                  } hover:border-[#D4387F] hover:shadow-lg`}
                >
                  <div 
                    className="relative h-56 bg-gradient-to-br from-[#D4387F]/10 to-[#D4387F]/20 overflow-hidden"
                  >
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjM0MDc5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt={leader.name}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        animatedImages[`leader-${index}`] ? 'grayscale-0' : 'grayscale'
                      } group-hover:grayscale-0`}
                      onTouchStart={() => setTouchedButton(`leader-${index}`)}
                      onTouchEnd={() => setTimeout(() => setTouchedButton(null), 500)}
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                    <p className="text-sm text-[#D4387F] font-semibold mb-3">{leader.position}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{leader.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}