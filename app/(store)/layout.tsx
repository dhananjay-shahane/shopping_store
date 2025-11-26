import React from 'react';
import Navbar from './_components/Layout/Navbar';
import Footer from './_components/Layout/Footer';
import { CartDrawer } from './_components/Cart/CartDrawer';

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-pink-100 flex flex-col">
      <Navbar />
      <main className="flex-grow animate-in fade-in duration-500">
        {children}
      </main>
      <CartDrawer />
      <Footer />
    </div>
  );
}
