import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import logo from 'figma:asset/0621cc2c5bacc13d7baf5bc7b518107640d33480.png';

export function Footer() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="Axsh Tech" className="h-10 mb-3" />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {t.home.tagline}
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="w-4 h-4 text-primary" />
              <span>Japan × Bangladesh Partnership</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  to="/business"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.business}
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.news}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.services}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.connect}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/clients"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.clients}
                </Link>
              </li>
              <li>
                <Link
                  to="/partners"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.partners}
                </Link>
              </li>
              <li>
                <Link
                  to="/recruit"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.recruit}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{t.nav.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <div>Tokyo Office</div>
                  <div>Tokyo, Japan</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <div>Dhaka Office</div>
                  <div>Dhaka, Bangladesh</div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@axshtech.com" className="text-sm text-muted-foreground hover:text-primary not-italic">
                  info@axshtech.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+81 (0)3-XXXX-XXXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Axsh Tech. {t.footer.rights}
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t.footer.privacyPolicy}
              </Link>
              <Link
                to="/terms-of-service"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t.footer.termsOfService}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}