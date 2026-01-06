#!/bin/bash

# Azure Static Web App Deployment Script
# This script builds the React app and prepares it for Azure deployment

echo "Building React app for production..."
npm run build

if [ $? -ne 0 ]; then
    echo "Build failed! Exiting."
    exit 1
fi

echo ""
echo "Build completed successfully!"
echo ""
echo "The static files are in the 'build' folder."
echo ""
echo "To deploy to Azure Static Web Apps:"
echo "1. Go to Azure Portal → Static Web Apps"
echo "2. Create a new Static Web App"
echo "3. Connect your GitHub repository"
echo "4. Set build settings:"
echo "   - App location: /"
echo "   - Api location: (leave empty)"
echo "   - Output location: build"
echo ""
echo "OR use Azure CLI:"
echo "az staticwebapp create \\"
echo "  --name stage-tech-flanders \\"
echo "  --resource-group <your-resource-group> \\"
echo "  --source <your-github-repo-url> \\"
echo "  --location <region> \\"
echo "  --branch main \\"
echo "  --app-location '/' \\"
echo "  --output-location 'build'"
echo ""
echo "To deploy to Azure Storage Static Website:"
echo "1. Create a Storage Account in Azure Portal"
echo "2. Enable 'Static website hosting'"
echo "3. Upload all files from the 'build' folder to the \$web container"
echo ""
echo "Files ready in: $(pwd)/build"

