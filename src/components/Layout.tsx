import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';

const Layout: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  // Auto-save theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('markedit-theme');
    if (savedTheme) {
      const isDarkTheme = savedTheme === 'dark';
      setIsDark(isDarkTheme);
      document.documentElement.classList.toggle('dark', isDarkTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('markedit-theme', newTheme ? 'dark' : 'light');
  };

  const getCurrentPage = () => {
    if (location.pathname === '/app/what-is-markdown') return 'what-is-markdown';
    if (location.pathname === '/app/about') return 'about';
    return 'editor';
  };

  const currentPage = getCurrentPage();

  return (
    <div className={`h-screen overflow-hidden ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <Header 
        isDark={isDark}
        onToggleTheme={toggleTheme}
        currentPage={currentPage}
      />
      
      <main className="h-full pt-16 transition-all duration-300">
        <Outlet context={{ isDark }} />
      </main>
    </div>
  );
};

export default Layout;