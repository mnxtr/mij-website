import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Calendar, Clock, ArrowRight, Newspaper } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import image_0b6f008db8209dab55941ae5a8e36a79c90ac176 from 'figma:asset/0b6f008db8209dab55941ae5a8e36a79c90ac176.png';

export default function NewsPage() {
  const [animatedImages, setAnimatedImages] = useState<{ [key: string]: boolean }>({});
  const [registeredImages, setRegisteredImages] = useState<string[]>([]);
  const [touchedCard, setTouchedCard] = useState<string | null>(null);
  const [touchedImage, setTouchedImage] = useState<string | null>(null);

  // Register image when it comes into view
  const registerImage = (imageId: string) => {
    setRegisteredImages(prev => {
      if (!prev.includes(imageId)) {
        return [...prev, imageId];
      }
      return prev;
    });
  };

  // Unregister image when it leaves viewport (turn back to grayscale)
  const unregisterImage = (imageId: string) => {
    setAnimatedImages(prev => ({ ...prev, [imageId]: false }));
  };

  // Auto-animate registered images in a cascading wave pattern - turn to color and keep until scrolled off
  useEffect(() => {
    if (registeredImages.length === 0) return;

    let currentIndex = 0;
    
    const interval = setInterval(() => {
      const imageId = registeredImages[currentIndex];
      
      // Turn current image to color and keep it
      if (!animatedImages[imageId]) {
        setAnimatedImages(prev => ({ ...prev, [imageId]: true }));
      }
      
      // Move to next image
      currentIndex = (currentIndex + 1) % registeredImages.length;
    }, 600); // Stagger timing for wave effect

    return () => clearInterval(interval);
  }, [registeredImages, animatedImages]);

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
                Latest News
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              News & <span className="text-[#D4387F]">Updates</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Stay informed about our latest achievements, partnerships, and innovations in Japan-Bangladesh business collaboration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="relative">
                  <div 
                    className="relative border-4 border-gray-900 rounded-2xl overflow-hidden p-2 bg-white"
                    onTouchStart={() => setTouchedImage('featured-article')}
                    onTouchEnd={() => setTimeout(() => setTouchedImage(null), 500)}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    <div className="relative overflow-hidden rounded-lg">
                      <ImageWithFallback
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className={`w-full h-[500px] object-cover transition-all duration-500 hover:grayscale-0 ${
                          touchedImage === 'featured-article' ? 'grayscale-0' : 'grayscale'
                        }`}
                      />
                    </div>
                    {/* Pink accent */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#D4387F] rounded-full" />
                    <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-[#D4387F] rounded-full" />
                  </div>
                  <Badge className="absolute top-6 left-6 bg-[#D4387F] text-white border-0 px-4 py-1.5">
                    Featured
                  </Badge>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#D4387F]" />
                      {featuredArticle.date}
                    </div>
                    <Badge variant="outline" className="border-[#D4387F] text-[#D4387F]">
                      {featuredArticle.category}
                    </Badge>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    {featuredArticle.title}
                  </h2>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>

                  <Button 
                    onTouchStart={() => setAnimatedImages(prev => ({ ...prev, 'read-featured': true }))}
                    onTouchEnd={() => setTimeout(() => setAnimatedImages(prev => ({ ...prev, 'read-featured': false })), 300)}
                    className={`text-white gap-3 px-8 py-6 transition-all ${
                      animatedImages['read-featured'] ? 'bg-[#FF8FB8]' : 'bg-[#D4387F]'
                    } hover:bg-[#FF8FB8]`}
                    size="lg"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    Read Full Article
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-y-2 border-gray-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {['All', 'Business', 'Technology', 'Partnership'].map((category) => (
              <button
                key={category}
                onClick={() => {
                  // Filter articles based on category
                }}
                className={
                  category.toLowerCase() === 'all'
                    ? 'bg-[#D4387F] hover:bg-[#D4387F] text-white border-0 px-6 py-2 rounded-full transition-all'
                    : 'border-2 text-gray-900 transition-all px-6 py-2 rounded-full hover:border-[#D4387F] hover:text-[#D4387F]'
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {regularArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onViewportEnter={() => registerImage(`news-${article.id}`)}
                onViewportLeave={() => unregisterImage(`news-${article.id}`)}
              >
                <Card 
                  className={`border-2 overflow-hidden transition-all group cursor-pointer h-full ${
                    animatedImages[`news-${article.id}`] ? 'border-[#D4387F]' : 'border-gray-200'
                  } hover:border-[#D4387F]`}
                >
                  <div 
                    className="relative h-56 overflow-hidden bg-gray-100"
                  >
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        animatedImages[`news-${article.id}`] ? 'grayscale-0' : 'grayscale'
                      } group-hover:grayscale-0`}
                      onTouchStart={() => setAnimatedImages(prev => ({ ...prev, [`news-${article.id}`]: true }))}
                      onTouchEnd={() => setTimeout(() => setAnimatedImages(prev => ({ ...prev, [`news-${article.id}`]: false })), 500)}
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant="outline" className="bg-white/90 backdrop-blur border-gray-300 text-gray-700">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4 text-[#D4387F]" />
                      {article.date}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#D4387F] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="pt-4">
                      <Button 
                        variant="ghost" 
                        onTouchStart={() => setAnimatedImages(prev => ({ ...prev, [`read-more-${article.id}`]: true }))}
                        onTouchEnd={() => setTimeout(() => setAnimatedImages(prev => ({ ...prev, [`read-more-${article.id}`]: false })), 300)}
                        className={`p-0 h-auto gap-2 group/btn transition-all ${
                          animatedImages[`read-more-${article.id}`]
                            ? 'text-[#FF8FB8] bg-[#D4387F]/10'
                            : 'text-[#D4387F]'
                        } hover:text-[#D4387F] hover:bg-[#D4387F]/10`}
                        style={{ WebkitTapHighlightColor: 'transparent' }}
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-[#D4387F] bg-gradient-to-br from-[#D4387F]/5 to-[#D4387F]/10 max-w-4xl mx-auto">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Want to Stay <span className="text-[#D4387F]">Updated?</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Subscribe to our newsletter for the latest news, updates, and insights from Axsh Tech.
                </p>
                <Button 
                  onClick={() => {
                    // Navigate to contact page
                  }}
                  onTouchStart={() => setAnimatedImages(prev => ({ ...prev, 'contact-us': true }))}
                  onTouchEnd={() => setTimeout(() => setAnimatedImages(prev => ({ ...prev, 'contact-us': false })), 300)}
                  className={`text-white gap-3 px-10 py-7 transition-all ${
                    animatedImages['contact-us'] ? 'bg-[#FF8FB8]' : 'bg-[#D4387F]'
                  } hover:bg-[#FF8FB8]`}
                  size="lg"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}