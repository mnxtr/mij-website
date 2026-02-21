import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Building2, Star, Quote, ShoppingBag, UtensilsCrossed, Shirt, Laptop, Factory, Heart, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import pathaoLogo from 'figma:asset/2af45e4bf1e0936020bb934a75bdfdef991523cb.png';
import shamsLogo from 'figma:asset/d0b64312d47a4a667250b56920bfd5ebfc07b71b.png';
import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';

export default function ClientsPage() {
  const { language } = useLanguage();
  const t = getTranslation(language);
  
  const [touchedImage, setTouchedImage] = useState<string | null>(null);
  const [animatedImages, setAnimatedImages] = useState<{ [key: string]: boolean }>({});
  const [registeredImages, setRegisteredImages] = useState<string[]>([]);
  
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
      
      if (!animatedImages[imageId]) {
        setAnimatedImages(prev => ({ ...prev, [imageId]: true }));
      }
      
      currentIndex = (currentIndex + 1) % registeredImages.length;
    }, 800);

    return () => clearInterval(interval);
  }, [registeredImages, animatedImages]);
  
  const stats = [
    { number: '23+', label: t.clients.stats.clients },
    { number: '10+', label: t.clients.stats.experience },
    { number: '98%', label: t.clients.stats.satisfaction },
    { number: '6', label: t.clients.stats.projects },
  ];

  const clientCategories = [
    { category: t.clients.industries.retail.title, count: 4, icon: ShoppingBag },
    { category: t.clients.industries.manufacturing.title, count: 8, icon: Factory },
    { category: t.clients.industries.technology.title, count: 5, icon: Laptop },
    { category: t.clients.industries.healthcare.title, count: 3, icon: Heart },
    { category: t.clients.industries.hr.title, count: 2, icon: Users },
    { category: t.clients.industries.logistics.title, count: 1, icon: Shirt },
  ];

  const testimonials = [
    {
      company: 'Tokyo Electronics Co.',
      industry: 'Manufacturing',
      quote: 'Axsh Tech helped us establish a strong presence in Bangladesh. Their local expertise and dedication to our success was truly invaluable to our expansion strategy.',
      author: 'Hiroshi Tanaka',
      position: 'CEO',
    },
    {
      company: 'Dhaka Fashion Ltd.',
      industry: 'Retail',
      quote: 'Thanks to Axsh Tech, we successfully entered the Japanese market and built lasting partnerships. Their team guided us through every step of the process.',
      author: 'Aisha Rahman',
      position: 'Managing Director',
    },
    {
      company: 'Tech Solutions Japan',
      industry: 'Technology',
      quote: 'Outstanding service and support throughout our partnership. Axsh Tech truly understands both markets and consistently delivers exceptional results.',
      author: 'Kenji Yamamoto',
      position: 'CTO',
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
                {t.clients.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              {t.clients.hero.title} <span className="text-[#D4387F]">{t.clients.hero.highlight}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t.clients.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-[#D4387F] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
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
                {t.clients.industries.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t.clients.industries.title.split(' ')[0]} <span className="text-[#D4387F]">{t.clients.industries.title.split(' ')[1]}</span>
            </h2>
            <p className="text-xl text-gray-600">
              Diverse portfolio spanning multiple sectors and markets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {clientCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-2 border-gray-200 bg-white hover:border-[#D4387F] hover:shadow-lg transition-all group cursor-pointer">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <category.icon className="w-10 h-10 text-[#D4387F]" />
                      <div className="text-3xl font-bold text-[#D4387F]">{category.count}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#D4387F] transition-colors">
                      {category.category}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">Active Clients</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
                {t.clients.testimonials.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t.clients.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600">
              Success stories from businesses we've helped grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-2 border-gray-200 bg-white hover:border-[#D4387F] hover:shadow-lg transition-all h-full group">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#D4387F] text-[#D4387F]" />
                      ))}
                    </div>

                    <Quote className="w-10 h-10 text-[#D4387F] opacity-50" />
                    
                    <p className="text-gray-600 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>

                    <div className="pt-4 border-t-2 border-gray-200">
                      <p className="font-bold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                      <p className="text-sm text-[#D4387F] mt-1">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gray-900" />
              <Badge variant="outline" className="border-gray-300 text-gray-700 text-xs tracking-wider uppercase">
                {t.clients.logos.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t.clients.logos.title}
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Pathao', url: pathaoLogo },
              { name: 'e-Zone', url: 'UPLOAD_EZONE_LOGO_HERE' },
              { name: 'Shams Group', url: shamsLogo }
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onViewportEnter={() => registerImage(`client-${index}`)}
                onViewportLeave={() => unregisterImage(`client-${index}`)}
              >
                <Card className={`border-2 bg-white transition-all group ${
                  touchedImage === `client-${index}` ? 'border-[#D4387F] shadow-lg' : 'border-gray-200'
                } hover:border-[#D4387F] hover:shadow-lg`}>
                  <CardContent className="p-8 flex items-center justify-center h-40">
                    <ImageWithFallback 
                      src={client.url} 
                      alt={client.name}
                      className={`max-w-full max-h-full object-contain transition-all duration-500 ${
                        animatedImages[`client-${index}`] || touchedImage === `client-${index}` ? 'grayscale-0' : 'grayscale'
                      } group-hover:grayscale-0`}
                      onTouchStart={() => setTouchedImage(`client-${index}`)}
                      onTouchEnd={() => setTimeout(() => setTouchedImage(null), 500)}
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    />
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
              {t.clients.cta.title} <span className="text-[#D4387F]">{t.clients.cta.highlight}</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t.clients.cta.description}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}