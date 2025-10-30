# Deployment Guide

This guide covers deploying Humaira Sultana's portfolio website to various platforms.

## Prerequisites

- Node.js 18+ installed
- Git repository initialized
- GitHub account (for most deployment options)

## Environment Variables

Before deploying, ensure you have the following environment variables configured:

\`\`\`env
# Email Configuration (for contact form)
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_SENDER=your-email@gmail.com
\`\`\`

### Getting Gmail App Password

1. Enable 2-Factor Authentication on your Google Account
2. Go to [Google Account Security](https://myaccount.google.com/security)
3. Find "App passwords" and generate a new one for Mail
4. Use this password as `EMAIL_PASS`

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the creator of Next.js and provides the best experience for Next.js applications.

#### Steps:

1. **Push to GitHub**
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select the repository

3. **Configure Environment Variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add the following variables:
     - `EMAIL_USER`
     - `EMAIL_PASS`
     - `EMAIL_SENDER`

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site
   - Your site will be live at `your-project.vercel.app`

5. **Custom Domain (Optional)**
   - Go to Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

#### Vercel Benefits:
- Automatic deployments on git push
- Built-in analytics and monitoring
- Edge functions support
- Automatic HTTPS
- Free tier available

### Option 2: Netlify

#### Steps:

1. **Connect GitHub**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your repository

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Set Environment Variables**
   - Go to Site settings → Build & deploy → Environment
   - Add your environment variables

4. **Deploy**
   - Netlify will automatically deploy
   - Your site will be live at `your-site.netlify.app`

### Option 3: AWS Amplify

#### Steps:

1. **Connect Repository**
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect your GitHub repository

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Build output directory: `.next`

3. **Add Environment Variables**
   - In Amplify console, add your environment variables

4. **Deploy**
   - Amplify will build and deploy automatically

### Option 4: Self-Hosted (VPS/Dedicated Server)

#### Prerequisites:
- Server with Node.js 18+ installed
- PM2 or similar process manager
- Nginx or Apache for reverse proxy
- SSL certificate (Let's Encrypt recommended)

#### Steps:

1. **Clone Repository**
   \`\`\`bash
   git clone <your-repo-url>
   cd humaira-portfolio
   \`\`\`

2. **Install Dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Build Application**
   \`\`\`bash
   npm run build
   \`\`\`

4. **Set Environment Variables**
   \`\`\`bash
   export EMAIL_USER=your-email@gmail.com
   export EMAIL_PASS=your-app-password
   export EMAIL_SENDER=your-email@gmail.com
   \`\`\`

5. **Start with PM2**
   \`\`\`bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   \`\`\`

6. **Configure Nginx**
   \`\`\`nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   \`\`\`

7. **Enable HTTPS with Let's Encrypt**
   \`\`\`bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   \`\`\`

## Post-Deployment Checklist

- [ ] Site is accessible at your domain
- [ ] All pages load correctly
- [ ] Contact form works and sends emails
- [ ] Images load properly
- [ ] Animations are smooth
- [ ] Mobile responsive design works
- [ ] All links are functional
- [ ] SEO meta tags are present
- [ ] Analytics are tracking (if configured)
- [ ] SSL certificate is valid
- [ ] Performance is acceptable (Lighthouse score > 90)

## Monitoring & Maintenance

### Vercel Monitoring
- Check deployment status in Vercel dashboard
- Monitor analytics and performance metrics
- Set up error tracking with Sentry (optional)

### Logs
- View build logs in deployment platform
- Monitor application errors
- Check email delivery logs

### Updates
- Keep dependencies updated: `npm update`
- Monitor security advisories: `npm audit`
- Test updates in development before deploying

## Troubleshooting

### Build Fails
- Check Node.js version: `node --version`
- Clear cache: `npm cache clean --force`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Contact Form Not Working
- Verify environment variables are set
- Check Gmail app password is correct
- Ensure 2FA is enabled on Gmail account
- Check email logs in deployment platform

### Performance Issues
- Optimize images
- Enable caching headers
- Use CDN for static assets
- Monitor Core Web Vitals

### SSL Certificate Issues
- Verify domain DNS settings
- Check certificate expiration
- Renew certificate if expired

## Rollback

If you need to rollback to a previous version:

**Vercel:**
- Go to Deployments tab
- Click on previous deployment
- Click "Promote to Production"

**Netlify:**
- Go to Deploys tab
- Click on previous deploy
- Click "Publish deploy"

## Support

For deployment issues:
- Check platform documentation
- Review error logs
- Contact platform support
- Open an issue on GitHub
