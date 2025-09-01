import React from 'react';
import './App.css';
import RemoteComponent from './RemoteComponent';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Remote 1 Application
          </h1>
          <p className="text-xl text-gray-600">
            This is a standalone remote application that can also be consumed by the container
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Standalone Mode
            </h2>
            <p className="text-gray-600 mb-4">
              This component is running in standalone mode within Remote 1.
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
              <code>import(&#39;remote1/RemoteComponent&#39;)</code>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Features
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Real-time CSS updates reflected in container
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              React component state management
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Tailwind CSS styling
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              TypeScript support
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
