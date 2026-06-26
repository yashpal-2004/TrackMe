import React, { useState } from 'react';
import { Moon, Award, Timer, Menu, X, Heart, Shield, Compass, Sparkles, RefreshCw, CheckCircle2, Circle } from 'lucide-react';
import SmartHabitTracker from './SmartHabitTracker';
import SleepTracker from './SleepTracker';
import TimeTracker from './TimeTracker';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('habits');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [karoMode, setKaroMode] = useState(true);

  const tabs = [
    { id: 'habits', name: 'Habits', icon: Award, component: SmartHabitTracker, description: 'Smart Habit Tracker' },
    { id: 'sleep', name: 'Sleep', icon: Moon, component: SleepTracker, description: 'Sleep & Recovery Tracker' },
    { id: 'flow', name: 'Flow', icon: Timer, component: TimeTracker, description: 'Flow State Hub' }
  ];

  const ActiveComponent = tabs.find(t => t.id === activeTab)?.component || SmartHabitTracker;
  const currentTitle = tabs.find(t => t.id === activeTab)?.description || '';

  return (
    <div className={`app-container ${karoMode ? 'karo-theme' : ''}`}>
      {/* Top Navbar */}
      <header className="navbar">
        <div className="nav-brand">
          <span className="brand-logo-text">TRACKME☺</span>
        </div>

        {/* Center Tabs - Styled as Pill Outlines */}
        <nav className="nav-links">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                className={`nav-tab-pill ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.name}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="nav-actions">
          <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-nav-dropdown">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`mobile-nav-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(tab.id);
                setMobileMenuOpen(false);
              }}
            >
              {tab.name}
            </button>
          ))}
        </div>
      )}



      {/* Main Dashboard Content Area */}
      <main className="content-container-wrap">
        <div className="section-header-meta">
          <div className="meta-text">
            <span className="meta-tag">TRACKME METRICS</span>
            <h2 className="meta-title">{currentTitle}</h2>
          </div>
        </div>

        <div className="dashboard-content-body">
          <ActiveComponent />
        </div>
      </main>
    </div>
  );
}

export default App;
