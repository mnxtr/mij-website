import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { Separator } from '../ui/separator';
import { useNewsArticle } from '../../hooks/useNews';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';

export default function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = getTranslation(language);
  
  const { data: article, isLoading, isError } = useNewsArticle(id || '');

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D4387F] mx-auto mb-4"></div>
          <p className="text-gray-600">{t.common.loading || 'Loading...'}</p>
        </div>
      </div>
    );
  }

  if (isError || !article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t.common.notFound || 'Article Not Found'}
          </h1>
          <p className="text-gray-600 mb-6">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Button onClick={() => navigate('/news')} className="bg-[#D4387F] hover:bg-[#FF8FB8]">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Button>
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
    <div className="w-full bg-white">
      {/* Back Button */}
      <div className="bg-gray-50 py-6">
        <div className="container mx-auto px-6 md:px-12">
          <Button
            variant="ghost"
            onClick={() => navigate('/news')}
            className="text-gray-600 hover:text-[#D4387F]"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.common.back || 'Back to News'}
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </motion.div>

      {/* Article Content */}
      <div className="container mx-auto px-6 md:px-12 -mt-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white shadow-xl">
              <CardContent className="p-8 md:p-12">
                {/* Category Badge */}
                <Badge className="mb-4 bg-[#D4387F] text-white hover:bg-[#FF8FB8]">
                  {article.category}
                </Badge>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {article.title}
                </h1>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                </div>

                <Separator className="my-8" />

                {/* Excerpt */}
                <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                  {article.excerpt}
                </p>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {article.content}
                  </p>

                  {/* Placeholder for additional content sections */}
                  {article.content === 'Full content here...' && (
                    <div className="space-y-6 mt-8">
                      <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
                      <p>
                        This is where the full article content would appear. The content management system
                        would provide rich text formatting, images, videos, and other media elements to
                        create an engaging reading experience.
                      </p>

                      <h2 className="text-2xl font-bold text-gray-900">Key Highlights</h2>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Strategic partnerships driving growth</li>
                        <li>Expanding market presence in both regions</li>
                        <li>Commitment to quality and innovation</li>
                        <li>Building bridges between Japan and Bangladesh</li>
                      </ul>

                      <h2 className="text-2xl font-bold text-gray-900">Looking Forward</h2>
                      <p>
                        MIJ continues to strengthen its position as a leading bridge between Japanese
                        and Bangladeshi markets, bringing innovative solutions and fostering lasting
                        partnerships.
                      </p>
                    </div>
                  )}
                </div>

                <Separator className="my-8" />

                {/* Share Buttons */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Share2 className="w-5 h-5 text-gray-600" />
                    <span className="font-medium text-gray-900">
                      {t.common.share || 'Share this article'}:
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare('facebook')}
                      className="hover:border-[#D4387F] hover:text-[#D4387F]"
                    >
                      <Facebook className="w-4 h-4 mr-2" />
                      Facebook
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare('twitter')}
                      className="hover:border-[#D4387F] hover:text-[#D4387F]"
                    >
                      <Twitter className="w-4 h-4 mr-2" />
                      Twitter
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare('linkedin')}
                      className="hover:border-[#D4387F] hover:text-[#D4387F]"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Related Articles Section (Optional) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 mb-24"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t.news?.relatedArticles || 'Related Articles'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Placeholder for related articles */}
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="h-48 bg-gray-200 rounded-t-lg" />
                  <div className="p-6">
                    <Badge className="mb-3 bg-gray-200 text-gray-700">Company News</Badge>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {t.common.comingSoon || 'More articles coming soon'}
                    </h3>
                    <p className="text-gray-600">
                      Stay tuned for more updates and news from MIJ.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#D4387F] to-[#FF8FB8]">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t.common.stayUpdated || 'Stay Updated'}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t.common.newsletterText || 
                'Subscribe to our newsletter to receive the latest news and updates directly in your inbox.'}
            </p>
            <Button
              size="lg"
              onClick={() => navigate('/contact')}
              className="bg-white text-[#D4387F] hover:bg-gray-100"
            >
              {t.common.subscribe || 'Subscribe Now'}
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
