
import React from 'react';
import type { Metadata } from 'next';
import { Assistant } from 'next/font/google';
import { CartProvider } from '@/app/_shared/context/CartContext';
import '@/styles/globals.css';

const assistant = Assistant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-assistant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sui Dhaga - Handcrafted Crochet Flowers',
  description: 'Premium handcrafted crochet flowers and gifts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={assistant.variable}>
      <head>
        <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
      </head>
      <body className={`${assistant.className} antialiased`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
