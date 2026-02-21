import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import RootLayout from '../layouts/RootLayout';

// Lazy load page components for code splitting
const HomePage = lazy(() => import('../components/pages/HomePage'));
const LandingPage = lazy(() => import('../components/pages/LandingPage'));
const AboutPage = lazy(() => import('../components/pages/AboutPage'));
const BusinessPage = lazy(() => import('../components/pages/BusinessPage'));
const NewsPage = lazy(() => import('../components/pages/NewsPage'));
const NewsDetailPage = lazy(() => import('../components/pages/NewsDetailPage'));
const ServicesPage = lazy(() => import('../components/pages/ServicesPage'));
const ClientsPage = lazy(() => import('../components/pages/ClientsPage'));
const PartnersPage = lazy(() => import('../components/pages/PartnersPage'));
const RecruitPage = lazy(() => import('../components/pages/RecruitPage'));
const ContactPage = lazy(() => import('../components/pages/ContactPage'));
const SearchPage = lazy(() => import('../components/pages/SearchPage'));
const PrivacyPolicyPage = lazy(() => import('../components/pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('../components/pages/TermsOfServicePage'));
const NotFoundPage = lazy(() => import('../components/pages/NotFoundPage'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'landing',
        element: <LandingPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'business',
        element: <BusinessPage />,
      },
      {
        path: 'news',
        element: <NewsPage />,
      },
      {
        path: 'news/:id',
        element: <NewsDetailPage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'clients',
        element: <ClientsPage />,
      },
      {
        path: 'partners',
        element: <PartnersPage />,
      },
      {
        path: 'recruit',
        element: <RecruitPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicyPage />,
      },
      {
        path: 'terms-of-service',
        element: <TermsOfServicePage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
