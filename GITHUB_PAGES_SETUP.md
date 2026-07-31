# GitHub Pages Deployment Guide

Your Wafid Appointment Slip project has been successfully pushed to GitHub! Follow these steps to enable GitHub Pages deployment.

## Repository Information

- **Repository URL**: https://github.com/omanvisaactiveorg-del/wafid-appointment-slip
- **Repository Name**: wafid-appointment-slip
- **Visibility**: Public

## Step 1: Enable GitHub Pages

1. Go to your repository: https://github.com/omanvisaactiveorg-del/wafid-appointment-slip
2. Click on **Settings** (top navigation bar)
3. In the left sidebar, click on **Pages**
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - This allows you to deploy from a GitHub Actions workflow

## Step 2: Create GitHub Actions Workflow

Since the repository has permission restrictions, you'll need to create the workflow manually:

1. In your repository, click **Add file** → **Create new file**
2. Enter the path: `.github/workflows/deploy.yml`
3. Copy and paste the following workflow content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '22'
        cache: 'pnpm'
    
    - name: Install pnpm
      run: npm install -g pnpm
    
    - name: Install dependencies
      run: pnpm install --frozen-lockfile
    
    - name: Build project
      run: pnpm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist/public
```

4. Click **Commit changes**
5. Add a commit message: "Add GitHub Pages deployment workflow"
6. Click **Commit new file**

## Step 3: Trigger the Deployment

The workflow will automatically run when you push to the main branch. To trigger it manually:

1. Go to your repository
2. Click the **Actions** tab
3. Select the "Deploy to GitHub Pages" workflow
4. Click **Run workflow** → **Run workflow**

## Step 4: Access Your Deployed Site

Once the workflow completes successfully:

- Your site will be available at: **https://omanvisaactiveorg-del.github.io/wafid-appointment-slip/**

You can verify the deployment status:
1. Go to your repository
2. Click the **Actions** tab
3. Check the latest workflow run status

## Troubleshooting

### Workflow Fails to Run

**Issue**: Workflow doesn't appear in the Actions tab

**Solution**:
1. Ensure you're on the `main` branch
2. The workflow file must be in `.github/workflows/` directory
3. The filename must end with `.yml` or `.yaml`

### Build Fails

**Issue**: Build step fails with dependency errors

**Solution**:
1. Ensure `pnpm-lock.yaml` is committed to the repository
2. Run `pnpm install` locally to verify dependencies work
3. Check Node.js version compatibility (requires 22+)

### Site Not Accessible

**Issue**: GitHub Pages site shows 404 error

**Solution**:
1. Check that the workflow completed successfully
2. Verify the publish directory is correct (`./dist/public`)
3. Wait a few minutes for GitHub Pages to update
4. Clear your browser cache and try again

### Custom Domain

To use a custom domain:

1. Go to **Settings** → **Pages**
2. Under "Custom domain", enter your domain name
3. Click **Save**
4. Update your domain's DNS settings according to GitHub's instructions

## Local Testing

Before deploying, test the build locally:

```bash
# Install dependencies
pnpm install

# Build the project
pnpm run build

# Preview the build
pnpm run preview
```

The built files will be in `dist/public/` directory.

## Manual Deployment (Alternative)

If you prefer to deploy manually without GitHub Actions:

1. Build the project locally:
   ```bash
   pnpm run build
   ```

2. The output will be in `dist/public/`

3. Use a tool like `gh-pages` to deploy:
   ```bash
   npm install -g gh-pages
   gh-pages -d dist/public
   ```

## Monitoring Deployments

1. Go to your repository
2. Click **Actions** tab
3. View deployment history and logs
4. Each successful deployment shows a green checkmark

## Next Steps

- **Custom Domain**: Set up a custom domain in repository Settings → Pages
- **SSL/TLS**: GitHub Pages automatically provides HTTPS
- **Analytics**: Add Google Analytics or other tracking tools
- **SEO**: Update meta tags in `client/index.html`

## Support

For more information about GitHub Pages, visit:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

**Your repository is ready for deployment!** 🚀
