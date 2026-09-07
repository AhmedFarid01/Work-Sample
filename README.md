# Ahmed Farid — Full Stack Engineer Portfolio

A premium, conversion-focused portfolio for a full stack engineer who builds and supports complete digital products: business websites, web applications, backend APIs, databases, authentication, integrations, SEO, performance improvements, and ongoing technical maintenance.

## Features

- Responsive routes for `/`, `/services`, and `/contact`
- Persistent light and dark themes
- Client-side contact form validation with honest local-only success and error states
- Data-driven service, capability, process, and project placeholder content
- Technical SEO metadata, canonical URLs, `robots.txt`, and sitemap
- Accessible semantic markup, visible focus states, reduced-motion support, and keyboard-friendly navigation
- Reusable navigation, theme toggle, page shell, CTA, and content patterns

## Tech stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Wouter
- Lucide React

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

The Replit workflow supplies its own port and base path. When you run the extracted project locally, Vite defaults to `http://localhost:5173`.

## Production build

```bash
npm run build
npm run serve
```

## Project structure

```text
src/
  App.tsx                  # routes, page composition, editable portfolio data
  index.css                # theme tokens, typography, responsive utilities
  components/              # shared error boundary and UI primitives
  pages/                   # fallback route
public/
  favicon.svg
  robots.txt
  sitemap.xml
```

## Customization

The editable identity, services, capabilities, process, and project placeholders live near the top of `src/App.tsx`. Update those values first, then replace the placeholder project and social links with real proof points. Contact form fields validate locally only; connect `handleSubmit` to an API route, Resend, SendGrid, EmailJS, Formspree, or another delivery service when you are ready to send messages.

Update the page metadata in `index.html` and the per-route metadata in `usePageMeta` when you change the portfolio name, positioning, or canonical domain.

## Deployment

The app is a static Vite build and can be deployed to any static hosting provider, including Vercel, Netlify, or Replit Deployments. Keep `dist/` out of version control and use the provider's build command:

```bash
npm run build
```
