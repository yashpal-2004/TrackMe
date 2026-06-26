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
  const [capColor, setCapColor] = useState('#000000');
  const [shirtColor, setShirtColor] = useState('none');
  const [bodyColor, setBodyColor] = useState('url(#chrome)');
  const [rotation, setRotation] = useState(0);
  const [bubbleText, setBubbleText] = useState('Play with Han 🦖');
  const [karoMode, setKaroMode] = useState(true);

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
          <button className="nav-action-pill" onClick={() => alert('Syncing local caches with Firebase Cloud Store!')}>
            SYNC
          </button>
          <button className="nav-action-pill bag-pill">
            STATS — 0
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
            SYNC
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-title-group">
              <div className="title-row">
                <h1 className="hero-title-item font-large">Studio</h1>
                <span className="year-marker">( 2026 )</span>
              </div>
              <div className="title-row">
                <h1 className="hero-title-item font-large">TRACKME</h1>
              </div>
            </div>

            <div className="hero-info-section">
              <span className="est-marker">( EST. 2026 )</span>
              
              <h2 className="hero-karo-desc">
                TRACKME IS A PREMIUM PRODUCTIVITY & HEALTH WIDGET BUILT TO OPTIMIZE YOUR LIFE.
              </h2>
              <p className="hero-karo-sub">
                TRACKME IS NONTRADITIONAL. TRACKME IS A UNIFICATION OF HABITS, SLEEP PROTOCOLS, FOCUS PROTOCOLS & OFFLINE CACHES.
              </p>

              <button className="karo-shop-btn" onClick={() => setActiveTab('habits')}>
                TRACK ☺
              </button>
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
                    <button className={`color-dot ${capColor === '#000000' ? 'active' : ''}`} style={{ backgroundColor: '#000000' }} onClick={() => setCapColor('#000000')} title="Black" />
                    <button className={`color-dot ${capColor === '#ffffff' ? 'active' : ''}`} style={{ backgroundColor: '#ffffff', border: '1px solid #d1d5db' }} onClick={() => setCapColor('#ffffff')} title="White" />
                  </div>
                </div>

                <div className="control-group">
                  <span className="control-label">body</span>
                  <div className="color-options">
                    <button className={`color-dot ${bodyColor === 'url(#chrome)' ? 'active' : ''}`} style={{ background: 'linear-gradient(135deg, #fff, #999)' }} onClick={() => setBodyColor('url(#chrome)')} title="Chrome" />
                    <button className={`color-dot ${bodyColor === '#000000' ? 'active' : ''}`} style={{ backgroundColor: '#000000' }} onClick={() => setBodyColor('#000000')} title="Dark" />
                    <button className={`color-dot ${bodyColor === '#cbd5e1' ? 'active' : ''}`} style={{ backgroundColor: '#cbd5e1' }} onClick={() => setBodyColor('#cbd5e1')} title="Gray" />
                  </div>
                </div>
              </div>

              {/* Character Render Canvas */}
              <div className="character-canvas">
                <svg 
                  viewBox="0 0 200 200" 
                  className="han-svg" 
                  style={{ transform: `rotate(${rotation}deg)` }}
                  onClick={handleCharacterClick}
                >
                  <defs>
                    {/* Metallic Silver/Chrome Gradient */}
                    <linearGradient id="chrome" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="20%" stopColor="#e2e8f0" />
                      <stop offset="40%" stopColor="#94a3b8" />
                      <stop offset="60%" stopColor="#475569" />
                      <stop offset="80%" stopColor="#cbd5e1" />
                      <stop offset="100%" stopColor="#f8fafc" />
                    </linearGradient>
                    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                      <feDropShadow dx="0" dy="8" stdDeviation="6" floodOpacity="0.08" />
                    </filter>
                  </defs>
                  
                  {/* Floating base platform shadow */}
                  <ellipse cx="100" cy="170" rx="35" ry="8" fill="#e2e8f0" opacity="0.8" />
                  
                  {/* Han's Body Capsule */}
                  <g filter="url(#shadow)">
                    {/* Main Body */}
                    <rect x="65" y="55" width="70" height="95" rx="35" fill={bodyColor} />
                    
                    {/* Cap overlay if selected */}
                    {capColor !== 'none' && (
                      <path d="M 62 65 C 62 40, 138 40, 138 65 Z" fill={capColor} />
                    )}

                    {/* Cute Big Eyes */}
                    <circle cx="88" cy="85" r="7" fill="#0f172a" />
                    <circle cx="86" cy="83" r="2" fill="#ffffff" />
                    
                    <circle cx="112" cy="85" r="7" fill="#0f172a" />
                    <circle cx="110" cy="83" r="2" fill="#ffffff" />

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

        {/* Footnote Row at bottom of hero */}
        <div className="hero-footnote-row">
          <div className="footnote-left">
            <span>[ I live in my head ——— You live there too ]</span>
          </div>
          <div className="footnote-right">
            <button className="karo-mode-toggle" onClick={() => setKaroMode(!karoMode)}>
              <span className={`karo-mode-dot ${karoMode ? 'active' : ''}`} />
              <span>TRACKME MODE</span>
            </button>
          </div>
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
