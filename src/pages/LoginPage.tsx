import React, { useState } from 'react';
import './LoginPage.css';

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

        // Simple hardcoded validation for the assignment
        if (username === 'username' && password === 'password') {
            onLogin();
        } else {
            setError('Invalid username or password. Please try again.');
        }
        setIsLoading(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleLogin();
    }

    return (
        <div className="login-container">
            <div className="login-wrapper">
                {/* Header */}
                <div className="login-header">
                    <div className="header-banner">
                        <h1 className="header-title">CitizenPortal</h1>
                    </div>
                    <p className="header-notice">
                        Official Portal for Citizen Services
                    </p>
                </div>

                {/* Login Form */}
                <div className="login-form-card">
                    <h3 className="form-title">Citizen Login</h3>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username" className="form-label">Username *</label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                className="form-input"
                                placeholder="Enter Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Password *</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="form-input"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {error && (
                            <div className="error-alert">
                                <strong>Error:</strong> {error}
                            </div>
                        )}

                        <div style={{ paddingTop: '1rem' }}>
                            <button
                                type="submit"
                                disabled={isLoading || !username || !password}
                                className="submit-button"
                            >
                                {isLoading ? (
                                    <span>Please Wait...</span>
                                ) : (
                                    'LOGIN'
                                )}
                            </button>
                        </div>

                        <div className="demo-credentials">
                            <p className="demo-text">
                                <strong>Demo Credentials:</strong> username / password
                            </p>
                        </div>
                    </form>
                </div>

                {/* Footer */}
                <div className="login-footer">
                    <div className="footer-content">
                        <p className="footer-text">
                            © 2025 CitizenPortal. All Rights Reserved.<br />
                            Best viewed in Chrome, Firefox, Safari, Edge
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
