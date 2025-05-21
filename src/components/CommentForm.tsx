import React, { useState } from 'react';
import { useArticles } from '../context/ArticleContext';
import { useLanguage } from '../context/LanguageContext';

interface CommentFormProps {
  articleId: string;
}

const CommentForm: React.FC<CommentFormProps> = ({ articleId }) => {
  const { t } = useLanguage();
  const { addComment } = useArticles();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ name?: string; email?: string; content?: string }>({});
  
  const validateForm = () => {
    const newErrors: { name?: string; email?: string; content?: string } = {};
    let isValid = true;
    
    if (!name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (!content.trim()) {
      newErrors.content = 'Comment is required';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      addComment({
        articleId,
        name,
        email,
        content
      });
      
      setName('');
      setEmail('');
      setContent('');
      setIsSubmitting(false);
      setSuccessMessage(t('comment_added'));
      
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md mt-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        {t('leave_comment')}
      </h3>
      
      {successMessage && (
        <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded border-l-4 border-green-500">
          {successMessage}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              {t('your_name')}
            </label>
            <input
              type="text"
              id="name"
              className={`w-full px-4 py-2 border ${
                errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              } rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>
          
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              {t('your_email')}
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-2 border ${
                errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              } rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>
        </div>
        
        <div className="mb-4">
          <label 
            htmlFor="comment" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {t('your_comment')}
          </label>
          <textarea
            id="comment"
            rows={4}
            className={`w-full px-4 py-2 border ${
              errors.content ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          {errors.content && (
            <p className="mt-1 text-sm text-red-500">{errors.content}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-6 py-2 bg-blue-600 text-white rounded-md font-medium ${
            isSubmitting 
              ? 'opacity-70 cursor-not-allowed' 
              : 'hover:bg-blue-700 transition-colors'
          }`}
        >
          {isSubmitting ? 'Submitting...' : t('submit')}
        </button>
      </form>
    </div>
  );
};

export default CommentForm;