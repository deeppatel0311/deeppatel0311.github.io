# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a clean design, blog functionality, and smooth animations.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 📱 Mobile-first approach
- 📝 Built-in blog functionality with dynamic routing
- ⚡ Fast performance with Next.js 14
- 🔍 SEO optimized
- 🎭 Smooth animations and transitions
- 📧 Contact form
- 🌙 Clean, professional UI

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd portfolio
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

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files with your personal information:

- `src/components/Hero.tsx` - Name, title, and social links
- `src/components/About.tsx` - About section content
- `src/components/Projects.tsx` - Your projects
- `src/components/Contact.tsx` - Contact information
- `src/components/Footer.tsx` - Footer details

### Blog Posts

Add your blog posts in `src/data/blog.ts`. Each post should follow the `BlogPost` interface:

\`\`\`typescript
{
  slug: 'your-post-slug',
  title: 'Your Post Title',
  excerpt: 'Brief description...',
  content: 'Full post content in markdown...',
  date: '2024-01-01',
  readTime: '5 min read',
  tags: ['tag1', 'tag2'],
  author: {
    name: 'Your Name',
    avatar: '/path/to/avatar'
  }
}
\`\`\`

### Styling

The website uses Tailwind CSS with custom configurations in:
- `tailwind.config.js` - Tailwind configuration
- `src/app/globals.css` - Global styles and custom components

### Colors

Update the primary color scheme in `tailwind.config.js`:

\`\`\`javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  },
}
\`\`\`

## Project Structure

\`\`\`
src/
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── BlogPreview.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   └── Projects.tsx
└── data/
    └── blog.ts
\`\`\`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Performance

The website is optimized for performance with:
- Static generation for blog posts
- Image optimization
- Code splitting
- Minimal bundle size

## License

MIT License - feel free to use this template for your own portfolio!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.