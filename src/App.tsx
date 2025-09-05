import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NetflixIntro from './components/NetflixIntro.tsx';
import LoginPage, { UserData } from './components/LoginPage.tsx';
import BrowsePage from './components/BrowsePage.tsx';
import './App.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);

  const handleLogin = (userData: UserData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };
  
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const handleIntroFinish = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return <NetflixIntro onIntroFinish={handleIntroFinish} />;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              isAuthenticated ? 
              <Navigate to="/browse" replace /> : 
              <LoginPage onLogin={handleLogin} />
            } 
          />
          <Route 
            path="/browse" 
            element={
              isAuthenticated && user ? 
              <BrowsePage user={user} onLogout={handleLogout} /> : 
              <Navigate to="/" replace />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 