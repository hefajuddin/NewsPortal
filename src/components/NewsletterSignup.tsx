import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const NewsletterSignup: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setError(null);
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage(t('thank_you_for_subscribing'));
      setEmail('');
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
    }, 1000);
  };

  return (
    <section className="bg-blue-600 dark:bg-blue-800 text-white rounded-lg overflow-hidden shadow-lg">
      <div className="p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-white/20 rounded-full p-3 mb-6">
            <Mail className="h-8 w-8" />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {t('subscribe_newsletter')}
          </h3>
          
          <p className="text-blue-100 dark:text-blue-200 mb-8 max-w-xl mx-auto">
            Stay updated with our latest news, exclusive articles, and special offers delivered directly to your inbox.
          </p>
          
          {successMessage ? (
            <div className="bg-green-500 text-white p-4 rounded-lg max-w-md mx-auto">
              {successMessage}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-grow">
                <input
                  type="email"
                  placeholder={t('email_address')}
                  className={`w-full px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white ${error ? 'border-2 border-red-500' : ''}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && (
                  <p className="mt-1 text-sm text-red-300 text-left">{error}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 bg-white text-blue-600 font-medium rounded-lg ${
                  isSubmitting 
                    ? 'opacity-70 cursor-not-allowed' 
                    : 'hover:bg-blue-50 transition-colors'
                }`}
              >
                {isSubmitting ? 'Subscribing...' : t('subscribe')}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;