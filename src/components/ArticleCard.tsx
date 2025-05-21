import React from 'react';
import { Clock } from 'lucide-react';
import { Article } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ArticleCardProps {
  article: Article;
  onClick: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onClick }) => {
  const { t, language } = useLanguage();
  
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString(language === 'en' ? 'en-US' : 'bn-BD', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-0 left-0 m-3">
          <span className="bg-blue-600 text-white px-2 py-1 text-xs font-bold rounded">
            {t(article.category)}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
          {article.excerpt}
        </p>
        
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Clock size={14} className="mr-1" />
            <span>{formatDate(article.publishDate)}</span>
          </div>
          
          <button className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
            {t('read_more')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;