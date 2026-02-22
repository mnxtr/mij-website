import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import {
  ArrowRight,
  Package,
  Users,
  Code,
  TrendingUp,
  Building2,
  Globe2,
  Zap,
  Shield,
  Award,
  Heart,
  ArrowUpRight,
  Calendar,
  Clock,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Sparkles
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';
import TextReveal from '../animations/TextReveal';
import Magnetic from '../animations/Magnetic';

export default function HomePage() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = getTranslation(language);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [smallImageIndex1, setSmallImageIndex1] = useState(0);
  const [smallImageIndex2, setSmallImageIndex2] = useState(0);

  // Hero image carousel (main large image)
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1583915223588-7d88ebf23414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMHNreWxpbmUlMjBuaWdodxlbnwxfHx8fDE3NjM0MDczMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Tokyo Night Skyline"
    },
    {
      url: "https://images.unsplash.com/photo-1645269298909-67e1c6d27499?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaGFrYSUyMGNpdHlzY2FwZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjM0NjMyODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Dhaka Architecture"
    },
    {
      url: "https://images.unsplash.com/photo-1760243875166-390e30ffe049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHByb2R1Y3RzJTIwZGlzcGxheXxlbnwxfHx8fDE3NjM0NjMyODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Japanese Products Display"
    },
    {
      url: "https://images.unsplash.com/photo-1732808460864-b8e5eb489a52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5nbGFkZXNoJTIwbGFuZHNjYXBlJTIwbmF0dXJlfGVufDF8fHx8MTc2MzQ2MzI4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Bangladesh Natural Landscape"
    },
    {
      url: "https://images.unsplash.com/photo-1703924684622-dd1bd445488a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbiUyMHN0cmVldCUyMHVyYmFufGVufDF8fHx8MTc2MzQ2MzI4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Japan Urban Streets"
    },
    {
      url: "https://images.unsplash.com/photo-1726315185844-b4cb8e95cab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGxvZ2lzdGljcyUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MzQ2Mzc1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Logistics Business"
    }
  ];

  // Small image carousel 1 (top right)
  const smallImages1 = [
    {
      url: "https://images.unsplash.com/photo-1627902314049-812a02602d22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHRlbXBsZSUyMHNocmluZXxlbnwxfHx8fDE3NjM0NjMyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Japanese Temple"
    },
    {
      url: "https://images.unsplash.com/photo-1741021632650-162065ae2b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5nbGFkZXNoJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYzNDYzMjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Bangladesh Building"
    },
    {
      url: "https://images.unsplash.com/photo-1752640099699-17e31af21a27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMHRvd2VyJTIwbGFuZG1hcmt8ZW58MXx8fHwxNzYzNDYzMjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Tokyo Tower Landmark"
    },
    {
      url: "https://images.unsplash.com/photo-1692818769925-6b815111c653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza3lzY3JhcGVyJTIwbW9kZXJuJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYzNDYzMjkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Modern Skyscraper"
    }
  ];

  // Small image carousel 2 (bottom left)
  const smallImages2 = [
    {
      url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjM0MDc5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Modern Office Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1742967416909-ffbceccbf4da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjaWxpdHklMjBjbGVhbnxlbnwxfHx8fDE3NjM0MDIxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Manufacturing Facility"
    },
    {
      url: "https://images.unsplash.com/photo-1648871647634-0c99b483cb63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMHNreWxpbmUlMjBjaXR5c2NhcGV8ZW58MXx8fHwxNzYzNDYzMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Tokyo Cityscape"
    },
    {
      url: "https://images.unsplash.com/photo-1638803512703-9bd638b8194d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaGFrYSUyMGJhbmdsYWRlc2glMjBjaXR5fGVufDF8fHx8MTc2MzQ2MzAyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Dhaka City View"
    }
  ];

  // Auto-rotate main image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev: number) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Auto-rotate small image 1
  useEffect(() => {
    const interval = setInterval(() => {
      setSmallImageIndex1((prev: number) => (prev + 1) % smallImages1.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [smallImages1.length]);

  // Auto-rotate small image 2
  useEffect(() => {
    const interval = setInterval(() => {
      setSmallImageIndex2((prev: number) => (prev + 1) % smallImages2.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [smallImages2.length]);

  const businesses = [
    {
      id: 'products',
      icon: Package,
      title: t.home.business.mijProducts.title,
      description: t.home.business.mijProducts.description,
      features: [t.home.business.mijProducts.feature1, t.home.business.mijProducts.feature2, t.home.business.mijProducts.feature3]
    },
    {
      id: 'hr',
      icon: Users,
      title: t.home.business.hrRecruitment.title,
      description: t.home.business.hrRecruitment.description,
      features: [t.home.business.hrRecruitment.feature1, t.home.business.hrRecruitment.feature2, t.home.business.hrRecruitment.feature3]
    },
    {
      id: 'it',
      icon: Code,
      title: t.home.business.itDigital.title,
      description: t.home.business.itDigital.description,
      features: [t.home.business.itDigital.feature1, t.home.business.itDigital.feature2, t.home.business.itDigital.feature3]
    },
    {
      id: 'consulting',
      icon: TrendingUp,
      title: t.home.business.businessConsulting.title,
      description: t.home.business.businessConsulting.description,
      features: [t.home.business.businessConsulting.feature1, t.home.business.businessConsulting.feature2, t.home.business.businessConsulting.feature3]
    },
  ];

  const stats = [
    { number: '23+', label: t.home.stats.clients, icon: Building2 },
    { number: '10+', label: t.home.stats.experience, icon: Award },
    { number: '98%', label: 'Loyalty', icon: Heart },
    { number: '2', label: t.home.stats.countries, icon: Globe2 },
  ];

  const values = [
    {
      icon: Zap,
      title: t.home.values.innovation.title,
      description: t.home.values.innovation.description
    },
    {
      icon: Shield,
      title: t.home.values.trust.title,
      description: t.home.values.trust.description
    },
    {
      icon: Globe2,
      title: t.home.values.global.title,
      description: t.home.values.global.description
    },
    {
      icon: Heart,
      title: t.home.values.people.title,
      description: t.home.values.people.description
    },
  ];

  return (
    <div className="w-full bg-background transition-colors duration-500 overflow-x-hidden">
      {/* Hero Section - Popping Colors & Premium Vibe */}
      <section className="relative min-h-[100vh] bg-background overflow-hidden flex items-center transition-colors duration-500 font-header">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.03, 0.05, 0.03]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
            className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]"
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-24 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-12"
              >
                {/* Main Heading */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <Badge variant="outline" className="px-6 py-2 border-primary/20 text-primary bg-primary/5 rounded-full mb-8 font-bold tracking-[0.2em] uppercase text-xs">
                      <Sparkles className="w-4 h-4 mr-3 inline" />
                      {t.home.business.badge}
                    </Badge>
                  </motion.div>

                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black leading-[0.9] tracking-tighter">
                    <TextReveal text={t.home.hero.tagline1} className="text-foreground" />
                    <TextReveal text={t.home.hero.tagline2} className="text-primary" delay={0.4} />
                    <br />
                    <div className="flex flex-wrap items-center">
                      <TextReveal text={t.home.hero.tagline3} className="text-foreground mr-6" delay={0.8} />
                      <div className="inline-flex items-center">
                        <TextReveal text={t.home.hero.tagline4} className="text-primary" delay={1.2} />
                        <motion.span
                          animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="ml-8 hidden md:inline-block text-6xl"
                        >
                          🚀
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-2xl md:text-3xl text-muted-foreground leading-relaxed max-w-2xl font-light font-body"
                >
                  {t.home.hero.description}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-wrap gap-8 pt-8"
                >
                  <Magnetic>
                    <Button
                      size="lg"
                      onClick={() => navigate('/business')}
                      className="bg-primary hover:bg-foreground hover:text-background text-white px-12 py-10 text-xl rounded-2xl shadow-2xl shadow-primary/30 transition-all duration-700 group font-bold font-header"
                    >
                      <span className="relative z-10 flex items-center gap-4">
                        {t.home.hero.exploreServices}
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-4 transition-transform duration-500" />
                      </span>
                    </Button>
                  </Magnetic>
                  <Magnetic>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => navigate('/contact')}
                      className="border-2 border-foreground hover:bg-foreground hover:text-background px-12 py-10 text-xl rounded-2xl transition-all duration-700 font-bold font-header bg-transparent"
                    >
                      {t.home.hero.getInTouch}
                    </Button>
                  </Magnetic>
                </motion.div>
              </motion.div>

              {/* Right Side - Dynamic Image Composition */}
              <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] flex items-center justify-center">
                {/* Decorative Circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-primary/10 rounded-full animate-[spin_30s_linear_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-border/50 rounded-full animate-[spin_20s_linear_infinite_reverse]" />

                {/* Main Image - Floating Glass Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 2 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                  whileHover={{ rotate: 0, scale: 1.02 }}
                  className="relative z-20 w-[280px] h-[400px] sm:w-[320px] sm:h-[450px] md:w-[380px] md:h-[550px] lg:w-[420px] lg:h-[600px] xl:w-[450px] xl:h-[650px]"
                >
                  <div className="w-full h-full bg-card p-4 rounded-[64px] shadow-2xl overflow-hidden relative group border-4 border-card/50 backdrop-blur-3xl">
                    <ImageWithFallback
                      src={heroImages[currentImageIndex]?.url || ''}
                      alt={heroImages[currentImageIndex]?.alt || ''}
                      className="w-full h-full object-cover rounded-[48px] transition-all duration-[2s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

                    {/* Floating Info Tag */}
                    <motion.div
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-16 -right-16 bg-card/80 backdrop-blur-2xl p-8 rounded-[40px] shadow-2xl border border-primary/20 max-w-[240px] z-30"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-3 h-3 bg-primary rounded-full animate-ping" />
                        <span className="text-xs font-black text-foreground uppercase tracking-[0.2em] font-header">Global Impact</span>
                      </div>
                      <p className="text-base text-muted-foreground font-light leading-relaxed font-body">Empowering visionaries across borders since 2014.</p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Secondary Images - Cascading Style */}
                <motion.div
                  initial={{ opacity: 0, x: 150 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -top-5 -right-5 sm:-top-8 sm:-right-8 lg:-top-10 lg:-right-10 w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 z-30"
                >
                  <div className="w-full h-full bg-card p-3 rounded-[40px] shadow-2xl overflow-hidden hover:scale-110 transition-transform duration-700 -rotate-12 hover:rotate-0 border-2 border-card/50">
                    <ImageWithFallback
                      src={smallImages1[smallImageIndex1]?.url || ''}
                      alt={smallImages1[smallImageIndex1]?.alt || ''}
                      className="w-full h-full object-cover rounded-[32px] transition-all duration-1000"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -150 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -bottom-10 -left-5 sm:-bottom-16 sm:-left-8 lg:-bottom-20 lg:-left-10 w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-64 lg:h-64 z-30"
                >
                  <div className="w-full h-full bg-card p-3 rounded-[48px] shadow-2xl overflow-hidden hover:scale-110 transition-transform duration-700 rotate-12 hover:rotate-0 border-2 border-card/50">
                    <ImageWithFallback
                      src={smallImages2[smallImageIndex2]?.url || ''}
                      alt={smallImages2[smallImageIndex2]?.alt || ''}
                      className="w-full h-full object-cover rounded-[36px] transition-all duration-1000"
                    />
                  </div>
                </motion.div>

                {/* Carousel Navigation Dots */}
                <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-card/30 backdrop-blur-2xl p-4 rounded-full border border-border/50 shadow-2xl">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`transition-all duration-700 ${currentImageIndex === index
                        ? 'w-12 h-3 bg-primary rounded-full shadow-lg shadow-primary/30'
                        : 'w-3 h-3 bg-muted-foreground/30 rounded-full hover:bg-primary/50'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Premium Horizontal Bar */}
      <section className="py-24 bg-background relative z-20 border-y border-border/50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <Magnetic>
                    <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary/30">
                      <Icon className="w-8 h-8 text-foreground group-hover:text-white transition-colors" />
                    </div>
                  </Magnetic>
                  <div className="text-6xl font-black text-foreground mb-2 font-header tracking-tighter group-hover:text-primary transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-[0.3em] font-header">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Areas - Premium Grid Layout */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-40 bg-muted/20 relative overflow-hidden transition-colors duration-500">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/[0.02] -skew-x-12 translate-x-1/4 pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-32"
          >
            <div className="flex items-center justify-center gap-6 mb-10">
              <div className="w-16 h-px bg-border" />
              <Badge variant="outline" className="px-6 py-2 border-border text-muted-foreground text-xs font-black tracking-[0.3em] uppercase rounded-full">
                {t.home.business.badge}
              </Badge>
              <div className="w-16 h-px bg-border" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-foreground mb-10 tracking-tighter leading-[0.9] font-header">
              {t.home.business.title}
            </h2>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed font-body">
              {t.home.business.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {businesses.map((business, index) => {
              const Icon = business.icon;
              return (
                <motion.div
                  key={business.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Card className="bg-card group cursor-pointer border-2 border-border p-12 rounded-[64px] hover:border-primary/50 hover:shadow-2xl transition-all duration-700 h-full flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />

                    <div className="flex items-start justify-between mb-12 relative z-10">
                      <Magnetic>
                        <div className="w-24 h-24 bg-muted border border-border rounded-3xl flex items-center justify-center transition-all duration-700 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-12 shadow-sm group-hover:shadow-xl group-hover:shadow-primary/40">
                          <Icon className="w-12 h-12 text-foreground transition-colors duration-500 group-hover:text-white" />
                        </div>
                      </Magnetic>
                      <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500">
                        <ArrowUpRight className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-all group-hover:rotate-45" />
                      </div>
                    </div>

                    <h3 className="text-4xl font-black mb-6 text-foreground group-hover:text-primary transition-colors font-header tracking-tight relative z-10">
                      {business.title}
                    </h3>

                    <p className="text-xl text-muted-foreground mb-10 leading-relaxed font-light font-body relative z-10">
                      {business.description}
                    </p>

                    <div className="mt-auto space-y-6 relative z-10">
                      <div className="h-px bg-border w-full mb-8 group-hover:bg-primary/20 transition-colors" />
                      {business.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-5 text-foreground/80 font-medium group/feat">
                          <div className="w-2.5 h-2.5 rounded-full bg-primary/30 group-hover:bg-primary group-hover:scale-150 transition-all duration-500" />
                          <span className="group-hover:translate-x-2 transition-transform duration-500 font-body text-lg">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-32 text-center"
          >
            <Magnetic>
              <Button
                size="lg"
                onClick={() => navigate('/business')}
                className="bg-primary hover:bg-foreground hover:text-background text-white gap-4 px-16 py-12 text-2xl rounded-3xl transition-all duration-700 shadow-2xl shadow-primary/30 font-bold font-header"
              >
                {t.home.business.viewAllServices}
                <ArrowRight className="w-7 h-7 group-hover:translate-x-3 transition-transform duration-500" />
              </Button>
            </Magnetic>
          </motion.div>
        </div>
      </section>

      {/* Building Bridges Banner Section - Immersive Design */}
      <section className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760842840049-ac860fd95766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMGNpdHlzY2FwZSUyMHBhbm9yYW1hJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MzQ2NTMxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Tokyo Cityscape Panorama"
            className="w-full h-full object-cover grayscale brightness-[0.4] contrast-125 transition-transform duration-[15s] hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-6xl mx-auto space-y-16"
          >
            <div className="w-32 h-2 bg-primary mx-auto rounded-full shadow-2xl shadow-primary/50 animate-pulse" />

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-black text-white leading-[0.9] tracking-tighter font-header">
              {t.home.banner.title}
            </h2>

            <p className="text-2xl md:text-4xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light font-body">
              {t.home.banner.description}
            </p>

            <div className="flex flex-wrap gap-10 justify-center pt-10">
              <Magnetic>
                <Button
                  size="lg"
                  onClick={() => navigate('/about')}
                  className="bg-primary hover:bg-white hover:text-primary text-white px-16 py-12 text-2xl rounded-3xl transition-all duration-700 shadow-2xl shadow-primary/50 group font-bold font-header"
                >
                  {t.home.banner.learnStory}
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-4 transition-transform duration-500" />
                </Button>
              </Magnetic>
              <Magnetic>
                <Button
                  size="lg"
                  onClick={() => navigate('/business')}
                  variant="outline"
                  className="border-4 border-white text-white hover:bg-white hover:text-gray-950 px-16 py-12 text-2xl rounded-3xl transition-all duration-700 font-bold font-header"
                >
                  {t.home.banner.exploreSolutions}
                </Button>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section - Modern Icon Grid */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-40 bg-background relative transition-colors duration-500">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-32"
          >
            <Badge variant="outline" className="px-6 py-2 border-primary/20 text-primary bg-primary/5 rounded-full mb-10 uppercase tracking-[0.3em] font-black text-xs font-header">
              {t.home.values.badge}
            </Badge>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-foreground mb-10 tracking-tighter leading-[0.9] font-header">
              {t.home.values.title}
            </h2>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed font-body">
              {t.home.values.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Card className="group h-full p-12 rounded-[56px] border-2 border-border bg-muted/20 hover:bg-card hover:shadow-2xl hover:border-primary/30 transition-all duration-700 text-center flex flex-col items-center">
                    <Magnetic>
                      <div className="w-28 h-28 bg-card border-2 border-border rounded-[32px] shadow-xl flex items-center justify-center mb-12 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-primary transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-primary/40 group-hover:border-primary">
                        <Icon className="w-14 h-14 text-foreground group-hover:text-white transition-colors duration-500" />
                      </div>
                    </Magnetic>
                    <h3 className="text-3xl font-black mb-6 text-foreground group-hover:text-primary transition-colors font-header tracking-tight">
                      {value.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed font-light font-body">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest News Section - Premium Content Cards */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-40 bg-muted/20 border-y border-border/50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:row md:items-end justify-between gap-12 mb-32"
          >
            <div className="max-w-4xl">
              <Badge variant="outline" className="px-6 py-2 border-primary/20 text-primary bg-primary/5 rounded-full mb-10 font-black tracking-[0.3em] uppercase text-xs font-header">
                {t.home.news.badge}
              </Badge>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-foreground tracking-tighter leading-[0.9] font-header">
                {t.home.news.title}
              </h2>
            </div>
            <Magnetic>
              <Button
                variant="outline"
                onClick={() => navigate('/news')}
                className="border-4 border-foreground hover:bg-foreground hover:text-background px-12 py-10 rounded-2xl transition-all duration-700 font-black font-header text-xl bg-transparent"
              >
                {t.home.news.viewAll}
                <ArrowRight className="w-6 h-6 ml-4 group-hover:translate-x-3 transition-transform duration-500" />
              </Button>
            </Magnetic>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Featured news card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <Card
                onClick={() => navigate('/news/1')}
                className="group cursor-pointer relative overflow-hidden rounded-[64px] shadow-2xl transition-all duration-1000 h-full min-h-[650px] border-none"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1557426282-08101666870a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjB0b2t5b3xlbnwxfHx8fDE3NjM0MDc5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Featured News"
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-16 w-full">
                  <div className="flex items-center gap-6 mb-8">
                    <span className="px-6 py-2 bg-primary text-white text-xs font-black rounded-full uppercase tracking-[0.2em] shadow-2xl shadow-primary/50 font-header">
                      Featured
                    </span>
                    <span className="text-gray-300 text-sm font-medium flex items-center gap-3 font-header">
                      <Calendar className="w-5 h-5 text-primary" />
                      March 15, 2024
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-8 group-hover:text-primary transition-colors leading-[1.1] font-header tracking-tight">
                    Expanding our Digital Footprint in the South Asian Market
                  </h3>
                  <p className="text-gray-300 text-xl mb-12 line-clamp-2 font-light max-w-2xl font-body">
                    Our latest initiative aimed at bringing cutting-edge technology solutions to growing businesses in Bangladesh...
                  </p>
                  <div className="flex items-center text-primary font-black group text-xl font-header uppercase tracking-widest">
                    Read Story
                    <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center ml-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:translate-x-4">
                      <ArrowRight className="w-7 h-7" />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Side news list */}
            <div className="lg:col-span-5 space-y-10">
              {[2, 3, 4].map((id, index) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => navigate(`/news/${id}`)}
                  className="group cursor-pointer bg-card border border-border p-8 rounded-[48px] hover:border-primary/50 hover:shadow-2xl transition-all duration-700 flex gap-8 items-center"
                >
                  <div className="w-32 h-32 rounded-[32px] overflow-hidden shadow-xl flex-shrink-0 border-2 border-border group-hover:border-primary/30 transition-all duration-700">
                    <ImageWithFallback
                      src={`https://picsum.photos/seed/news${id}/300/300`}
                      alt={`News ${id}`}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-muted-foreground text-xs font-black uppercase tracking-[0.2em] mb-3 flex items-center gap-3 font-header">
                      <Clock className="w-4 h-4 text-primary" />
                      2 Days ago
                    </div>
                    <h4 className="text-2xl font-black text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug font-header tracking-tight">
                      Strategic Partnership with Global Innovators {id}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Link - High Impact */}
      <section className="py-32 bg-foreground text-background relative overflow-hidden transition-colors duration-500">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black mb-20 tracking-tighter leading-[0.9] font-header">
              Join our <span className="text-primary">Global</span> Community
            </h2>
            <div className="flex flex-wrap justify-center gap-12">
              {[
                { icon: Facebook, name: 'Facebook' },
                { icon: Linkedin, name: 'LinkedIn' },
                { icon: Twitter, name: 'Twitter' },
                { icon: Instagram, name: 'Instagram' }
              ].map((social, i) => (
                <Magnetic key={i}>
                  <motion.a
                    href="#"
                    whileHover={{ y: -10 }}
                    className="w-24 h-24 bg-background/5 backdrop-blur-3xl rounded-[36px] border border-background/10 flex items-center justify-center hover:bg-primary transition-all duration-700 shadow-2xl group"
                  >
                    <social.icon className="w-10 h-10 text-background group-hover:text-white transition-colors duration-500" />
                  </motion.a>
                </Magnetic>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ready to Connect CTA Section - High Impact */}
      <section className="relative py-20 sm:py-28 md:py-36 lg:py-48 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-6xl mx-auto"
          >
            <Badge variant="outline" className="px-8 py-3 border-primary text-primary bg-primary/5 rounded-full mb-12 font-black uppercase tracking-[0.3em] text-sm font-header">
              The Future Awaits
            </Badge>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-black text-foreground mb-12 tracking-tighter leading-[0.85] font-header">
              {t.home.cta.title}
            </h2>
            <p className="text-3xl md:text-4xl text-muted-foreground max-w-4xl mx-auto mb-20 font-light leading-relaxed font-body">
              {t.home.cta.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-10 justify-center">
              <Magnetic>
                <Button
                  size="lg"
                  onClick={() => navigate('/contact')}
                  className="bg-primary hover:bg-foreground hover:text-background text-white px-20 py-14 text-3xl rounded-[36px] transition-all duration-700 shadow-2xl shadow-primary/50 group font-black font-header min-w-[350px]"
                >
                  <span className="flex items-center gap-6">
                    Start Project
                    <ArrowRight className="w-10 h-10 group-hover:translate-x-6 transition-transform duration-700" />
                  </span>
                </Button>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}