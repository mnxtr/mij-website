import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';
import { Search, X, Clock, TrendingUp, FileText, Briefcase, Newspaper, Info, Sparkles, ArrowRight } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import Magnetic from '../animations/Magnetic';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: 'page' | 'service' | 'news' | 'about';
  path: string;
  icon: any;
}

export default function SearchPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { language } = useLanguage();
  const t = getTranslation(language);

  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const allContent: SearchResult[] = [
    {
      id: '1',
      title: t.nav.home,
      description: t.home.hero.description,
      category: 'page',
      path: '/',
      icon: FileText,
    },
    {
      id: '2',
      title: t.nav.about,
      description: t.about.hero.description,
      category: 'about',
      path: '/about',
      icon: Info,
    },
    {
      id: '3',
      title: t.nav.business,
      description: t.business.hero.description,
      category: 'page',
      path: '/business',
      icon: Briefcase,
    },
    {
      id: '4',
      title: t.nav.services,
      description: t.services.hero.description,
      category: 'service',
      path: '/services',
      icon: Briefcase,
    },
    {
      id: '5',
      title: t.nav.news,
      description: t.news.hero.description,
      category: 'news',
      path: '/news',
      icon: Newspaper,
    },
    {
      id: '6',
      title: t.nav.clients,
      description: t.clients.hero.description,
      category: 'page',
      path: '/clients',
      icon: FileText,
    },
    {
      id: '7',
      title: t.nav.partners,
      description: t.partners.hero.description,
      category: 'page',
      path: '/partners',
      icon: FileText,
    },
    {
      id: '8',
      title: t.nav.recruit,
      description: t.recruit.hero.description,
      category: 'page',
      path: '/recruit',
      icon: FileText,
    },
    {
      id: '9',
      title: t.nav.contact,
      description: t.contact.hero.description,
      category: 'page',
      path: '/contact',
      icon: FileText,
    },
  ];

  const filters = [
    { key: 'all', label: t.search.filters.all },
    { key: 'pages', label: t.search.filters.pages },
    { key: 'services', label: t.search.filters.services },
    { key: 'news', label: t.search.filters.news },
    { key: 'about', label: t.search.filters.about },
  ];

  const popularSearches = [
    { label: t.search.popular.business, query: 'business' },
    { label: t.search.popular.services, query: 'services' },
    { label: t.search.popular.contact, query: 'contact' },
    { label: t.search.popular.about, query: 'about' },
  ];

  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      const timer = setTimeout(() => {
        const query = searchQuery.toLowerCase();
        const filtered = allContent.filter((item) => {
          const matchesQuery =
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query);

          const matchesFilter =
            activeFilter === 'all' ||
            (activeFilter === 'pages' && item.category === 'page') ||
            (activeFilter === 'services' && item.category === 'service') ||
            (activeFilter === 'news' && item.category === 'news') ||
            (activeFilter === 'about' && item.category === 'about');

          return matchesQuery && matchesFilter;
        });

        setResults(filtered);
        setIsSearching(false);

        if (query && !recentSearches.includes(query)) {
          const updated = [query, ...recentSearches.slice(0, 4)];
          setRecentSearches(updated);
          localStorage.setItem('recentSearches', JSON.stringify(updated));
        }
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setResults([]);
      setIsSearching(false);
    }
  }, [searchQuery, activeFilter]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery });
    }
  };

  const handleRecentSearch = (query: string) => {
    setSearchQuery(query);
    setSearchParams({ q: query });
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  return (
    <div className="w-full bg-background transition-colors duration-500 overflow-x-hidden min-h-screen">
      {/* Hero Section - Neural Search Visual */}
      <section className="relative py-32 md:py-48 bg-background overflow-hidden font-header">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -mr-64 -mt-64"
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-6 mb-12"
          >
            <div className="w-16 h-px bg-primary/30" />
            <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5 px-8 py-2 text-sm tracking-[0.3em] uppercase rounded-full font-black">
              {t.search.badge}
            </Badge>
            <div className="w-16 h-px bg-primary/30" />
          </motion.div>

          <h1 className="text-7xl md:text-9xl font-black mb-12 leading-[0.85] tracking-tighter text-foreground">
            {t.search.title} <span className="text-primary">{t.search.highlight}</span>
          </h1>

          <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light font-body mb-20">
            {t.search.description}
          </p>

          {/* Search Engine - Premium Glass Card */}
          <div className="max-w-5xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-3xl border-4 border-border rounded-[48px] p-8 md:p-12 shadow-2xl relative">
              <form onSubmit={handleSearch} className="relative group">
                <div className="absolute left-10 top-1/2 -translate-y-1/2">
                  <Search className="w-10 h-10 text-muted-foreground group-focus-within:text-primary transition-all duration-500" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.search.placeholder}
                  className="w-full h-24 bg-background/50 border-4 border-border rounded-[32px] pl-28 pr-48 text-2xl md:text-3xl font-body focus:border-primary focus:ring-0 transition-all outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-40 top-1/2 -translate-y-1/2 p-4 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <X className="w-8 h-8" />
                  </button>
                )}
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <Magnetic>
                    <Button
                      type="submit"
                      className="h-16 px-12 bg-primary text-white rounded-2xl text-xl font-black uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-700 shadow-xl shadow-primary/20"
                    >
                      {t.search.button}
                    </Button>
                  </Magnetic>
                </div>
              </form>

              {/* Filters - Glass Pills */}
              <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
                {filters.map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`px-10 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all duration-700 ${activeFilter === filter.key
                        ? 'bg-primary text-white shadow-xl shadow-primary/30'
                        : 'bg-background/40 text-muted-foreground hover:bg-primary/10 hover:text-primary border-2 border-border/50'
                      }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Matrix */}
      <section className="w-full py-24 pb-48 font-header">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            {isSearching ? (
              <div className="text-center py-32 space-y-10">
                <motion.div
                  animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-24 h-24 border-4 border-primary/20 border-t-primary rounded-full mx-auto"
                />
                <p className="text-3xl font-black text-foreground uppercase tracking-[0.2em] animate-pulse">
                  Querying Intelligence...
                </p>
              </div>
            ) : searchQuery ? (
              <div className="space-y-12">
                <div className="flex items-center gap-6 mb-16">
                  <div className="h-1 bg-primary/20 flex-grow rounded-full" />
                  <p className="text-2xl font-black text-foreground uppercase tracking-widest whitespace-nowrap">
                    <span className="text-primary">{results.length}</span> Results Identified
                  </p>
                  <div className="h-1 bg-primary/20 flex-grow rounded-full" />
                </div>

                <AnimatePresence mode="popLayout">
                  {results.length > 0 ? (
                    <div className="space-y-8">
                      {results.map((result, index) => (
                        <motion.button
                          key={result.id}
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                          onClick={() => navigate(result.path)}
                          className="group w-full p-10 bg-card/30 backdrop-blur-xl border-2 border-border rounded-[48px] hover:border-primary/50 hover:shadow-2xl transition-all duration-700 text-left relative overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />

                          <div className="flex flex-col md:flex-row md:items-center gap-10 relative z-10">
                            <div className="w-20 h-20 bg-background border-2 border-border group-hover:border-primary group-hover:bg-primary rounded-3xl flex items-center justify-center flex-shrink-0 transition-all duration-700 group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-primary/30">
                              <result.icon className="w-10 h-10 text-foreground group-hover:text-white transition-colors" />
                            </div>
                            <div className="flex-1 space-y-4">
                              <div className="flex items-center gap-4">
                                <Badge variant="outline" className="border-primary/30 text-primary uppercase font-black text-[10px] tracking-widest px-4">{result.category}</Badge>
                                <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{result.path}</span>
                              </div>
                              <h3 className="text-3xl font-black text-foreground group-hover:text-primary transition-colors tracking-tight">
                                {result.title}
                              </h3>
                              <p className="text-xl text-muted-foreground font-light font-body leading-relaxed line-clamp-2">
                                {result.description}
                              </p>
                            </div>
                            <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 transition-all duration-700">
                              <ArrowRight className="w-10 h-10 text-primary" />
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-40 space-y-12">
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                        <div className="relative w-32 h-32 bg-card border-4 border-border rounded-full flex items-center justify-center mx-auto shadow-2xl">
                          <Search className="w-16 h-16 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="space-y-6">
                        <h3 className="text-5xl font-black text-foreground tracking-tighter">
                          Zero Correlations Found
                        </h3>
                        <p className="text-2xl text-muted-foreground font-light font-body max-w-xl mx-auto leading-relaxed">
                          Your query yields no immediate entries. Try refining your parameters or exploring our core categories.
                        </p>
                      </div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="space-y-24">
                {/* Recent Explorations */}
                {recentSearches.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex items-center justify-between mb-12">
                      <div className="flex items-center gap-4">
                        <Clock className="w-8 h-8 text-primary" />
                        <h2 className="text-3xl font-black uppercase tracking-widest">
                          Recent Echoes
                        </h2>
                      </div>
                      <button
                        onClick={clearRecentSearches}
                        className="text-sm font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                      >
                        Purge Memory
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {recentSearches.map((query, index) => (
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => handleRecentSearch(query)}
                          className="px-10 py-5 bg-card/50 backdrop-blur-xl border-2 border-border text-foreground rounded-3xl hover:border-primary hover:bg-primary hover:text-white transition-all duration-700 font-bold text-xl flex items-center gap-4 group"
                        >
                          {query}
                          <TrendingUp className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Viral Intersections */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-12">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <h2 className="text-3xl font-black uppercase tracking-widest">
                      Viral Intersections
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {popularSearches.map((item, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleRecentSearch(item.query)}
                        className="p-10 bg-gradient-to-br from-primary/10 to-transparent border-2 border-primary/20 rounded-[40px] text-primary hover:from-primary hover:text-white transition-all duration-700 font-black text-2xl text-center group"
                      >
                        <p className="group-hover:scale-110 transition-transform">{item.label}</p>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
