import React, { useState } from 'react';
import { 
  LogOut, 
  Home, 
  FileText, 
  Settings, 
  CreditCard, 
  Car, 
  Building, 
  User
} from 'lucide-react';

interface DashboardPageProps {
  onLogout: () => void;
}

function DashboardPage({ onLogout }: DashboardPageProps): React.ReactElement {
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'applications', label: 'My Applications', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const services = [
    {
      title: 'Apply for Aadhaar Card',
      description: 'Apply for new Aadhaar or update existing information',
      icon: CreditCard,
      status: 'Available'
    },
    {
      title: 'Driving License',
      description: 'Apply for new license or renew existing license',
      icon: Car,
      status: 'Available'
    },
    {
      title: 'Property Registration',
      description: 'Register property documents and land records',
      icon: Building,
      status: 'Available'
    },
    {
      title: 'Passport Services',
      description: 'Apply for new passport or renewal services',
      icon: User,
      status: 'Coming Soon'
    },
    {
      title: 'Voter ID Card',
      description: 'Apply for voter registration and ID card',
      icon: CreditCard,
      status: 'Available'
    },
    {
      title: 'Income Tax Services',
      description: 'File income tax returns and view tax history',
      icon: FileText,
      status: 'Available'
    },
    {
      title: 'Birth Certificate',
      description: 'Apply for birth certificate or corrections',
      icon: FileText,
      status: 'Available'
    },
    {
      title: 'Marriage Certificate',
      description: 'Register marriage and obtain certificate',
      icon: User,
      status: 'Available'
    }
  ];

  const recentActivities = [
    { title: 'Aadhaar Application Submitted', date: '2024-12-01', status: 'In Progress' },
    { title: 'Property Registration Completed', date: '2024-11-28', status: 'Completed' },
    { title: 'Driving License Application', date: '2024-11-25', status: 'Under Review' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-800 text-white px-6 py-3 border-b-2 border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">Government of India - CitizenPortal</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">Welcome, John Praneeth</span>
            <span className="text-xs text-gray-300">ID: CID123456</span>
          </div>
        </div>
      </header>

      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-60 bg-gray-100 border-r border-gray-300 flex flex-col">
          <div className="flex-1 p-4">
            <nav>
              <ul className="space-y-2">
                {menuItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center px-3 py-2 text-left text-sm border ${
                          activeTab === item.id
                            ? 'bg-blue-100 border-blue-300 text-blue-800'
                            : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <IconComponent className="mr-3 h-4 w-4" />
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="p-4 border-t border-gray-300">
            <button
              onClick={onLogout}
              className="w-full flex items-center justify-center px-3 py-2 text-sm bg-red-600 text-white border border-red-700 hover:bg-red-700"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-white overflow-y-auto">
          {/* Stats Overview */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-300 pb-2">Dashboard Overview</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-gray-50 border border-gray-300 p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">12</div>
                  <div className="text-sm text-gray-600">Total Applications</div>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-300 p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">8</div>
                  <div className="text-sm text-gray-600">Completed</div>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-300 p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">3</div>
                  <div className="text-sm text-gray-600">Pending</div>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-300 p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5</div>
                  <div className="text-sm text-gray-600">This Month</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            {/* Available Services */}
            <div className="lg:col-span-3">
              <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-300 pb-2">
                Available Services
              </h3>
              
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div key={index} className="bg-white border-2 border-gray-300 hover:border-blue-400 cursor-pointer">
                      <div className="p-4">
                        <div className="flex items-center mb-2">
                          <IconComponent className="h-5 w-5 text-blue-600 mr-2" />
                          <span className={`text-xs px-2 py-1 border ${
                            service.status === 'Available' 
                              ? 'border-green-500 bg-green-50 text-green-700' 
                              : 'border-yellow-500 bg-yellow-50 text-yellow-700'
                          }`}>
                            {service.status}
                          </span>
                        </div>
                        <h4 className="font-semibold text-sm text-gray-900 mb-2">
                          {service.title}
                        </h4>
                        <p className="text-xs text-gray-600 mb-3">
                          {service.description}
                        </p>
                        <button className="w-full text-xs bg-blue-600 text-white py-2 px-3 hover:bg-blue-700 border border-blue-700">
                          Apply Now →
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-300 pb-2">
                Recent Activity
              </h3>
              
              <div className="bg-gray-50 border border-gray-300">
                <div className="p-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="mb-4 last:mb-0 pb-3 last:pb-0 border-b last:border-b-0 border-gray-300">
                      <p className="text-sm font-medium text-gray-900 mb-1">
                        {activity.title}
                      </p>
                      <p className="text-xs text-gray-500 mb-2">
                        {activity.date}
                      </p>
                      <span className={`text-xs px-2 py-1 border ${
                        activity.status === 'Completed' 
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : activity.status === 'In Progress'
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-yellow-500 bg-yellow-50 text-yellow-700'
                      }`}>
                        {activity.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
