import React, { useState } from 'react';
import { Moon, Award, Timer, Menu, X, Heart, Shield, Compass, Sparkles, RefreshCw, CheckCircle2, Circle } from 'lucide-react';
import SmartHabitTracker from './SmartHabitTracker';
import SleepTracker from './SleepTracker';
import TimeTracker from './TimeTracker';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('habits');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Product Widget Preview State
  const [previewMetric, setPreviewMetric] = useState('habits');
  const [targetSlider, setTargetSlider] = useState(8); // e.g. Sleep target or Habit count
  const [karoMode, setKaroMode] = useState(true);

  const tabs = [
    { id: 'habits', name: 'Habits', icon: Award, component: SmartHabitTracker, description: 'Smart Habit Tracker' },
    { id: 'sleep', name: 'Sleep', icon: Moon, component: SleepTracker, description: 'Sleep & Recovery Tracker' },
    { id: 'flow', name: 'Flow', icon: Timer, component: TimeTracker, description: 'Flow State Hub' }
  ];

  const ActiveComponent = tabs.find(t => t.id === activeTab)?.component || SmartHabitTracker;
  const currentTitle = tabs.find(t => t.id === activeTab)?.description || '';

  // Calculator helper based on target slider
  const getSleepQuality = (hours) => {
    if (hours < 6) return '58% - INSUFFICIENT';
    if (hours < 8) return '82% - MODERATE';
    if (hours === 8) return '96% - OPTIMAL';
    return '92% - RESTED';
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
          <button className="nav-action-pill bag-pill">
            STATS — 3
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
            {/* Interactive Metric Preview Widget */}
            <div className="character-preview-card">
              {/* Metric selector controls */}
              <div className="character-controls">
                <div className="control-group">
                  <span className="control-label">metric</span>
                  <div className="metric-pill-controls">
                    <button className={`metric-select-btn ${previewMetric === 'habits' ? 'active' : ''}`} onClick={() => { setPreviewMetric('habits'); setTargetSlider(3); }}>
                      HABITS
                    </button>
                    <button className={`metric-select-btn ${previewMetric === 'sleep' ? 'active' : ''}`} onClick={() => { setPreviewMetric('sleep'); setTargetSlider(8); }}>
                      SLEEP
                    </button>
                    <button className={`metric-select-btn ${previewMetric === 'flow' ? 'active' : ''}`} onClick={() => { setPreviewMetric('flow'); setTargetSlider(45); }}>
                      FLOW
                    </button>
                  </div>
                </div>
              </div>

              {/* Interactive Dynamic Graphic Render */}
              <div className="character-canvas">
                {previewMetric === 'habits' && (
                  <div className="preview-graphic-content">
                    <div className="preview-habit-list">
                      <div className="preview-habit-item done">
                        <CheckCircle2 size={16} className="habit-check-icon" />
                        <span>HYDRATION TARGET</span>
                      </div>
                      <div className="preview-habit-item done">
                        <CheckCircle2 size={16} className="habit-check-icon" />
                        <span>MEDITATION ROUTINE</span>
                      </div>
                      <div className="preview-habit-item done">
                        <CheckCircle2 size={16} className="habit-check-icon" />
                        <span>PHYSICAL WORKOUT</span>
                      </div>
                      <div className={`preview-habit-item ${targetSlider >= 4 ? 'done' : ''}`}>
                        {targetSlider >= 4 ? <CheckCircle2 size={16} className="habit-check-icon" /> : <Circle size={16} />}
                        <span>DEEP WORK SESSION</span>
                      </div>
                    </div>
                    <span className="graphic-subtitle">STREAK SCORE: {targetSlider * 25}%</span>
                  </div>
                )}

                {previewMetric === 'sleep' && (
                  <div className="preview-graphic-content">
                    {/* Minimal Sleep Wave Path */}
                    <svg viewBox="0 0 160 80" className="sleep-wave-svg">
                      {/* Grid lines */}
                      <line x1="0" y1="40" x2="160" y2="40" stroke="#e5e7eb" strokeDasharray="3,3" />
                      {/* Recovery Sine path */}
                      <path 
                        d={`M 0 40 Q 20 ${40 - (targetSlider * 3.5)} 40 40 T 80 40 T 120 40 T 160 40`} 
                        fill="none" 
                        stroke="#000000" 
                        strokeWidth="3" 
                      />
                      <circle cx="40" cy="40" r="4" fill="#000000" />
                      <circle cx="120" cy="40" r="4" fill="#000000" />
                    </svg>
                    <span className="graphic-subtitle">RECOVERY: {getSleepQuality(targetSlider)}</span>
                  </div>
                )}

                {previewMetric === 'flow' && (
                  <div className="preview-graphic-content">
                    {/* Rotating Concentric Focus Target */}
                    <div className="preview-dial-container">
                      <svg viewBox="0 0 100 100" className="dial-svg">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e5e5" strokeWidth="2" />
                        <circle 
                          cx="50" 
                          cy="50" 
                          r="30" 
                          fill="none" 
                          stroke="#000000" 
                          strokeWidth="3" 
                          strokeDasharray="188" 
                          strokeDashoffset={188 - (targetSlider * 1.5)} 
                        />
                        <circle cx="50" cy="50" r="6" fill="#000000" />
                      </svg>
                    </div>
                    <span className="graphic-subtitle">FOCUS PROTOCOL: {targetSlider} MINS</span>
                  </div>
                )}
              </div>

              {/* Slider for interactive metric customization */}
              <div className="character-slider-container">
                <span className="slider-value-label">
                  {previewMetric === 'habits' && `Completed: ${targetSlider}/4`}
                  {previewMetric === 'sleep' && `Duration: ${targetSlider}h`}
                  {previewMetric === 'flow' && `Session: ${targetSlider}m`}
                </span>
                <input 
                  type="range" 
                  min={previewMetric === 'habits' ? '3' : previewMetric === 'sleep' ? '5' : '15'} 
                  max={previewMetric === 'habits' ? '4' : previewMetric === 'sleep' ? '10' : '90'} 
                  step="1"
                  value={targetSlider} 
                  onChange={(e) => setTargetSlider(parseInt(e.target.value))} 
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
