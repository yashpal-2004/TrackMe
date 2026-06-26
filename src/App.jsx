import React, { useState } from 'react';
import { Moon, Award, Timer, Menu, X, Heart, Shield, Compass } from 'lucide-react';
import SmartHabitTracker from './SmartHabitTracker';
import SleepTracker from './SleepTracker';
import TimeTracker from './TimeTracker';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('habits');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tabs = [
    { id: 'habits', name: 'Habits', icon: Award, component: SmartHabitTracker, description: 'Smart Habit Tracker' },
    { id: 'sleep', name: 'Sleep', icon: Moon, component: SleepTracker, description: 'Sleep & Recovery Tracker' },
    { id: 'flow', name: 'Flow', icon: Timer, component: TimeTracker, description: 'Flow State Hub' }
  ];

  const ActiveComponent = tabs.find(t => t.id === activeTab)?.component || SmartHabitTracker;
  const currentTitle = tabs.find(t => t.id === activeTab)?.description || '';

  return (
    <div className="app-container">
      {/* Mobile Sidebar Toggle */}
      <button className="mobile-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Navigation */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-brand">
          <div className="brand-logo">
            <Compass size={24} className="brand-icon" />
          </div>
          <div className="brand-text">
            <h2>Lifestyle</h2>
            <span>Flow Hub</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSidebarOpen(false);
                }}
              >
                <Icon size={20} className="nav-icon" />
                <span className="nav-label">{tab.name}</span>
                {isActive && <div className="active-indicator" />}
              </button>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <div className="footer-status">
            <Shield size={16} />
            <span>Secure Database Sync</span>
          </div>
          <div className="footer-credits">
            <span>Powered by Firebase Offline Cache</span>
          </div>
        </div>
      </aside>

      {/* Backdrop for mobile */}
      {sidebarOpen && <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} />}

      {/* Main Content Area */}
      <main className="main-content">
        <header className="content-header">
          <div className="header-meta">
            <h1>{currentTitle}</h1>
            <p>Optimize your daily routines & recovery</p>
          </div>
          <div className="header-actions">
            <div className="health-badge">
              <Heart size={16} className="heart-pulse" />
              <span>Lifestyle Active</span>
            </div>
          </div>
        </header>

        <div className="content-body">
          <ActiveComponent />
        </div>
      </main>
    </div>
  );
}

export default App;
