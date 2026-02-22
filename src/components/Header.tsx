import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import ThemeToggle from './ThemeToggle';
import logo from 'figma:asset/0621cc2c5bacc13d7baf5bc7b518107640d33480.png';
import { motion, AnimatePresence } from 'motion/react';
import Magnetic from './animations/Magnetic';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();
  const t = getTranslation(language);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.business, path: '/business' },
    { name: t.nav.clients, path: '/clients' },
    { name: t.nav.news, path: '/news' },
    { name: t.nav.contact, path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 font-header ${scrolled
          ? 'bg-background/80 backdrop-blur-2xl border-b border-border py-4'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Axsh Tech" className="h-10 md:h-12 dark:invert transition-all brightness-110" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 bg-muted/30 p-1.5 rounded-2xl border border-border/50 backdrop-blur-md">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-5 py-2.5 rounded-xl transition-all duration-500 text-sm font-bold uppercase tracking-widest ${isActive(item.path)
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'text-foreground/70 hover:text-foreground hover:bg-muted/50'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 bg-muted/30 p-1.5 rounded-2xl border border-border/50 backdrop-blur-md">
              <ThemeToggle />
              <div className="w-px h-6 bg-border/50" />
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <Magnetic>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden w-12 h-12 rounded-2xl bg-muted/50 hover:bg-primary hover:text-white transition-all duration-500"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </Button>
            </Magnetic>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.95 }}
              animate={{ opacity: 1, height: 'auto', scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden mt-4 overflow-hidden"
            >
              <nav className="p-6 bg-card border border-border rounded-[32px] shadow-2xl space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-6 py-4 rounded-2xl text-lg font-bold uppercase tracking-widest transition-all duration-500 ${isActive(item.path)
                        ? 'bg-primary text-white shadow-xl shadow-primary/20'
                        : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile actions inside the menu */}
                <div className="pt-6 mt-6 border-t border-border/50 flex items-center justify-between sm:hidden">
                  <ThemeToggle />
                  <LanguageSwitcher />
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}