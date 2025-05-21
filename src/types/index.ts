// Common types for the application

export type Category = 
  | 'politics'
  | 'sports'
  | 'technology'
  | 'health'
  | 'entertainment'
  | 'business'
  | 'science'
  | 'education';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: Date;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  imageUrl: string;
  category: Category;
  author: string;
  publishDate: Date;
  tags: string[];
  featured: boolean;
  language: 'en' | 'bn';
}

export interface Comment {
  id: string;
  articleId: string;
  name: string;
  email: string;
  content: string;
  createdAt: Date;
}

export interface Subscriber {
  id: string;
  email: string;
  createdAt: Date;
}