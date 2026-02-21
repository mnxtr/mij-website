import { RouterProvider } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { router } from './router';
import './styles/globals.css';

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}