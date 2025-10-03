# Portfolio 2025

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. Features multi-language support (English/French), smooth animations, and a beautiful gradient design.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation on Ubuntu Server](#installation-on-ubuntu-server)
- [Local Development](#local-development)
- [Building for Production](#building-for-production)
- [Static Site Generation](#static-site-generation)
- [Configuration](#configuration)
- [Deployment](#deployment)

## Features

- 🌐 Multi-language support (English/French)
- 🎨 Modern UI with gradient effects and animations
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🍔 Mobile-friendly navigation with burger menu
- ⚡ Fast performance with Next.js
- 🎯 Type-safe with TypeScript
- 🎭 Smooth animations and transitions
- 📧 Contact section with email and social links

## Tech Stack

- **Framework**: Next.js 15.1.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Geist (Next.js optimized)

## Installation on Ubuntu Server

### Prerequisites

Fresh Ubuntu server (20.04 LTS or newer) with sudo access.

### Step 1: Update System

```bash
sudo apt update && sudo apt upgrade -y
```

### Step 2: Install Node.js (via NVM - Recommended)

```bash
# Install NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install Node.js LTS (v20+)
nvm install --lts
nvm use --lts

# Verify installation
node --version  # Should be v20.x.x or higher
npm --version
```

**Alternative**: Install Node.js directly from NodeSource:

```bash
# Add NodeSource repository for Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

# Install Node.js
sudo apt install -y nodejs

# Verify installation
node --version
npm --version
```

### Step 3: Install Git (if not already installed)

```bash
sudo apt install git -y
git --version
```

### Step 4: Clone the Repository

```bash
# Navigate to your preferred directory
cd /var/www  # or ~/projects

# Clone the repository (replace with your repo URL)
git clone https://github.com/yourusername/portfolio-2025.git
cd portfolio-2025/portfolio
```

### Step 5: Install Dependencies

```bash
npm install
# or if you prefer yarn
# npm install -g yarn
# yarn install
```

### Step 6: Configure Environment (Optional)

Create a `.env.local` file if you need environment variables:

```bash
nano .env.local
```

Add any necessary environment variables:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Local Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page auto-updates as you edit files. Edit:
- `src/components/portfolio/` - React components
- `src/config/portfolio.config.ts` - Portfolio content
- `src/config/translations.ts` - Multi-language translations

## Building for Production

### Standard Build (Server-Side Rendering)

```bash
# Build the application
npm run build

# Start production server
npm start
```

The production server will run on [http://localhost:3000](http://localhost:3000).

### Keep Server Running with PM2 (Recommended for Production)

```bash
# Install PM2 globally
sudo npm install -g pm2

# Start the application
pm2 start npm --name "portfolio" -- start

# Save PM2 process list
pm2 save

# Setup PM2 to start on system boot
pm2 startup
# Follow the command output instructions

# Useful PM2 commands:
pm2 status          # Check status
pm2 logs portfolio  # View logs
pm2 restart portfolio  # Restart app
pm2 stop portfolio  # Stop app
```

## Static Site Generation

This portfolio can be exported as a static site (HTML/CSS/JS) for serving with any static file server (Nginx, Apache, GitHub Pages, etc.).

### Step 1: Configure Next.js for Static Export

The `next.config.ts` should already be configured for static export. Verify it contains:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static HTML export
  images: {
    unoptimized: true,  // Required for static export
  },
};

export default nextConfig;
```

### Step 2: Build Static Site

```bash
# Build the static site
npm run build
```

This creates an `out/` directory with all static files.

### Step 3: Test Static Build Locally

```bash
# Install a simple static server
npm install -g serve

# Serve the static files
serve -s out -p 3000
```

Visit [http://localhost:3000](http://localhost:3000) to test.

### Step 4: Deploy Static Files

#### Option A: Nginx

```bash
# Install Nginx
sudo apt install nginx -y

# Copy static files to Nginx directory
sudo cp -r out/* /var/www/html/

# Or create a new site
sudo mkdir -p /var/www/portfolio
sudo cp -r out/* /var/www/portfolio/

# Configure Nginx
sudo nano /etc/nginx/sites-available/portfolio
```

Add this configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/portfolio;
    index index.html;

    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

#### Option B: Apache

```bash
# Install Apache
sudo apt install apache2 -y

# Copy files
sudo cp -r out/* /var/www/html/

# Enable required modules
sudo a2enmod rewrite
sudo systemctl restart apache2
```

#### Option C: GitHub Pages / Netlify / Vercel

Simply upload the `out/` directory or connect your Git repository:

- **GitHub Pages**: Push `out/` to `gh-pages` branch
- **Netlify**: Drag and drop `out/` folder or connect Git repo with build command `npm run build`
- **Vercel**: Connect Git repo (auto-detects Next.js)

## Configuration

### Customize Portfolio Content

Edit `src/config/portfolio.config.ts`:
- Personal information
- Projects
- Social links
- Skills

### Update Translations

Edit `src/config/translations.ts`:
- English translations
- French translations
- Add more languages

### Styling

- Tailwind config: `tailwind.config.ts`
- Global styles: `src/app/globals.css`
- Component styles: Inline Tailwind classes

## Deployment

### Quick Deploy Options

1. **Vercel** (Recommended - Zero Config):
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**:
   - Build command: `npm run build`
   - Publish directory: `out`

3. **GitHub Pages**:
   ```bash
   npm run build
   # Push 'out' directory to gh-pages branch
   ```

### SSL/HTTPS Setup (Nginx)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d yourdomain.com

# Auto-renewal is configured automatically
```

## Troubleshooting

### Port already in use
```bash
# Find process using port 3000
lsof -ti:3000

# Kill the process
kill -9 $(lsof -ti:3000)
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Permission issues
```bash
# Fix npm permissions
sudo chown -R $USER:$USER ~/.npm
sudo chown -R $USER:$USER node_modules
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Lucide Icons](https://lucide.dev/)

## License

MIT License - feel free to use this portfolio template for your own projects!
