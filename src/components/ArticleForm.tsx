import React, { useState, useEffect } from 'react';
import { useArticles } from '../context/ArticleContext';
import { useLanguage } from '../context/LanguageContext';
import { Article, Category } from '../types';

interface ArticleFormProps {
  articleId?: string;
  onSuccess: () => void;
}

const ArticleForm: React.FC<ArticleFormProps> = ({ articleId, onSuccess }) => {
  const { t, language } = useLanguage();
  const { getArticleById, addArticle, updateArticle } = useArticles();
  
  const existingArticle = articleId ? getArticleById(articleId) : undefined;
  
  const [formData, setFormData] = useState<Omit<Article, 'id'>>({
    title: existingArticle?.title || '',
    slug: existingArticle?.slug || '',
    content: existingArticle?.content || '',
    excerpt: existingArticle?.excerpt || '',
    imageUrl: existingArticle?.imageUrl || '',
    category: existingArticle?.category || 'technology',
    author: existingArticle?.author || '',
    publishDate: existingArticle?.publishDate || new Date(),
    tags: existingArticle?.tags || [],
    featured: existingArticle?.featured || false,
    language: existingArticle?.language || language,
  });
  
  const [tagInput, setTagInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  useEffect(() => {
    if (existingArticle) {
      setFormData({
        title: existingArticle.title,
        slug: existingArticle.slug,
        content: existingArticle.content,
        excerpt: existingArticle.excerpt,
        imageUrl: existingArticle.imageUrl,
        category: existingArticle.category,
        author: existingArticle.author,
        publishDate: existingArticle.publishDate,
        tags: existingArticle.tags,
        featured: existingArticle.featured,
        language: existingArticle.language,
      });
    }
  }, [existingArticle]);
  
  const categories: Category[] = [
    'politics', 
    'sports', 
    'technology', 
    'health', 
    'entertainment', 
    'business', 
    'science', 
    'education'
  ];
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.content.trim()) {
      newErrors.content = 'Content is required';
    }
    
    if (!formData.excerpt.trim()) {
      newErrors.excerpt = 'Excerpt is required';
    }
    
    if (!formData.imageUrl.trim()) {
      newErrors.imageUrl = 'Image URL is required';
    }
    
    if (!formData.author.trim()) {
      newErrors.author = 'Author is required';
    }
    
    if (!formData.slug.trim()) {
      // Generate slug from title
      setFormData(prev => ({
        ...prev,
        slug: prev.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      }));
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleTagAdd = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput('');
    }
  };
  
  const handleTagRemove = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag)
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      if (articleId) {
        // Update existing article
        updateArticle(articleId, formData);
      } else {
        // Add new article
        addArticle(formData);
      }
      
      onSuccess();
    } catch (error) {
      console.error('Error saving article:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label 
            htmlFor="title" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {t('title')} *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className={`w-full px-4 py-2 border ${
              errors.title ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={formData.title}
            onChange={handleInputChange}
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-500">{errors.title}</p>
          )}
        </div>
        
        <div>
          <label 
            htmlFor="slug" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Slug (URL)
          </label>
          <input
            type="text"
            id="slug"
            name="slug"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.slug}
            onChange={handleInputChange}
            placeholder="auto-generated-from-title"
          />
        </div>
        
        <div className="md:col-span-2">
          <label 
            htmlFor="excerpt" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {t('excerpt')} *
          </label>
          <textarea
            id="excerpt"
            name="excerpt"
            rows={2}
            className={`w-full px-4 py-2 border ${
              errors.excerpt ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={formData.excerpt}
            onChange={handleInputChange}
          ></textarea>
          {errors.excerpt && (
            <p className="mt-1 text-sm text-red-500">{errors.excerpt}</p>
          )}
        </div>
        
        <div className="md:col-span-2">
          <label 
            htmlFor="content" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {t('content')} *
          </label>
          <textarea
            id="content"
            name="content"
            rows={10}
            className={`w-full px-4 py-2 border ${
              errors.content ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={formData.content}
            onChange={handleInputChange}
          ></textarea>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            HTML formatting is supported.
          </p>
          {errors.content && (
            <p className="mt-1 text-sm text-red-500">{errors.content}</p>
          )}
        </div>
        
        <div>
          <label 
            htmlFor="imageUrl" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {t('image_url')} *
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            className={`w-full px-4 py-2 border ${
              errors.imageUrl ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={formData.imageUrl}
            onChange={handleInputChange}
          />
          {errors.imageUrl && (
            <p className="mt-1 text-sm text-red-500">{errors.imageUrl}</p>
          )}
        </div>
        
        <div>
          <label 
            htmlFor="category" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {t('category')}
          </label>
          <select
            id="category"
            name="category"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.category}
            onChange={handleInputChange}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {t(category)}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label 
            htmlFor="author" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {t('author')} *
          </label>
          <input
            type="text"
            id="author"
            name="author"
            className={`w-full px-4 py-2 border ${
              errors.author ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={formData.author}
            onChange={handleInputChange}
          />
          {errors.author && (
            <p className="mt-1 text-sm text-red-500">{errors.author}</p>
          )}
        </div>
        
        <div>
          <label 
            htmlFor="publishDate" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {t('publish_date')}
          </label>
          <input
            type="date"
            id="publishDate"
            name="publishDate"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.publishDate instanceof Date 
              ? formData.publishDate.toISOString().split('T')[0] 
              : new Date(formData.publishDate).toISOString().split('T')[0]
            }
            onChange={(e) => {
              setFormData(prev => ({
                ...prev,
                publishDate: new Date(e.target.value)
              }));
            }}
          />
        </div>
        
        <div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="featured"
              name="featured"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              checked={formData.featured}
              onChange={(e) => {
                setFormData(prev => ({
                  ...prev,
                  featured: e.target.checked
                }));
              }}
            />
            <label 
              htmlFor="featured" 
              className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {t('is_featured')}
            </label>
          </div>
        </div>
        
        <div>
          <label 
            htmlFor="language" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Language
          </label>
          <select
            id="language"
            name="language"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.language}
            onChange={handleInputChange}
          >
            <option value="en">English</option>
            <option value="bn">Bengali</option>
          </select>
        </div>
        
        <div className="md:col-span-2">
          <label 
            htmlFor="tags" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {t('tags')}
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="tags"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleTagAdd();
                }
              }}
              placeholder="Add a tag and press Enter"
            />
            <button
              type="button"
              onClick={handleTagAdd}
              className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Add
            </button>
          </div>
          
          {formData.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {formData.tags.map(tag => (
                <span 
                  key={tag} 
                  className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm flex items-center"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleTagRemove(tag)}
                    className="ml-2 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onSuccess}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          {t('cancel')}
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-4 py-2 bg-blue-600 text-white rounded-md font-medium ${
            isSubmitting 
              ? 'opacity-70 cursor-not-allowed' 
              : 'hover:bg-blue-700 transition-colors'
          }`}
        >
          {isSubmitting ? 'Saving...' : t('save')}
        </button>
      </div>
    </form>
  );
};

export default ArticleForm;