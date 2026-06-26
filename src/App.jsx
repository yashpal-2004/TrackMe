import React, { useState } from 'react';
import { Moon, Award, Timer, Menu, X, Heart, Shield, Compass, Sparkles, RefreshCw } from 'lucide-react';
import SmartHabitTracker from './SmartHabitTracker';
import SleepTracker from './SleepTracker';
import TimeTracker from './TimeTracker';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('habits');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Han Interactive Character State
  const [capColor, setCapColor] = useState('#ff6b35');
  const [shirtColor, setShirtColor] = useState('#8b5cf6');
  const [bodyColor, setBodyColor] = useState('#ffffff');
  const [rotation, setRotation] = useState(0);
  const [bubbleText, setBubbleText] = useState('Play with Han 🦖');

  const tabs = [
    { id: 'habits', name: 'Habits', icon: Award, component: SmartHabitTracker, description: 'Smart Habit Tracker' },
    { id: 'sleep', name: 'Sleep', icon: Moon, component: SleepTracker, description: 'Sleep & Recovery Tracker' },
    { id: 'flow', name: 'Flow', icon: Timer, component: TimeTracker, description: 'Flow State Hub' }
  ];

  const ActiveComponent = tabs.find(t => t.id === activeTab)?.component || SmartHabitTracker;
  const currentTitle = tabs.find(t => t.id === activeTab)?.description || '';

  const handleCharacterClick = () => {
    const messages = [
      'Focus is your superpower! ⚡',
      'Did you drink water today? 💧',
      'Sleep is the ultimate recovery. 💤',
      'Consistent habits build futures! 🏆',
      'You are doing great, keep going! 🌟',
      'Flow state: ON. 🎯'
    ];
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    setBubbleText(randomMsg);
  };

  return (
    <div className="app-container">
      {/* Top Navbar */}
      <header className="navbar">
        <div className="nav-brand">
          <div className="brand-logo-black">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <div className="brand-text">
            <h2>TrackMe</h2>
            <span>Creative Optimizer</span>
          </div>
        </div>

        {/* Desktop Tabs */}
        <nav className="nav-links">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                className={`nav-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.name}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="nav-actions">
          <button className="nav-sync-btn" onClick={() => alert('Syncing local caches with Firebase Cloud Store!')}>
            Sync Hub
          </button>
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
          <button className="mobile-sync-btn" onClick={() => {
            alert('Syncing caches...');
            setMobileMenuOpen(false);
          }}>
            Sync Hub
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-title-group">
              <h1 className="hero-title-item">Track.</h1>
              <h1 className="hero-title-item">Optimize.</h1>
              <h1 className="hero-title-item">Perform.</h1>
            </div>
            
            <div className="hero-tags">
              <span>HABITS</span>
              <span>REST</span>
              <span>FLOW STATE</span>
              <span>ANALYTICS</span>
              <span>CREATIVE</span>
              <span>STUDIO</span>
              <span>OFFLINE SYNC</span>
            </div>
          </div>

          <div className="hero-right">
            {/* Speech Bubble */}
            <div className="speech-bubble" onClick={handleCharacterClick}>
              {bubbleText}
            </div>

            {/* Han Interactive Character Container */}
            <div className="character-preview-card">
              {/* Customizer Controls Side panel */}
              <div className="character-controls">
                <div className="control-group">
                  <span className="control-label">cap</span>
                  <div className="color-options">
                    <button className={`color-dot ${capColor === 'none' ? 'active' : ''}`} style={{ backgroundColor: '#e5e7eb' }} onClick={() => setCapColor('none')} title="None" />
                    <button className={`color-dot ${capColor === '#ff6b35' ? 'active' : ''}`} style={{ backgroundColor: '#ff6b35' }} onClick={() => setCapColor('#ff6b35')} title="Orange" />
                    <button className={`color-dot ${capColor === '#10b981' ? 'active' : ''}`} style={{ backgroundColor: '#10b981' }} onClick={() => setCapColor('#10b981')} title="Green" />
                    <button className={`color-dot ${capColor === '#3b82f6' ? 'active' : ''}`} style={{ backgroundColor: '#3b82f6' }} onClick={() => setCapColor('#3b82f6')} title="Blue" />
                  </div>
                </div>

                <div className="control-group">
                  <span className="control-label">shirt</span>
                  <div className="color-options">
                    <button className={`color-dot ${shirtColor === 'none' ? 'active' : ''}`} style={{ backgroundColor: '#e5e7eb' }} onClick={() => setShirtColor('none')} title="None" />
                    <button className={`color-dot ${shirtColor === '#f59e0b' ? 'active' : ''}`} style={{ backgroundColor: '#f59e0b' }} onClick={() => setShirtColor('#f59e0b')} title="Yellow" />
                    <button className={`color-dot ${shirtColor === '#8b5cf6' ? 'active' : ''}`} style={{ backgroundColor: '#8b5cf6' }} onClick={() => setShirtColor('#8b5cf6')} title="Purple" />
                    <button className={`color-dot ${shirtColor === '#ec4899' ? 'active' : ''}`} style={{ backgroundColor: '#ec4899' }} onClick={() => setShirtColor('#ec4899')} title="Pink" />
                  </div>
                </div>

                <div className="control-group">
                  <span className="control-label">body</span>
                  <div className="color-options">
                    <button className={`color-dot ${bodyColor === '#ffffff' ? 'active' : ''}`} style={{ backgroundColor: '#ffffff', border: '1px solid #d1d5db' }} onClick={() => setBodyColor('#ffffff')} title="White" />
                    <button className={`color-dot ${bodyColor === '#cbd5e1' ? 'active' : ''}`} style={{ backgroundColor: '#cbd5e1' }} onClick={() => setBodyColor('#cbd5e1')} title="Gray" />
                    <button className={`color-dot ${bodyColor === '#fed7aa' ? 'active' : ''}`} style={{ backgroundColor: '#fed7aa' }} onClick={() => setBodyColor('#fed7aa')} title="Peach" />
                  </div>
                </div>
              </div>

              {/* Character Render Container */}
              <div className="character-canvas">
                <svg 
                  viewBox="0 0 200 200" 
                  className="han-svg" 
                  style={{ transform: `rotate(${rotation}deg)` }}
                  onClick={handleCharacterClick}
                >
                  <defs>
                    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                      <feDropShadow dx="0" dy="8" stdDeviation="6" floodOpacity="0.08" />
                    </filter>
                  </defs>
                  
                  {/* Floating base platform shadow */}
                  <ellipse cx="100" cy="170" rx="35" ry="8" fill="#e2e8f0" opacity="0.8" />
                  
                  {/* Han's Body Capsule */}
                  <g filter="url(#shadow)">
                    {/* Main White/Colored Body */}
                    <rect x="65" y="55" width="70" height="95" rx="35" fill={bodyColor} />
                    
                    {/* Shirt overlay if selected */}
                    {shirtColor !== 'none' && (
                      <path d="M 65 110 A 5 5 0 0 0 65 115 L 65 125 C 65 140 135 140 135 125 L 135 115 A 5 5 0 0 0 135 110 Z" fill={shirtColor} />
                    )}

                    {/* Cap overlay if selected */}
                    {capColor !== 'none' && (
                      <path d="M 62 65 C 62 40, 138 40, 138 65 Z" fill={capColor} />
                    )}

                    {/* Cute Big Eyes */}
                    {/* Left Eye */}
                    <circle cx="88" cy="85" r="7" fill="#0f172a" />
                    <circle cx="86" cy="83" r="2" fill="#ffffff" />
                    
                    {/* Right Eye */}
                    <circle cx="112" cy="85" r="7" fill="#0f172a" />
                    <circle cx="110" cy="83" r="2" fill="#ffffff" />

                    {/* Blush cheeks */}
                    <circle cx="78" cy="94" r="4" fill="#fca5a5" opacity="0.6" />
                    <circle cx="122" cy="94" r="4" fill="#fca5a5" opacity="0.6" />

                    {/* Cute mouth */}
                    <path d="M 96 95 Q 100 98, 104 95" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" fill="none" />

                    {/* Left Arm */}
                    <path d="M 58 100 C 48 100, 48 112, 58 112" stroke={bodyColor} strokeWidth="12" strokeLinecap="round" />
                    {/* Right Arm */}
                    <path d="M 142 100 C 152 100, 152 112, 142 112" stroke={bodyColor} strokeWidth="12" strokeLinecap="round" />
                  </g>
                </svg>
              </div>

              {/* Slider for rotation */}
              <div className="character-slider-container">
                <input 
                  type="range" 
                  min="-45" 
                  max="45" 
                  value={rotation} 
                  onChange={(e) => setRotation(parseInt(e.target.value))} 
                  className="character-slider" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scalloped divider wave */}
        <div className="scallop-divider">
          <svg viewBox="0 0 1440 24" preserveAspectRatio="none">
            <path d="M0,24 Q 15,0 30,24 T 60,24 T 90,24 T 120,24 T 150,24 T 180,24 T 210,24 T 240,24 T 270,24 T 300,24 T 330,24 T 360,24 T 390,24 T 420,24 T 450,24 T 480,24 T 510,24 T 540,24 T 570,24 T 600,24 T 630,24 T 660,24 T 690,24 T 720,24 T 750,24 T 780,24 T 810,24 T 840,24 T 870,24 T 900,24 T 930,24 T 960,24 T 990,24 T 1020,24 T 1050,24 T 1080,24 T 1110,24 T 1140,24 T 1170,24 T 1200,24 T 1230,24 T 1260,24 T 1290,24 T 1320,24 T 1350,24 T 1380,24 T 1410,24 T 1440,24 L 1440,24 L 0,24 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Main Dashboard Content Area */}
      <main className="content-container-wrap">
        <div className="section-header-meta">
          <div className="meta-text">
            <span className="meta-tag">TRACKME METRICS</span>
            <h2 className="meta-title">{currentTitle}</h2>
          </div>
          <div className="meta-badge-box">
            <div className="health-badge-black">
              <Heart size={14} className="heart-pulse" />
              <span>TrackMe Active</span>
            </div>
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
