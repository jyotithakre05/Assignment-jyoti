#!/bin/bash

# Webpack 5 Module Federation - Start All Applications
# This script starts all three applications in separate terminals

echo "🚀 Starting Webpack 5 Module Federation Applications..."
echo ""

# Function to start an application in a new terminal
start_app() {
    local app_name=$1
    local app_path=$2
    local port=$3
    local command=$4

    echo "📱 Starting $app_name on port $port..."

    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        osascript -e "tell application \"Terminal\" to do script \"cd $(pwd)/$app_path && echo '🚀 Starting $app_name...' && $command\""
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux
        if command -v gnome-terminal &> /dev/null; then
            gnome-terminal -- bash -c "cd $(pwd)/$app_path && echo '🚀 Starting $app_name...' && $command; exec bash"
        elif command -v konsole &> /dev/null; then
            konsole -e bash -c "cd $(pwd)/$app_path && echo '🚀 Starting $app_name...' && $command; exec bash"
        else
            xterm -e bash -c "cd $(pwd)/$app_path && echo '🚀 Starting $app_name...' && $command; exec bash" &
        fi
    else
        # Windows or other
        echo "⚠️  Please start $app_name manually in a new terminal:"
        echo "   cd $app_path"
        echo "   $command"
        echo ""
    fi

    sleep 2
}

# Check if applications exist
if [ ! -d "container" ] || [ ! -d "remote1" ] || [ ! -d "remote2" ]; then
    echo "❌ Error: Required directories not found!"
    echo "   Make sure you're in the root directory with container/, remote1/, and remote2/ folders"
    exit 1
fi

# Start Container Application
start_app "Container App" "container" "3000" "npm run dev"

# Start Remote 1 Application
start_app "Remote 1 App" "remote1" "3001" "npm run dev"

# Start Remote 2 Application
start_app "Remote 2 App" "remote2" "3002" "npm run dev"

echo ""
echo "✅ All applications are starting up!"
echo ""
echo "🌐 Access your applications at:"
echo "   Container App: http://localhost:3000"
echo "   Remote 1:      http://localhost:3001"
echo "   Remote 2:      http://localhost:3002"
echo ""
echo "📚 To start Storybook (optional):"
echo "   cd remote2 && npm run storybook"
echo "   Then visit: http://localhost:6006"
echo ""
echo "🔄 Any changes in remote repositories will be reflected in the container in real-time!"
echo ""
echo "Press Ctrl+C to stop this script (applications will continue running)"
echo ""

# Wait for user to stop the script
trap "echo ''; echo '👋 Script stopped. Applications are still running in their terminals.'; exit 0" INT
while true; do
    sleep 1
done
