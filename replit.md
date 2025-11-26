# Sui Dhaga - Kids Clothing Store

## Overview
Premium handcrafted kids clothing e-commerce website built with Next.js 14. The application features a modern shopping experience with product catalogs, cart functionality, and admin panel.

## Project Architecture

### Tech Stack
- **Framework**: Next.js 14.1.0 (App Router)
- **UI**: React 18.2.0
- **Styling**: Tailwind CSS 3.3.0
- **Icons**: Lucide React
- **Language**: TypeScript 5.0

### Project Structure
```
app/
├── (admin)/          # Admin dashboard routes
│   └── dashboard/
├── (store)/          # Customer-facing routes
│   ├── bestseller/
│   ├── cart/
│   ├── category/
│   ├── checkout/
│   ├── collections/
│   ├── contact/
│   ├── customers/
│   ├── login/
│   ├── product/
│   ├── shop/
│   └── studio/
├── layout.tsx        # Root layout with CartProvider
components/           # Reusable UI components
├── Cart/
├── Layout/
└── Product/
context/             # React Context (Cart management)
lib/                 # Utility functions and data
services/            # External service integrations
styles/              # Global CSS styles
```

## Recent Changes (November 26, 2025)

### GitHub Import Setup
- Removed legacy Vite configuration files (index.html, index.tsx, App.tsx, vite.config.ts)
- Configured for Replit environment:
  - Updated dev server to run on 0.0.0.0:5000
  - Set up Next.js workflow for frontend
  - Configured deployment with build and start scripts
- Updated .gitignore for Next.js best practices

## Development

### Running Locally
The development server runs on port 5000:
```bash
npm run dev
```

### Building for Production
```bash
npm run build
npm run start
```

## Deployment
Configured for Replit Autoscale deployment:
- Build command: `npm run build`
- Run command: `npm run start`
- Deployment type: Autoscale (stateless web application)

## Features
- Product catalog with categories (Bouquet, Plushies, etc.)
- Shopping cart with quantity management
- Product detail pages
- Admin panel for product management
- Responsive design with Tailwind CSS
- Image optimization with Next.js Image component
- Client-side cart state management with Context API

## External Integrations
- Razorpay (payment processing - script loaded in layout)
- Remote images from picsum.photos and ui-avatars.com

## Notes
- The application uses Next.js App Router (app directory)
- Cart state is managed via React Context (CartProvider)
- No backend database currently configured (products loaded from constants)
- Admin panel accessible at /dashboard route
