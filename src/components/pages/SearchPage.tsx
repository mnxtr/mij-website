import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';
import { Search, X, Clock, TrendingUp, FileText, Briefcase, Newspaper, Info } from 'lucide-react';

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

  // Mock search data - In production, this would come from an API
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

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Perform search
  useEffect(() => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      
      // Simulate API delay
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

        // Save to recent searches
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

  const handleResultClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section with Search */}
      <section className="relative w-full py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-8"
          >
            <Search className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-gray-700">
              {t.search.badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t.search.title}{' '}
            <span className="text-primary">{t.search.highlight}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 mb-8"
          >
            {t.search.description}
          </motion.p>

          {/* Search Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSearch}
            className="relative"
          >
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.search.placeholder}
                className="w-full pl-16 pr-32 py-6 text-lg border-2 border-gray-200 rounded-2xl focus:border-primary focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-32 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-8 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
              >
                {t.search.button}
              </button>
            </div>
          </motion.form>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 mt-6"
          >
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter.key
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-primary'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="w-full py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSearching && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="inline-flex items-center gap-3 text-gray-600">
                <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                {t.search.results.searching}
              </div>
            </motion.div>
          )}

          {!isSearching && searchQuery && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">
                    {results.length}
                  </span>{' '}
                  {t.search.results.found}
                </p>
              </motion.div>

              <AnimatePresence mode="popLayout">
                {results.length > 0 ? (
                  <div className="space-y-4">
                    {results.map((result, index) => (
                      <motion.button
                        key={result.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleResultClick(result.path)}
                        className="group w-full p-6 bg-white border-2 border-gray-100 rounded-2xl hover:border-primary hover:shadow-lg transition-all text-left"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <result.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                              {result.title}
                            </h3>
                            <p className="text-gray-600 line-clamp-2">
                              {result.description}
                            </p>
                            <p className="text-sm text-gray-400 mt-2">
                              {result.path}
                            </p>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="w-10 h-10 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {t.search.results.noResults}
                    </h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      {t.search.results.noResultsDescription}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}

          {!searchQuery && (
            <div className="space-y-12">
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <h2 className="text-xl font-bold">
                        {t.search.recent.title}
                      </h2>
                    </div>
                    <button
                      onClick={clearRecentSearches}
                      className="text-sm text-gray-500 hover:text-primary transition-colors"
                    >
                      {t.search.recent.clear}
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {recentSearches.map((query, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleRecentSearch(query)}
                        className="px-6 py-3 bg-gray-50 text-gray-700 rounded-full hover:bg-primary hover:text-white transition-all"
                      >
                        {query}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Popular Searches */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="w-5 h-5 text-gray-400" />
                  <h2 className="text-xl font-bold">
                    {t.search.popular.title}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {popularSearches.map((item, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleRecentSearch(item.query)}
                      className="px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full hover:from-primary hover:to-secondary hover:text-white transition-all font-medium"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
