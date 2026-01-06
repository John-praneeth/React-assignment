import React, { useState } from 'react';
import './DashboardPage.css';

interface DashboardPageProps {
    onLogout: () => void;
}

function DashboardPage({ onLogout }: DashboardPageProps): React.ReactElement {
    const [activeTab, setActiveTab] = useState<string>('dashboard');

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard' },
        { id: 'applications', label: 'My Applications' },
        { id: 'settings', label: 'Settings' },
    ];

    const services = [
        {
            title: 'Apply for Aadhaar Card',
            description: 'Apply for new Aadhaar or update existing information',
            status: 'Available'
        },
        {
            title: 'Driving License',
            description: 'Apply for new license or renew existing license',
            status: 'Available'
        },
        {
            title: 'Property Registration',
            description: 'Register property documents and land records',
            status: 'Available'
        },
        {
            title: 'Passport Services',
            description: 'Apply for new passport or renewal services',
            status: 'Coming Soon'
        },
        {
            title: 'Voter ID Card',
            description: 'Apply for voter registration and ID card',
            status: 'Available'
        },
        {
            title: 'Income Tax Services',
            description: 'File income tax returns and view tax history',
            status: 'Available'
        },
        {
            title: 'Birth Certificate',
            description: 'Apply for birth certificate or corrections',
            status: 'Available'
        },
        {
            title: 'Marriage Certificate',
            description: 'Register marriage and obtain certificate',
            status: 'Available'
        }
    ];

    const recentActivities = [
        { title: 'Aadhaar Application Submitted', date: '2024-12-01', status: 'In Progress' },
        { title: 'Property Registration Completed', date: '2024-11-28', status: 'Completed' },
        { title: 'Driving License Application', date: '2024-11-25', status: 'Under Review' },
    ];

    return (
        <div className="dashboard-container">
            {/* Header */}
            <header className="dashboard-header">
                <div className="header-title-container">
                    <h1 className="header-title">CitizenPortal</h1>
                </div>
                <div className="header-user-info">
                    <span className="user-name">Welcome, John Praneeth</span>
                    <span className="user-id">ID: CID123456</span>
                </div>
            </header>

            <div className="dashboard-body">
                {/* Sidebar */}
                <aside className="dashboard-sidebar">
                    <div className="sidebar-nav">
                        <nav>
                            <ul className="nav-list">
                                {menuItems.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <button
                                                onClick={() => setActiveTab(item.id)}
                                                className={`nav-button ${activeTab === item.id ? 'active' : ''}`}
                                            >
                                                {item.label}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>

                    <div className="sidebar-footer">
                        <button
                            onClick={onLogout}
                            className="logout-button"
                        >
                            Logout
                        </button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="dashboard-main">
                    {activeTab === 'dashboard' && (
                        <>
                            {/* Stats Overview */}
                            <div className="section-container">
                                <h2 className="section-title">Dashboard Overview</h2>
                                <div className="stats-grid">
                                    <div className="stat-card">
                                        <div className="stat-value">12</div>
                                        <div className="stat-label">Total Applications</div>
                                    </div>
                                    <div className="stat-card">
                                        <div className="stat-value text-green">8</div>
                                        <div className="stat-label">Completed</div>
                                    </div>
                                    <div className="stat-card">
                                        <div className="stat-value text-orange">3</div>
                                        <div className="stat-label">Pending</div>
                                    </div>
                                    <div className="stat-card">
                                        <div className="stat-value text-blue">5</div>
                                        <div className="stat-label">This Month</div>
                                    </div>
                                </div>
                            </div>

                            <div className="content-grid">
                                {/* Services Section */}
                                <div>
                                    <h3 className="section-title">Available Services</h3>

                                    <div className="services-grid">
                                        {services.map((service, index) => {
                                            const statusClass = service.status === 'Available' ? 'status-available' : 'status-coming-soon';

                                            return (
                                                <div key={index} className="service-card">
                                                    <div className="service-header">
                                                        <span className={`status-badge ${statusClass}`}>
                                                            {service.status}
                                                        </span>
                                                    </div>
                                                    <h4 className="service-title">
                                                        {service.title}
                                                    </h4>
                                                    <p className="service-desc">
                                                        {service.description}
                                                    </p>
                                                    <button className="apply-button">
                                                        Apply Now
                                                    </button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Recent Activity */}
                                <div>
                                    <h3 className="section-title">Recent Activity</h3>

                                    <div className="activity-card">
                                        <div className="activity-list">
                                            {recentActivities.map((activity, index) => {
                                                let statusClass = 'status-review';
                                                if (activity.status === 'Completed') statusClass = 'status-completed';
                                                if (activity.status === 'In Progress') statusClass = 'status-progress';

                                                return (
                                                    <div key={index} className="activity-item">
                                                        <p className="activity-title">
                                                            {activity.title}
                                                        </p>
                                                        <p className="activity-date">
                                                            {activity.date}
                                                        </p>
                                                        <span className={`status-badge ${statusClass}`}>
                                                            {activity.status}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {activeTab !== 'dashboard' && (
                        <div style={{ textAlign: 'center', padding: '2rem', color: '#6b7280' }}>
                            <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Module</h2>
                            <p>This module is currently under development.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

export default DashboardPage;
