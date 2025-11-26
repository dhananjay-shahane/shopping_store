
import React from 'react';
import type { Metadata } from 'next';
import { CartProvider } from '@/app/_shared/context/CartContext';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Sui Dhaga - Kids Clothing',
  description: 'Premium handcrafted kids clothing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
      </head>
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
