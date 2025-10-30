# Humaira Sultana - Portfolio Website

A modern, production-ready portfolio website showcasing full-stack development and AI expertise. Built with Next.js, React, and Tailwind CSS with a sleek black-pink design theme.

## Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Black-Pink Theme**: Modern, high-contrast color scheme with vibrant pink accents
- **Smooth Animations**: CSS transitions and GSAP animations for engaging interactions
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- **Accessibility**: WCAG AA compliant with keyboard navigation support
- **Performance**: Optimized images, code splitting, and lazy loading
- **Projects Showcase**: Detailed project cards with technologies and links
- **Skills Section**: Interactive skills tree with smooth animations
- **Contact Form**: Integrated contact section with validation

## Tech Stack

- **Frontend**: React 18, Next.js 14, Tailwind CSS 4
- **Styling**: CSS-in-JS, Tailwind utilities, custom animations
- **Icons**: Lucide React, React Icons
- **Forms**: React Hook Form, Zod validation
- **UI Components**: shadcn/ui
- **Fonts**: Geist Sans, Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd humaira-portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
├── app/
│   ├── layout.jsx          # Root layout with metadata
│   ├── page.jsx            # Home page
│   ├── globals.css         # Global styles and theme
│   └── api/
│       └── contact/        # Contact form API
├── components/
│   ├── hero.jsx            # Hero section
│   ├── skills.jsx          # Skills section
│   ├── projects.jsx        # Projects showcase
│   ├── experience.jsx      # Experience & education
│   ├── contact.jsx         # Contact section
│   ├── navigation.jsx      # Navigation bar
│   ├── constant.jsx        # Project data
│   └── ui/                 # shadcn/ui components
├── lib/
│   └── utils.js            # Utility functions
├── hooks/
│   └── use-toast.js        # Toast notification hook
├── public/                 # Static assets
└── styles/                 # Additional styles
\`\`\`

## Color Theme

The portfolio uses a carefully selected black-pink color scheme:

- **Background**: `#0a0a0a` (Deep Black)
- **Primary Accent**: `#ff2d95` (Vibrant Pink)
- **Secondary Pink**: `#ff5bb8` (Light Pink)
- **Text**: `#ffffff` (White)
- **Muted**: `#a0a0a0` (Gray)

All colors are defined as CSS variables in `app/globals.css` for easy customization.

## Customization

### Updating Content

1. **Hero Section**: Edit `components/hero.jsx`
2. **Projects**: Update `components/constant.jsx` with your projects
3. **Skills**: Modify skill categories in `components/skills.jsx`
4. **Experience**: Update `components/experience.jsx`
5. **Contact**: Configure `components/contact.jsx`

### Changing Colors

Edit the CSS variables in `app/globals.css`:

\`\`\`css
:root {
  --primary: #ff2d95;
  --accent: #ff2d95;
  /* ... other colors ... */
}
\`\`\`

### Adding New Sections

1. Create a new component in `components/`
2. Import it in `app/page.jsx`
3. Add navigation link in `components/navigation.jsx`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live at `your-domain.vercel.app`

### Deploy to Other Platforms

The project can be deployed to any platform that supports Next.js:

- **Netlify**: Connect GitHub repo, set build command to `npm run build`
- **AWS Amplify**: Similar setup to Netlify
- **Self-hosted**: Build with `npm run build` and run with `npm start`

## Performance Optimization

- Images are optimized and lazy-loaded
- CSS is minified and tree-shaken
- JavaScript is code-split by route
- Fonts are self-hosted for faster loading
- No external CDN dependencies (except Font Awesome)

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast ratios meet WCAG AA standards
- Focus states are clearly visible
- Alt text for all images

## SEO

- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data (JSON-LD)
- Sitemap generation
- Mobile-friendly design
- Fast page load times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the MIT License.

## Contact

For questions or inquiries, reach out to:
- Email: humairasultana059@gmail.com
- GitHub: [@Sultanamim](https://github.com/Sultanamim)
- LinkedIn: [Humaira Sultana](https://www.linkedin.com/in/humaira-sultana-b8a8b5250/)

## Changelog

### v1.0.0 (Current)
- Converted from TypeScript to JavaScript
- Applied black-pink color theme
- Removed blur effects, replaced with crisp animations
- Updated content to match Humaira's CV
- Added comprehensive documentation
- Improved accessibility and SEO
- Optimized performance
