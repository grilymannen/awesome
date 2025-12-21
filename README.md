# awesome

A SvelteKit conversion of my GitHub Pages site.

This is a SvelteKit project configured for static site generation using JavaScript.

## Setup

Install dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

## Building

Build the static site:

```bash
npm run build
```

The static files will be output to the `build` directory.

## Preview

Preview the production build locally:

```bash
npm run preview
```

## Configuration

This project is configured with:
- **@sveltejs/adapter-static** - For static site generation
- **JavaScript** - Pure JavaScript (no TypeScript)
- **Prerendering** - Enabled by default via `src/routes/+layout.js`

All routes are prerendered by default. To disable prerendering for specific routes, remove or modify the `prerender` export in the route's `+layout.js` or `+page.js` file.
