# 🚀 Quick Start Guide

Get your Webpack 5 Module Federation setup running in under 5 minutes!

## ⚡ Super Quick Start

```bash
# 1. Install all dependencies
npm run install:all

# 2. Start all applications
npm run start:all
```

That's it! 🎉

## 🌐 Your Applications

- **Container App**: http://localhost:3000
- **Remote 1**: http://localhost:3001
- **Remote 2**: http://localhost:3002
- **Storybook**: http://localhost:6006 (optional)

## 🔄 Real-Time Updates

Make changes to any remote component and see them immediately reflected in the container!

Try it:
1. Open `remote1/src/RemoteComponent.css`
2. Change a color or style
3. Save the file
4. Watch the change appear instantly in the container at http://localhost:3000/remote1

## 📚 What You Get

- ✅ **Container App**: Consumes federated modules from both remotes
- ✅ **Remote 1**: Basic component with counter and input functionality
- ✅ **Remote 2**: Enhanced component with themes, variants, and Storybook
- ✅ **Real-time Updates**: CSS and React changes reflect immediately
- ✅ **TypeScript**: Full type safety across all applications
- ✅ **Tailwind CSS**: Modern, responsive styling
- ✅ **Storybook**: Component development and testing environment

## 🛠️ Development Commands

```bash
# Start all apps simultaneously
npm run dev:all

# Start individual apps
npm run dev:container    # Port 3000
npm run dev:remote1      # Port 3001
npm run dev:remote2      # Port 3002

# Start Storybook
npm run storybook        # Port 6006

# Build all for production
npm run build:all

# Type checking
npm run type-check:all
```

## 🎯 Next Steps

1. **Explore the code**: Check out the component implementations
2. **Modify components**: Make changes and see real-time updates
3. **Add new remotes**: Create additional federated applications
4. **Customize themes**: Modify Tailwind configurations
5. **Extend Storybook**: Add more stories and documentation

## 🆘 Need Help?

- Check the main [README.md](README.md) for detailed documentation
- Look at the webpack configurations in each repository
- Examine the Module Federation setup in each `webpack.config.js`

Happy coding! 🎉
