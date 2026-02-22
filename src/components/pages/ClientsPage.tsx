import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Star, Quote, ShoppingBag, Shirt, Laptop, Factory, Heart, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import pathaoLogo from 'figma:asset/2af45e4bf1e0936020bb934a75bdfdef991523cb.png';
import shamsLogo from 'figma:asset/d0b64312d47a4a667250b56920bfd5ebfc07b71b.png';
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

export default function ClientsPage() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const [touchedImage, setTouchedImage] = useState<string | null>(null);
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

  // Auto-animate registered images
  useEffect(() => {
    if (registeredImages.length === 0) return;
    let currentIndex = 0;
    const interval = setInterval(() => {
      const imageId = registeredImages[currentIndex];
      if (imageId && !animatedImages[imageId]) {
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
    { id: 'retail', category: t.clients.industries.retail.title, count: 4, icon: ShoppingBag },
    { id: 'manufacturing', category: t.clients.industries.manufacturing.title, count: 8, icon: Factory },
    { id: 'technology', category: t.clients.industries.technology.title, count: 5, icon: Laptop },
    { id: 'healthcare', category: t.clients.industries.healthcare.title, count: 3, icon: Heart },
    { id: 'hr', category: t.clients.industries.hr.title, count: 2, icon: Users },
    { id: 'logistics', category: t.clients.industries.logistics.title, count: 1, icon: Shirt },
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
                {t.clients.badge}
              </Badge>
              <div className="w-16 h-px bg-primary/20" />
            </motion.div>

            <h1 className="text-7xl md:text-9xl font-black mb-10 leading-[0.9] tracking-tighter text-foreground">
              <TextReveal text={t.clients.hero.title} />
              <TextReveal text={t.clients.hero.highlight} className="text-primary" delay={0.5} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light font-body"
            >
              {t.clients.hero.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-background relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {}
            }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  visible: { opacity: 1, scale: 1, y: 0 },
                  hidden: { opacity: 0, scale: 0.8, y: 40 }
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center group"
              >
                <Magnetic>
                  <div className="inline-block relative">
                    <div className="text-7xl md:text-8xl font-black text-primary mb-4 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] transition-all duration-700 tracking-tighter font-header">
                      {stat.number}
                    </div>
                  </div>
                </Magnetic>
                <div className="text-muted-foreground font-medium tracking-[0.2em] uppercase text-xs md:text-sm font-header">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-32 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary-rgb),0.03)_0%,transparent_50%)] pointer-events-none" />

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
                {t.clients.industries.badge}
              </Badge>
              <div className="w-16 h-px bg-border" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-foreground tracking-tighter font-header">
              {t.clients.industries.title.split(' ')[0]} <span className="text-primary">{t.clients.industries.title.split(' ')[1]}</span>
            </h2>
            <p className="text-2xl text-muted-foreground font-light max-w-3xl mx-auto font-body">
              Diverse portfolio spanning multiple sectors and markets
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {}
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {clientCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={{
                  visible: { opacity: 1, y: 0, scale: 1 },
                  hidden: { opacity: 0, y: 40, scale: 0.95 }
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                onTouchStart={() => setTouchedCard(category.id)}
                onTouchEnd={() => setTimeout(() => setTouchedCard(null), 300)}
                className="h-full"
              >
                <Card className={`border-2 group cursor-pointer p-10 rounded-[48px] overflow-hidden transition-all duration-700 h-full ${touchedCard === category.id ? 'border-primary shadow-2xl bg-primary/5 shadow-primary/10' : 'border-border bg-background hover:border-primary hover:shadow-2xl hover:shadow-primary/5'}`}>
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-10">
                      <Magnetic>
                        <div className={`w-20 h-20 border-2 rounded-2xl flex items-center justify-center transition-all duration-700 ${touchedCard === category.id ? 'bg-primary border-primary scale-110 rotate-12 shadow-xl shadow-primary/30' : 'border-border bg-background group-hover:bg-primary group-hover:border-primary group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-primary/30'}`}>
                          <category.icon className={`w-10 h-10 transition-colors duration-500 ${touchedCard === category.id ? 'text-white' : 'text-foreground group-hover:text-white'}`} />
                        </div>
                      </Magnetic>
                      <div className={`text-5xl font-black transition-colors duration-500 tracking-tighter font-header ${touchedCard === category.id ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                        {category.count}
                      </div>
                    </div>
                    <h3 className={`text-3xl font-black transition-colors duration-500 tracking-tight font-header ${touchedCard === category.id ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                      {category.category}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-3 font-light uppercase tracking-[0.2em] font-header">Active Clients</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-background relative transition-colors duration-500">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-24"
          >
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-16 h-px bg-border" />
              <Badge variant="outline" className="border-border text-muted-foreground text-xs tracking-[0.2em] uppercase px-4 py-1">
                {t.clients.testimonials.badge}
              </Badge>
              <div className="w-16 h-px bg-border" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-foreground tracking-tighter font-header">
              {t.clients.testimonials.title}
            </h2>
            <p className="text-2xl text-muted-foreground font-light max-w-3xl mx-auto font-body leading-relaxed">
              Success stories from businesses we've helped grow
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.25 } },
              hidden: {}
            }}
            className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={{
                  visible: { opacity: 1, y: 0, scale: 1 },
                  hidden: { opacity: 0, y: 60, scale: 0.95 }
                }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card className="border-2 border-border bg-card/30 backdrop-blur-xl hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 h-full group p-10 rounded-[64px] relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 group-hover:opacity-10 transition-all duration-1000 rotate-12">
                    <Quote className="w-32 h-32 text-primary" />
                  </div>
                  <CardContent className="p-0 space-y-10 relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    <p className="text-2xl text-foreground font-light leading-relaxed italic flex-grow font-body">
                      "{testimonial.quote}"
                    </p>

                    <div className="pt-10 border-t border-border/50">
                      <p className="font-black text-foreground text-2xl tracking-tighter font-header uppercase mb-1">{testimonial.author}</p>
                      <p className="text-base text-muted-foreground font-light mb-5 font-body">{testimonial.position}</p>
                      <div className="inline-block px-5 py-2 bg-primary/10 rounded-2xl border border-primary/20">
                        <p className="text-sm text-primary font-black uppercase tracking-widest font-header">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-32 bg-muted/20 relative">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-16 h-px bg-border" />
              <Badge variant="outline" className="border-border text-muted-foreground text-xs tracking-[0.2em] uppercase px-4 py-1">
                {t.clients.logos.badge}
              </Badge>
              <div className="w-16 h-px bg-border" />
            </div>
            <h3 className="text-4xl font-black text-foreground mb-4 font-header tracking-tight">
              {t.clients.logos.title}
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              { id: 'pathao', name: 'Pathao', url: pathaoLogo },
              { id: 'ezone', name: 'e-Zone', url: 'UPLOAD_EZONE_LOGO_HERE' },
              { id: 'shams', name: 'Shams Group', url: shamsLogo }
            ].map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onViewportEnter={() => registerImage(`client-${index}`)}
                onViewportLeave={() => unregisterImage(`client-${index}`)}
              >
                <Card className={`border-2 bg-background transition-all duration-700 group cursor-pointer ${touchedImage === `client-${index}` ? 'border-primary shadow-2xl' : 'border-border'
                  } hover:border-primary hover:shadow-2xl rounded-[40px]`}>
                  <CardContent className="p-10 flex items-center justify-center h-48">
                    <ImageWithFallback
                      src={client.url}
                      alt={client.name}
                      className={`max-w-full max-h-full object-contain transition-all duration-1000 ${animatedImages[`client-${index}`] || touchedImage === `client-${index}` ? 'grayscale-0' : 'grayscale contrast-125'
                        } group-hover:grayscale-0 group-hover:scale-110`}
                      onTouchStart={() => setTouchedImage(`client-${index}`)}
                      onTouchEnd={() => setTimeout(() => setTouchedImage(null), 500)}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(var(--primary-rgb),0.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto text-center"
          >
            <Card className="border-2 border-primary/30 bg-card/50 backdrop-blur-2xl rounded-[64px] overflow-hidden shadow-2xl relative">
              <CardContent className="p-20 text-center relative z-10">
                <h2 className="text-6xl md:text-8xl font-black mb-10 text-foreground tracking-tighter leading-[0.9] font-header">
                  {t.clients.cta.title} <span className="text-primary">{t.clients.cta.highlight}</span>
                </h2>
                <p className="text-2xl md:text-3xl text-muted-foreground mb-16 max-w-3xl mx-auto font-light leading-relaxed font-body">
                  {t.clients.cta.description}
                </p>
                <Magnetic>
                  <button
                    onClick={() => { }}
                    className="bg-primary hover:bg-foreground hover:text-background text-white gap-4 px-16 py-12 rounded-3xl transition-all duration-700 shadow-2xl shadow-primary/30 group font-bold text-2xl font-header inline-flex items-center"
                  >
                    Partner With Us
                    <Star className="w-8 h-8 group-hover:rotate-[72deg] transition-transform duration-700 ml-4 fill-white" />
                  </button>
                </Magnetic>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}