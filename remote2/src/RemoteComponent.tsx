import React, { useEffect, useState } from 'react';
import './RemoteComponent.css';

interface RemoteComponentProps {
  title?: string;
  theme?: 'light' | 'dark' | 'cyan';
  showAnimation?: boolean;
  variant?: 'default' | 'compact' | 'expanded';
}

const RemoteComponent: React.FC<RemoteComponentProps> = ({
  title = "Remote Component 2",
  theme = 'light',
  showAnimation = false,
  variant = 'default'
}) => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme]);

  const handleIncrement = () => setCount(prev => prev + 1);
  const handleDecrement = () => setCount(prev => prev - 1);
  const handleReset = () => setCount(0);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'cyan') => {
    setSelectedTheme(newTheme);
  };

  const simulateLoading = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  const componentClass = `remote-component ${selectedTheme} ${variant} ${showAnimation ? 'animated' : ''}`;

  return (
    <div className={componentClass}>
      <div className="component-header">
        <h3 className="component-title">{title}</h3>
        <div className="header-controls">
          <button
            onClick={toggleVisibility}
            className="visibility-toggle"
            aria-label="Toggle visibility"
          >
            {isVisible ? '👁️' : '👁️‍🗨️'}
          </button>
        </div>
      </div>

      {isVisible && (
        <div className="component-content">
          <div className="theme-selector">
            <h4 className="section-title">Theme Selection</h4>
            <div className="theme-buttons">
              {(['light', 'dark', 'cyan'] as const).map((themeOption) => (
                <button
                  key={themeOption}
                  onClick={() => handleThemeChange(themeOption)}
                  className={`theme-btn ${selectedTheme === themeOption ? 'active' : ''}`}
                >
                  {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="counter-section">
            <h4 className="section-title">Counter: {count}</h4>
            <div className="button-group">
              <button
                onClick={handleDecrement}
                className="btn btn-secondary"
                disabled={isLoading}
              >
                -
              </button>
              <button
                onClick={handleReset}
                className="btn btn-primary"
                disabled={isLoading}
              >
                Reset
              </button>
              <button
                onClick={handleIncrement}
                className="btn btn-secondary"
                disabled={isLoading}
              >
                +
              </button>
            </div>
          </div>

          <div className="input-section">
            <h4 className="section-title">Input Demo</h4>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type something..."
              className="text-input"
              disabled={isLoading}
            />
            {inputValue && (
              <p className="input-display">
                You typed: <strong>{inputValue}</strong>
              </p>
            )}
          </div>

          <div className="action-section">
            <h4 className="section-title">Actions</h4>
            <button
              onClick={simulateLoading}
              className="btn btn-accent w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </span>
              ) : (
                'Simulate Loading'
              )}
            </button>
          </div>

          <div className="status-section">
            <h4 className="section-title">Status</h4>
            <div className="status-grid">
              <div className="status-item">
                <span className="status-label">Theme:</span>
                <span className="status-value">{selectedTheme}</span>
              </div>
              <div className="status-item">
                <span className="status-label">Count:</span>
                <span className="status-value">{count}</span>
              </div>
              <div className="status-item">
                <span className="status-label">Visible:</span>
                <span className="status-value">{isVisible ? 'Yes' : 'No'}</span>
              </div>
              <div className="status-item">
                <span className="status-label">Loading:</span>
                <span className="status-value">{isLoading ? 'Yes' : 'No'}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RemoteComponent;
