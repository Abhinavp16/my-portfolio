# Deploying to Vercel

This portfolio is configured for easy deployment on Vercel.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub/GitLab/Bitbucket**: Your code should be in a Git repository

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
2. **Go to [vercel.com](https://vercel.com) and sign in**
3. **Click "New Project"**
4. **Import your Git repository**
5. **Configure the project:**
   - **Framework Preset**: Other
   - **Root Directory**: `portfolio-app` (if your repo contains multiple projects)
   - **Build Command**: `npm run vercel-build`
   - **Output Directory**: `.` (current directory)
6. **Click "Deploy"**

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   cd portfolio-app
   vercel
   ```

## Configuration

The project includes:
- `vercel.json`: Configuration for static hosting
- `package.json`: Build scripts for Tailwind CSS
- Static HTML with React (via CDN)

## Custom Domain

After deployment, you can:
1. Go to your project dashboard on Vercel
2. Navigate to "Settings" → "Domains"
3. Add your custom domain

## Environment Variables

No environment variables are needed for this static portfolio.

## Build Process

The build process:
1. Compiles Tailwind CSS from `src/input.css` to `src/output.css`
2. Serves the static files (HTML, CSS, JS, images)

## Troubleshooting

- **Build fails**: Make sure all dependencies are in `package.json`
- **Styling issues**: Ensure `src/output.css` is generated during build
- **404 errors**: Check that `vercel.json` routes are configured correctly
