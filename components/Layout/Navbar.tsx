"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, Search, User, ShoppingBag, X, ArrowRight, ArrowLeft, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';

// Simple Needle Icon Component
const NeedleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 transform -rotate-45">
    <path d="M12 2L12 12" />
    <path d="M12 12L15 9" />
    <path d="M12 12L9 9" />
    <path d="M12 22C12 22 12 16 12 16" />
    <circle cx="12" cy="4" r="2" />
  </svg>
);

export default function Navbar() {
  const { cartCount, setCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState<'collection' | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = (path: string) => {
    setMobileMenuOpen(false);
    setSubmenuOpen(null);
    router.push(path);
  };

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-md z-40 border-b border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
      <div className="container mx-auto px-4 md:px-8 h-16 md:h-24 flex items-center justify-between relative">
        
        <button className="md:hidden z-50 text-gray-800 p-2 -ml-2" onClick={() => setMobileMenuOpen(true)}>
           <Menu size={28} strokeWidth={1.5} />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 gap-6 lg:gap-8 text-xs font-medium text-gray-600 uppercase tracking-widest items-center bg-white h-full">
          <Link href="/" className="hover:text-pink-500 transition-colors">Home</Link>
          <Link href="/shop" className="hover:text-pink-500 transition-colors">Shop All</Link>
          <Link href="/contact" className="hover:text-pink-500 transition-colors">Contact Us</Link>
          <Link href="/studio" className="hover:text-pink-500 transition-colors">About Us</Link>
          
          <div className="relative group h-full flex items-center cursor-pointer">
            <span className="flex items-center gap-1 hover:text-pink-500 transition-colors h-full">
              Collection <ChevronDown size={14} />
            </span>
            <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl py-4 hidden group-hover:block z-50 animate-in fade-in zoom-in-95 duration-200 rounded-b-lg">
               <div className="flex flex-col items-start text-left">
                  {['Bouquet', 'Phool', 'Bags', 'Pots', 'Plushies', 'blankets', 'accessories'].map(cat => (
                    <Link key={cat} href={`/category/${cat.toLowerCase()}`} className="w-full text-left px-6 py-2 text-gray-600 hover:bg-pink-50 hover:text-pink-500 transition-colors">
                      {cat}
                    </Link>
                  ))}
               </div>
            </div>
          </div>
          <div className="h-4 w-px bg-gray-300 mx-2"></div>
          <Link href="/dashboard" className="text-gray-400 hover:text-pink-500 transition-colors">Admin</Link>
        </nav>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center group">
           <div className="flex items-center justify-center gap-1">
             <div className="opacity-80 group-hover:rotate-12 transition-transform scale-75 md:scale-100">
               <NeedleIcon />
             </div>
             <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tighter leading-none flex" style={{ fontFamily: 'sans-serif' }}>
                <span className="text-yellow-400">SUI</span>
                <span className="text-pink-400">DHAGA</span>
             </div>
           </div>
        </Link>

        {/* Icons */}
        <div className="flex-1 flex justify-end items-center gap-2 md:gap-6">
          <button className="hover:text-pink-500 transition-colors text-gray-700 p-2"><Search size={22} strokeWidth={1.5} /></button>
          <Link href="/login" className="hidden md:block hover:text-pink-500 transition-colors text-gray-700 p-2"><User size={22} strokeWidth={1.5} /></Link>
          <button onClick={() => setCartOpen(true)} className="hover:text-pink-500 transition-colors relative text-gray-700 p-2">
            <ShoppingBag size={22} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-sm">{cartCount}</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60] bg-white flex flex-col animate-in slide-in-from-left duration-300">
          <div className="flex items-center justify-between px-4 h-16 border-b border-gray-50 shrink-0">
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 -ml-2 text-gray-800">
               <X size={28} strokeWidth={1} />
            </button>
            <span className="text-pink-400 font-bold text-xl">Sui Dhaage</span>
            <div className="flex gap-2">
               <Search size={22} />
               <ShoppingBag size={22} onClick={() => {setMobileMenuOpen(false); setCartOpen(true);}} />
            </div>
          </div>
          
          <div className="flex-1 overflow-hidden relative">
            <div className={`absolute inset-0 flex flex-col bg-white transition-transform duration-300 ${submenuOpen ? '-translate-x-full' : 'translate-x-0'}`}>
              <div className="flex-1 overflow-y-auto py-2">
                 <button onClick={() => handleNavigate('/')} className="w-full text-left px-6 py-5 border-b border-gray-50">Home</button>
                 <button onClick={() => handleNavigate('/shop')} className="w-full text-left px-6 py-5 border-b border-gray-50">Shop All</button>
                 <button onClick={() => setSubmenuOpen('collection')} className="w-full flex justify-between px-6 py-5 border-b border-gray-50">Collection <ArrowRight size={18}/></button>
              </div>
            </div>
            
            {/* Submenu */}
            <div className={`absolute inset-0 flex flex-col bg-white transition-transform duration-300 ${submenuOpen === 'collection' ? 'translate-x-0' : 'translate-x-full'}`}>
               <div className="px-4 h-14 bg-gray-50 flex items-center">
                  <button onClick={() => setSubmenuOpen(null)} className="flex items-center gap-2 text-gray-600">
                    <ArrowLeft size={20}/> Back
                  </button>
               </div>
               <div className="flex-1 overflow-y-auto">
                  {['Bouquet', 'Phool', 'Bags', 'Pots', 'Plushies', 'blankets'].map(cat => (
                     <button key={cat} onClick={() => handleNavigate(`/category/${cat.toLowerCase()}`)} className="w-full text-left px-6 py-4 border-b border-gray-50">{cat}</button>
                  ))}
               </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}