import React, { useState } from 'react';
import { Clock, MessageSquare, Tag, User } from 'lucide-react';
import { useArticles } from '../context/ArticleContext';
import { useLanguage } from '../context/LanguageContext';
import ArticleCard from '../components/ArticleCard';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import ShareButtons from '../components/ShareButtons';
import NewsletterSignup from '../components/NewsletterSignup';

interface ArticlePageProps {
  articleId: string;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ articleId }) => {
  const { t, language } = useLanguage();
  const { 
    getArticleById, 
    getRelatedArticles, 
    getCommentsByArticleId 
  } = useArticles();
  
  const article = getArticleById(articleId);
  
  if (!article) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Article not found
        </h2>
      </div>
    );
  }
  
  const relatedArticles = getRelatedArticles(article, 3);
  const comments = getCommentsByArticleId(articleId);
  
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString(language === 'en' ? 'en-US' : 'bn-BD', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {article.title}
        </h1>
        
        <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mb-6 gap-y-2">
          <div className="flex items-center mr-6">
            <User size={16} className="mr-2" />
            <span>{t('by_author')} {article.author}</span>
          </div>
          
          <div className="flex items-center mr-6">
            <Clock size={16} className="mr-2" />
            <span>{t('published_on')} {formatDate(article.publishDate)}</span>
          </div>
          
          <div className="flex items-center">
            <MessageSquare size={16} className="mr-2" />
            <span>{comments.length} {t('comments')}</span>
          </div>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded inline-block text-sm font-medium">
          {t(article.category)}
        </div>
      </header>
      
      {/* Featured Image */}
      <div className="mb-8 rounded-lg overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-auto object-cover max-h-[500px]" 
        />
      </div>
      
      {/* Article Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none mb-12"
           dangerouslySetInnerHTML={{ __html: article.content }} />
      
      {/* Tags */}
      {article.tags.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-2 flex-wrap">
            <Tag size={18} className="text-gray-500 dark:text-gray-400" />
            {article.tags.map(tag => (
              <span 
                key={tag} 
                className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {/* Share Buttons */}
      <ShareButtons 
        url={window.location.href} 
        title={article.title} 
      />
      
      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            {t('related_articles')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map(relatedArticle => (
              <ArticleCard
                key={relatedArticle.id}
                article={relatedArticle}
                onClick={() => window.location.href = `?article=${relatedArticle.id}`}
              />
            ))}
          </div>
        </section>
      )}
      
      {/* Comments Section */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
          {t('comments')} ({comments.length})
        </h2>
        <CommentList comments={comments} />
        <CommentForm articleId={articleId} />
      </section>
      
      {/* Newsletter Signup */}
      <NewsletterSignup />
    </div>
  );
};

export default ArticlePage;