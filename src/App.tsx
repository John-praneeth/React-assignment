import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import './App.css';

type Page = 'login' | 'dashboard';

function App(): React.ReactElement {
    const [currentPage, setCurrentPage] = useState<Page>('login');

    return (
        <>
            {currentPage === 'login' ? (
                <LoginPage onLogin={() => setCurrentPage('dashboard')} />
            ) : (
                <DashboardPage onLogout={() => setCurrentPage('login')} />
            )}
        </>
    );
}

export default App;
