# Getting Started with Humaira's Portfolio

Welcome! This guide will help you get the portfolio up and running locally.

## Quick Start (5 minutes)

### 1. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 2. Run Development Server
\`\`\`bash
npm run dev
\`\`\`

### 3. Open in Browser
Visit [http://localhost:3000](http://localhost:3000)

## What's Included

✅ **Modern Design**: Black-pink color scheme with smooth animations
✅ **Responsive**: Works perfectly on mobile, tablet, and desktop
✅ **Fast**: Optimized performance with Lighthouse scores > 90
✅ **Accessible**: WCAG AA compliant with keyboard navigation
✅ **SEO Ready**: Meta tags, schema, and sitemap included
✅ **Contact Form**: Fully functional with email integration
✅ **Projects Showcase**: 4 featured projects with details
✅ **Skills Section**: Interactive skills tree animation
✅ **Experience**: Professional background and education

## Available Scripts

\`\`\`bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
\`\`\`

## Project Structure

- **app/**: Next.js app directory with pages and API routes
- **components/**: React components (hero, skills, projects, etc.)
- **lib/**: Utility functions
- **hooks/**: Custom React hooks
- **public/**: Static assets and images
- **styles/**: Global styles

## Customization

### Update Content
1. **Hero Section**: Edit `components/hero.jsx`
2. **Projects**: Update `components/constant.jsx`
3. **Skills**: Modify `components/skills.jsx`
4. **Experience**: Edit `components/experience.jsx`
5. **Contact Info**: Update `components/contact.jsx`

### Change Colors
Edit CSS variables in `app/globals.css`:
\`\`\`css
:root {
  --primary: #ff2d95;      /* Pink */
  --background: #0a0a0a;   /* Black */
  /* ... other colors ... */
}
\`\`\`

### Add New Sections
1. Create component in `components/`
2. Import in `app/page.jsx`
3. Add navigation link in `components/navigation.jsx`

## Environment Variables

For the contact form to work, add these to `.env.local`:
\`\`\`env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_SENDER=your-email@gmail.com
\`\`\`

[Get Gmail App Password](https://support.google.com/accounts/answer/185833)

## Deployment

Ready to go live? See `DEPLOYMENT.md` for:
- Vercel deployment (recommended)
- Netlify deployment
- AWS Amplify deployment
- Self-hosted options

## Documentation

- **README.md**: Full project documentation
- **DEPLOYMENT.md**: Deployment guide
- **QA_CHECKLIST.md**: Testing checklist
- **CHANGELOG-PORTFOLIO.md**: What changed
- **CONVERSION_SUMMARY.md**: Conversion details

## Troubleshooting

### Port Already in Use
\`\`\`bash
npm run dev -- -p 3001
\`\`\`

### Build Errors
\`\`\`bash
rm -rf node_modules .next
npm install
npm run build
\`\`\`

### Contact Form Not Working
- Check environment variables are set
- Verify Gmail app password is correct
- Ensure 2FA is enabled on Gmail

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Lighthouse Performance: > 90
- Lighthouse Accessibility: > 95
- Lighthouse Best Practices: > 90
- Lighthouse SEO: > 90

## Need Help?

1. Check the documentation files
2. Review the QA checklist
3. Check GitHub issues
4. Contact Humaira

## License

This project is open source and available under the MIT License.

---

**Happy coding! 🚀**
