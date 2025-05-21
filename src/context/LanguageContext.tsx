import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'bn';

// Translations
const translations = {
  en: {
    news_portal: 'News Portal',
    home: 'Home',
    politics: 'Politics',
    technology: 'Technology',
    business: 'Business',
    health: 'Health',
    entertainment: 'Entertainment',
    science: 'Science',
    education: 'Education',
    sports: 'Sports',
    login: 'Login',
    logout: 'Logout',
    admin: 'Admin',
    search: 'Search',
    latest_news: 'Latest News',
    featured_stories: 'Featured Stories',
    read_more: 'Read More',
    comments: 'Comments',
    leave_comment: 'Leave a Comment',
    your_name: 'Your Name',
    your_email: 'Your Email',
    your_comment: 'Your Comment',
    submit: 'Submit',
    subscribe: 'Subscribe',
    subscribe_newsletter: 'Subscribe to our Newsletter',
    email_address: 'Email Address',
    published_on: 'Published on',
    by_author: 'By',
    related_articles: 'Related Articles',
    tags: 'Tags',
    save: 'Save',
    cancel: 'Cancel',
    title: 'Title',
    content: 'Content',
    excerpt: 'Excerpt',
    image_url: 'Image URL',
    category: 'Category',
    author: 'Author',
    publish_date: 'Publish Date',
    is_featured: 'Is Featured',
    add_new_article: 'Add New Article',
    edit_article: 'Edit Article',
    delete_article: 'Delete Article',
    manage_articles: 'Manage Articles',
    no_articles_found: 'No articles found',
    thank_you_for_subscribing: 'Thank you for subscribing!',
    comment_added: 'Comment added successfully!',
    article_saved: 'Article saved successfully!',
    article_deleted: 'Article deleted successfully!',
  },
  bn: {
    news_portal: 'নিউজ পোর্টাল',
    home: 'হোম',
    politics: 'রাজনীতি',
    technology: 'প্রযুক্তি',
    business: 'ব্যবসা',
    health: 'স্বাস্থ্য',
    entertainment: 'বিনোদন',
    science: 'বিজ্ঞান',
    education: 'শিক্ষা',
    sports: 'খেলাধুলা',
    login: 'লগইন',
    logout: 'লগআউট',
    admin: 'অ্যাডমিন',
    search: 'অনুসন্ধান',
    latest_news: 'সর্বশেষ খবর',
    featured_stories: 'বিশেষ সংবাদ',
    read_more: 'আরো পড়ুন',
    comments: 'মন্তব্যসমূহ',
    leave_comment: 'মন্তব্য করুন',
    your_name: 'আপনার নাম',
    your_email: 'আপনার ইমেইল',
    your_comment: 'আপনার মন্তব্য',
    submit: 'জমা দিন',
    subscribe: 'সাবস্ক্রাইব',
    subscribe_newsletter: 'আমাদের নিউজলেটার সাবস্ক্রাইব করুন',
    email_address: 'ইমেইল ঠিকানা',
    published_on: 'প্রকাশিত',
    by_author: 'লেখক',
    related_articles: 'সম্পর্কিত নিবন্ধ',
    tags: 'ট্যাগ',
    save: 'সংরক্ষণ',
    cancel: 'বাতিল',
    title: 'শিরোনাম',
    content: 'বিষয়বস্তু',
    excerpt: 'সারসংক্ষেপ',
    image_url: 'ছবির URL',
    category: 'বিভাগ',
    author: 'লেখক',
    publish_date: 'প্রকাশের তারিখ',
    is_featured: 'ফিচার্ড',
    add_new_article: 'নতুন নিবন্ধ যোগ করুন',
    edit_article: 'নিবন্ধ সম্পাদনা',
    delete_article: 'নিবন্ধ মুছুন',
    manage_articles: 'নিবন্ধ পরিচালনা',
    no_articles_found: 'কোন নিবন্ধ পাওয়া যায়নি',
    thank_you_for_subscribing: 'সাবস্ক্রাইব করার জন্য ধন্যবাদ!',
    comment_added: 'মন্তব্য সফলভাবে যোগ করা হয়েছে!',
    article_saved: 'নিবন্ধ সফলভাবে সংরক্ষিত হয়েছে!',
    article_deleted: 'নিবন্ধ সফলভাবে মুছে ফেলা হয়েছে!',
  }
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Check if user previously selected a language
  const savedLanguage = localStorage.getItem('language') as Language | null;
  const initialLanguage = savedLanguage || 'en';
  
  const [language, setLanguage] = useState<Language>(initialLanguage);

  useEffect(() => {
    localStorage.setItem('language', language);
    // You could also update html lang attribute here
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'bn' : 'en'));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};