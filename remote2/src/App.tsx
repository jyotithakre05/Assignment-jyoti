import React from 'react';
import './App.css';
import RemoteComponent from './RemoteComponent';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Remote 2 Application
          </h1>
          <p className="text-xl text-gray-600">
            This remote app includes Storybook integration and can be consumed by the container
          </p>
          <div className="mt-4">
            <a
              href="http://localhost:6006"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              📚 Open Storybook
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Standalone Mode
            </h2>
            <p className="text-gray-600 mb-4">
              This component is running in standalone mode within Remote 2.
            </p>
            <RemoteComponent />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Module Federation
            </h2>
            <p className="text-gray-600 mb-4">
              The same component can be consumed by the container application.
            </p>
            <div className="bg-gray-100 rounded p-4 text-sm text-gray-600">
              <code>import(&#39;remote2/RemoteComponent&#39;)</code>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Features
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
              Real-time CSS updates reflected in container
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
              React component state management
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
              Tailwind CSS styling
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
              TypeScript support
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
              Storybook integration for component development
            </li>
          </ul>
        </div>

        <div className="mt-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg p-6 text-white">
          <h3 className="text-xl font-semibold mb-3">Storybook Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">🎨 Visual Development</h4>
              <p>Develop components in isolation with different states and props</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📖 Documentation</h4>
              <p>Auto-generated documentation for all component variants</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🧪 Testing</h4>
              <p>Interactive testing and visual regression testing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
