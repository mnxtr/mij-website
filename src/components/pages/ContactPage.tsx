import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'motion/react';
import { Badge } from '../ui/badge';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';
import { contactSchema, type ContactFormData } from '../../schemas/contact.schema';
import { useContactForm } from '../../hooks/useContact';

export default function ContactPage() {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const contactMutation = useContactForm();
  
  const [touchedButton, setTouchedButton] = useState<string | null>(null);
  const [touchedSocialIndex, setTouchedSocialIndex] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await contactMutation.mutateAsync(data);
      reset();
      // Show success message
      alert(t.common.success || 'Thank you! We will get back to you soon.');
    } catch (error) {
      console.error('Form submission error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const offices = [
    {
      country: () => t.contact.offices.japan.country,
      flag: '🇯🇵',
      city: () => t.contact.offices.japan.city,
      address: '1-2-3 Shibuya, Shibuya-ku\nTokyo 150-0002, Japan',
      phone: '+81 (0)3-XXXX-XXXX',
      email: 'japan@axshtech.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM JST',
    },
    {
      country: () => t.contact.offices.bangladesh.country,
      flag: '🇧🇩',
      city: () => t.contact.offices.bangladesh.city,
      address: 'House 45, Road 12, Banani\nDhaka 1213, Bangladesh',
      phone: '+880 2-XXXX-XXXX',
      email: 'bangladesh@axshtech.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM BST',
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
                {t.contact.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              {t.contact.hero.title} <span className="text-[#D4387F]">{t.contact.hero.highlight}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t.contact.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-2 border-gray-200 hover:border-[#D4387F] transition-all">
                  <CardContent className="p-10">
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-3">{t.contact.form.title}</h2>
                      <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-gray-900">{t.contact.form.name} *</Label>
                          <Input
                            id="name"
                            {...register('name')}
                            placeholder={t.contact.form.namePlaceholder}
                            className="border-2 border-gray-200 focus:border-[#D4387F] transition-colors"
                          />
                          {errors.name && (
                            <p className="text-sm text-red-600">{errors.name.message}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-900">{t.contact.form.email} *</Label>
                          <Input
                            id="email"
                            type="email"
                            {...register('email')}
                            placeholder={t.contact.form.emailPlaceholder}
                            className="border-2 border-gray-200 focus:border-[#D4387F] transition-colors"
                          />
                          {errors.email && (
                            <p className="text-sm text-red-600">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-gray-900">{t.contact.form.company}</Label>
                          <Input
                            id="company"
                            {...register('company')}
                            placeholder={t.contact.form.companyPlaceholder}
                            className="border-2 border-gray-200 focus:border-[#D4387F] transition-colors"
                          />
                          {errors.company && (
                            <p className="text-sm text-red-600">{errors.company.message}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-gray-900">{t.contact.form.phone}</Label>
                          <Input
                            id="phone"
                            type="tel"
                            {...register('phone')}
                            placeholder={t.contact.form.phonePlaceholder}
                            className="border-2 border-gray-200 focus:border-[#D4387F] transition-colors"
                          />
                          {errors.phone && (
                            <p className="text-sm text-red-600">{errors.phone.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-900">{t.contact.form.message} *</Label>
                        <Textarea
                          id="message"
                          {...register('message')}
                          placeholder={t.contact.form.messagePlaceholder}
                          rows={6}
                          className="border-2 border-gray-200 focus:border-[#D4387F] transition-colors resize-none"
                        />
                        {errors.message && (
                          <p className="text-sm text-red-600">{errors.message.message}</p>
                        )}
                      </div>

                      <Button 
                        type="submit" 
                        size="lg"
                        disabled={isSubmitting || contactMutation.isPending}
                        onTouchStart={() => setTouchedButton('send-message')}
                        onTouchEnd={() => setTimeout(() => setTouchedButton(null), 300)}
                        className={`w-full text-white gap-3 py-7 transition-all ${
                          touchedButton === 'send-message' ? 'bg-[#FF8FB8]' : 'bg-[#D4387F]'
                        } hover:bg-[#FF8FB8] disabled:opacity-50 disabled:cursor-not-allowed`}
                        style={{ WebkitTapHighlightColor: 'transparent' }}
                      >
                        {isSubmitting || contactMutation.isPending ? t.common.sending || 'Sending...' : t.contact.form.submit}
                        <Send className="w-5 h-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Quick Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-2 border-gray-200 hover:border-[#D4387F] transition-all">
                  <CardContent className="p-8 space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{t.contact.info.title}</h3>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 border-2 border-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-gray-900" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{t.contact.info.email.title}</h4>
                        <a href="mailto:info@axshtech.com" className="text-sm text-gray-600 hover:text-[#D4387F] transition-colors">
                          info@axshtech.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 border-2 border-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-gray-900" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{t.contact.info.phone.title}</h4>
                        <p className="text-sm text-gray-600">+81 (0)3-XXXX-XXXX</p>
                        <p className="text-sm text-gray-600">+880 2-XXXX-XXXX</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 border-2 border-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-gray-900" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{t.contact.info.hours.title}</h4>
                        <p className="text-sm text-gray-600">{t.contact.info.hours.time}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="border-2 border-[#D4387F] bg-gradient-to-br from-[#D4387F]/5 to-[#D4387F]/10">
                  <CardContent className="p-8 space-y-3">
                    <h3 className="text-xl font-bold text-gray-900">Need Immediate Assistance?</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      For urgent inquiries, please call our offices directly during business hours.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gray-900" />
              <Badge variant="outline" className="border-gray-300 text-gray-700 text-xs tracking-wider uppercase">
                {t.contact.offices.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t.contact.offices.title} <span className="text-[#D4387F]">{t.contact.offices.highlight}</span>
            </h2>
            <p className="text-xl text-gray-600">
              {t.contact.offices.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-2 border-gray-200 bg-white hover:border-[#D4387F] hover:shadow-lg transition-all h-full">
                  <CardContent className="p-10 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#D4387F]/10 rounded-2xl flex items-center justify-center text-3xl">
                        {office.flag}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{office.city()}</h3>
                        <p className="text-gray-600">{office.country()}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#D4387F] flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-600 whitespace-pre-line">
                          {office.address}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-[#D4387F] flex-shrink-0" />
                        <p className="text-sm text-gray-600">{office.phone}</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-[#D4387F] flex-shrink-0" />
                        <a href={`mailto:${office.email}`} className="text-sm text-gray-600 hover:text-[#D4387F] transition-colors">
                          {office.email}
                        </a>
                      </div>

                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-[#D4387F] flex-shrink-0" />
                        <p className="text-sm text-gray-600">{office.hours}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t-2 border-gray-200">
                      <Button 
                        variant="outline" 
                        onTouchStart={() => setTouchedButton(`directions-${index}`)}
                        onTouchEnd={() => setTimeout(() => setTouchedButton(null), 300)}
                        className={`w-full border-2 gap-2 transition-all ${
                          touchedButton === `directions-${index}` 
                            ? 'bg-[#D4387F] text-white border-[#D4387F]' 
                            : 'border-gray-900 text-gray-900'
                        } hover:bg-[#D4387F] hover:text-white hover:border-[#D4387F]`}
                        style={{ WebkitTapHighlightColor: 'transparent' }}
                      >
                        {t.contact.offices.directions}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gray-900" />
              <Badge variant="outline" className="border-gray-300 text-gray-700 text-xs tracking-wider uppercase">
                {t.contact.social.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t.contact.social.title} <span className="text-[#D4387F]">{t.contact.social.highlight}</span>
            </h2>
            <p className="text-xl text-gray-600">
              {t.contact.social.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="border-2 border-gray-200 bg-white hover:border-[#D4387F] hover:shadow-lg transition-all h-full">
                <CardContent className="p-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#D4387F]/10 rounded-2xl flex items-center justify-center text-3xl">
                      <Facebook className="w-6 h-6 text-[#D4387F] flex-shrink-0" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Facebook</h3>
                      <p className="text-gray-600">Follow us on Facebook</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#D4387F] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600 whitespace-pre-line">
                        <a href="https://www.facebook.com/axshtech" className="text-sm text-gray-600 hover:text-[#D4387F] transition-colors">
                          https://www.facebook.com/axshtech
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t-2 border-gray-200">
                    <Button 
                      variant="outline" 
                      onTouchStart={() => setTouchedSocialIndex(0)}
                      onTouchEnd={() => setTimeout(() => setTouchedSocialIndex(null), 300)}
                      className={`w-full border-2 gap-2 transition-all ${
                        touchedSocialIndex === 0 
                          ? 'bg-[#D4387F] text-white border-[#D4387F]' 
                          : 'border-gray-900 text-gray-900'
                      } hover:bg-[#D4387F] hover:text-white hover:border-[#D4387F]`}
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      {t.contact.social.follow}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-2 border-gray-200 bg-white hover:border-[#D4387F] hover:shadow-lg transition-all h-full">
                <CardContent className="p-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#D4387F]/10 rounded-2xl flex items-center justify-center text-3xl">
                      <Linkedin className="w-6 h-6 text-[#D4387F] flex-shrink-0" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">LinkedIn</h3>
                      <p className="text-gray-600">Connect with us on LinkedIn</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#D4387F] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600 whitespace-pre-line">
                        <a href="https://www.linkedin.com/company/axshtech" className="text-sm text-gray-600 hover:text-[#D4387F] transition-colors">
                          https://www.linkedin.com/company/axshtech
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t-2 border-gray-200">
                    <Button 
                      variant="outline" 
                      onTouchStart={() => setTouchedSocialIndex(1)}
                      onTouchEnd={() => setTimeout(() => setTouchedSocialIndex(null), 300)}
                      className={`w-full border-2 gap-2 transition-all ${
                        touchedSocialIndex === 1 
                          ? 'bg-[#D4387F] text-white border-[#D4387F]' 
                          : 'border-gray-900 text-gray-900'
                      } hover:bg-[#D4387F] hover:text-white hover:border-[#D4387F]`}
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      {t.contact.social.connect}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="border-2 border-gray-200 bg-white hover:border-[#D4387F] hover:shadow-lg transition-all h-full">
                <CardContent className="p-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#D4387F]/10 rounded-2xl flex items-center justify-center text-3xl">
                      <Twitter className="w-6 h-6 text-[#D4387F] flex-shrink-0" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Twitter</h3>
                      <p className="text-gray-600">Follow us on Twitter</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#D4387F] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600 whitespace-pre-line">
                        <a href="https://www.twitter.com/axshtech" className="text-sm text-gray-600 hover:text-[#D4387F] transition-colors">
                          https://www.twitter.com/axshtech
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t-2 border-gray-200">
                    <Button 
                      variant="outline" 
                      onTouchStart={() => setTouchedSocialIndex(2)}
                      onTouchEnd={() => setTimeout(() => setTouchedSocialIndex(null), 300)}
                      className={`w-full border-2 gap-2 transition-all ${
                        touchedSocialIndex === 2 
                          ? 'bg-[#D4387F] text-white border-[#D4387F]' 
                          : 'border-gray-900 text-gray-900'
                      } hover:bg-[#D4387F] hover:text-white hover:border-[#D4387F]`}
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      {t.contact.social.follow}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="border-2 border-gray-200 bg-white hover:border-[#D4387F] hover:shadow-lg transition-all h-full">
                <CardContent className="p-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#D4387F]/10 rounded-2xl flex items-center justify-center text-3xl">
                      <Instagram className="w-6 h-6 text-[#D4387F] flex-shrink-0" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Instagram</h3>
                      <p className="text-gray-600">Follow us on Instagram</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#D4387F] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600 whitespace-pre-line">
                        <a href="https://www.instagram.com/axshtech" className="text-sm text-gray-600 hover:text-[#D4387F] transition-colors">
                          https://www.instagram.com/axshtech
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t-2 border-gray-200">
                    <Button 
                      variant="outline" 
                      onTouchStart={() => setTouchedSocialIndex(3)}
                      onTouchEnd={() => setTimeout(() => setTouchedSocialIndex(null), 300)}
                      className={`w-full border-2 gap-2 transition-all ${
                        touchedSocialIndex === 3 
                          ? 'bg-[#D4387F] text-white border-[#D4387F]' 
                          : 'border-gray-900 text-gray-900'
                      } hover:bg-[#D4387F] hover:text-white hover:border-[#D4387F]`}
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      {t.contact.social.follow}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}