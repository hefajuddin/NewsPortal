import React, { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import AdminPage from './pages/AdminPage';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { ArticleProvider } from './context/ArticleContext';

function App() {
  const [page, setPage] = useState<'home' | 'article' | 'admin'>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleArticleClick = (articleId: string) => {
    setSelectedArticleId(articleId);
    setPage('article');
    window.scrollTo(0, 0);
  };

  const handleNavigateHome = () => {
    setPage('home');
    setSelectedArticleId(null);
  };

  const handleNavigateAdmin = () => {
    setPage('admin');
    setSelectedArticleId(null);
  };

  return (
    <AuthProvider>
      <ThemeProvider>
        <LanguageProvider>
          <ArticleProvider>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
              <Header 
                onNavigateHome={handleNavigateHome}
                onNavigateAdmin={handleNavigateAdmin}
                currentPage={page}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
              />
              
              <main className="container mx-auto px-4 pt-20 pb-12">
                {page === 'home' && <HomePage onArticleClick={handleArticleClick} />}
                {page === 'article' && selectedArticleId && <ArticlePage articleId={selectedArticleId} />}
                {page === 'admin' && <AdminPage />}
              </main>

              <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">About Us</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        We bring you the latest news and updates from around the world,
                        with a focus on accuracy and integrity.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Categories</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li>Politics</li>
                        <li>Technology</li>
                        <li>Business</li>
                        <li>Health</li>
                        <li>Entertainment</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Contact</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Email: info@newsportal.com<br />
                        Phone: +1 (555) 123-4567<br />
                        Address: 123 News St, Cityville
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
                    <p>© {new Date().getFullYear()} News Portal. All rights reserved.</p>
                  </div>
                </div>
              </footer>
            </div>
          </ArticleProvider>
        </LanguageProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;