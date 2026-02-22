import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, ArrowRight, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import logo from 'figma:asset/0621cc2c5bacc13d7baf5bc7b518107640d33480.png';
import Magnetic from './animations/Magnetic';

export function Footer() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const footerLinks = [
    {
      title: t.footer.quickLinks,
      links: [
        { name: t.nav.about, path: '/about' },
        { name: t.nav.business, path: '/business' },
        { name: t.nav.services, path: '/services' },
        { name: t.nav.news, path: '/news' },
      ]
    },
    {
      title: t.footer.connect,
      links: [
        { name: t.nav.clients, path: '/clients' },
        { name: t.nav.partners, path: '/partners' },
        { name: t.nav.recruit, path: '/recruit' },
        { name: t.nav.contact, path: '/contact' },
      ]
    }
  ];

  return (
    <footer className="relative bg-background pt-16 sm:pt-20 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 overflow-hidden border-t border-border/50 font-header transition-colors duration-500">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 md:gap-16 lg:gap-24 mb-12 sm:mb-16 md:mb-24">
          {/* Company Info */}
          <div className="lg:col-span-4 space-y-10">
            <Link to="/" className="inline-block group">
              <img src={logo} alt="Axsh Tech" className="h-12 dark:invert transition-all brightness-110 group-hover:scale-105 duration-500" />
            </Link>

            <div className="space-y-6">
              <p className="text-xl sm:text-2xl font-black text-foreground tracking-tight leading-tight">
                {t.home.tagline}
              </p>
              <p className="text-lg text-muted-foreground font-light font-body leading-relaxed">
                {t.footer.description}
              </p>
            </div>

            <div className="flex items-center gap-4 p-4 bg-muted/30 border border-border/50 rounded-2xl backdrop-blur-md">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-foreground">Japan × Bangladesh Partnership</span>
            </div>

            <div className="flex items-center gap-4">
              {[Github, Linkedin, Twitter].map((Icon, idx) => (
                <Magnetic key={idx}>
                  <a href="#" className="w-12 h-12 bg-muted/50 rounded-xl flex items-center justify-center border border-border group hover:bg-primary transition-all duration-500 hover:shadow-lg hover:shadow-primary/30">
                    <Icon className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-12">
            {footerLinks.map((section, idx) => (
              <div key={idx} className="space-y-8">
                <h4 className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-primary flex items-center gap-3">
                  <Sparkles className="w-4 h-4" />
                  {section.title}
                </h4>
                <ul className="space-y-6">
                  {section.links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-lg text-muted-foreground hover:text-foreground transition-all duration-500 flex items-center gap-3 group font-bold"
                      >
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-primary" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-10">
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-primary flex items-center gap-3">
              <Mail className="w-4 h-4" />
              {t.nav.contact}
            </h4>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-500 flex-shrink-0 border border-border">
                  <MapPin className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-2">
                  <p className="text-base sm:text-lg font-black text-foreground font-header uppercase tracking-tighter">Tokyo Headquarters</p>
                  <p className="text-muted-foreground font-light font-body leading-snug">Tokyo, Minato City, Japan</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-500 flex-shrink-0 border border-border">
                  <MapPin className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-2">
                  <p className="text-base sm:text-lg font-black text-foreground font-header uppercase tracking-tighter">Dhaka Regional Office</p>
                  <p className="text-muted-foreground font-light font-body leading-snug">Banani, Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-500 flex-shrink-0 border border-border">
                  <Mail className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
                </div>
                <a href="mailto:info@axshtech.com" className="text-lg font-bold text-muted-foreground hover:text-foreground transition-colors duration-500 font-body">
                  info@axshtech.com
                </a>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-500 flex-shrink-0 border border-border">
                  <Phone className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
                </div>
                <span className="text-lg font-bold text-muted-foreground font-body">+81 (0)3-XXXX-XXXX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-sm text-muted-foreground font-body order-2 md:order-1">
            © 2024 <span className="text-foreground font-bold">Axsh Tech</span>. {t.footer.rights}
          </p>

          <div className="flex items-center gap-10 order-1 md:order-2">
            <Link
              to="/privacy-policy"
              className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-500"
            >
              {t.footer.privacyPolicy}
            </Link>
            <Link
              to="/terms-of-service"
              className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-500"
            >
              {t.footer.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}