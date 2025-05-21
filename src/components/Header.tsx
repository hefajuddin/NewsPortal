import React from 'react';
import { Menu, Moon, Search, Sun, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  onNavigateHome: () => void;
  onNavigateAdmin: () => void;
  currentPage: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  onNavigateHome,
  onNavigateAdmin,
  currentPage,
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="text-2xl font-bold text-blue-600 dark:text-blue-400 cursor-pointer" 
            onClick={onNavigateHome}
          >
            {t('news_portal')}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={onNavigateHome}
              className={`${
                currentPage === 'home' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-300'
              } hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
            >
              {t('home')}
            </button>
            <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t('politics')}
            </button>
            <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t('technology')}
            </button>
            <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t('business')}
            </button>
            <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t('health')}
            </button>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <button 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            
            <button 
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            
            <button 
              onClick={toggleLanguage}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {language === 'en' ? 'BN' : 'EN'}
            </button>
            
            {isAuthenticated ? (
              <div className="flex space-x-4">
                <button 
                  onClick={onNavigateAdmin}
                  className={`${
                    currentPage === 'admin' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  } px-3 py-1 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors`}
                >
                  {t('admin')}
                </button>
                <button 
                  onClick={logout}
                  className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition-colors"
                >
                  {t('logout')}
                </button>
              </div>
            ) : (
              <button 
                onClick={login}
                className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-colors"
              >
                {t('login')}
              </button>
            )}

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-700 dark:text-gray-300" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-4">
          <div className="container mx-auto px-4 space-y-3">
            <button 
              onClick={() => {
                onNavigateHome();
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2 px-4 rounded-md ${
                currentPage === 'home' 
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-300'
              } hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors`}
            >
              {t('home')}
            </button>
            <button className="block w-full text-left py-2 px-4 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
              {t('politics')}
            </button>
            <button className="block w-full text-left py-2 px-4 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
              {t('technology')}
            </button>
            <button className="block w-full text-left py-2 px-4 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
              {t('business')}
            </button>
            <button className="block w-full text-left py-2 px-4 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
              {t('health')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;