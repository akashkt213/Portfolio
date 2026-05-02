# Portfolio Website

A modern, space-themed portfolio website built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- **Landing Page**: Beautiful landing page with interactive cards for About, Work Experience, Projects, and Contact
- **AI Chatbot**: Interactive "Ask AkashGPT" chatbot that answers questions about the portfolio owner using OpenAI
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
- **OpenAI API** - For AI-powered chatbot functionality

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up OpenAI API key (for chatbot feature):
   - Create a `.env` file in the root directory
   - Add your OpenAI API key:
   ```
   VITE_OPENAI_API_KEY=your_openai_api_key_here
   ```
   - Get your API key from: https://platform.openai.com/api-keys
   - **Note**: The chatbot feature requires a valid OpenAI API key to work

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

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
