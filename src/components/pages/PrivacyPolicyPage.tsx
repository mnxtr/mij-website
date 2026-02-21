import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';
import { motion } from 'motion/react';
import { Shield, Eye, Lock, Database, UserCheck, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
      title: t.privacy.sections.protection.title,
      content: t.privacy.sections.protection.content,
    },
    {
      icon: UserCheck,
      title: t.privacy.sections.rights.title,
      content: t.privacy.sections.rights.content,
    },
    {
      icon: Mail,
      title: t.privacy.sections.contact.title,
      content: t.privacy.sections.contact.content,
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-8">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-gray-700">
                {t.privacy.badge}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t.privacy.title}{' '}
              <span className="text-primary">{t.privacy.highlight}</span>
            </h1>

            <p className="text-lg text-gray-600 mb-4">
              {t.privacy.description}
            </p>

            <p className="text-sm text-gray-500">
              {t.privacy.lastUpdated}: {t.privacy.updateDate}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="w-full py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-primary/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                    <div className="prose prose-gray max-w-none">
                      {Array.isArray(section.content) ? (
                        <ul className="space-y-2">
                          {section.content.map((item, i) => (
                            <li key={i} className="text-gray-600">
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-600 whitespace-pre-line">
                          {section.content}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl"
          >
            <h3 className="text-xl font-bold mb-4">{t.privacy.cookies.title}</h3>
            <p className="text-gray-600 mb-4">{t.privacy.cookies.description}</p>
            <ul className="space-y-2 text-gray-600">
              {t.privacy.cookies.types.map((type, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{type}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Changes to Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 p-8 bg-gray-50 rounded-2xl"
          >
            <h3 className="text-xl font-bold mb-4">
              {t.privacy.changes.title}
            </h3>
            <p className="text-gray-600">{t.privacy.changes.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full py-16 bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t.privacy.cta.title}
            </h2>
            <p className="text-lg text-white/90 mb-8">
              {t.privacy.cta.description}
            </p>
            <a
              href="mailto:privacy@mijcompany.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg font-medium hover:shadow-2xl transition-all"
            >
              <Mail className="w-5 h-5" />
              {t.privacy.cta.button}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
