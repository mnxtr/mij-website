import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Building2, Handshake, Globe2, ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';

export default function PartnersPage() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = getTranslation(language);
  
  const [touchedButton, setTouchedButton] = useState<string | null>(null);
  
  const partnerCategories = [
    {
      title: () => t.partners.japanese.title,
      badge: () => t.partners.japanese.badge,
      description: () => t.partners.japanese.description,
      flag: '🇯🇵',
      partners: [
        {
          name: 'Tokyo Trade Association',
          type: 'Trade Organization',
          description: 'Strategic partnership for facilitating Japan-Bangladesh trade relations and business development.',
          since: '2010',
        },
        {
          name: 'Japan Tech Consortium',
          type: 'Technology',
          description: 'Collaboration on technology transfer and digital innovation projects across markets.',
          since: '2018',
        },
        {
          name: 'Osaka Manufacturing Group',
          type: 'Manufacturing',
          description: 'Partnership for product sourcing, quality assurance, and manufacturing excellence.',
          since: '2012',
        },
        {
          name: 'Kyoto Cultural Institute',
          type: 'Education',
          description: 'Cultural exchange and language training programs for business professionals.',
          since: '2015',
        },
        {
          name: 'Tokyo Financial Services',
          type: 'Finance',
          description: 'Financial services and investment facilitation for cross-border ventures.',
          since: '2019',
        },
        {
          name: 'Japan Logistics Network',
          type: 'Logistics',
          description: 'Comprehensive logistics and supply chain solutions for international trade.',
          since: '2016',
        },
      ],
    },
    {
      title: () => t.partners.bangladeshi.title,
      badge: () => t.partners.bangladeshi.badge,
      description: () => t.partners.bangladeshi.description,
      flag: '🇧🇩',
      partners: [
        {
          name: 'Dhaka Chamber of Commerce',
          type: 'Trade Organization',
          description: 'Leading business association supporting international trade and economic growth.',
          since: '2011',
        },
        {
          name: 'Bangladesh IT Society',
          type: 'Technology',
          description: 'Technology sector collaboration and talent development initiatives.',
          since: '2017',
        },
        {
          name: 'Chittagong Port Authority',
          type: 'Logistics',
          description: 'Port services and import/export facilitation through Bangladesh\'s main port.',
          since: '2013',
        },
        {
          name: 'Dhaka University',
          type: 'Education',
          description: 'Academic collaboration and research partnerships in business studies.',
          since: '2014',
        },
        {
          name: 'Bangladesh Export Association',
          type: 'Trade',
          description: 'Export promotion and market access support for Bangladeshi businesses.',
          since: '2016',
        },
        {
          name: 'Sylhet Business Forum',
          type: 'Business Network',
          description: 'Regional business network facilitating trade and investment opportunities.',
          since: '2020',
        },
      ],
    },
  ];

  const benefits = [
    {
      icon: Globe2,
      title: () => t.partners.benefits.network.title,
      description: () => t.partners.benefits.network.description,
    },
    {
      icon: Handshake,
      title: () => t.partners.benefits.expertise.title,
      description: () => t.partners.benefits.expertise.description,
    },
    {
      icon: Building2,
      title: () => t.partners.benefits.support.title,
      description: () => t.partners.benefits.support.description,
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: () => t.partners.process.inquiry.title,
      description: () => t.partners.process.inquiry.description,
    },
    {
      number: '02',
      title: () => t.partners.process.evaluation.title,
      description: () => t.partners.process.evaluation.description,
    },
    {
      number: '03',
      title: () => t.partners.process.agreement.title,
      description: () => t.partners.process.agreement.description,
    },
    {
      number: '04',
      title: () => t.partners.process.collaboration.title,
      description: () => t.partners.process.collaboration.description,
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
                {t.partners.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              {t.partners.hero.title} <span className="text-[#D4387F]">{t.partners.hero.highlight}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t.partners.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gray-900" />
              <Badge variant="outline" className="border-gray-300 text-gray-700 text-xs tracking-wider uppercase">
                {t.partners.benefits.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {t.partners.benefits.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 border-2 border-gray-900 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title()}</h3>
                  <p className="text-gray-600">{benefit.description()}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Sections */}
      {partnerCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={categoryIndex % 2 === 0 ? 'py-24 md:py-32 bg-gray-50' : 'py-24 md:py-32 bg-white'}>
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-0.5 bg-gray-900" />
                <Badge variant="outline" className="border-gray-300 text-gray-700 text-xs tracking-wider uppercase">
                  {category.badge()}
                </Badge>
                <div className="w-12 h-0.5 bg-gray-900" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {category.title()}
              </h2>
              <p className="text-lg text-gray-600">
                {category.description()}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {category.partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-2 border-gray-200 bg-white hover:border-[#D4387F] hover:shadow-lg transition-all h-full group">
                    <CardContent className="p-8 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="w-12 h-12 border-2 border-gray-900 rounded-lg flex items-center justify-center group-hover:bg-[#D4387F] group-hover:border-[#D4387F] transition-all flex-shrink-0">
                          <Building2 className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors" />
                        </div>
                        <Badge variant="outline" className="border-[#D4387F] text-[#D4387F] text-xs">
                          {partner.type}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#D4387F] transition-colors">
                        {partner.name}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {partner.description}
                      </p>

                      <div className="flex items-center gap-2 text-sm text-gray-500 pt-2 border-t-2 border-gray-200">
                        <Calendar className="w-4 h-4 text-[#D4387F]" />
                        <span>Partner since {partner.since}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Partnership Process */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gray-900" />
              <Badge variant="outline" className="border-gray-300 text-gray-700 text-xs tracking-wider uppercase">
                {t.partners.process.badge}
              </Badge>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {t.partners.process.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 border-2 border-[#D4387F] rounded-full flex items-center justify-center mx-auto mb-6 bg-[#D4387F]/5">
                  <span className="text-3xl font-bold text-[#D4387F]">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {step.title()}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description()}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-[#D4387F] bg-gradient-to-br from-[#D4387F]/5 to-[#D4387F]/10 max-w-4xl mx-auto">
              <CardContent className="p-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  {t.partners.cta.title} <span className="text-[#D4387F]">{t.partners.cta.highlight}</span>
                </h2>
                <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                  {t.partners.cta.description}
                </p>
                <Button 
                  onClick={() => navigate('/contact')}
                  onTouchStart={() => setTouchedButton('contact-us')}
                  onTouchEnd={() => setTimeout(() => setTouchedButton(null), 300)}
                  className={`text-white gap-3 px-10 py-7 transition-all ${
                    touchedButton === 'contact-us' ? 'bg-[#FF8FB8]' : 'bg-[#D4387F]'
                  } hover:bg-[#FF8FB8]`}
                  size="lg"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  {t.common.contactUs}
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
