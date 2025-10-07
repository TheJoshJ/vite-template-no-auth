# Modern React Application

A modern React application built with TypeScript, Vite, TailwindCSS, React Router, and Tanstack React Query.

## Features

- ⚡️ **Vite with SWC** - Lightning fast builds and HMR
- 🔒 **TypeScript** - Full type safety
- 🎨 **TailwindCSS 4** - Utility-first CSS framework
- 🧭 **React Router** - Declarative routing for React
- 🔄 **Tanstack React Query** - Data fetching and state management
- 🎭 **ShadCN UI** - Essential components (Button, ScrollArea)
- 📱 **Responsive Design** - Mobile-first approach
- 🧩 **Component Structure** - Organized component architecture
- 🌙 **Dark/Light Mode** - Theme switching with next-themes

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone this repository:
```bash
git clone https://github.com//TheJoshJ/Vite-Template-App.git
cd Vite-Template-App
```

2. Install dependencies:
```bash
npm install
# or
yarn
# or
pnpm install
```

3. Start the development server:
```bash
npm start
# or
yarn start
# or
pnpm start
```

5. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable components
│   │   └── ui/           # UI components (ShadCN)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   ├── App.tsx           # Main App component
│   ├── index.css         # Global styles
│   ├── main.tsx          # Entry point
│   ├── router.tsx        # Router configuration
│   ├── RouterProvider.tsx # Router provider
│   └── routes.ts         # Routes definition
├── .gitignore
├── components.json       # ShadCN UI components config
├── index.html
├── package.json
├── tailwind.config.js    # TailwindCSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Available Scripts

- `npm start` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint

## Adding New Routes

1. Create a new page component in `src/pages/`
2. Add the route to `src/routes.ts`:

```tsx
export const routes: Record<string, RouteConfig> = {
  // existing routes
  newRoute: {
    path: '/new-route',
    component: NewComponent,
    label: 'New Route',
    visible: true, // set to false if you don't want it in the navbar
  },
}
```

## UI Components

This project includes essential ShadCN UI components (Button and ScrollArea) that are currently being used in the application. ShadCN UI provides accessible, customizable components built on top of Radix UI primitives.

Additional components can be added as needed using the ShadCN CLI. The components are styled with TailwindCSS and can be customized to match your design system.

For more information on available components and their usage, refer to the [ShadCN UI documentation](https://ui.shadcn.com/docs).

## Styling

This project uses TailwindCSS for styling with a theme toggle functionality provided by next-themes. Customize the theme in `tailwind.config.js`.

## License

MIT License
