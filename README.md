# Portfolio Website

A modern, space-themed portfolio website built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- **Landing Page**: Beautiful landing page with interactive cards for About, Work Experience, Projects, and Contact
- **Projects Page**: Dedicated projects page with sidebar navigation
- **Starry Background**: Animated starry night sky background
- **Responsive Design**: Fully responsive design that works on all devices
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS

## Tech Stack

- **Vite** - Latest version for fast development and building
- **React 19** - Latest React with TypeScript
- **Tailwind CSS v4** - Latest Tailwind for styling
- **shadcn/ui** - Modern UI component library
- **React Router** - For navigation between pages
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/          # shadcn/ui components (Button, Card, Input)
│   └── StarryBackground.tsx
├── lib/
│   └── utils.ts     # Utility functions
├── pages/
│   ├── LandingPage.tsx
│   └── ProjectsPage.tsx
├── App.tsx          # Main app with routing
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Pages

- `/` - Landing page with main navigation cards
- `/projects` - Projects page with sidebar navigation
- `/about` - About page (currently routes to ProjectsPage)
- `/experience` - Work experience page
- `/contact` - Contact page
- `/education` - Education page
- `/resume` - Resume page
- `/shop` - Shop page

## Customization

### Colors

Edit the CSS variables in `src/index.css` to customize the color scheme.

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add a route in `src/App.tsx`
3. Add navigation item in `ProjectsPage.tsx` sidebar if needed

## License

MIT
