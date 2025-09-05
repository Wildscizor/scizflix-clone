import React, { useState } from 'react';

export interface UserData {
  name: string;
  email: string;
}

interface LoginPageProps {
  onLogin: (userData: UserData) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      if (email && password) {
        // For demo purposes, accept any non-empty email/password
        onLogin({ name: 'Prana', email });
      } else {
        setError('Please enter both email and password');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center px-4">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Netflix Logo */}
        <div className="text-center mb-8">
          <h1 className="text-netflix-red text-6xl font-bold mb-4">NETFLIX</h1>
        </div>

        {/* Login Form */}
        <div className="bg-black bg-opacity-75 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Sign In</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-600 text-white p-3 rounded text-sm">
                {error}
              </div>
            )}
            
            <div>
              <input
                type="email"
                placeholder="Email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-4 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>
            
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-4 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full netflix-button text-white font-bold py-4 px-6 rounded text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="spinner mr-2"></div>
                  Signing In...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              New to Netflix?{' '}
              <a href="#" className="text-white hover:underline">
                Sign up now
              </a>
            </p>
          </div>

          <div className="mt-4 text-center">
            <p className="text-gray-400 text-sm">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 