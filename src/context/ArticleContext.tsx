import React, { createContext, useContext, useState, useEffect } from 'react';
import { Article, Category, Comment } from '../types';
import { generateMockArticles, generateMockComments } from '../utils/mockData';

interface ArticleContextType {
  articles: Article[];
  comments: Comment[];
  addArticle: (article: Omit<Article, 'id'>) => void;
  updateArticle: (id: string, article: Partial<Article>) => void;
  deleteArticle: (id: string) => void;
  filterArticles: (category?: Category, search?: string, language?: 'en' | 'bn') => Article[];
  getFeaturedArticles: (language?: 'en' | 'bn') => Article[];
  getLatestArticles: (count?: number, language?: 'en' | 'bn') => Article[];
  getArticleById: (id: string) => Article | undefined;
  getRelatedArticles: (article: Article, count?: number) => Article[];
  addComment: (comment: Omit<Comment, 'id' | 'createdAt'>) => void;
  getCommentsByArticleId: (articleId: string) => Comment[];
}

const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

export const ArticleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>(() => {
    const savedArticles = localStorage.getItem('articles');
    return savedArticles ? JSON.parse(savedArticles) : generateMockArticles();
  });

  const [comments, setComments] = useState<Comment[]>(() => {
    const savedComments = localStorage.getItem('comments');
    return savedComments ? JSON.parse(savedComments) : generateMockComments();
  });

  // Save to localStorage whenever articles or comments change
  useEffect(() => {
    localStorage.setItem('articles', JSON.stringify(articles));
  }, [articles]);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  // Add a new article
  const addArticle = (articleData: Omit<Article, 'id'>) => {
    const newArticle: Article = {
      ...articleData,
      id: crypto.randomUUID(),
    };
    setArticles(prevArticles => [...prevArticles, newArticle]);
  };

  // Update an existing article
  const updateArticle = (id: string, articleData: Partial<Article>) => {
    setArticles(prevArticles => 
      prevArticles.map(article => 
        article.id === id ? { ...article, ...articleData } : article
      )
    );
  };

  // Delete an article
  const deleteArticle = (id: string) => {
    setArticles(prevArticles => prevArticles.filter(article => article.id !== id));
    // Also delete associated comments
    setComments(prevComments => prevComments.filter(comment => comment.articleId !== id));
  };

  // Filter articles by category, search term, and language
  const filterArticles = (category?: Category, search?: string, language: 'en' | 'bn' = 'en') => {
    return articles.filter(article => {
      const matchesCategory = !category || article.category === category;
      const matchesSearch = !search || 
        article.title.toLowerCase().includes(search.toLowerCase()) || 
        article.content.toLowerCase().includes(search.toLowerCase());
      const matchesLanguage = article.language === language;
      
      return matchesCategory && matchesSearch && matchesLanguage;
    });
  };

  // Get featured articles
  const getFeaturedArticles = (language: 'en' | 'bn' = 'en') => {
    return articles
      .filter(article => article.featured && article.language === language)
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  };

  // Get latest articles
  const getLatestArticles = (count = 10, language: 'en' | 'bn' = 'en') => {
    return articles
      .filter(article => article.language === language)
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
      .slice(0, count);
  };

  // Get a specific article by ID
  const getArticleById = (id: string) => {
    return articles.find(article => article.id === id);
  };

  // Get related articles (same category)
  const getRelatedArticles = (article: Article, count = 3) => {
    return articles
      .filter(a => a.id !== article.id && a.category === article.category && a.language === article.language)
      .sort(() => Math.random() - 0.5) // Shuffle
      .slice(0, count);
  };

  // Add a new comment
  const addComment = (commentData: Omit<Comment, 'id' | 'createdAt'>) => {
    const newComment: Comment = {
      ...commentData,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };
    setComments(prevComments => [...prevComments, newComment]);
  };

  // Get comments for a specific article
  const getCommentsByArticleId = (articleId: string) => {
    return comments
      .filter(comment => comment.articleId === articleId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  };

  return (
    <ArticleContext.Provider value={{
      articles,
      comments,
      addArticle,
      updateArticle,
      deleteArticle,
      filterArticles,
      getFeaturedArticles,
      getLatestArticles,
      getArticleById,
      getRelatedArticles,
      addComment,
      getCommentsByArticleId,
    }}>
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticles = (): ArticleContextType => {
  const context = useContext(ArticleContext);
  if (context === undefined) {
    throw new Error('useArticles must be used within an ArticleProvider');
  }
  return context;
};