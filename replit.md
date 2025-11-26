# Sui Dhaga - Handcrafted Gifts Store

## Overview
Premium handcrafted bouquets, plushies, and gifts e-commerce website built with Next.js 14. The application features a modern shopping experience with product catalogs, cart functionality, testimonials, and admin panel.

## Project Architecture

### Tech Stack
- **Framework**: Next.js 14.1.0 (App Router)
- **UI**: React 18.2.0
- **Styling**: Tailwind CSS 3.3.0
- **Icons**: Lucide React
- **Language**: TypeScript 5.0

### Project Structure (Reorganized for Next.js Best Practices)
```
app/
├── _shared/              # Shared utilities (types, constants, context)
│   ├── constants.ts      # Products, categories, FAQs, testimonials data
│   ├── types.ts          # TypeScript interfaces
│   └── context/
│       └── CartContext.tsx  # Cart state management
├── (admin)/              # Admin dashboard routes
│   └── dashboard/
├── (store)/              # Customer-facing routes
│   ├── _components/      # Store-specific components
│   │   ├── Cart/
│   │   │   └── CartDrawer.tsx
│   │   ├── Layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── Product/
│   │   │   └── ProductCard.tsx
│   │   └── UI/
│   │       ├── FadeIn.tsx
│   │       └── TestimonialSlider.tsx
│   ├── category/[slug]/  # Dynamic category pages
│   ├── contact/          # Contact page with FAQ
│   ├── product/[id]/     # Product detail pages
│   ├── shop/             # Shop all products
│   ├── studio/           # About us page
│   ├── layout.tsx        # Store layout (Navbar + Footer)
│   └── page.tsx          # Homepage
├── layout.tsx            # Root layout with CartProvider
styles/
└── globals.css           # Global Tailwind CSS styles
```

## Recent Changes (November 26, 2025)

### UI Updates
- **Header Navigation**: Updated active page styling with underline indicator for Shop All and Contact Us
- **Shop Page Pagination**: Added pagination with ellipsis for large page counts (1, 2, 3, ..., 11, >)
- **Layout Padding**: Added responsive padding to main layout (px-0 md:px-4 lg:px-6)
- **Checkout Page Redesign**: Complete redesign matching professional e-commerce layout:
  - Contact section with email input and newsletter checkbox
  - Delivery section with full address form (country, name, address, city, state, PIN, phone)
  - Shipping method section
  - Payment section with Razorpay styling (UPI, Cards, Int'l Cards, Wallets)
  - Billing address radio options
  - Order summary sidebar with product images, discount code, and totals
  - "Pay now" button and footer policy links
- **About Us Page**: Redesigned with "Meet The Face Behind The Flowers", "About Us", and "Our Artisans" sections
- **OUR STUDIO Section**: Updated font and styling for homepage section

### Project Reorganization
- Consolidated all code into proper Next.js App Router structure
- Moved shared utilities (types, constants, context) to `app/_shared/`
- Organized store components into `app/(store)/_components/`
- Removed legacy root-level directories (components/, context/, lib/, pages/, services/)
- Updated all import paths to use new structure
- Enhanced homepage with hero slider, category grid, testimonials, and feature highlights
- Added shop page with filtering (price) and sorting (alphabetical, price)
- Fixed all component paths and imports for Next.js compatibility

### Features Implemented
- Responsive navigation with announcement bar slider
- Collection dropdown menu with category links
- Mobile menu with slide-in animation and submenu
- Search overlay with product filtering
- Shopping cart drawer with quantity controls
- Product cards with hover effects and "New" badges
- Testimonial slider with Instagram-style chat cards
- Contact page with form and FAQ accordion
- Professional checkout flow with Razorpay payment integration

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
- Product catalog with categories (Bouquet, Plushies, Pots, Bags, etc.)
- Shopping cart with quantity management (persisted in localStorage)
- Product detail pages with size/type selection
- Filtering and sorting on shop page
- Testimonial slider with customer reviews
- Admin panel for product management (at /dashboard)
- Responsive design with Tailwind CSS
- Client-side cart state management with Context API

## External Integrations
- Razorpay (payment processing - script loaded in layout)
- Remote images from picsum.photos and ui-avatars.com

## Import Path Conventions
- Shared utilities: `@/app/_shared/types`, `@/app/_shared/constants`, `@/app/_shared/context/CartContext`
- Store components: Use relative paths from page files (e.g., `../_components/Product/ProductCard`)
- Global styles: `@/styles/globals.css`

## Notes
- The application uses Next.js App Router (app directory)
- Route groups: `(store)` for customer pages, `(admin)` for admin pages
- Components prefixed with underscore `_components` are not routed
- Cart state is managed via React Context (CartProvider in root layout)
- No backend database currently configured (products loaded from constants)
