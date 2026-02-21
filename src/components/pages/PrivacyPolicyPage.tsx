import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, UserCheck, Mail } from 'lucide-react';
import { Button } from '../ui/button';

export default function PrivacyPolicyPage() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = getTranslation(language);

  const sections = [
    {
      icon: Database,
      title: t.privacy.sections.collection.title,
      content: t.privacy.sections.collection.content,
    },
    {
      icon: Eye,
      title: t.privacy.sections.usage.title,
      content: t.privacy.sections.usage.content,
    },
    {
      icon: Lock,
      title: t.privacy.sections.security.title,
      content: t.privacy.sections.security.content,
    },
    {
      icon: UserCheck,
      title: t.privacy.sections.rights.title,
      content: t.privacy.sections.rights.content,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.privacy.title}
            </h1>
            <p className="text-xl text-purple-100">
              {t.privacy.subtitle}
            </p>
            <p className="text-sm text-purple-200 mt-4">
              {t.privacy.lastUpdated}: {t.privacy.updateDate}
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
            className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-12"
          >
            <p className="text-gray-700 leading-relaxed">
              {t.privacy.introduction}
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
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-purple-600" />
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
            className="mt-12 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-8 text-white text-center"
          >
            <Mail className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">{t.privacy.sections.contact.title}</h2>
            <p className="text-purple-100 mb-6">
              {t.privacy.sections.contact.description}
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate('/contact')}
            >
              {t.privacy.sections.contact.button}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
