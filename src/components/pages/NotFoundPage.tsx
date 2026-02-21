import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';
import { Home, Search, Mail, Briefcase, Info } from 'lucide-react';

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
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700">
              {t.notFound.badge}
            </span>
          </motion.div>

          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-[150px] md:text-[250px] font-bold leading-none">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                404
              </span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            {t.notFound.title}{' '}
            <span className="text-primary">{t.notFound.highlight}</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            {t.notFound.description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => navigate('/')}
              className="group relative px-8 py-4 bg-primary text-white rounded-lg font-medium overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                <Home className="w-5 h-5" />
                {t.notFound.backToHome}
              </span>
            </button>

            <button
              onClick={() => navigate('/search')}
              className="px-8 py-4 bg-white text-gray-700 rounded-lg font-medium border-2 border-gray-200 hover:border-primary hover:text-primary transition-all"
            >
              <span className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                {t.common.search || 'Search'}
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Suggested Pages Section */}
      <section className="w-full py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.notFound.suggestedPages.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.common.exploreMore || 'Explore our most popular pages'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {suggestedPages.map((page, index) => (
              <motion.div
                key={page.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  onClick={() => navigate(page.path)}
                  className="group w-full h-full p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all text-left"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <page.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-gray-600">{page.description}</p>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="w-full py-24 bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t.common.needHelp || 'Need Help?'}
            </h2>
            <p className="text-lg text-white/90 mb-8">
              {t.common.helpDescription ||
                'Our team is here to assist you. Get in touch with us for any questions or support.'}
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="group relative px-8 py-4 bg-white text-primary rounded-lg font-medium overflow-hidden transition-all hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2 justify-center">
                <Mail className="w-5 h-5" />
                {t.common.contactUs}
              </span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
