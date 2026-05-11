#!/bin/bash

# GitHub Push Script - Fixed Token Format
# This script pushes your project to GitHub using a personal access token

# Configuration
TOKEN="ghp_1fhhrxrCK0jnSLBz3YvI5In0epr69D2L1MJs"
OWNER="ScoopyChatt"
REPO="tedfugunt-website"
REMOTE_URL="https://${TOKEN}@github.com/${OWNER}/${REPO}.git"

echo "=========================================="
echo "🚀 Ted Fugunt Website - GitHub Push Script"
echo "=========================================="
echo ""

# Make sure we're in the project directory
cd "$(dirname "$0")" || exit 1

echo "✓ Project directory: $(pwd)"
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Error: .git directory not found"
    echo "   Make sure you're in the project root directory"
    exit 1
fi

echo "Configuring git remote..."
git remote remove origin 2>/dev/null
git remote add origin "$REMOTE_URL"
echo "✓ Remote configured"
echo ""

echo "Ensuring main branch..."
git branch -M main
echo "✓ Branch name set to main"
echo ""

echo "Pushing to GitHub..."
echo "This may take a moment..."
echo ""

if git push -u origin main 2>&1; then
    echo ""
    echo "=========================================="
    echo "✅ SUCCESS! Code pushed to GitHub!"
    echo "=========================================="
    echo ""
    echo "Repository: https://github.com/${OWNER}/${REPO}"
    echo ""
    echo "📱 Next Steps:"
    echo "  1. Go to https://vercel.com"
    echo "  2. Click 'New Project'"
    echo "  3. Import Git Repository"
    echo "  4. Select: https://github.com/${OWNER}/${REPO}.git"
    echo "  5. Click 'Deploy'"
    echo ""
    echo "Your site will be live in 2-3 minutes!"
    echo ""
else
    echo ""
    echo "❌ Push failed"
    echo ""
    echo "Troubleshooting:"
    echo "  • Check network connection"
    echo "  • Verify token is valid: ${TOKEN:0:10}..."
    echo "  • Ensure you're in the project directory"
    echo ""
fi
