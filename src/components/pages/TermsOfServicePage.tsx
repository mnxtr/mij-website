import { motion } from 'framer-motion';
import { FileText, Scale, AlertCircle, UserCheck, Shield, Gavel } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';
import { Button } from '../ui/button';

export default function TermsOfServicePage() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const sections = [
    {
      icon: FileText,
      title: t.terms.sections.acceptance.title,
      content: t.terms.sections.acceptance.content,
    },
    {
      icon: UserCheck,
      title: t.terms.sections.eligibility.title,
      content: t.terms.sections.eligibility.content,
    },
    {
      icon: Scale,
      title: t.terms.sections.services.title,
      content: t.terms.sections.services.content,
    },
    {
      icon: Shield,
      title: t.terms.sections.intellectual.title,
      content: t.terms.sections.intellectual.content,
    },
    {
      icon: AlertCircle,
      title: t.terms.sections.liability.title,
      content: t.terms.sections.liability.content,
    },
    {
      icon: Gavel,
      title: t.terms.sections.governing.title,
      content: t.terms.sections.governing.content,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Scale className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.terms.title}
            </h1>
            <p className="text-xl text-blue-100">
              {t.terms.subtitle}
            </p>
            <p className="text-sm text-blue-200 mt-4">
              {t.terms.lastUpdated}: {t.terms.updateDate}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12"
          >
            <p className="text-gray-700 leading-relaxed">
              {t.terms.introduction}
            </p>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 4) }}
                  className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {section.title}
                      </h2>
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white text-center"
          >
            <h2 className="text-2xl font-bold mb-4">{t.terms.contact.title}</h2>
            <p className="text-blue-100 mb-6">
              {t.terms.contact.description}
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              {t.terms.contact.button}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
