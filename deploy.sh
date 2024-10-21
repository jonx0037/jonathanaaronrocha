#!/bin/bash

# Run the build command
npm run build

# Copy the contents of the 'out' directory to the root
cp -R out/* .

# Add all changes to git
git add .

# Commit the changes
git commit -m "Deploy to GitHub Pages"

# Push to the current branch (assuming it's the correct branch for GitHub Pages)
git push origin HEAD

echo "Deployment complete!"
