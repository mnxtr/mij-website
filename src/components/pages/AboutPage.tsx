import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Target, Users, Globe2, Heart, Award, TrendingUp } from 'lucide-react';
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

  const leaders = [
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
  ];

  return (
    <div className="w-full bg-background transition-colors duration-500 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 bg-background overflow-hidden">
        {/* Floating background elements for premium feel */}
        <FloatingShape className="w-96 h-96 bg-primary/15 -top-10 -left-10" />
        <FloatingShape className="w-[500px] h-[500px] bg-primary/10 -bottom-20 -right-20" delay={2} />
        <FloatingShape className="w-64 h-64 bg-primary/5 top-40 right-1/4" delay={4} />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-4 mb-12"
            >
              <div className="w-16 h-px bg-primary/20" />
              <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5 px-6 py-2 text-xs tracking-[0.3em] uppercase rounded-full font-bold">
                {t.about.badge}
              </Badge>
              <div className="w-16 h-px bg-primary/20" />
            </motion.div>

            <h1 className="text-7xl md:text-9xl font-black mb-12 leading-[0.9] tracking-tighter text-foreground">
              <TextReveal text={t.about.hero.title} />
              <div className="flex flex-wrap justify-center gap-x-6">
                <TextReveal text={t.about.hero.highlight} className="text-primary" delay={0.5} />
                <TextReveal text={t.about.hero.subtitle} delay={0.8} />
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-3xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light"
            >
              {t.about.hero.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.3 } },
              hidden: {}
            }}
            className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto"
          >
            {[
              { id: 'mission', icon: Target, title: t.about.mission.badge, desc: t.about.mission.description, sub: t.about.mission.values, rotate: 12 },
              { id: 'vision', icon: Globe2, title: t.about.vision.title, desc: t.about.vision.description, sub: t.about.vision.future, rotate: -12 }
            ].map((item) => (
              <motion.div
                key={item.id}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 60 }
                }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card
                  className={`border-border group overflow-hidden bg-background/50 backdrop-blur-xl rounded-[48px] border-2 transition-all duration-700 ${touchedCard === item.id ? 'border-primary shadow-2xl shadow-primary/10' : 'hover:border-primary hover:shadow-2xl hover:shadow-primary/5'}`}
                  onTouchStart={() => setTouchedCard(item.id)}
                  onTouchEnd={() => setTimeout(() => setTouchedCard(null), 300)}
                >
                  <CardContent className="p-16 space-y-10">
                    <div className={`w-24 h-24 border-2 border-border rounded-[32px] flex items-center justify-center transition-all duration-700 ${touchedCard === item.id ? 'bg-primary border-primary scale-110 shadow-xl shadow-primary/30' : 'group-hover:bg-primary group-hover:border-primary group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary/30'}`}
                      style={{ transform: touchedCard === item.id ? `rotate(${item.rotate}deg)` : undefined }}>
                      <item.icon className={`w-12 h-12 transition-colors duration-500 ${touchedCard === item.id ? 'text-white' : 'text-foreground group-hover:text-white'}`} />
                    </div>
                    <h2 className={`text-5xl font-black transition-colors duration-500 ${touchedCard === item.id ? 'text-primary' : 'text-foreground group-hover:text-primary'} tracking-tight`}>{item.title}</h2>
                    <div className="space-y-6">
                      <p className="text-muted-foreground text-xl leading-relaxed font-light font-body">
                        {item.desc}
                      </p>
                      <p className="text-muted-foreground text-xl leading-relaxed font-light font-body">
                        {item.sub}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Japan × Bangladesh */}
      <section className="py-32 bg-muted/20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto text-center mb-24"
          >
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-16 h-px bg-border" />
              <Badge variant="outline" className="border-border text-muted-foreground text-xs tracking-[0.2em] uppercase px-4 py-1">
                {t.about.synergy.badge}
              </Badge>
              <div className="w-16 h-px bg-border" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-foreground tracking-tighter">
              {t.about.synergy.title} <span className="text-primary">{t.about.synergy.highlight}</span>
            </h2>
            <p className="text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
              {t.about.synergy.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {[
              { flag: '🇯🇵', title: t.about.synergy.japan.title, items: t.about.synergy.japan.items },
              { flag: '🇧🇩', title: t.about.synergy.bangladesh.title, items: t.about.synergy.bangladesh.items }
            ].map((country, idx) => (
              <motion.div
                key={country.title}
                initial={{ opacity: 0, x: idx === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-background dark:bg-card rounded-[48px] p-16 shadow-sm border border-border hover:border-primary hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group"
              >
                <div className="w-20 h-20 bg-primary/5 rounded-[24px] flex items-center justify-center mb-10 group-hover:bg-primary/10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-700">
                  <span className="text-5xl">{country.flag}</span>
                </div>
                <h3 className="text-3xl font-black mb-8 text-foreground tracking-tight">{country.title}</h3>
                <ul className="space-y-5">
                  {country.items.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-4 group/item">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1 transition-colors group-hover/item:bg-primary">
                        <Award className="w-3.5 h-3.5 text-primary group-hover/item:text-white transition-colors" />
                      </div>
                      <span className="text-muted-foreground text-lg font-light leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-32 bg-background relative transition-colors duration-500">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-24"
          >
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-16 h-px bg-border" />
              <Badge variant="outline" className="border-border text-muted-foreground text-xs tracking-[0.2em] uppercase px-4 py-1">
                {t.about.coreValues.badge}
              </Badge>
              <div className="w-16 h-px bg-border" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-foreground tracking-tighter">
              {t.about.coreValues.title} <span className="text-primary">{t.about.coreValues.highlight}</span>
            </h2>
            <p className="text-2xl text-muted-foreground font-light leading-relaxed">
              {t.about.coreValues.description}
            </p>
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
            {values.map((value, index) => {
              const Icon = value.icon;
              const isTouched = touchedCard === `value-${index}`;
              return (
                <motion.div
                  key={index}
                  variants={{
                    visible: { opacity: 1, y: 0, scale: 1 },
                    hidden: { opacity: 0, y: 40, scale: 0.9 }
                  }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  onTouchStart={() => setTouchedCard(`value-${index}`)}
                  onTouchEnd={() => setTimeout(() => setTouchedCard(null), 300)}
                  className="h-full"
                >
                  <Card
                    className={`border-2 text-center h-full transition-all duration-700 group cursor-pointer rounded-[40px] overflow-hidden ${isTouched ? 'border-primary shadow-2xl shadow-primary/10 bg-primary/5' : 'border-border bg-background hover:border-primary hover:shadow-2xl hover:shadow-primary/5'}`}
                  >
                    <CardContent className="p-12 space-y-8">
                      <Magnetic>
                        <div className={`w-24 h-24 border-2 rounded-[28px] flex items-center justify-center mx-auto transition-all duration-700 ${isTouched ? 'bg-primary border-primary scale-110 rotate-6 shadow-xl shadow-primary/30' : 'border-border bg-background shadow-sm group-hover:bg-primary group-hover:border-primary group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl group-hover:shadow-primary/30'}`}>
                          <Icon className={`w-12 h-12 transition-colors duration-500 ${isTouched ? 'text-white' : 'text-foreground group-hover:text-white'}`} />
                        </div>
                      </Magnetic>
                      <h3 className={`text-3xl font-black transition-colors duration-500 ${isTouched ? 'text-primary' : 'text-foreground group-hover:text-primary'} tracking-tight`}>{value.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed font-light font-body">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-32 bg-background transition-colors duration-500">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-24"
          >
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-16 h-px bg-border" />
              <Badge variant="outline" className="border-border text-muted-foreground text-xs tracking-[0.2em] uppercase px-4 py-1">
                {t.about.leadership.badge}
              </Badge>
              <div className="w-16 h-px bg-border" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-foreground tracking-tighter">
              {t.about.leadership.title} <span className="text-primary">{t.about.leadership.highlight}</span> {t.about.leadership.subtitle}
            </h2>
            <p className="text-2xl text-muted-foreground font-light leading-relaxed">
              {t.about.leadership.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                onViewportEnter={() => registerImage(`leader-${index}`)}
                onViewportLeave={() => unregisterImage(`leader-${index}`)}
              >
                <Card
                  className={`border-2 overflow-hidden transition-all duration-700 group bg-background rounded-[40px] ${touchedButton === `leader-${index}` ? 'border-primary shadow-2xl shadow-primary/20' : 'border-border hover:border-primary hover:shadow-2xl hover:shadow-primary/10'}`}
                >
                  <div className="relative h-72 bg-muted overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjM0MDc5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt={leader.name}
                      className={`w-full h-full object-cover transition-all duration-[1.5s] ease-[0.16, 1, 0.3, 1] ${animatedImages[`leader-${index}`] ? 'grayscale-0 scale-105' : 'grayscale scale-100'} group-hover:grayscale-0 group-hover:scale-110`}
                      onTouchStart={() => setTouchedButton(`leader-${index}`)}
                      onTouchEnd={() => setTimeout(() => setTouchedButton(null), 500)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                  <CardContent className="p-10">
                    <h3 className="text-3xl font-black text-foreground mb-1 tracking-tight">{leader.name}</h3>
                    <p className="text-sm text-primary font-bold mb-5 uppercase tracking-widest">{leader.position}</p>
                    <p className="text-lg text-muted-foreground leading-relaxed font-light font-body">{leader.bio}</p>
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