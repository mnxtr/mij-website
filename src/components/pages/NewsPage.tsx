import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image_0b6f008db8209dab55941ae5a8e36a79c90ac176 from 'figma:asset/0b6f008db8209dab55941ae5a8e36a79c90ac176.png';
import TextReveal from '../animations/TextReveal';
import Magnetic from '../animations/Magnetic';

export default function NewsPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');

  const featuredArticle = {
    id: 1,
    category: 'Partnerships',
    date: 'November 15, 2024',
    title: 'MIJ starts their strategic partnership with Bangladesh collaborating with many Bangladeshi retail stores',
    excerpt: 'New collaborations with leading Bangladeshi retail firms to set to accelerate MIJ skincare product presence in Bangladesh market',
    image: image_0b6f008db8209dab55941ae5a8e36a79c90ac176,
    featured: true,
  };

  const regularArticles = [
    {
      id: 2,
      category: 'Business',
      date: 'November 10, 2024',
      title: 'MIJ Skincare Products Gain Strong Market Traction in Bangladesh',
      excerpt: 'Premium Japanese skincare brand MIJ experiences significant growth in Bangladesh market through strategic retail partnerships and local distribution networks.',
      image: 'https://images.unsplash.com/photo-1515355252367-42ae86cb92f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMG9mZmljZXxlbnwxfHx8fDE3NjM0NjcxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
    {
      id: 3,
      category: 'Business',
      date: 'November 5, 2024',
      title: 'Expanding Retail Network: MIJ Products Now Available Across Bangladesh',
      excerpt: 'Strategic partnerships with major Bangladeshi retail chains bring authentic Japanese skincare solutions to consumers nationwide, strengthening Japan-Bangladesh trade relations.',
      image: 'https://images.unsplash.com/photo-1762968274962-20c12e6e8ecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzM4MzkyNHww&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
    {
      id: 4,
      category: 'Partnerships',
      date: 'October 28, 2024',
      title: 'Bangladesh Retail Leaders Partner with Axsh Tech for Japanese Product Distribution',
      excerpt: 'Leading Bangladeshi retail firms collaborate with Axsh Tech to introduce premium Japanese products, including MIJ skincare line, to meet growing consumer demand.',
      image: 'https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzYzNDE3MzEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
    {
      id: 5,
      category: 'Business',
      date: 'October 20, 2024',
      title: 'Japanese Quality Meets Bangladesh Market: MIJ Success Story',
      excerpt: 'MIJ skincare products demonstrate the power of Japan-Bangladesh business collaboration, setting new standards for quality and authenticity in the beauty sector.',
      image: 'https://images.unsplash.com/photo-1515355252367-42ae86cb92f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMG9mZmljZXxlbnwxfHx8fDE3NjM0NjcxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
    {
      id: 6,
      category: 'Events',
      date: 'October 15, 2024',
      title: 'Axsh Tech Hosts Bangladesh-Japan Retail Partnership Summit',
      excerpt: 'Key retail stakeholders from Bangladesh and Japan gather to explore opportunities in product distribution, with focus on authentic Japanese brands entering Bangladesh market.',
      image: 'https://images.unsplash.com/photo-1762968274962-20c12e6e8ecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzM4MzkyNHww&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
  ];

  const categories = ['All', 'Business', 'Technology', 'Partnerships', 'Events'];

  return (
    <div className="w-full bg-background transition-colors duration-500 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 bg-background overflow-hidden font-header">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.08, 0.05] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]"
          />
        </div>

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
                Knowledge & News
              </Badge>
              <div className="w-16 h-px bg-primary/20" />
            </motion.div>

            <h1 className="text-7xl md:text-9xl font-black mb-10 leading-[0.9] tracking-tighter text-foreground">
              <TextReveal text="Inside the" />
              <TextReveal text="MIJ Narrative" className="text-primary" delay={0.5} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl md:text-3xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light font-body"
            >
              Unveiling our journey of transformation, global synergy, and the stories that define our impact across borders.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Insight Section - High Impact */}
      <section className="py-24 bg-background relative z-10 font-header">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-7xl mx-auto"
          >
            <Card
              onClick={() => navigate(`/news/${featuredArticle.id}`)}
              className="group cursor-pointer relative overflow-hidden rounded-[80px] border-none shadow-2xl h-[700px] flex items-end"
            >
              <div className="absolute inset-0 z-0">
                <ImageWithFallback
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
              </div>

              <div className="relative z-10 p-16 md:p-24 w-full">
                <div className="flex flex-wrap items-center gap-6 mb-10">
                  <Badge className="bg-primary text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/50">
                    Featured Insight
                  </Badge>
                  <div className="flex items-center gap-3 text-white/70 font-bold uppercase tracking-widest text-sm">
                    <Calendar className="w-5 h-5 text-primary" />
                    {featuredArticle.date}
                  </div>
                </div>

                <div className="max-w-5xl space-y-8">
                  <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter group-hover:text-primary transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-2xl text-white/70 font-light font-body leading-relaxed max-w-3xl line-clamp-2">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="pt-8">
                    <Magnetic>
                      <Button
                        size="lg"
                        className="bg-white text-gray-950 hover:bg-primary hover:text-white px-12 py-10 text-xl rounded-2xl transition-all duration-700 font-black group/btn"
                      >
                        Read Full Narrative
                        <ArrowRight className="w-6 h-6 ml-4 group-hover/btn:translate-x-4 transition-transform duration-500" />
                      </Button>
                    </Magnetic>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Filter & Search Bar - Glassmorphism */}
      <section className="sticky top-24 z-40 py-8 bg-background/50 backdrop-blur-2xl border-y border-border/50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-8 py-3 rounded-2xl text-sm font-black uppercase tracking-widest transition-all duration-500 ${activeCategory === category
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'bg-muted/10 text-muted-foreground hover:bg-muted/30 hover:text-foreground border border-border/50'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="relative group w-full md:w-96">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Search narratives..."
                className="w-full h-14 bg-muted/20 border-2 border-border/50 rounded-2xl pl-16 pr-6 text-foreground font-body focus:border-primary focus:ring-0 transition-all outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Grid - Staggered Cards */}
      <section className="py-24 bg-background relative z-10 font-header">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {regularArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card
                  onClick={() => navigate(`/news/${article.id}`)}
                  className="group h-full bg-card/30 backdrop-blur-xl border-2 border-border rounded-[64px] overflow-hidden hover:border-primary/50 hover:shadow-2xl transition-all duration-1000 flex flex-col"
                >
                  <div className="relative h-72 overflow-hidden bg-muted">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <Badge className="absolute top-8 right-8 bg-background/80 backdrop-blur-3xl text-foreground border border-white/20 px-6 py-2 rounded-xl text-xs font-black uppercase tracking-[0.2em]">
                      {article.category}
                    </Badge>
                  </div>

                  <CardContent className="p-12 space-y-8 flex-grow flex flex-col">
                    <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-primary">
                      <Clock className="w-5 h-5" />
                      {article.date} • 5 min read
                    </div>

                    <h3 className="text-3xl font-black text-foreground group-hover:text-primary transition-colors leading-[1.2] tracking-tight line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-xl text-muted-foreground font-light font-body leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="pt-6 mt-auto">
                      <button className="flex items-center gap-4 text-primary font-black uppercase tracking-widest text-sm group/btn">
                        Explore Narrative
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-3 transition-transform duration-500" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-32 text-center"
          >
            <Magnetic>
              <Button
                variant="outline"
                className="border-4 border-foreground hover:bg-foreground hover:text-background px-16 py-12 text-2xl rounded-3xl transition-all duration-700 font-black font-header group"
              >
                Load More Narratives
              </Button>
            </Magnetic>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section - High Impact Glassmorphism */}
      <section className="py-48 bg-muted/20 relative overflow-hidden font-header">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-6xl mx-auto"
          >
            <Badge variant="outline" className="px-8 py-3 border-primary text-primary bg-primary/5 rounded-full mb-12 font-black uppercase tracking-[0.3em] text-sm">
              Keep the Dialogue Alive
            </Badge>
            <h2 className="text-7xl md:text-9xl font-black text-foreground mb-12 tracking-tighter leading-[0.85]">
              Stay <span className="text-primary">Informed</span>
            </h2>
            <p className="text-3xl md:text-4xl text-muted-foreground max-w-4xl mx-auto mb-20 font-light font-body leading-relaxed">
              Subscribe to the MIJ Narrative and receive the latest insights on global business and innovation directly in your inbox.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full h-20 bg-background border-4 border-border/50 rounded-3xl px-10 text-2xl font-body outline-none focus:border-primary transition-all"
              />
              <Magnetic>
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-primary hover:bg-foreground hover:text-background text-white px-16 py-10 rounded-3xl h-20 text-2xl font-black transition-all duration-700 shadow-2xl shadow-primary/30"
                >
                  Subscribe
                </Button>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}