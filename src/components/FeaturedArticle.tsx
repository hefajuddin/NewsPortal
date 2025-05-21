import React from 'react';
import { Clock } from 'lucide-react';
import { Article } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface FeaturedArticleProps {
  article: Article;
  onClick: () => void;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article, onClick }) => {
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
      className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-[400px]">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <span className="bg-blue-600 text-white px-2 py-1 text-xs font-bold rounded inline-block mb-3">
          {t(article.category)}
        </span>
        
        <h3 className="text-2xl font-bold text-white mb-2">
          {article.title}
        </h3>
        
        <p className="text-gray-200 mb-3 line-clamp-2">
          {article.excerpt}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray-300">
            <Clock size={16} className="mr-1" />
            <span>{formatDate(article.publishDate)}</span>
          </div>
          
          <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium transition-colors group-hover:bg-blue-600 group-hover:text-white">
            {t('read_more')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;