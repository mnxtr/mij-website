import { Globe } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const t = getTranslation(language);

  const languageLabels: Record<Language, string> = {
    en: 'EN',
    ja: 'JP',
    bn: 'BN',
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Globe className="w-4 h-4" />
          {languageLabels[language]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage('en')}>
          {t.language.english}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('ja')}>
          {t.language.japanese}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('bn')}>
          {t.language.bengali}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
