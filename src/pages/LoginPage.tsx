import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

function LoginPage({ onLogin }: LoginPageProps): React.ReactElement {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async (): Promise<void> => {
    setIsLoading(true);
    setError('');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (username === 'username' && password === 'password') {
      onLogin();
    } else {
      setError('Invalid username or password. Please try again.');
    }
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-blue-800 text-white p-4 mb-4">
            <h1 className="text-2xl font-bold">Government of India</h1>
            <h2 className="text-lg">CitizenPortal</h2>
          </div>
          <p className="text-sm text-gray-600 bg-yellow-100 border border-yellow-400 p-2">
            Official Government Portal for Citizen Services
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white border-2 border-gray-400 p-6">
          <h3 className="text-lg font-bold text-center mb-6 text-gray-800 border-b border-gray-300 pb-2">
            Citizen Login
          </h3>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="username" className="block text-sm font-bold text-gray-700 mb-1">
                Username *
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="w-full px-3 py-2 border-2 border-gray-400 focus:border-blue-600 focus:outline-none bg-white"
                placeholder="Enter Username"
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-1">
                Password *
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-3 py-2 border-2 border-gray-400 focus:border-blue-600 focus:outline-none bg-white"
                placeholder="Enter Password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>

            {error && (
              <div className="bg-red-100 border-2 border-red-400 p-3">
                <div className="flex items-center">
                  <AlertCircle className="h-4 w-4 text-red-600 mr-2" />
                  <span className="text-sm text-red-800 font-medium">{error}</span>
                </div>
              </div>
            )}

            <div className="pt-4">
              <button
                type="button"
                onClick={handleLogin}
                disabled={isLoading || !username || !password}
                className="w-full bg-blue-600 text-white py-3 px-4 font-bold border-2 border-blue-700 hover:bg-blue-700 disabled:bg-gray-400 disabled:border-gray-500 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    Please Wait...
                  </div>
                ) : (
                  'LOGIN'
                )}
              </button>
            </div>

            <div className="text-center pt-4 border-t border-gray-300">
              <p className="text-xs text-gray-600">
                <strong>Demo Credentials:</strong> username / password
              </p>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <div className="bg-gray-100 border border-gray-300 p-3">
            <p className="text-xs text-gray-600">
              © 2025 Government of India. All Rights Reserved.<br/>
              Best viewed in Chrome, Firefox, Safari, Edge
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
