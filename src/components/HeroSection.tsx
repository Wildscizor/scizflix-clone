import React from 'react';
import { Movie } from '../types/movie.ts';

interface HeroSectionProps {
  movie: Movie;
}

const HeroSection: React.FC<HeroSectionProps> = ({ movie }) => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-netflix-black via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end justify-start">
        <div className="px-4 md:px-16 pb-32 md:pb-48">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {movie.title}
            </h1>
            
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-green-400 font-semibold">98% Match</span>
              <span className="text-gray-300">{movie.year}</span>
              <span className="border border-gray-400 px-2 py-1 text-sm">{movie.rating}</span>
              <span className="text-gray-300">{movie.genre}</span>
            </div>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {movie.description}
            </p>
            
            <div className="flex space-x-4">
              <button className="netflix-button text-white font-bold py-3 px-8 rounded flex items-center space-x-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span>Play</span>
              </button>
              
              <button className="bg-gray-600 bg-opacity-70 text-white font-bold py-3 px-8 rounded flex items-center space-x-2 hover:bg-opacity-50 transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>More Info</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 