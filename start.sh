#!/bin/bash

# Advanta Banking - Quick Setup Script
# This script sets up and runs everything automatically

echo "🏦 Starting Advanta Capital Banking System..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please download it from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node -v)"
echo ""

# Setup Backend
echo "📦 Setting up backend..."
cd backend
if [ ! -d "node_modules" ]; then
    npm install > /dev/null 2>&1
fi

# Create .env if it doesn't exist
if [ ! -f ".env" ]; then
    cp .env.example .env
    echo "✅ Created backend .env file"
fi

echo "✅ Backend ready"
echo ""

# Setup Frontend
echo "📦 Setting up frontend..."
cd ../frontend
if [ ! -d "node_modules" ]; then
    npm install > /dev/null 2>&1
fi

# Create .env if it doesn't exist
if [ ! -f ".env" ]; then
    cp .env.example .env
    echo "✅ Created frontend .env file"
fi

echo "✅ Frontend ready"
echo ""

# Start both servers
echo "🚀 Starting servers..."
echo ""
echo "📍 Backend: http://localhost:5000"
echo "📍 Frontend: http://localhost:3000"
echo ""
echo "🔐 Login with:"
echo "   Email: admin@example.com"
echo "   Password: password123"
echo ""
echo "Press Ctrl+C to stop"
echo ""

cd ..
# Start backend in background
cd backend
npm run dev > /dev/null 2>&1 &
BACKEND_PID=$!

# Give backend time to start
sleep 2

# Start frontend
cd ../frontend
npm start

# Cleanup on exit
trap "kill $BACKEND_PID" EXIT
