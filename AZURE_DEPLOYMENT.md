# Azure Deployment Guide for StageTech Flanders

This React app builds to **static files** that can be hosted on Azure without requiring Node.js.

## Build Output

After running `npm run build`, all static files are generated in the `build/` folder:
- `index.html` - Main HTML file
- `static/css/` - Compiled CSS
- `static/js/` - Compiled JavaScript (React bundled)
- `images/` - Image assets
- `logos/` - Partner logos

**These are pure static files** - no server-side code required!

---

## Option 1: Azure Static Web Apps (Recommended)

### Benefits
- ✅ Free tier available
- ✅ Automatic deployments from GitHub
- ✅ Built-in CDN and HTTPS
- ✅ Custom domains
- ✅ Global distribution

### Setup Steps

#### Method A: Azure Portal (GUI)

1. **Go to Azure Portal**
   - Navigate to [portal.azure.com](https://portal.azure.com)
   - Click "Create a resource"
   - Search for "Static Web Apps"
   - Click "Create"

2. **Configure the Static Web App**
   - **Subscription**: Choose your subscription
   - **Resource Group**: Create new or use existing
   - **Name**: `stage-tech-flanders` (or your preferred name)
   - **Plan type**: Free (or Standard for more features)
   - **Region**: Choose closest region (e.g., `West Europe`)

3. **Deployment Details**
   - **Source**: GitHub
   - **Organization**: Your GitHub username/organization
   - **Repository**: `stage-tech-flanders` (or your repo name)
   - **Branch**: `main`

4. **Build Details**
   - **Build Presets**: Custom
   - **App location**: `/` (root)
   - **Api location**: (leave empty)
   - **Output location**: `build`

5. **Review and Create**
   - Review settings
   - Click "Review + create"
   - Click "Create"

6. **Wait for Deployment**
   - Azure will create the app and set up GitHub Actions
   - First deployment will start automatically
   - Check the "Deployment" tab for status

7. **Access Your Site**
   - Once deployed, go to "Overview"
   - Your site URL will be: `https://<app-name>.<region>.azurestaticapps.net`
   - Example: `https://stage-tech-flanders.westeurope.azurestaticapps.net`

#### Method B: Azure CLI

```bash
# Login to Azure
az login

# Create resource group (if needed)
az group create --name stage-tech-flanders-rg --location westeurope

# Create Static Web App
az staticwebapp create \
  --name stage-tech-flanders \
  --resource-group stage-tech-flanders-rg \
  --source https://github.com/V4Vinnie/stage-tech-flanders \
  --location westeurope \
  --branch main \
  --app-location '/' \
  --output-location 'build' \
  --login-with-github
```

### Custom Domain (Optional)

1. Go to your Static Web App in Azure Portal
2. Click "Custom domains"
3. Click "Add"
4. Enter your domain name
5. Follow DNS configuration instructions

---

## Option 2: Azure Storage Static Website Hosting

### Benefits
- ✅ Very cost-effective (pay per GB)
- ✅ Simple setup
- ✅ No build pipeline needed

### Setup Steps

1. **Create Storage Account**
   - Go to Azure Portal
   - Create a resource → "Storage account"
   - Configure:
     - **Name**: `stagetechflanders` (must be globally unique)
     - **Region**: Choose closest region
     - **Performance**: Standard
     - **Redundancy**: LRS (cheapest) or GRS (more resilient)
   - Click "Review + create" → "Create"

2. **Enable Static Website Hosting**
   - Go to your Storage Account
   - Under "Data management", click "Static website"
   - Set **Static website** to "Enabled"
   - **Index document name**: `index.html`
   - **Error document path**: `index.html` (for React Router)
   - Click "Save"
   - Note the **Primary endpoint** URL (e.g., `https://stagetechflanders.z13.web.core.windows.net`)

3. **Upload Files**
   
   **Option A: Azure Portal**
   - Go to "Containers" in your Storage Account
   - Open the `$web` container (created automatically)
   - Click "Upload"
   - Upload all files from the `build/` folder
   - Maintain folder structure (images/, logos/, static/, etc.)

   **Option B: Azure CLI**
   ```bash
   # Install Azure CLI if not already installed
   # Login
   az login
   
   # Set variables
   STORAGE_ACCOUNT="stagetechflanders"
   RESOURCE_GROUP="your-resource-group"
   
   # Upload build folder
   az storage blob upload-batch \
     --account-name $STORAGE_ACCOUNT \
     --source ./build \
     --destination \$web \
     --overwrite
   ```

   **Option C: Azure Storage Explorer**
   - Download [Azure Storage Explorer](https://azure.microsoft.com/features/storage-explorer/)
   - Connect to your Storage Account
   - Navigate to `$web` container
   - Drag and drop files from `build/` folder

4. **Access Your Site**
   - Your site will be available at the Primary endpoint URL
   - Example: `https://stagetechflanders.z13.web.core.windows.net`

### Update Files

When you make changes:
1. Run `npm run build`
2. Upload new files to the `$web` container (overwrite existing)

---

## Option 3: Azure App Service

### Benefits
- ✅ More control
- ✅ Can add server-side features later
- ✅ More configuration options

### Setup Steps

1. **Create App Service**
   - Go to Azure Portal
   - Create a resource → "Web App"
   - Configure:
     - **Name**: `stage-tech-flanders` (must be globally unique)
     - **Publish**: Code
     - **Runtime stack**: Node.js (or Static Web App)
     - **Operating System**: Linux
     - **Region**: Choose closest region
   - Click "Review + create" → "Create"

2. **Deploy Files**
   - Go to your App Service
   - Under "Deployment", click "Deployment Center"
   - Connect to GitHub and select your repository
   - Configure:
     - **Build provider**: GitHub Actions
     - **Organization**: Your GitHub username
     - **Repository**: `stage-tech-flanders`
     - **Branch**: `main`
   - Azure will create a GitHub Actions workflow

3. **Configure Build**
   - The workflow will need to build and deploy
   - Update the workflow file to:
     ```yaml
     - name: Build
       run: npm run build
     
     - name: Deploy
       uses: azure/webapps-deploy@v2
       with:
         app-name: 'stage-tech-flanders'
         package: './build'
     ```

---

## Build Commands

```bash
# Install dependencies (first time only)
npm install

# Build for production
npm run build

# The build folder contains all static files ready for deployment
```

## Important Notes

### Base Path Configuration

The app is currently configured for GitHub Pages with base path `/stage-tech-flanders`. 

**For Azure Static Web Apps or Storage:**
- If hosting at root domain, update `package.json`:
  ```json
  "homepage": "."
  ```
- Then rebuild: `npm run build`

**For subdirectory hosting:**
- Keep current `homepage` setting
- Update Azure configuration accordingly

### Environment Variables

If you use `process.env.PUBLIC_URL` in your code, it will work automatically in Azure Static Web Apps. For Storage hosting, ensure paths are relative.

---

## Troubleshooting

### 404 Errors on Refresh
- **Solution**: Configure `routes.json` for Azure Static Web Apps:
  ```json
  {
    "routes": [
      {
        "route": "/*",
        "serve": "/index.html",
        "statusCode": 200
      }
    ]
  }
  ```

### Images Not Loading
- Check that image paths use `process.env.PUBLIC_URL`
- Ensure images are uploaded to correct paths
- Verify file permissions in Storage Account

### Build Fails
- Check Node.js version (should be 14+)
- Run `npm install` to ensure dependencies are installed
- Check for TypeScript/ESLint errors

---

## Cost Comparison

| Service | Free Tier | Paid Tier (approx) |
|---------|-----------|---------------------|
| Azure Static Web Apps | ✅ 100 GB bandwidth/month | $9/month + usage |
| Azure Storage | ❌ | ~$0.02/GB/month |
| Azure App Service | ❌ | ~$13/month (Basic) |

**Recommendation**: Start with Azure Static Web Apps (free tier) for best experience.

---

## Quick Start Checklist

- [ ] Build the app: `npm run build`
- [ ] Choose deployment option (Static Web Apps recommended)
- [ ] Create Azure resource
- [ ] Configure build settings (output: `build`)
- [ ] Deploy
- [ ] Test the live site
- [ ] Configure custom domain (optional)

---

## Support

For issues:
- Azure Static Web Apps: [Documentation](https://docs.microsoft.com/azure/static-web-apps/)
- Azure Storage: [Documentation](https://docs.microsoft.com/azure/storage/blobs/storage-blob-static-website)
- React Build: [Create React App Docs](https://create-react-app.dev/docs/deployment/)

