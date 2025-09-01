import React, { useEffect, useState } from 'react';
import './RemoteComponent.css';

interface RemoteComponentProps {
  title?: string;
  theme?: 'light' | 'dark';
}

const RemoteComponent: React.FC<RemoteComponentProps> = ({
  title = "Remote Component 1",
  theme = 'light'
}) => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleIncrement = () => setCount(prev => prev + 1);
  const handleDecrement = () => setCount(prev => prev - 1);
  const handleReset = () => setCount(0);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className={`remote-component ${theme}`}>
      <div className="component-header">
        <h3 className="component-title">{title}</h3>
        <button
          onClick={toggleVisibility}
          className="visibility-toggle"
          aria-label="Toggle visibility"
        >
          {isVisible ? '👁️' : '👁️‍🗨️'}
        </button>
      </div>

      {isVisible && (
        <div className="component-content">
          <div className="counter-section">
            <h4 className="section-title">Counter: {count}</h4>
            <div className="button-group">
              <button
                onClick={handleDecrement}
                className="btn btn-secondary"
              >
                -
              </button>
              <button
                onClick={handleReset}
                className="btn btn-primary"
              >
                Reset
              </button>
              <button
                onClick={handleIncrement}
                className="btn btn-secondary"
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
            />
            {inputValue && (
              <p className="input-display">
                You typed: <strong>{inputValue}</strong>
              </p>
            )}
          </div>

          <div className="status-section">
            <h4 className="section-title">Status</h4>
            <div className="status-grid">
              <div className="status-item">
                <span className="status-label">Theme:</span>
                <span className="status-value">{theme}</span>
              </div>
              <div className="status-item">
                <span className="status-label">Count:</span>
                <span className="status-value">{count}</span>
              </div>
              <div className="status-item">
                <span className="status-label">Visible:</span>
                <span className="status-value">{isVisible ? 'Yes' : 'No'}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RemoteComponent;
