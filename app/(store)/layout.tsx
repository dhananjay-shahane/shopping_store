
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import HeaderBanner from '@/components/Layout/HeaderBanner';
import { CartDrawer } from '@/components/Cart/CartDrawer';
import GeminiChat from '@/components/GeminiChat';
import { PRODUCTS } from '@/lib/data';

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-pink-100 flex flex-col">
      <HeaderBanner />
      <Navbar />
      <main className="flex-grow animate-in fade-in duration-500">
        {children}
      </main>
      <CartDrawer />
      <Footer />
      <GeminiChat products={PRODUCTS} />
    </div>
  );
}
