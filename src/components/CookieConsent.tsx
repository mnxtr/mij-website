import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import { Button } from './ui/button';

const COOKIE_CONSENT_KEY = 'mij-cookie-consent';

export default function CookieConsent() {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setIsVisible(false);
    // Here you can initialize analytics or other tracking tools
    console.log('Cookie consent accepted');
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setIsVisible(false);
    console.log('Cookie consent declined');
  };

  const handleClose = () => {
    // If user closes without choosing, show again next time
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto max-w-5xl">
            <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-6 md:p-8 relative">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Cookie className="w-8 h-8 text-blue-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t.cookie.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t.cookie.description}{' '}
                    <a
                      href="/privacy-policy"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      {t.cookie.learnMore}
                    </a>
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleAccept}
                      variant="default"
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      {t.cookie.accept}
                    </Button>
                    <Button
                      onClick={handleDecline}
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      {t.cookie.decline}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
