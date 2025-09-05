import React, { useState, useEffect } from 'react';
import { UserData } from './LoginPage.tsx';

interface NavbarProps {
  user: UserData;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-netflix-black' : 'bg-gradient-to-b from-black to-transparent'
    }`}>
      <div className="flex items-center justify-between px-4 md:px-16 py-4">
        {/* Left side - Logo and Navigation */}
        <div className="flex items-center space-x-8">
          <div className="text-netflix-red text-2xl md:text-3xl font-bold">
            NETFLIX
          </div>
          
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Home</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">TV Shows</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Movies</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">New & Popular</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">My List</a>
          </div>
        </div>

        {/* Right side - Search and Profile */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border border-gray-600 rounded px-4 py-1 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors w-32 md:w-48"
            />
            <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <div className="relative">
            <button
              onClick={() => setProfileMenuOpen(!isProfileMenuOpen)}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-netflix-red rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">{user.name.charAt(0)}</span>
              </div>
              <span className="text-white text-sm font-semibold">{user.name}</span>
            </button>
            
            {isProfileMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-black bg-opacity-90 rounded border border-gray-700">
                <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Account</a>
                <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Help Center</a>
                <button
                  onClick={onLogout}
                  className="w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700"
                >
                  Sign out of Netflix
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 