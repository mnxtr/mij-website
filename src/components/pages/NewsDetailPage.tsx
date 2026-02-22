import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Linkedin, Sparkles, Clock, Globe } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { Separator } from '../ui/separator';
import { useNewsArticle } from '../../hooks/useNews';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';
import Magnetic from '../animations/Magnetic';

export default function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = getTranslation(language);

  const { data: article, isLoading, isError } = useNewsArticle(id || '');

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-8">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 border-4 border-primary/20 border-t-primary rounded-full mx-auto"
          />
          <p className="text-2xl font-black text-foreground uppercase tracking-widest font-header animate-pulse">
            {t.common.loading || 'Synthesizing Narrative...'}
          </p>
        </div>
      </div>
    );
  }

  if (isError || !article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background font-header">
        <div className="text-center max-w-2xl mx-auto px-6 space-y-12">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative bg-card border-4 border-primary/30 p-12 rounded-[40px] shadow-2xl">
              <h1 className="text-6xl md:text-8xl font-black text-foreground mb-6 tracking-tighter">
                404
              </h1>
              <p className="text-2xl text-muted-foreground mb-10 font-light font-body">
                The narrative you seek has drifted into the void. It either never existed or has been archived.
              </p>
              <Magnetic>
                <Button
                  onClick={() => navigate('/news')}
                  size="lg"
                  className="bg-primary hover:bg-foreground hover:text-background text-white px-12 py-8 rounded-2xl text-xl font-black transition-all duration-700"
                >
                  <ArrowLeft className="w-6 h-6 mr-4" />
                  Back to Narratives
                </Button>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = article.title;

  const handleShare = (platform: 'facebook' | 'twitter' | 'linkedin') => {
    let url = '';
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
    }
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div className="w-full bg-background transition-colors duration-500 overflow-x-hidden">
      {/* Immersive Header Image */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        {/* Floated Navigation */}
        <div className="absolute top-12 left-0 w-full z-20">
          <div className="container mx-auto px-6 md:px-12">
            <Magnetic>
              <Button
                variant="outline"
                onClick={() => navigate('/news')}
                className="bg-background/20 backdrop-blur-xl border-white/20 text-white hover:bg-white hover:text-gray-950 px-8 py-6 rounded-2xl font-black uppercase tracking-widest text-sm transition-all duration-700"
              >
                <ArrowLeft className="w-5 h-5 mr-3" />
                {t.common.back || 'Back to Narratives'}
              </Button>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* Main Content Artery */}
      <section className="relative z-10 -mt-64 pb-32 font-header">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="bg-card/70 backdrop-blur-3xl border-2 border-border/50 rounded-[64px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden">
                <CardContent className="p-12 md:p-24 space-y-12">
                  {/* Article Spine */}
                  <div className="space-y-8">
                    <div className="flex flex-wrap items-center gap-6">
                      <Badge className="bg-primary text-white hover:bg-primary/80 px-8 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/30">
                        {article.category}
                      </Badge>
                      <div className="flex items-center gap-4 text-muted-foreground font-bold uppercase tracking-widest text-xs">
                        <Calendar className="w-5 h-5 text-primary" />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-4 text-muted-foreground font-bold uppercase tracking-widest text-xs">
                        <Clock className="w-5 h-5 text-primary" />
                        8 min read
                      </div>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black text-foreground leading-[0.9] tracking-tighter">
                      {article.title}
                    </h1>

                    <div className="flex items-center gap-6 pt-4">
                      <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center border border-border">
                        <User className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">Written by</p>
                        <p className="text-xl font-black text-foreground">{article.author}</p>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-border/50 h-0.5" />

                  {/* Narrative Body */}
                  <div className="prose prose-2xl prose-invert max-w-none">
                    <p className="text-2xl text-foreground font-bold leading-relaxed mb-12 font-body italic border-l-8 border-primary pl-10">
                      {article.excerpt}
                    </p>

                    <div className="space-y-10 text-xl text-muted-foreground font-light font-body leading-[1.8]">
                      {article.content === 'Full content here...' ? (
                        <>
                          <p>
                            At the convergence of Japanese precision and Bangladeshi ambition lies a saga of transformation that goes beyond mere commerce. The landscape of international trade is being rewritten through MIJ's innovative approach to collaborative growth.
                          </p>

                          <div className="py-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                              <div className="p-10 bg-muted/50 rounded-3xl border border-border">
                                <Sparkles className="w-10 h-10 text-primary mb-6" />
                                <h3 className="text-2xl font-black text-foreground mb-4 font-header">Strategic Synergy</h3>
                                <p className="text-lg">Fostering deep-rooted connections that prioritize sustainable value over short-term gains.</p>
                              </div>
                              <div className="p-10 bg-muted/50 rounded-3xl border border-border">
                                <Globe className="w-10 h-10 text-primary mb-6" />
                                <h3 className="text-2xl font-black text-foreground mb-4 font-header">Global Footprint</h3>
                                <p className="text-lg">Bridging the geographical divide with seamless logistics and cultural understanding.</p>
                              </div>
                            </div>
                          </div>

                          <p>
                            Our journey is defined by the relentless pursuit of excellence and the belief that when two vibrant cultures collaborate, the potential is limitless. From the high-tech hubs of Tokyo to the bustling markets of Dhaka, we are weaving a tapestry of success that honors both tradition and innovation.
                          </p>

                          <h2 className="text-4xl font-black text-foreground font-header pt-10 tracking-tight">The Horizon Ahead</h2>
                          <p>
                            As we look towards the future, our commitment remains steadfast: to serve as the definitive bridge that empowers businesses to transcend boundaries and achieve a shared vision of prosperity. This is more than a partnership; it is a movement.
                          </p>
                        </>
                      ) : (
                        <div className="whitespace-pre-line">
                          {article.content}
                        </div>
                      )}
                    </div>
                  </div>

                  <Separator className="bg-border/50 h-0.5" />

                  {/* Social Catalyst */}
                  <div className="flex flex-col lg:row lg:items-center justify-between gap-12 pt-8">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Share2 className="w-8 h-8 text-primary" />
                      </div>
                      <span className="text-2xl font-black text-foreground uppercase tracking-widest">
                        {t.common.share || 'Sow the Narrative'}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {[
                        { icon: Facebook, platform: 'facebook', label: 'Facebook' },
                        { icon: Twitter, platform: 'twitter', label: 'Twitter' },
                        { icon: Linkedin, platform: 'linkedin', label: 'LinkedIn' }
                      ].map((social) => (
                        <Magnetic key={social.platform}>
                          <Button
                            variant="outline"
                            onClick={() => handleShare(social.platform as any)}
                            className="bg-muted/10 border-border hover:bg-primary hover:text-white px-8 py-7 rounded-2xl transition-all duration-700 font-bold group"
                          >
                            <social.icon className="w-5 h-5 mr-3 group-hover:scale-125 transition-transform" />
                            {social.label}
                          </Button>
                        </Magnetic>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Echoes - Related Articles */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-32"
            >
              <div className="flex items-center justify-between mb-16 px-6">
                <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter">
                  {t.news?.relatedArticles || 'Subsequent Narratives'}
                </h2>
                <div className="hidden md:block h-0.5 bg-primary/20 flex-grow mx-12" />
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {[1, 2].map((i) => (
                  <Card key={i} className="group bg-card/30 backdrop-blur-xl border-2 border-border rounded-[48px] overflow-hidden hover:border-primary/50 transition-all duration-700 cursor-pointer">
                    <div className="h-64 bg-muted overflow-hidden relative">
                      <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                        <TrendingUp className="w-16 h-16 text-primary scale-150 rotate-[-45deg]" />
                      </div>
                      <div className="absolute inset-0 bg-background/40 backdrop-blur-sm group-hover:backdrop-blur-0 transition-all duration-700" />
                    </div>
                    <CardContent className="p-12 space-y-6">
                      <Badge className="bg-muted text-muted-foreground uppercase tracking-widest text-[10px] font-black">{t.common.comingSoon || 'Future Sequence'}</Badge>
                      <h3 className="text-3xl font-black text-foreground group-hover:text-primary transition-colors leading-tight tracking-tight">
                        Evolving the Landscape: Next Chapter in Japan-Bangladesh Trade
                      </h3>
                      <p className="text-lg text-muted-foreground font-light font-body leading-relaxed line-clamp-2">
                        Discover how the next phase of our expansion is set to redefine expectations and create new benchmarks for excellence.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Persistence Section */}
      <section className="py-48 bg-muted/20 relative overflow-hidden font-header">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto rounded-[80px] bg-foreground text-background p-24 md:p-32 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(var(--primary-rgb),0.1)_0%,transparent_60%)] pointer-events-none" />
            <div className="relative z-10 space-y-10">
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
                Engage with the <span className="text-primary">Narrative</span>
              </h2>
              <p className="text-2xl md:text-3xl text-background/60 font-light max-w-4xl mx-auto leading-relaxed font-body">
                We invite you to contribute to the dialogue. Have a perspective or an inquiry regarding our latest updates? Our doors are perpetually open.
              </p>
              <div className="pt-6">
                <Magnetic>
                  <Button
                    size="lg"
                    onClick={() => navigate('/contact')}
                    className="bg-primary hover:bg-white hover:text-primary text-white px-16 py-10 rounded-[40px] text-2xl font-black transition-all duration-700 shadow-2xl shadow-primary/40"
                  >
                    Initiate Connection
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
