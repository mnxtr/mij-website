import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
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
      url: "https://images.unsplash.com/photo-1638803512703-9bd638b8194d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaGFrYSUyMGJhbmdsYWRlc2glMjBjaXR5fGVufDF8fHx8MTc2MzQ2MzAyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
      icon: Package,
      title: t.home.business.mijProducts.title,
      description: t.home.business.mijProducts.description,
      features: [t.home.business.mijProducts.feature1, t.home.business.mijProducts.feature2, t.home.business.mijProducts.feature3]
    },
    {
      icon: Users,
      title: t.home.business.hrRecruitment.title,
      description: t.home.business.hrRecruitment.description,
      features: [t.home.business.hrRecruitment.feature1, t.home.business.hrRecruitment.feature2, t.home.business.hrRecruitment.feature3]
    },
    {
      icon: Code,
      title: t.home.business.itDigital.title,
      description: t.home.business.itDigital.description,
      features: [t.home.business.itDigital.feature1, t.home.business.itDigital.feature2, t.home.business.itDigital.feature3]
    },
    {
      icon: TrendingUp,
      title: t.home.business.businessConsulting.title,
      description: t.home.business.businessConsulting.description,
      features: [t.home.business.businessConsulting.feature1, t.home.business.businessConsulting.feature2, t.home.business.businessConsulting.feature3]
    },
  ];

  const stats = [
    { number: '23+', label: t.home.stats.clients, icon: Building2 },
    { number: '10+', label: t.home.stats.experience, icon: Award },
    { number: '23+', label: t.home.stats.clients, icon: Building2 },
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
    <div className="w-full bg-white">
      {/* Hero Section - Popping Colors & Premium Vibe */}
      <section className="relative min-h-[95vh] bg-white overflow-hidden flex items-center">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.02, 0.04, 0.02]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
            className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-[#FF6699]/20 rounded-full blur-[100px]"
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-10"
              >
                {/* Main Heading */}
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <Badge variant="outline" className="px-4 py-1.5 border-primary/20 text-primary bg-primary/5 rounded-full mb-6 animate-fade-in">
                      <Sparkles className="w-3.5 h-3.5 mr-2 inline" />
                      {t.home.business.badge}
                    </Badge>
                  </motion.div>

                  <div className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight">
                    <TextReveal text={t.home.hero.tagline1} className="text-gray-950 mb-2" />
                    <TextReveal text={t.home.hero.tagline2} className="text-gradient drop-shadow-sm" delay={0.4} />
                    <br />
                    <div className="flex flex-wrap items-center">
                      <TextReveal text={t.home.hero.tagline3} className="text-gray-950 mr-4" delay={0.8} />
                      <div className="inline-flex items-center">
                        <TextReveal text={t.home.hero.tagline4} className="text-gradient drop-shadow-sm" delay={1.2} />
                        <motion.span
                          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="ml-4 hidden md:inline-block"
                        >
                          🚀
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                  className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl font-light"
                >
                  {t.home.hero.description}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2.0 }}
                  className="flex flex-wrap gap-5 pt-4"
                >
                  <Magnetic>
                    <Button
                      size="lg"
                      onClick={() => navigate('/business')}
                      className="bg-primary hover:bg-primary/90 text-white px-10 py-8 text-lg rounded-2xl shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300 group overflow-hidden relative"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        {t.home.hero.exploreServices}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </Button>
                  </Magnetic>
                  <Magnetic>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => navigate('/contact')}
                      className="border-2 border-gray-950 px-10 py-8 text-lg rounded-2xl hover:bg-gray-950 hover:text-white transition-all duration-300 font-semibold"
                    >
                      {t.home.hero.getInTouch}
                    </Button>
                  </Magnetic>
                </motion.div>

                {/* Quick Stats Overlay (Floating Style) */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="grid grid-cols-2 gap-4 max-w-md pt-6"
                >
                  {stats.slice(0, 2).map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={index}
                        className="glass-card p-6 rounded-3xl hover:border-primary/30 transition-all group cursor-pointer border border-gray-100"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-3xl font-extrabold text-gray-950 mb-1">
                          {stat.number}
                        </div>
                        <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                          {stat.label}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </motion.div>

              {/* Right Side - Dynamic Image Composition */}
              <div className="relative h-[650px] lg:flex items-center justify-center hidden">
                {/* Decorative Circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-primary/10 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-gray-200 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                {/* Main Image - Floating Glass Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                  className="relative z-20 w-[420px] h-[550px] rotate-2 hover:rotate-0 transition-transform duration-700"
                >
                  <div className="w-full h-full bg-white p-3 rounded-[40px] shadow-2xl overflow-hidden relative group">
                    <ImageWithFallback
                      src={heroImages[currentImageIndex]?.url || ''}
                      alt={heroImages[currentImageIndex]?.alt || ''}
                      className="w-full h-full object-cover rounded-[32px] transition-all duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                    {/* Floating Info Tag */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl glass-card border-primary/20 max-w-[200px]"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs font-bold text-gray-800 uppercase tracking-widest">Live Solutions</span>
                      </div>
                      <p className="text-sm text-gray-600 font-medium leading-snug">Empowering businesses across borders.</p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Secondary Images - Cascading Style */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="absolute -top-10 -right-10 w-44 h-44 z-30"
                >
                  <div className="w-full h-full bg-white p-2 rounded-3xl shadow-xl overflow-hidden hover:scale-110 transition-transform duration-500 -rotate-6 hover:rotate-0">
                    <ImageWithFallback
                      src={smallImages1[smallImageIndex1]?.url || ''}
                      alt={smallImages1[smallImageIndex1]?.alt || ''}
                      className="w-full h-full object-cover rounded-2xl transition-all duration-700 hover:scale-105"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute -bottom-10 -left-10 w-56 h-56 z-30"
                >
                  <div className="w-full h-full bg-white p-2 rounded-[32px] shadow-xl overflow-hidden hover:scale-110 transition-transform duration-500 rotate-6 hover:rotate-0">
                    <ImageWithFallback
                      src={smallImages2[smallImageIndex2]?.url || ''}
                      alt={smallImages2[smallImageIndex2]?.alt || ''}
                      className="w-full h-full object-cover rounded-[24px] transition-all duration-700 hover:scale-105"
                    />
                  </div>
                </motion.div>

                {/* Carousel Navigation Dots (Floating) */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white/80 backdrop-blur-md p-3 rounded-full border border-gray-100 shadow-lg">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`transition-all duration-500 ${currentImageIndex === index
                        ? 'w-10 h-2.5 bg-primary rounded-full'
                        : 'w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-primary/50'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Business Areas - Premium Grid Layout */}
      <section className="py-32 bg-gray-50/50 relative overflow-hidden">
        {/* Decorative Background for Cascading Effect */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1 bg-primary/30"
              />
              <Badge variant="outline" className="px-5 py-2 border-primary/20 text-primary bg-primary/5 rounded-full text-xs font-bold tracking-widest uppercase">
                {t.home.business.badge}
              </Badge>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1 bg-primary/30"
              />
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-gray-950 mb-8 tracking-tight">
              {t.home.business.title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 max-w-4xl mx-auto font-light leading-relaxed">
              {t.home.business.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {businesses.map((business, index) => {
              const Icon = business.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group"
                >
                  <div className="bg-white p-1 pb-1 rounded-[40px] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                    <div className="bg-white p-10 rounded-[38px] transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-primary/5 h-full flex flex-col">
                      {/* Floating Icon Container */}
                      <div className="flex items-start justify-between mb-10">
                        <Magnetic>
                          <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-6 shadow-sm group-hover:shadow-primary/40">
                            <Icon className="w-10 h-10 text-gray-950 transition-colors duration-500 group-hover:text-white" />
                          </div>
                        </Magnetic>
                        <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                          <ArrowUpRight className="w-6 h-6 text-gray-300 group-hover:text-primary transition-colors" />
                        </div>
                      </div>

                      <h3 className="text-3xl font-extrabold mb-5 text-gray-950 group-hover:text-primary transition-colors">
                        {business.title}
                      </h3>

                      <p className="text-lg text-gray-500 mb-8 leading-relaxed font-light">
                        {business.description}
                      </p>

                      <div className="mt-auto space-y-4">
                        <div className="h-px bg-gray-100 w-full mb-6 group-hover:bg-primary/10 transition-colors" />
                        {business.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-4 text-gray-700 font-medium group/feat">
                            <div className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary group-hover:scale-125 transition-all" />
                            <span className="group-hover:translate-x-1 transition-transform">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <Button
              size="lg"
              onClick={() => navigate('/business')}
              className="bg-gray-950 hover:bg-primary text-white gap-3 px-12 py-8 text-lg rounded-2xl transition-all duration-300 shadow-xl"
            >
              {t.home.business.viewAllServices}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>


      {/* Building Bridges Banner Section - Immersive Design */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Overlay with Parallax-like feel */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760842840049-ac860fd95766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMGNpdHlzY2FwZSUyMHBhbm9yYW1hJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MzQ2NTMxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Tokyo Cityscape Panorama"
            className="w-full h-full object-cover grayscale brightness-50 contrast-125 transition-transform duration-[10s] hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-transparent to-gray-950/80" />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto space-y-12"
          >
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full shadow-lg shadow-primary/40 animate-pulse" />

            <h2 className="text-6xl md:text-8xl font-black text-white leading-tight tracking-tighter">
              {t.home.banner.title}
            </h2>

            <p className="text-xl md:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              {t.home.banner.description}
            </p>

            <div className="flex flex-wrap gap-8 justify-center pt-8">
              <Button
                size="lg"
                onClick={() => navigate('/about')}
                className="bg-primary hover:bg-white hover:text-primary text-white px-12 py-8 text-xl rounded-2xl transition-all duration-500 shadow-2xl shadow-primary/40 group font-bold"
              >
                {t.home.banner.learnStory}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button
                size="lg"
                onClick={() => navigate('/business')}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-950 px-12 py-8 text-xl rounded-2xl transition-all duration-500 font-bold"
              >
                {t.home.banner.exploreSolutions}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section - Modern Icon Grid */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <Badge variant="outline" className="px-5 py-2 border-primary/20 text-primary bg-primary/5 rounded-full mb-8 uppercase tracking-widest font-bold text-xs">
              {t.home.values.badge}
            </Badge>
            <h2 className="text-5xl md:text-7xl font-extrabold text-gray-950 mb-10 tracking-tight">
              {t.home.values.title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
              {t.home.values.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="group h-full p-10 rounded-[40px] border border-gray-100 bg-gray-50/30 hover:bg-white hover:shadow-2xl hover:border-primary/20 transition-all duration-500 text-center">
                    <div className="w-24 h-24 bg-white rounded-3xl shadow-md border border-gray-50 flex items-center justify-center mx-auto mb-10 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary transition-all duration-500 group-hover:shadow-primary/30">
                      <Icon className="w-12 h-12 text-gray-950 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-2xl font-extrabold mb-5 text-gray-950 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed font-light">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Latest News Section - Premium Content Cards */}
      <section className="py-32 bg-gray-50/50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
          >
            <div className="max-w-3xl">
              <Badge variant="outline" className="px-5 py-2 border-primary/20 text-primary bg-primary/5 rounded-full mb-8 font-bold tracking-widest uppercase text-xs">
                {t.home.news.badge}
              </Badge>
              <h2 className="text-5xl md:text-7xl font-extrabold text-gray-950 tracking-tight">
                {t.home.news.title}
              </h2>
            </div>
            <Button
              variant="outline"
              onClick={() => navigate('/news')}
              className="border-2 border-gray-950 text-gray-950 hover:bg-gray-950 hover:text-white px-8 py-6 rounded-2xl transition-all duration-300 font-bold"
            >
              {t.home.news.viewAll}
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-10 max-w-7xl mx-auto">
            {/* Featured news card across 7 columns */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div
                onClick={() => navigate('/news/1')}
                className="group cursor-pointer relative overflow-hidden rounded-[40px] shadow-xl hover:shadow-2xl transition-all duration-700 h-full min-h-[500px]"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1557426282-08101666870a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjB0b2t5b3xlbnwxfHx8fDE3NjM0MDc5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Featured News"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-12 w-full">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-lg shadow-primary/30">
                      Featured
                    </span>
                    <span className="text-gray-300 text-sm font-medium flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      March 15, 2024
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 group-hover:text-primary transition-colors leading-tight">
                    Expanding our Digital Footprint in the South Asian Market
                  </h3>
                  <p className="text-gray-300 text-lg mb-8 line-clamp-2 font-light max-w-2xl">
                    Our latest initiative aimed at bringing cutting-edge technology solutions to growing businesses in Bangladesh...
                  </p>
                  <div className="flex items-center text-primary font-bold group">
                    Read Story
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center ml-4 group-hover:bg-primary group-hover:text-white transition-all">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Side news list across 5 columns */}
            <div className="lg:col-span-5 space-y-8">
              {[2, 3, 4].map((id) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: id * 0.1 }}
                  onClick={() => navigate(`/news/${id}`)}
                  className="group cursor-pointer glass-card p-6 rounded-[32px] hover:border-primary/20 hover:shadow-2xl transition-all duration-500 bg-white/50 backdrop-blur-xl border border-gray-100/50 flex gap-6 items-center"
                >
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-md group-hover:shadow-primary/20 transition-all flex-shrink-0">
                    <ImageWithFallback
                      src={`https://picsum.photos/seed/news${id}/200/200`}
                      alt={`News ${id}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" />
                      2 Days ago
                    </div>
                    <h4 className="text-xl font-bold text-gray-950 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                      Strategic Partnership with Global Tech Innovators {id}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Link / Secondary CTA */}
      <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter">
              Stay Connected with <span className="text-primary">Axsh Tech</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Facebook, name: 'Facebook' },
                { icon: Linkedin, name: 'LinkedIn' },
                { icon: Twitter, name: 'Twitter' },
                { icon: Instagram, name: 'Instagram' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="w-20 h-20 bg-white/5 backdrop-blur-md rounded-[28px] border border-white/10 flex items-center justify-center hover:bg-primary transition-all duration-500 shadow-xl group"
                >
                  <social.icon className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ready to Connect CTA Section - High Impact */}
      <section className="relative py-40 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute inset-0 bg-primary/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <Badge variant="outline" className="px-6 py-2 border-primary text-primary bg-primary/5 rounded-full mb-10 font-bold uppercase tracking-[0.2em] text-sm">
              Next Steps
            </Badge>
            <h2 className="text-6xl md:text-8xl font-black text-gray-950 mb-10 tracking-tighter leading-[0.9]">
              {t.home.cta.title}
            </h2>
            <p className="text-2xl md:text-3xl text-gray-500 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              {t.home.cta.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Button
                size="lg"
                onClick={() => navigate('/contact')}
                className="bg-primary hover:bg-gray-950 text-white px-12 py-10 text-xl rounded-2xl transition-all duration-500 shadow-2xl shadow-primary/40 group font-bold min-w-[280px]"
              >
                {t.home.cta.startConversation}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/business')}
                className="border-2 border-gray-200 hover:border-gray-950 text-gray-950 px-12 py-10 text-xl rounded-2xl transition-all duration-500 font-bold min-w-[280px]"
              >
                {t.home.cta.viewAllServices}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}