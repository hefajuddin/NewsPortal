import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useArticles } from '../context/ArticleContext';
import { useLanguage } from '../context/LanguageContext';
import { Category } from '../types';
import ArticleCard from '../components/ArticleCard';
import FeaturedArticle from '../components/FeaturedArticle';
import NewsletterSignup from '../components/NewsletterSignup';

interface HomePageProps {
  onArticleClick: (articleId: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onArticleClick }) => {
  const { language, t } = useLanguage();
  const { 
    filterArticles, 
    getFeaturedArticles, 
    getLatestArticles 
  } = useArticles();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | undefined>(undefined);
  
  const featuredArticles = getFeaturedArticles(language);
  const latestArticles = getLatestArticles(6, language);
  const filteredArticles = selectedCategory || searchQuery 
    ? filterArticles(selectedCategory, searchQuery, language)
    : latestArticles;

  const categories: Category[] = [
    'politics', 
    'sports', 
    'technology', 
    'health', 
    'entertainment', 
    'business'
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="relative mx-auto max-w-2xl">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            className="w-full py-3 pl-12 pr-4 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            placeholder={t('search')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </form>
      </div>
      
      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setSelectedCategory(undefined)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            !selectedCategory
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          {t('home')}
        </button>
        
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {t(category)}
          </button>
        ))}
      </div>

      {/* Featured Articles */}
      {!selectedCategory && !searchQuery && featuredArticles.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            {t('featured_stories')}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredArticles.slice(0, 2).map(article => (
              <FeaturedArticle
                key={article.id}
                article={article}
                onClick={() => onArticleClick(article.id)}
              />
            ))}
          </div>
        </section>
      )}
      
      {/* Latest/Filtered Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
          {selectedCategory 
            ? t(selectedCategory) 
            : searchQuery 
              ? `${t('search')}: "${searchQuery}"` 
              : t('latest_news')
          }
        </h2>
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map(article => (
              <ArticleCard
                key={article.id}
                article={article}
                onClick={() => onArticleClick(article.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            {t('no_articles_found')}
          </div>
        )}
      </section>
      
      {/* Newsletter Signup */}
      <NewsletterSignup />
    </div>
  );
};

export default HomePage;