import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.tsx';
import HeroSection from './HeroSection.tsx';
import MovieRow from './MovieRow.tsx';
import { Movie } from '../types/movie.ts';
import { UserData } from './LoginPage.tsx';

interface BrowsePageProps {
  user: UserData;
  onLogout: () => void;
}

const BrowsePage: React.FC<BrowsePageProps> = ({ user, onLogout }) => {
  const [movies, setMovies] = useState<{
    trending: Movie[];
    recent: Movie[];
    popular: Movie[];
    action: Movie[];
    comedy: Movie[];
    drama: Movie[];
  }>({
    trending: [],
    recent: [],
    popular: [],
    action: [],
    comedy: [],
    drama: []
  });

  useEffect(() => {
    // Simulate loading movies from API
    const loadMovies = () => {
      const mockMovies: Movie[] = [
        {
          id: 1,
          title: "Stranger Things",
          description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
          image: "/assets/strangerthings.png",
          rating: "TV-14",
          year: 2016,
          genre: "Sci-Fi"
        },
        {
          id: 2,
          title: "The Crown",
          description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
          image: "/assets/thecrown.png",
          rating: "TV-MA",
          year: 2016,
          genre: "Drama"
        },
        {
          id: 3,
          title: "Wednesday",
          description: "Intelligent, sarcastic and a bit dead inside, Wednesday Addams investigates a murder spree while making new friends at Nevermore Academy.",
          image: "/assets/Wednesday.png",
          rating: "TV-14",
          year: 2022,
          genre: "Comedy"
        },
        {
          id: 4,
          title: "Bridgerton",
          description: "Wealth, lust, and betrayal set against the backdrop of Regency-era England, seen through the eyes of the powerful Bridgerton family.",
          image: "/assets/Bridgerton.png",
          rating: "TV-MA",
          year: 2020,
          genre: "Romance"
        },
        {
          id: 5,
          title: "The Witcher",
          description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
          image: "/assets/TheWitcher.png",
          rating: "TV-MA",
          year: 2019,
          genre: "Fantasy"
        },
        {
          id: 6,
          title: "Money Heist",
          description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
          image: "/assets/MoneyHeist.png",
          rating: "TV-MA",
          year: 2017,
          genre: "Crime"
        }
      ];

      setMovies({
        trending: mockMovies.slice(0, 6),
        recent: mockMovies.slice(0, 6),
        popular: mockMovies.slice(0, 6),
        action: mockMovies.slice(0, 6),
        comedy: mockMovies.slice(0, 6),
        drama: mockMovies.slice(0, 6)
      });
    };

    loadMovies();
  }, []);

  return (
    <div className="min-h-screen bg-netflix-black">
      <Navbar user={user} onLogout={onLogout} />
      
      <HeroSection 
        movie={movies.trending[0] || {
          id: 1,
          title: "Stranger Things",
          description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
          image: "/assets/strangerthings.jpg",
          rating: "TV-14",
          year: 2016,
          genre: "Sci-Fi"
        }}
      />
      
      <div className="relative z-10 -mt-32">
        <MovieRow title="Trending Now" movies={movies.trending} />
        <MovieRow title="Recent Releases" movies={movies.recent} />
        <MovieRow title="Popular on Netflix" movies={movies.popular} />
        <MovieRow title="Action & Adventure" movies={movies.action} />
        <MovieRow title="Comedies" movies={movies.comedy} />
        <MovieRow title="Dramas" movies={movies.drama} />
      </div>
    </div>
  );
};

export default BrowsePage; 
