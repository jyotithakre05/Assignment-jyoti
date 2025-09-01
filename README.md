# Webpack 5 Module Federation with React 18, TypeScript, and Tailwind CSS

This project demonstrates a complete Module Federation setup using Webpack 5, React 18, TypeScript, and Tailwind CSS. It consists of three repositories that work together to create a federated application architecture.

## 🏗️ Architecture Overview

### Repository Structure
```
├── container/          # Main container application
├── remote1/           # First remote application
└── remote2/           # Second remote application with Storybook
```

### Technology Stack
- **Webpack 5** - Module Federation and bundling
- **React 18** - Modern React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable component library (in container)
- **Storybook** - Component development and testing (in remote2)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation & Setup

1. **Clone and setup all repositories:**
```bash
# Container application
cd container
npm install

# First remote application
cd ../remote1
npm install

# Second remote application (with Storybook)
cd ../remote2
npm install
```

2. **Start all applications:**

Open three terminal windows and run:

```bash
# Terminal 1 - Container (Port 3000)
cd container
npm run dev

# Terminal 2 - Remote 1 (Port 3001)
cd remote1
npm run dev

# Terminal 3 - Remote 2 (Port 3002)
cd remote2
npm run dev

# Terminal 4 - Storybook (Port 6006) - Optional
cd remote2
npm run storybook
```

3. **Access the applications:**
- Container App: http://localhost:3000
- Remote 1: http://localhost:3001
- Remote 2: http://localhost:3002
- Storybook: http://localhost:6006

## 🔄 How Module Federation Works

### Container Application
- **Port**: 3000
- **Role**: Consumes federated modules from both remotes
- **Features**:
  - Navigation between remote components
  - Real-time updates from remote changes
  - Shared React instance management

### Remote 1 Application
- **Port**: 3001
- **Role**: Exposes `RemoteComponent` to the container
- **Features**:
  - Standalone application
  - Counter functionality
  - Input handling
  - Real-time state updates

### Remote 2 Application
- **Port**: 3002
- **Role**: Exposes enhanced `RemoteComponent` with Storybook
- **Features**:
  - Theme switching (light/dark/cyan)
  - Multiple variants (default/compact/expanded)
  - Loading states
  - Animation support
  - Comprehensive Storybook integration

## 🎨 Real-Time Updates

One of the key benefits of this setup is that **any changes made to CSS or React code in either remote repository will be immediately reflected in the container application**. This includes:

- CSS styling changes
- Component behavior modifications
- New props or features
- Theme updates
- Layout changes

## 📚 Storybook Integration

Remote 2 includes a comprehensive Storybook setup with:

- **Multiple Stories**: Different component variants and themes
- **Interactive Controls**: Real-time prop manipulation
- **Documentation**: Auto-generated component docs
- **Visual Testing**: Component isolation and testing

### Running Storybook
```bash
cd remote2
npm run storybook
```

## 🛠️ Development Workflow

### 1. Development Mode
All applications run in development mode with hot reloading enabled.

### 2. Making Changes
- Edit components in remote repositories
- See changes immediately in both standalone and container views
- Test component variations in Storybook

### 3. Building for Production
```bash
# Container
cd container
npm run build

# Remote 1
cd remote1
npm run build

# Remote 2
cd remote2
npm run build
```

## 🔧 Configuration Details

### Webpack Configuration
Each repository has its own `webpack.config.js` with Module Federation setup:

- **Container**: Consumes modules from both remotes
- **Remotes**: Expose components and share React instances

### TypeScript Configuration
- Strict mode enabled
- React 18 JSX support
- Declaration file generation

### Tailwind CSS
- Custom color schemes for each remote
- Responsive design with rem units
- Component-specific styling

## 📱 Responsive Design

All components are built with responsive design principles:
- Mobile-first approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly interactions

## 🧪 Testing

The setup includes:
- TypeScript type checking
- Component isolation in Storybook
- Interactive component testing
- Visual regression testing capabilities

## 🚀 Deployment Considerations

### Production Builds
- All applications build to `dist/` folders
- Static assets are optimized
- Module Federation works in production

### Hosting
- Container can be hosted on any static hosting service
- Remotes can be hosted independently
- CORS headers are properly configured

## 🔍 Troubleshooting

### Common Issues

1. **Port conflicts**: Ensure ports 3000, 3001, 3002, and 6006 are available
2. **CORS errors**: Check that all dev servers are running
3. **Module loading**: Verify remote entry points are accessible

### Debug Mode
Enable Webpack dev tools in browser for detailed Module Federation information.

## 📖 Additional Resources

- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)
- [React 18 Features](https://react.dev/blog/2022/03/29/react-v18)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)

## 🤝 Contributing

This is a demonstration project. Feel free to:
- Experiment with different Module Federation configurations
- Add new remote applications
- Enhance component functionality
- Improve the development experience

## 📄 License

MIT License - feel free to use this setup in your own projects!
