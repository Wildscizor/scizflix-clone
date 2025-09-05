# Netflix Clone

A modern Netflix clone built with React, TypeScript, Tailwind CSS, and Python Flask backend.

## Features

1) Netflix Intro Animation
Custom Netflix intro video with sound effects
Smooth transition animations
Fallback logo animation

2) Authentication System
User login with email and password
Secure authentication flow with rotected routes

3) Browse Page
Netflix-style navigation bar with scroll effects along with creative sections with featured content
Multiple movie categories:
  - Trending Now
  - Recent Releases
  - Popular on Netflix
  - Action & Adventure
  - Comedies
  - Dramas

4) Interactive UI
Hover effects on movie cards, smooth scrolling movie rows, responsive design for all devices, netflix-style color scheme and typography. Not your casual when where how lol.

5) Search Functionality
Real-time search through movies with Category-based filtering. Was specially added to locate user desired outputs. Future Plan to make it compactible with all devices.

VIMP!!!! 
Frontend
**React 18** - Modern React with hooks
**TypeScript** - Type safety and better development experience
**Tailwind CSS** - Utility-first CSS framework
**React Router** - Client-side routing

Backend
**Python Flask** - Lightweight web framework
**Flask-CORS** - Cross-origin resource sharing
**JSON** - Data storage and API responses

## Project Structure

```

Visual Diagram:
netflix-clone/
├── src/
│   ├── components/
│   │   ├── NetflixIntro.tsx      # Netflix intro animation
│   │   ├── LoginPage.tsx         # Authentication page
│   │   ├── BrowsePage.tsx        # Main browse interface
│   │   ├── Navbar.tsx            # Navigation bar
│   │   ├── HeroSection.tsx       # Featured content section
│   │   ├── MovieRow.tsx          # Horizontal movie lists
│   │   └── MovieCard.tsx         # Individual movie cards
│   ├── types/
│   │   └── movie.ts              # TypeScript interfaces
│   ├── App.tsx                   # Main app component
│   ├── index.tsx                 # React entry point
│   └── index.css                 # Global styles
├── backend/
│   ├── app.py                    # Flask server
│   └── requirements.txt          # Python dependencies
├── public/
│   ├── assets/                   # Netflix intro assets
│   └── index.html                # HTML template
├── package.json                  # Node.js dependencies
├── tailwind.config.js            # Tailwind configuration
└── README.md                     # Project documentation
```

Setup Instructions:

# Prerequisites
- Node.js (v16 or higher)
- Python (v3.8 or higher)
- npm or yarn

# Frontend Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The React app will run on `http://localhost:3000`

# Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment (optional but recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install Python dependencies:
```bash
pip install -r requirements.txt
```

4. Start the Flask server:
```bash
python app.py
```

The backend API will run on `http://localhost:5000`

# API Endpoints

## Authentication
`POST /api/login` - User login

# Movies
`GET /api/movies?category=trending` - Get movies by category
`GET /api/movies/all` - Get all movies
`GET /api/search?q=query` - Search movies

# Health Check
- `GET /api/health` - Server health status

## Demo Credentials

<>=============== Login Details==========================>
For testing purposes, use these credentials:
**Email:** user@example.com
**Password:** password123

# Features in Detail

# Netflix Intro Animation
The app starts with the iconic Netflix intro animation using the provided video and sound files. The animation plays for 3 seconds before transitioning to the login page.

# Login Page
- Netflix-style design with gradient backgrounds
- Form validation and error handling
- Loading states and smooth transitions
- Responsive design for mobile and desktop

# Browse Page
- **Navigation Bar:** Transparent on top, solid when scrolled
- **Hero Section:** Large featured content with play and info buttons
- **Movie Rows:** Horizontal scrollable lists with hover effects
- **Movie Cards:** Interactive cards with detailed information on hover

# Responsive Design
- Mobile-first approach
- Adaptive layouts for different screen sizes
- Touch-friendly interactions
- Optimized for tablets and desktops

# Customization

# Colors
The app uses Netflix's signature color palette:
- Netflix Red: `#E50914`
- Netflix Black: `#141414`
- Dark Background: `#000000`

# Styling
All styles are defined in `tailwind.config.js` and can be easily customized to match your preferences.

# Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

# License
This project is for educational purposes only. Netflix is a registered trademark of Netflix, Inc.

# Acknowledgments
- Netflix for the original design inspiration
- React and TypeScript communities
- Tailwind CSS for the utility-first approach 

Thank You!