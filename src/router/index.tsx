import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import RootLayout from '../layouts/RootLayout';
import { ErrorDisplay } from '../components/ErrorBoundary';

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
    errorElement: <ErrorDisplay error={null} />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <ErrorDisplay error={null} />,
      },
      {
        path: 'landing',
        element: <LandingPage />,
        errorElement: <ErrorDisplay error={null} />,
      },
      {
        path: 'about',
        element: <AboutPage />,
        errorElement: <ErrorDisplay error={null} />,
      },
      {
        path: 'business',
        element: <BusinessPage />,
        errorElement: <ErrorDisplay error={null} />,
      },
      {
        path: 'news',
        element: <NewsPage />,
        errorElement: <ErrorDisplay error={null} />,
      },
      {
        path: 'news/:id',
        element: <NewsDetailPage />,
        errorElement: <ErrorDisplay error={null} />,
      },
      {
        path: 'search',
        element: <SearchPage />,
        errorElement: <ErrorDisplay error={null} />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
        errorElement: <ErrorDisplay error={null} />,
      },
      {
        path: 'clients',
        element: <ClientsPage />,
        errorElement: <ErrorDisplay error={null} />,
      },
      {
        path: 'partners',
        element: <PartnersPage />,
        errorElement: <ErrorDisplay error={null} />,
      },
      {
        path: 'recruit',
        element: <RecruitPage />,
        errorElement: <ErrorDisplay error={null} />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
        errorElement: <ErrorDisplay error={null} />,
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicyPage />,
        errorElement: <ErrorDisplay error={null} />,
      },
      {
        path: 'terms-of-service',
        element: <TermsOfServicePage />,
        errorElement: <ErrorDisplay error={null} />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
