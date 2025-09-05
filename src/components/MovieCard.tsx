import React, { useState } from 'react';
import { Movie } from '../types/movie.ts';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="movie-card relative flex-shrink-0 w-48 md:w-64 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-72 md:h-80 object-cover rounded"
        />
        
        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-75 rounded flex flex-col justify-between p-4 transition-all duration-300">
            <div className="flex justify-between items-start">
              <div className="flex space-x-2">
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <button className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <button className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-green-400 font-semibold text-sm">98% Match</span>
                <span className="text-gray-300 text-sm">{movie.year}</span>
                <span className="border border-gray-400 px-1 text-xs">{movie.rating}</span>
              </div>
              
              <div className="flex space-x-1 mb-2">
                <span className="text-gray-300 text-xs">{movie.genre}</span>
                <span className="text-gray-300 text-xs">•</span>
                <span className="text-gray-300 text-xs">2h 15m</span>
              </div>
              
              <p className="text-white text-sm line-clamp-2">
                {movie.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard; 