import { useNavigate } from 'react-router-dom';
import image_0b6f008db8209dab55941ae5a8e36a79c90ac176 from 'figma:asset/0b6f008db8209dab55941ae5a8e36a79c90ac176.png';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
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
  Target,
  Award,
  Heart,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  Minus,
  Circle,
  Calendar,
  Clock,
  Facebook,
  Linkedin,
  Twitter,
  Instagram
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';

export default function HomePage() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = getTranslation(language);
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [smallImageIndex1, setSmallImageIndex1] = useState(0);
  const [smallImageIndex2, setSmallImageIndex2] = useState(0);
  const [touchedStatIndex, setTouchedStatIndex] = useState<number | null>(null);
  const [touchedBusinessIndex, setTouchedBusinessIndex] = useState<number | null>(null);
  const [touchedValueIndex, setTouchedValueIndex] = useState<number | null>(null);
  const [touchedNewsIndex, setTouchedNewsIndex] = useState<number | null>(null);
  const [touchedSocialIndex, setTouchedSocialIndex] = useState<number | null>(null);
  const [heroImageColorActive, setHeroImageColorActive] = useState(false);
  const [smallImage1ColorActive, setSmallImage1ColorActive] = useState(false);
  const [smallImage2ColorActive, setSmallImage2ColorActive] = useState(false);
  const [featuredNewsColorActive, setFeaturedNewsColorActive] = useState(false);
  const [touchedCtaButton, setTouchedCtaButton] = useState<string | null>(null);
  const [touchedButton, setTouchedButton] = useState<string | null>(null);

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

  // Auto-rotate main image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Auto-rotate small image 1 every 5 seconds (different timing)
  useEffect(() => {
    const interval = setInterval(() => {
      setSmallImageIndex1((prev) => (prev + 1) % smallImages1.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [smallImages1.length]);

  // Auto-rotate small image 2 every 5.5 seconds (different timing)
  useEffect(() => {
    const interval = setInterval(() => {
      setSmallImageIndex2((prev) => (prev + 1) % smallImages2.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [smallImages2.length]);

  // Innovative auto-animation: Images pulse from grayscale to color
  // Hero image - pulses every 6 seconds for 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImageColorActive(true);
      setTimeout(() => setHeroImageColorActive(false), 2000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Small image 1 - pulses every 7 seconds for 2 seconds (offset timing)
  useEffect(() => {
    const interval = setInterval(() => {
      setSmallImage1ColorActive(true);
      setTimeout(() => setSmallImage1ColorActive(false), 2000);
    }, 7000);

    // Start with a delay to create a wave effect
    const initialTimeout = setTimeout(() => {
      setSmallImage1ColorActive(true);
      setTimeout(() => setSmallImage1ColorActive(false), 2000);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  // Small image 2 - pulses every 8 seconds for 2 seconds (offset timing)
  useEffect(() => {
    const interval = setInterval(() => {
      setSmallImage2ColorActive(true);
      setTimeout(() => setSmallImage2ColorActive(false), 2000);
    }, 8000);

    // Start with a delay to create a wave effect
    const initialTimeout = setTimeout(() => {
      setSmallImage2ColorActive(true);
      setTimeout(() => setSmallImage2ColorActive(false), 2000);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  // Featured news image - pulses every 9 seconds for 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedNewsColorActive(true);
      setTimeout(() => setFeaturedNewsColorActive(false), 2500);
    }, 9000);

    // Start with a delay
    const initialTimeout = setTimeout(() => {
      setFeaturedNewsColorActive(true);
      setTimeout(() => setFeaturedNewsColorActive(false), 2500);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

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
      {/* Hero Section - B&W Images with Subtle Pink Accents */}
      <section className="relative min-h-screen bg-white overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 z-0 bg-gray-50" />

        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[90vh]">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Main Heading */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8">
                    <span className="text-gray-900">{t.home.hero.tagline1} </span>
                    <span className="text-[#D4387F]">{t.home.hero.tagline2}</span>
                    <br />
                    <span className="text-gray-900">{t.home.hero.tagline3} </span>
                    <span className="text-[#D4387F]">{t.home.hero.tagline4}</span>
                  </h1>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl"
                >
                  {t.home.hero.description}
                </motion.p>

                {/* Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="grid grid-cols-2 gap-4 max-w-xl"
                >
                  {stats.slice(0, 2).map((stat, index) => {
                    const Icon = stat.icon;
                    const isTouched = touchedStatIndex === index;
                    return (
                      <div
                        key={index}
                        className={`bg-white border-2 p-6 rounded-lg transition-all group cursor-pointer ${
                          isTouched ? 'border-[#D4387F] shadow-lg' : 'border-gray-200'
                        } hover:border-[#D4387F] hover:shadow-lg`}
                        onTouchStart={(e) => {
                          setTouchedStatIndex(index);
                        }}
                        onTouchEnd={() => setTimeout(() => setTouchedStatIndex(null), 500)}
                        style={{ WebkitTapHighlightColor: 'transparent' }}
                      >
                        <Icon className={`w-7 h-7 mb-3 transition-colors ${
                          isTouched ? 'text-[#D4387F]' : 'text-gray-400'
                        } group-hover:text-[#D4387F]`} />
                        <div className="text-3xl font-bold text-gray-900 mb-1">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <Button
                    size="lg"
                    onClick={() => navigate('/business')}
                    onTouchStart={() => setTouchedButton('hero-explore')}
                    onTouchEnd={() => setTimeout(() => setTouchedButton(null), 300)}
                    className={`text-white px-10 py-7 gap-3 transition-all group ${
                      touchedButton === 'hero-explore' ? 'bg-[#D4387F]' : 'bg-gray-900'
                    } hover:bg-[#D4387F]`}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    {t.home.hero.exploreServices}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => navigate('/contact')}
                    onTouchStart={() => setTouchedButton('hero-contact')}
                    onTouchEnd={() => setTimeout(() => setTouchedButton(null), 300)}
                    className={`border-2 px-10 py-7 transition-all ${
                      touchedButton === 'hero-contact' 
                        ? 'bg-[#D4387F] text-white border-[#D4387F]' 
                        : 'border-gray-900 text-gray-900'
                    } hover:bg-[#D4387F] hover:text-white hover:border-[#D4387F]`}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    {t.home.hero.getInTouch}
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Side - B&W Image Gallery */}
              <div className="relative lg:block hidden h-[600px]">
                {/* Main Large Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative h-full"
                >
                  <div className="relative bg-white border-2 border-gray-900 p-2 rounded-lg h-full shadow-xl">
                    <div className="relative overflow-hidden rounded-md h-full">
                      <ImageWithFallback
                        src={heroImages[currentImageIndex].url}
                        alt={heroImages[currentImageIndex].alt}
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          heroImageColorActive ? 'grayscale-0' : 'grayscale'
                        } hover:grayscale-0`}
                        onTouchStart={() => setHeroImageColorActive(true)}
                        onTouchEnd={() => setTimeout(() => setHeroImageColorActive(false), 500)}
                        style={{ WebkitTapHighlightColor: 'transparent' }}
                      />
                    </div>
                  </div>
                  {/* Small Pink Corner Accent */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#D4387F] rounded-full" />
                </motion.div>

                {/* Small Image 1 - Top Right */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="absolute -top-8 -right-8 w-40 h-40"
                >
                  <div className="relative bg-white border-2 border-gray-900 p-1.5 rounded-lg shadow-lg">
                    <div 
                      className="relative overflow-hidden rounded-md h-full"
                      onTouchStart={() => setSmallImage1ColorActive(true)}
                      onTouchEnd={() => setTimeout(() => setSmallImage1ColorActive(false), 500)}
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      <ImageWithFallback
                        src={smallImages1[smallImageIndex1].url}
                        alt={smallImages1[smallImageIndex1].alt}
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          smallImage1ColorActive ? 'grayscale-0' : 'grayscale'
                        } hover:grayscale-0`}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Small Image 2 - Bottom Left */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="absolute -bottom-12 -left-8 w-48 h-48"
                >
                  <div className="relative bg-white border-2 border-gray-900 p-1.5 rounded-lg shadow-lg">
                    <div 
                      className="relative overflow-hidden rounded-md h-full"
                      onTouchStart={() => setSmallImage2ColorActive(true)}
                      onTouchEnd={() => setTimeout(() => setSmallImage2ColorActive(false), 500)}
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      <ImageWithFallback
                        src={smallImages2[smallImageIndex2].url}
                        alt={smallImages2[smallImageIndex2].alt}
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          smallImage2ColorActive ? 'grayscale-0' : 'grayscale'
                        } hover:grayscale-0`}
                      />
                    </div>
                  </div>
                  {/* Small Pink Corner Accent */}
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-[#D4387F] rounded-full" />
                </motion.div>

                {/* Subtle Decorative Elements */}
                <div className="absolute top-1/3 -right-4 w-24 h-24 border border-gray-200 rounded-full" />
                <div className="absolute bottom-1/4 -left-4 w-16 h-16 border border-gray-200 rounded-full" />
                
                {/* Image Carousel Indicators */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white border-2 border-gray-900 rounded-full px-4 py-2 shadow-lg">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`transition-all ${
                        currentImageIndex === index
                          ? 'w-8 h-2 bg-[#D4387F] rounded-full'
                          : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-[#D4387F]'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="lg:hidden container mx-auto px-6 pb-12"
        >
          <div className="grid grid-cols-2 gap-4">
            {stats.slice(2).map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-[#D4387F] transition-all group"
                >
                  <Icon className="w-7 h-7 text-gray-400 mb-3 group-hover:text-[#D4387F] transition-colors" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Business Areas */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gray-900" />
              <Badge variant="outline" className="border-gray-300 text-gray-700 text-xs tracking-wider uppercase">
                {t.home.business.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t.home.business.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.home.business.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {businesses.map((business, index) => {
              const Icon = business.icon;
              const isTouched = touchedBusinessIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onTouchStart={() => setTouchedBusinessIndex(index)}
                  onTouchEnd={() => setTimeout(() => setTouchedBusinessIndex(null), 500)}
                  className="group cursor-pointer"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <div className={`bg-white border-2 p-10 rounded-lg transition-all relative overflow-hidden ${
                    isTouched ? 'border-[#D4387F] shadow-lg' : 'border-gray-200'
                  } hover:border-[#D4387F] hover:shadow-lg`}>
                    {/* Pink Accent - Only on Hover */}
                    <motion.div
                      className={`absolute top-0 right-0 w-20 h-20 bg-[#D4387F] transition-opacity ${
                        isTouched ? 'opacity-10' : 'opacity-0'
                      } group-hover:opacity-10`}
                      style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-8">
                        <div className={`w-14 h-14 border-2 rounded-lg flex items-center justify-center transition-all ${
                          isTouched ? 'bg-[#D4387F] border-[#D4387F]' : 'border-gray-900'
                        } group-hover:bg-[#D4387F] group-hover:border-[#D4387F]`}>
                          <Icon className={`w-7 h-7 transition-colors ${
                            isTouched ? 'text-white' : 'text-gray-900'
                          } group-hover:text-white`} />
                        </div>
                        <ArrowUpRight className={`w-6 h-6 transition-colors ${
                          isTouched ? 'text-[#D4387F]' : 'text-gray-400'
                        } group-hover:text-[#D4387F]`} />
                      </div>

                      <h3 className={`text-2xl font-bold mb-4 transition-colors ${
                        isTouched ? 'text-[#D4387F]' : 'text-gray-900'
                      } group-hover:text-[#D4387F]`}>
                        {business.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {business.description}
                      </p>

                      <div className="space-y-3">
                        {business.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                            <div className={`w-1.5 h-1.5 rounded-full transition-colors ${
                              isTouched ? 'bg-[#D4387F]' : 'bg-gray-900'
                            } group-hover:bg-[#D4387F]`} />
                            {feature}
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
            className="mt-16 text-center"
          >
            <Button
              onClick={() => navigate('/business')}
              onTouchStart={() => setTouchedButton('view-all-services')}
              onTouchEnd={() => setTimeout(() => setTouchedButton(null), 300)}
              className={`text-white gap-2 px-8 transition-all ${
                touchedButton === 'view-all-services' ? 'bg-[#D4387F]' : 'bg-gray-900'
              } hover:bg-[#D4387F]`}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              {t.home.business.viewAllServices}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Building Bridges Banner Section */}
      <section className="relative h-[500px] overflow-hidden">
        {/* Background Image with Overlays */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760842840049-ac860fd95766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMGNpdHlzY2FwZSUyMHBhbm9yYW1hJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MzQ2NTMxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Tokyo Cityscape Panorama"
            className="w-full h-full object-cover grayscale brightness-110 contrast-125"
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4387F]/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6 md:px-12 text-center relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-10"
          >
            <div className="w-16 h-0.5 bg-[#D4387F] mx-auto" />
            
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              {t.home.banner.title}
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {t.home.banner.description}
            </p>

            <div className="flex flex-wrap gap-6 justify-center pt-2 md:pt-8">
              <Button
                size="lg"
                onClick={() => navigate('/about')}
                onTouchStart={() => setTouchedCtaButton('learn-story')}
                onTouchEnd={() => setTimeout(() => setTouchedCtaButton(null), 300)}
                className={`text-white px-6 md:px-10 py-6 md:py-7 gap-3 transition-all ${
                  touchedCtaButton === 'learn-story' ? 'bg-[#FF8FB8]' : 'bg-[#D4387F]'
                } hover:bg-[#FF8FB8]`}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {t.home.banner.learnStory}
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                onClick={() => navigate('/business')}
                onTouchStart={() => setTouchedCtaButton('explore-solutions')}
                onTouchEnd={() => setTimeout(() => setTouchedCtaButton(null), 300)}
                className={`text-white px-6 md:px-10 py-6 md:py-7 gap-3 transition-all ${
                  touchedCtaButton === 'explore-solutions' ? 'bg-[#FF8FB8]' : 'bg-[#D4387F]'
                } hover:bg-[#FF8FB8]`}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {t.home.banner.exploreSolutions}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gray-900" />
              <Badge variant="outline" className="border-gray-300 text-gray-700 text-xs tracking-wider uppercase">
                {t.home.values.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t.home.values.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.home.values.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              const isTouched = touchedValueIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onTouchStart={() => setTouchedValueIndex(index)}
                  onTouchEnd={() => setTimeout(() => setTouchedValueIndex(null), 500)}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <div className={`text-center group cursor-pointer bg-white border-2 p-8 rounded-lg transition-all ${
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
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
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
                {t.home.news.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t.home.news.title}
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {/* Featured News */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-2 border-gray-200 overflow-hidden hover:border-[#D4387F] transition-all group cursor-pointer h-full">
                <div 
                  className="relative h-72 overflow-hidden bg-gray-100"
                  onTouchStart={() => setFeaturedNewsColorActive(true)}
                  onTouchEnd={() => setTimeout(() => setFeaturedNewsColorActive(false), 500)}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <ImageWithFallback
                    src={image_0b6f008db8209dab55941ae5a8e36a79c90ac176}
                    alt="Featured News"
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      featuredNewsColorActive ? 'grayscale-0' : 'grayscale'
                    } group-hover:grayscale-0`}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#D4387F] text-white border-0">Featured</Badge>
                  </div>
                </div>
                
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 text-[#D4387F]" />
                    November 15, 2024
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#D4387F] transition-colors">
                    MIJ starts their strategic partnership with Bangladesh collaborating with many Bangladeshi retail stores
                  </h3>
                  
                  <p className="text-gray-600">
                    New collaborations with leading Bangladeshi retail firms to set to accelerate MIJ skincare product presence in Bangladesh market
                  </p>

                  <Button 
                    variant="ghost" 
                    onClick={() => navigate('/news')}
                    className="text-[#D4387F] hover:text-[#D4387F] hover:bg-[#D4387F]/10 p-0 h-auto gap-2 group/btn"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* News List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {[
                {
                  date: 'November 10, 2024',
                  title: 'Launching Next-Generation IT Solutions',
                  category: 'Technology'
                },
                {
                  date: 'November 5, 2024',
                  title: 'Q3 2024: Record Growth in Product Distribution',
                  category: 'Business'
                },
                {
                  date: 'October 28, 2024',
                  title: 'Japan-Bangladesh Business Summit Success',
                  category: 'Events'
                }
              ].map((news, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onTouchStart={() => setTouchedNewsIndex(index)}
                  onTouchEnd={() => setTouchedNewsIndex(null)}
                >
                  <Card className="border-2 border-gray-200 hover:border-[#D4387F] transition-all group cursor-pointer"
                    onClick={() => navigate('/news')}
                  >
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 border-2 border-gray-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4387F] group-hover:border-[#D4387F] transition-all">
                        <Calendar className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 text-[#D4387F]" />
                          <span className="text-xs text-gray-500">{news.date}</span>
                          <Badge variant="outline" className="border-[#D4387F] text-[#D4387F] text-xs ml-auto">
                            {news.category}
                          </Badge>
                        </div>
                        <h4 className="font-bold text-gray-900 group-hover:text-[#D4387F] transition-colors">
                          {news.title}
                        </h4>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              <Button 
                variant="outline"
                onClick={() => navigate('/news')}
                onTouchStart={() => setTouchedButton('view-all-news')}
                onTouchEnd={() => setTimeout(() => setTouchedButton(null), 300)}
                className={`w-full border-2 gap-2 py-6 transition-all ${
                  touchedButton === 'view-all-news'
                    ? 'bg-[#D4387F] text-white border-[#D4387F]'
                    : 'border-gray-900 text-gray-900'
                } hover:bg-[#D4387F] hover:text-white hover:border-[#D4387F]`}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                View All News
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
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
                {t.home.social.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t.home.social.title} <span className="text-[#D4387F]">{t.home.social.highlight}</span>
            </h2>
            <p className="text-xl text-gray-600">
              {t.home.social.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: t.home.social.facebook,
                icon: Facebook,
                url: '#',
                color: 'hover:bg-[#1877F2]',
              },
              {
                name: t.home.social.linkedin,
                icon: Linkedin,
                url: '#',
                color: 'hover:bg-[#0A66C2]',
              },
              {
                name: t.home.social.twitter,
                icon: Twitter,
                url: '#',
                color: 'hover:bg-[#1DA1F2]',
              },
              {
                name: t.home.social.instagram,
                icon: Instagram,
                url: '#',
                color: 'hover:bg-[#E4405F]',
              },
            ].map((social, index) => {
              const Icon = social.icon;
              const isTouched = touchedSocialIndex === index;
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onTouchStart={() => setTouchedSocialIndex(index)}
                  onTouchEnd={() => setTimeout(() => setTouchedSocialIndex(null), 300)}
                  className="group"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <Card className={`border-2 hover:border-[#D4387F] transition-all cursor-pointer ${
                    isTouched ? 'border-[#D4387F] shadow-lg' : 'border-gray-200'
                  }`}>
                    <CardContent className="p-8 flex flex-col items-center gap-4">
                      <div className={`w-20 h-20 border-2 border-gray-900 rounded-full flex items-center justify-center transition-all ${
                        isTouched ? 'bg-[#D4387F] border-[#D4387F]' : ''
                      } group-hover:bg-[#D4387F] group-hover:border-[#D4387F]`}>
                        <Icon className={`w-10 h-10 transition-colors ${
                          isTouched ? 'text-white' : 'text-gray-900'
                        } group-hover:text-white`} />
                      </div>
                      <span className={`font-bold transition-colors ${
                        isTouched ? 'text-[#D4387F]' : 'text-gray-900'
                      } group-hover:text-[#D4387F]`}>
                        {social.name}
                      </span>
                    </CardContent>
                  </Card>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ready to Connect CTA Section */}
      <section className="relative h-[500px] overflow-hidden">
        {/* Background Image with Overlays */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1709107528836-8f8f230c02ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaGFrYSUyMHNreWxpbmUlMjBjaXR5c2NhcGUlMjBwYW5vcmFtYXxlbnwxfHx8fDE3NjM0NjQxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Dhaka Cityscape"
            className="w-full h-full object-cover grayscale brightness-110 contrast-125"
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4387F]/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6 md:px-12 text-center relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-10"
          >
            <div className="w-16 h-0.5 bg-[#D4387F] mx-auto" />
            
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              {t.home.cta.title}
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {t.home.cta.description}
            </p>

            <div className="flex flex-wrap gap-6 justify-center pt-2 md:pt-8">
              <Button
                size="lg"
                onClick={() => navigate('/contact')}
                onTouchStart={() => setTouchedCtaButton('start-conversation')}
                onTouchEnd={() => setTimeout(() => setTouchedCtaButton(null), 300)}
                className={`text-white px-6 md:px-10 py-6 md:py-7 gap-3 transition-all ${
                  touchedCtaButton === 'start-conversation' ? 'bg-[#FF8FB8]' : 'bg-[#D4387F]'
                } hover:bg-[#FF8FB8]`}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {t.home.cta.startConversation}
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                onClick={() => navigate('/business')}
                onTouchStart={() => setTouchedCtaButton('view-services')}
                onTouchEnd={() => setTimeout(() => setTouchedCtaButton(null), 300)}
                className={`text-white px-6 md:px-10 py-6 md:py-7 gap-3 transition-all ${
                  touchedCtaButton === 'view-services' ? 'bg-[#FF8FB8]' : 'bg-[#D4387F]'
                } hover:bg-[#FF8FB8]`}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {t.home.cta.viewAllServices}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}