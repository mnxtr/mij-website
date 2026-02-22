import { RouterProvider } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { router } from './router';
import { ErrorBoundary } from './components/ErrorBoundary';
import './styles/globals.css';

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}