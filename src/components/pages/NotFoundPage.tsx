import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';
import { Home, Search, Mail, Briefcase, Info, Sparkles, ArrowRight, Compass } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import Magnetic from '../animations/Magnetic';

export default function NotFoundPage() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = getTranslation(language);

  const suggestedPages = [
    {
      icon: Home,
      title: t.notFound.suggestedPages.home.title,
      description: t.notFound.suggestedPages.home.description,
      path: '/',
    },
    {
      icon: Briefcase,
      title: t.notFound.suggestedPages.services.title,
      description: t.notFound.suggestedPages.services.description,
      path: '/services',
    },
    {
      icon: Info,
      title: t.notFound.suggestedPages.about.title,
      description: t.notFound.suggestedPages.about.description,
      path: '/about',
    },
    {
      icon: Mail,
      title: t.notFound.suggestedPages.contact.title,
      description: t.notFound.suggestedPages.contact.description,
      path: '/contact',
    },
  ];

  return (
    <div className="w-full bg-background transition-colors duration-500 overflow-x-hidden min-h-screen font-header">
      {/* Immersive 404 Hero */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px]"
          />
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150 pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-32 text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-6 mb-12"
          >
            <div className="w-16 h-px bg-primary/30" />
            <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5 px-8 py-2 text-sm tracking-[0.3em] uppercase rounded-full font-black animate-pulse">
              System Discontinuity
            </Badge>
            <div className="w-16 h-px bg-primary/30" />
          </motion.div>

          {/* Glitch-style 404 */}
          <div className="relative inline-block">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[180px] md:text-[350px] font-black leading-none tracking-tighter text-foreground selection:bg-primary/30"
            >
              404
            </motion.h1>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center -z-10">
              <div className="w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-5xl md:text-8xl font-black text-foreground tracking-tighter leading-tight">
              Lost in <span className="text-primary italic">Translation</span>
            </h2>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light font-body max-w-3xl mx-auto leading-relaxed">
              {t.notFound.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-12">
            <Magnetic>
              <Button
                size="lg"
                onClick={() => navigate('/')}
                className="bg-primary hover:bg-foreground hover:text-background text-white px-16 py-10 rounded-3xl text-2xl font-black shadow-2xl shadow-primary/30 group transition-all duration-700"
              >
                <Home className="w-8 h-8 mr-4 group-hover:-translate-y-2 transition-transform" />
                {t.notFound.backToHome}
              </Button>
            </Magnetic>
            <Magnetic>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/search')}
                className="border-4 border-border hover:border-primary hover:bg-primary/5 text-foreground px-16 py-10 rounded-3xl text-2xl font-black transition-all duration-700"
              >
                <Search className="w-8 h-8 mr-4" />
                Initiate Scan
              </Button>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* Suggested Coordinates - Matrix Grid */}
      <section className="py-40 bg-muted/20 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-6 mb-10">
              <div className="w-16 h-px bg-border" />
              <Badge variant="outline" className="border-border text-muted-foreground text-xs tracking-[0.2em] uppercase px-4 py-1">
                Navigator
              </Badge>
              <div className="w-16 h-px bg-border" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter mb-8">
              Recalibrate Your <span className="text-primary">Journey</span>
            </h2>
            <p className="text-2xl text-muted-foreground font-light font-body leading-relaxed">
              Perhaps one of these primary destinations is where you intended to arrive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
            {suggestedPages.map((page, index) => (
              <motion.div
                key={page.path}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card
                  onClick={() => navigate(page.path)}
                  className="group h-full bg-card/50 backdrop-blur-3xl border-2 border-border p-12 rounded-[56px] text-center flex flex-col items-center hover:border-primary/50 hover:shadow-2xl transition-all duration-1000 cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-1000" />
                  <div className="w-24 h-24 bg-background border-2 border-border rounded-3xl flex items-center justify-center mb-10 group-hover:bg-primary group-hover:border-primary group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-700">
                    <page.icon className="w-10 h-10 text-foreground group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-black mb-6 text-foreground group-hover:text-primary transition-colors tracking-tight">
                    {page.title}
                  </h3>
                  <p className="text-xl text-muted-foreground font-light font-body leading-relaxed line-clamp-2">
                    {page.description}
                  </p>
                  <div className="pt-8 mt-auto flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                    Teleport <ArrowRight className="w-5 h-5" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Node - Infinite Feedback Loop */}
      <section className="py-48 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto rounded-[80px] bg-foreground text-background p-24 md:p-32 relative overflow-hidden overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(var(--primary-rgb),0.2)_0%,transparent_60%)] pointer-events-none" />
            <div className="relative z-10 space-y-12">
              <Compass className="w-24 h-24 mx-auto text-primary animate-spin" style={{ animationDuration: '6s' }} />
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85]">
                Need <span className="text-primary">Human</span> Assistance?
              </h2>
              <p className="text-2xl md:text-3xl text-background/60 font-light max-w-4xl mx-auto leading-relaxed font-body">
                If the void persists, our human navigators are prepared to guide you back to stable coordinates.
              </p>
              <div className="pt-10">
                <Magnetic>
                  <Button
                    size="lg"
                    onClick={() => navigate('/contact')}
                    className="bg-primary hover:bg-white hover:text-primary text-white px-20 py-12 rounded-[40px] text-3xl font-black transition-all duration-700 shadow-2xl shadow-primary/50 group"
                  >
                    <Mail className="w-10 h-10 mr-6 group-hover:scale-125 transition-transform" />
                    Initiate Contact
                  </Button>
                </Magnetic>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
