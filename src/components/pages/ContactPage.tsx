import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'motion/react';
import { Badge } from '../ui/badge';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';
import { contactSchema, type ContactFormData } from '../../schemas/contact.schema';
import { useContactForm } from '../../hooks/useContact';
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

export default function ContactPage() {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const contactMutation = useContactForm();

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
      alert(t.common.success || 'Thank you! We will get back to you soon.');
    } catch (error) {
      console.error('Form submission error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const offices = [
    {
      id: 'japan',
      country: () => t.contact.offices.japan.country,
      flag: '🇯🇵',
      city: () => t.contact.offices.japan.city,
      address: '1-2-3 Shibuya, Shibuya-ku\nTokyo 150-0002, Japan',
      phone: '+81 (0)3-XXXX-XXXX',
      email: 'japan@axshtech.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM JST',
    },
    {
      id: 'bangladesh',
      country: () => t.contact.offices.bangladesh.country,
      flag: '🇧🇩',
      city: () => t.contact.offices.bangladesh.city,
      address: 'House 45, Road 12, Banani\nDhaka 1213, Bangladesh',
      phone: '+880 2-XXXX-XXXX',
      email: 'bangladesh@axshtech.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM BST',
    },
  ];

  const socialLinks = [
    { id: 'facebook', icon: Facebook, name: 'Facebook', url: 'https://facebook.com/axshtech' },
    { id: 'linkedin', icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com/company/axshtech' },
    { id: 'twitter', icon: Twitter, name: 'Twitter', url: 'https://twitter.com/axshtech' },
    { id: 'instagram', icon: Instagram, name: 'Instagram', url: 'https://instagram.com/axshtech' },
  ];

  return (
    <div className="w-full bg-background transition-colors duration-500 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 bg-background overflow-hidden font-header">
        <FloatingShape className="w-96 h-96 bg-primary/10 -top-10 -left-10" />
        <FloatingShape className="w-80 h-80 bg-primary/5 -bottom-20 right-20" delay={2} />

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
                {t.contact.badge}
              </Badge>
              <div className="w-16 h-px bg-primary/20" />
            </motion.div>

            <h1 className="text-7xl md:text-9xl font-black mb-10 leading-[0.9] tracking-tighter text-foreground">
              <TextReveal text={t.contact.hero.title} />
              <TextReveal text={t.contact.hero.highlight} className="text-primary" delay={0.5} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light font-body"
            >
              {t.contact.hero.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Global Contact & Form */}
      <section className="py-24 bg-background relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card className="border-2 border-border bg-card/30 backdrop-blur-2xl p-10 md:p-16 rounded-[64px] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />

                  <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tighter font-header">{t.contact.form.title}</h2>
                    <p className="text-xl text-muted-foreground font-light font-body">Fill out the form below and we'll get back to you within 24 hours</p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <Label htmlFor="name" className="text-foreground font-bold uppercase tracking-widest text-xs ml-2 font-header">{t.contact.form.name} *</Label>
                        <Input
                          id="name"
                          {...register('name')}
                          placeholder={t.contact.form.namePlaceholder}
                          className="h-16 border-2 border-border bg-background/50 focus:border-primary focus:ring-primary rounded-2xl px-6 text-lg transition-all font-body"
                        />
                        {errors.name && <p className="text-sm text-primary font-bold ml-2">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-4">
                        <Label htmlFor="email" className="text-foreground font-bold uppercase tracking-widest text-xs ml-2 font-header">{t.contact.form.email} *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register('email')}
                          placeholder={t.contact.form.emailPlaceholder}
                          className="h-16 border-2 border-border bg-background/50 focus:border-primary focus:ring-primary rounded-2xl px-6 text-lg transition-all font-body"
                        />
                        {errors.email && <p className="text-sm text-primary font-bold ml-2">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <Label htmlFor="company" className="text-foreground font-bold uppercase tracking-widest text-xs ml-2 font-header">{t.contact.form.company}</Label>
                        <Input
                          id="company"
                          {...register('company')}
                          placeholder={t.contact.form.companyPlaceholder}
                          className="h-16 border-2 border-border bg-background/50 focus:border-primary focus:ring-primary rounded-2xl px-6 text-lg transition-all font-body"
                        />
                        {errors.company && <p className="text-sm text-primary font-bold ml-2">{errors.company.message}</p>}
                      </div>
                      <div className="space-y-4">
                        <Label htmlFor="phone" className="text-foreground font-bold uppercase tracking-widest text-xs ml-2 font-header">{t.contact.form.phone}</Label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register('phone')}
                          placeholder={t.contact.form.phonePlaceholder}
                          className="h-16 border-2 border-border bg-background/50 focus:border-primary focus:ring-primary rounded-2xl px-6 text-lg transition-all font-body"
                        />
                        {errors.phone && <p className="text-sm text-primary font-bold ml-2">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Label htmlFor="message" className="text-foreground font-bold uppercase tracking-widest text-xs ml-2 font-header">{t.contact.form.message} *</Label>
                      <Textarea
                        id="message"
                        {...register('message')}
                        placeholder={t.contact.form.messagePlaceholder}
                        rows={6}
                        className="border-2 border-border bg-background/50 focus:border-primary focus:ring-primary rounded-[32px] p-8 text-lg transition-all font-body resize-none"
                      />
                      {errors.message && <p className="text-sm text-primary font-bold ml-2">{errors.message.message}</p>}
                    </div>

                    <Magnetic>
                      <Button
                        type="submit"
                        disabled={isSubmitting || contactMutation.isPending}
                        className="w-full bg-primary hover:bg-foreground hover:text-background text-white gap-4 py-12 rounded-3xl transition-all duration-700 shadow-2xl shadow-primary/30 group font-bold text-2xl font-header"
                      >
                        {isSubmitting || contactMutation.isPending ? t.common.sending || 'Sending...' : t.contact.form.submit}
                        <Send className="w-7 h-7 group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform duration-500" />
                      </Button>
                    </Magnetic>
                  </form>
                </Card>
              </motion.div>
            </div>

            {/* Quick Contact Info */}
            <div className="lg:col-span-5 space-y-10">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <Card className="border-2 border-border bg-card/30 backdrop-blur-xl p-12 rounded-[56px] space-y-10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl" />

                  <h3 className="text-3xl font-black text-foreground tracking-tight font-header">{t.contact.info.title}</h3>

                  <div className="space-y-10">
                    {[
                      { icon: Mail, label: t.contact.info.email.title, value: 'info@axshtech.com', type: 'email' },
                      { icon: Phone, label: t.contact.info.phone.title, value: '+81 (0)3-XXXX-XXXX\n+880 2-XXXX-XXXX', type: 'text' },
                      { icon: Clock, label: t.contact.info.hours.title, value: t.contact.info.hours.time, type: 'text' }
                    ].map((info, idx) => (
                      <div key={idx} className="flex items-start gap-6 group/item">
                        <Magnetic>
                          <div className="w-16 h-16 border-2 border-border bg-background rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-700 group-hover/item:bg-primary group-hover/item:border-primary group-hover/item:rotate-12 group-hover/item:shadow-xl group-hover/item:shadow-primary/30">
                            <info.icon className="w-8 h-8 text-foreground group-hover/item:text-white transition-colors duration-500" />
                          </div>
                        </Magnetic>
                        <div className="space-y-2">
                          <p className="text-sm font-black uppercase tracking-[0.2em] text-primary font-header">{info.label}</p>
                          {info.type === 'email' ? (
                            <a href={`mailto:${info.value}`} className="text-xl font-bold text-foreground hover:text-primary transition-colors font-header">{info.value}</a>
                          ) : (
                            <p className="text-xl font-bold text-foreground whitespace-pre-line font-header">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border-2 border-primary/30 bg-primary/5 p-12 rounded-[48px] space-y-4">
                    <h3 className="text-2xl font-black text-foreground font-header tracking-tight">Need Immediate Assistance?</h3>
                    <p className="text-xl text-muted-foreground font-light font-body leading-relaxed">
                      For urgent inquiries, please call our offices directly during business hours. Our experts are ready to help.
                    </p>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-32 bg-muted/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.02)_0%,transparent_70%)] pointer-events-none" />

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
                {t.contact.offices.badge}
              </Badge>
              <div className="w-16 h-px bg-border" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-foreground tracking-tighter font-header">
              {t.contact.offices.title} <span className="text-primary">{t.contact.offices.highlight}</span>
            </h2>
            <p className="text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed font-body">
              {t.contact.offices.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {offices.map((office, index) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <Card className={`border-2 border-border bg-card group cursor-pointer p-12 rounded-[64px] transition-all duration-700 h-full flex flex-col hover:border-primary/50 hover:shadow-2xl`}>
                  <div className="flex items-center gap-6 mb-12">
                    <div className="w-20 h-20 bg-primary/5 border border-primary/20 rounded-3xl flex items-center justify-center text-5xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-xl shadow-primary/5">
                      {office.flag}
                    </div>
                    <div>
                      <h3 className="text-4xl font-black text-foreground tracking-tight font-header">{office.city()}</h3>
                      <p className="text-xl text-primary font-bold tracking-widest font-header uppercase">{office.country()}</p>
                    </div>
                  </div>

                  <div className="space-y-8 flex-grow">
                    {[
                      { icon: MapPin, text: office.address },
                      { icon: Phone, text: office.phone },
                      { icon: Mail, text: office.email, isLink: true },
                      { icon: Clock, text: office.hours }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 group/item">
                        <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        {item.isLink ? (
                          <a href={`mailto:${item.text}`} className="text-lg text-muted-foreground hover:text-primary transition-colors font-body font-light truncate">
                            {item.text}
                          </a>
                        ) : (
                          <p className="text-lg text-muted-foreground font-body font-light whitespace-pre-line leading-relaxed">
                            {item.text}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="pt-10 mt-10 border-t border-border/50">
                    <Magnetic>
                      <Button
                        variant="outline"
                        className="w-full border-2 border-primary/20 hover:border-primary text-foreground gap-4 py-8 rounded-2xl transition-all duration-700 font-bold text-xl font-header bg-transparent"
                      >
                        {t.contact.offices.directions}
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-500" />
                      </Button>
                    </Magnetic>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-32 bg-background relative overflow-hidden transition-colors duration-500">
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
                {t.contact.social.badge}
              </Badge>
              <div className="w-16 h-px bg-border" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-foreground tracking-tighter font-header">
              {t.contact.social.title} <span className="text-primary">{t.contact.social.highlight}</span>
            </h2>
            <p className="text-2xl text-muted-foreground font-light max-w-3xl mx-auto font-body leading-relaxed">
              {t.contact.social.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.id}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <Card className={`group cursor-pointer border-2 border-border bg-card/30 p-12 rounded-[56px] transition-all duration-700 h-full flex flex-col items-center hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5`}>
                  <Magnetic>
                    <div className="w-28 h-28 border-2 border-border bg-background rounded-[32px] flex items-center justify-center mb-10 transition-all duration-700 group-hover:bg-primary group-hover:border-primary group-hover:rotate-12 group-hover:shadow-2xl group-hover:shadow-primary/40">
                      <social.icon className="w-12 h-12 text-foreground group-hover:text-white transition-colors duration-500" />
                    </div>
                  </Magnetic>
                  <h3 className="text-3xl font-black mb-4 text-foreground group-hover:text-primary transition-colors font-header tracking-tight">
                    {social.name}
                  </h3>
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className="text-lg text-muted-foreground hover:text-primary transition-colors font-body font-light group-hover:underline mt-2">
                    Follow us on {social.name}
                  </a>

                  <div className="pt-10 mt-auto w-full">
                    <Magnetic>
                      <button className="w-full flex items-center justify-center gap-4 text-primary font-black uppercase tracking-widest text-sm font-header group/btn">
                        {t.contact.social.follow}
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-3 transition-transform duration-500" />
                      </button>
                    </Magnetic>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}