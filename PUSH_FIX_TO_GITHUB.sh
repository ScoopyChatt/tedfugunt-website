#!/bin/bash

# Push the clean commit to GitHub using GitHub CLI

cd "$(dirname "$0")" || exit 1

echo "Checking GitHub CLI login status..."
if ! gh auth status > /dev/null 2>&1; then
    echo "⚠️  You need to log in to GitHub first."
    echo "Running: gh auth login"
    gh auth login
fi

echo ""
echo "Setting git remote to use SSH..."
git remote remove origin 2>/dev/null
git remote add origin git@github.com:ScoopyChatt/tedfugunt-website.git

echo "Force pushing clean code to GitHub..."
if git push -u origin main --force 2>&1; then
    echo ""
    echo "✅ SUCCESS! Clean code pushed to GitHub"
    echo "Vercel will automatically redeploy in a few moments..."
    echo ""
    echo "Your website is live at:"
    echo "https://tedfugunt-website.vercel.app"
    echo ""
    echo "Monitor deployment at:"
    echo "https://vercel.com/scoopychatts-projects/tedfugunt-website"
else
    echo ""
    echo "❌ Push failed."
    exit 1
fi
