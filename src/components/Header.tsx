
import React, { useState } from 'react';
import { Search, Menu, User, Bell, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">JP</span>
            </div>
            <span className="text-xl font-bold text-gray-800 hidden sm:block">JobPortal</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/search" className="text-gray-700 hover:text-blue-600 transition-colors">Search Jobs</Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">Dashboard</Link>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Bell size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Bookmark size={20} />
            </button>
            <Link to="/dashboard" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <User size={20} />
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="px-2 py-2 text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/search" className="px-2 py-2 text-gray-700 hover:text-blue-600 transition-colors">Search Jobs</Link>
              <Link to="/dashboard" className="px-2 py-2 text-gray-700 hover:text-blue-600 transition-colors">Dashboard</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
