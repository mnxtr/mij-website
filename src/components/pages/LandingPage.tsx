import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Star,
  Package,
  Users,
  Code,
  TrendingUp,
  Globe2,
  ChevronDown,
  ChevronUp,
  Quote,
  Sparkles,
  Clock,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  MousePointer2
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';

export default function LandingPage() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  // const t = getTranslation(language); // Available for future use
  
  const [email, setEmail] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Package,
      title: 'MIJ Products',
      description: 'Premium Japanese skincare and beauty products with authentic quality assurance.',
      features: ['100% Authentic', 'Direct from Japan', 'Quality Certified'],
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Users,
      title: 'HR & Recruitment',
      description: 'Cross-border talent acquisition connecting skilled professionals across borders.',
      features: ['Talent Matching', 'Visa Support', 'Cultural Training'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Code,
      title: 'IT & Digital',
      description: 'Custom software development and digital transformation solutions.',
      features: ['Web Development', 'Mobile Apps', 'Cloud Solutions'],
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: TrendingUp,
      title: 'Business Consulting',
      description: 'Strategic consulting for Japan-Bangladesh market expansion.',
      features: ['Market Research', 'Business Strategy', 'Partnership Building'],
      color: 'from-amber-500 to-orange-500',
    },
  ];

  const stats = [
    { number: '10+', label: 'Years Experience', icon: Clock },
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle2 },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '2', label: 'Countries', icon: Globe2 },
  ];

  const testimonials = [
    {
      name: 'Takeshi Yamamoto',
      role: 'CEO, Tokyo Innovations',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      content: 'MIJ has been instrumental in our expansion into the Bangladesh market. Their understanding of both cultures is exceptional.',
      rating: 5,
    },
    {
      name: 'Fatima Rahman',
      role: 'Director, Dhaka Enterprises',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
      content: 'The quality of Japanese products we receive through MIJ is unmatched. Our customers love them!',
      rating: 5,
    },
    {
      name: 'Kenji Nakamura',
      role: 'HR Manager, Global Tech Co.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      content: 'Their HR recruitment services helped us find exceptional talent from Bangladesh. Highly recommended!',
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: 'What services does MIJ offer?',
      answer: 'MIJ offers four main services: Japanese product distribution, HR & recruitment, IT & digital solutions, and business consulting. We specialize in bridging Japan and Bangladesh markets.',
    },
    {
      question: 'How do you ensure product authenticity?',
      answer: 'All our products are sourced directly from authorized Japanese manufacturers. We have strict quality control processes and provide authenticity certificates with every order.',
    },
    {
      question: 'Can you help with visa and work permits?',
      answer: 'Yes! Our HR division provides comprehensive support including visa application assistance, work permit processing, and cultural integration training for professionals relocating between Japan and Bangladesh.',
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on scope. IT projects typically range from 2-6 months, while consulting engagements can be ongoing. We provide detailed timelines during our initial consultation.',
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Absolutely! We provide ongoing maintenance, support, and consultation for all our services. Our dedicated support team is available to assist you throughout your journey with us.',
    },
  ];

  const processSteps = [
    { step: '01', title: 'Discovery', description: 'We understand your needs and goals' },
    { step: '02', title: 'Strategy', description: 'Create a tailored action plan' },
    { step: '03', title: 'Execution', description: 'Implement with precision and care' },
    { step: '04', title: 'Growth', description: 'Scale and optimize for success' },
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Hero Section - Full Screen with Gradient Overlay */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 rounded-full filter blur-[128px] animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full filter blur-[128px] animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
        </div>

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Content */}
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 container mx-auto px-6 py-20 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
            >
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-white/80">Connecting Japan & Bangladesh</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            >
              Cross Border,{' '}
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Connect Dreams
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Bridging Japan and Bangladesh through innovative business solutions, 
              premium products, and cross-cultural expertise.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Button
                size="lg"
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-6 text-lg gap-2 shadow-lg shadow-pink-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/business')}
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 flex items-center justify-center gap-2">
                      <Icon className="w-4 h-4" />
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-white/50"
            >
              <MousePointer2 className="w-5 h-5" />
              <span className="text-xs">Scroll to explore</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-pink-100 text-pink-600 border-0 mb-4">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solutions That Drive Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive business solutions tailored for Japan-Bangladesh trade and collaboration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <CardContent className="p-6 relative">
                      {/* Gradient Top Bar */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`} />
                      
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Arrow */}
                      <div className="mt-6 flex justify-end">
                        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-pink-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-blue-100 text-blue-600 border-0 mb-4">How It Works</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple Process, Powerful Results
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center relative"
              >
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-pink-200 to-purple-200" />
                )}
                
                {/* Step Number */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl relative z-10">
                  {item.step}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500 rounded-full filter blur-[100px]" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full filter blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-white/10 text-white border-white/20 mb-4">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by Industry Leaders
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12"
              >
                <Quote className="w-12 h-12 text-pink-400 mb-6" />
                <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                  "{testimonials[activeTestimonial]?.content}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[activeTestimonial]?.avatar}
                    alt={testimonials[activeTestimonial]?.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-pink-400"
                  />
                  <div>
                    <div className="font-bold text-white">
                      {testimonials[activeTestimonial]?.name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonials[activeTestimonial]?.role}
                    </div>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {[...Array(testimonials[activeTestimonial]?.rating || 0)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeTestimonial === index
                      ? 'bg-pink-500 w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-purple-100 text-purple-600 border-0 mb-4">FAQ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`bg-white rounded-xl border transition-all ${
                    openFaqIndex === index ? 'border-pink-200 shadow-lg' : 'border-gray-200'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    {openFaqIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-pink-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join hundreds of businesses that trust MIJ for their Japan-Bangladesh partnerships.
            </p>

            {/* Email Signup */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-8">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 h-14"
              />
              <Button
                size="lg"
                onClick={() => navigate('/contact')}
                className="bg-white text-purple-600 hover:bg-gray-100 h-14 px-8 gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            <p className="text-sm text-white/60">
              No spam, unsubscribe at any time. By signing up you agree to our Terms of Service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-pink-400" />
                <span>info@mijcompany.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-pink-400" />
                <span>+81 (0)3-XXXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-pink-400" />
                <span>Tokyo, Japan</span>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => navigate('/contact')}
              className="border-white/30 text-white hover:bg-white/10 gap-2"
            >
              Schedule a Call
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
