"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, Search, User, ShoppingBag, X, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { useCart } from '@/app/_shared/context/CartContext';
import { PRODUCTS } from '@/app/_shared/constants';

const NeedleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-700 transform -rotate-45">
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
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  const announcements = [
    "Make your own bouquet",
    "Free shipping above 1099",
    "New Collection Live Now"
  ];
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [announcements.length]);

  const nextAnnouncement = () => {
    setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
  };

  const prevAnnouncement = () => {
    setCurrentAnnouncement((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  const handleNavigate = (path: string) => {
    setMobileMenuOpen(false);
    setSubmenuOpen(null);
    setSearchOpen(false);
    router.push(path);
  };

  const handleProductSelect = (productId: string) => {
    setSearchOpen(false);
    router.push(`/product/${productId}`);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setSubmenuOpen(null);
  };

  const AnnouncementBar = () => (
    <div className="bg-accent h-12 flex justify-center items-center px-4 relative z-50 shrink-0 text-foreground">
      <button onClick={prevAnnouncement} className="absolute left-4 p-1 hover:opacity-60 transition-opacity text-neutral-800">
        <ChevronLeft size={16} strokeWidth={1.5}/>
      </button>
      <span className="text-[15px] tracking-wide animate-in fade-in duration-500 font-normal">
        {announcements[currentAnnouncement]}
      </span>
      <button onClick={nextAnnouncement} className="absolute right-4 p-1 hover:opacity-60 transition-opacity text-neutral-800">
        <ChevronRight size={16} strokeWidth={1.5}/>
      </button>
    </div>
  );

  return (
    <>
      {!mobileMenuOpen && <AnnouncementBar />}

      <header className="sticky top-0 bg-background/95 backdrop-blur-md z-40 border-b border-neutral-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all">
        <div className="container mx-auto px-4 md:px-8 h-16 md:h-24 flex items-center justify-between relative">
          
          <button className="md:hidden z-50 text-neutral-800 p-2 -ml-2" onClick={toggleMobileMenu}>
            <Menu size={28} strokeWidth={1.5} />
          </button>

          <nav className="hidden md:flex flex-1 gap-6 lg:gap-8 text-xs font-medium text-neutral-600 uppercase tracking-widest items-center bg-background h-full">
            <Link href="/" className={`hover:text-primary transition-colors ${pathname === '/' ? 'text-primary' : ''}`}>Home</Link>
            <Link href="/shop" className={`hover:text-primary transition-colors ${pathname === '/shop' ? 'text-primary' : ''}`}>Shop All</Link>
            <Link href="/contact" className={`hover:text-primary transition-colors ${pathname === '/contact' ? 'text-primary' : ''}`}>Contact Us</Link>
            <Link href="/studio" className={`hover:text-primary transition-colors ${pathname === '/studio' ? 'text-primary' : ''}`}>About Us</Link>
            
            <div className="relative group h-full flex items-center">
              <span className="flex items-center gap-1 hover:text-primary transition-colors h-full cursor-pointer">
                Collection <ChevronDown size={14} />
              </span>
              
              <div className="absolute top-full left-0 w-64 bg-background border border-neutral-100 shadow-xl py-4 hidden group-hover:block z-50 animate-in fade-in zoom-in-95 duration-200 rounded-b-lg">
                <div className="flex flex-col items-start text-left">
                  {['Bouquet', 'Phool', 'Bags', 'Pots', 'Plushies', 'blankets', 'accessories'].map(cat => (
                    <Link key={cat} href={`/category/${cat.toLowerCase()}`} className="w-full text-left px-6 py-2 text-neutral-600 hover:bg-primary-50 hover:text-primary transition-colors">
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center group">
            <div className="flex items-center justify-center gap-1">
              <div className="opacity-80 group-hover:rotate-12 transition-transform scale-75 md:scale-100">
                <NeedleIcon />
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tighter leading-none flex" style={{ fontFamily: 'sans-serif' }}>
                <span className="text-secondary">SUI</span>
                <span className="text-primary-400">DHAGA</span>
              </div>
            </div>
          </Link>

          <div className="flex-1 flex justify-end items-center gap-2 md:gap-6">
            <button onClick={() => setSearchOpen(!searchOpen)} className="hover:text-primary transition-colors text-neutral-700 p-2"><Search size={22} strokeWidth={1.5} /></button>
            <Link href="/login" className="hidden md:block hover:text-primary transition-colors text-neutral-700 p-2">
              <User size={22} strokeWidth={1.5} />
            </Link>
            <button 
              onClick={() => setCartOpen(true)}
              className="hover:text-primary transition-colors relative text-neutral-700 p-2"
            >
              <ShoppingBag size={22} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-background text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-sm">{cartCount}</span>
              )}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="absolute top-full left-0 w-full bg-background border-b border-neutral-200 shadow-xl p-6 animate-in slide-in-from-top-2 z-30">
            <div className="container mx-auto max-w-2xl">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search for products..." 
                  className="w-full border-b-2 border-neutral-200 py-3 text-lg focus:outline-none focus:border-primary bg-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button onClick={() => setSearchOpen(false)} className="absolute right-0 top-3 text-neutral-400 hover:text-neutral-600"><X size={24}/></button>
              </div>
              
              {searchQuery && (
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                  {PRODUCTS
                    .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map(p => (
                      <div key={p.id} onClick={() => handleProductSelect(p.id)} className="flex gap-4 items-center p-3 hover:bg-neutral-50 cursor-pointer rounded-lg transition-colors">
                        <img src={p.image} className="w-12 h-12 object-cover rounded" alt={p.name} />
                        <div>
                          <div className="font-medium text-sm text-foreground">{p.name}</div>
                          <div className="text-xs text-neutral-500">Rs. {p.price.toLocaleString()}</div>
                        </div>
                      </div>
                    ))}
                    {PRODUCTS.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                      <div className="text-neutral-500 text-sm py-4 text-center col-span-2">No results found matching "{searchQuery}".</div>
                    )}
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60] bg-background flex flex-col animate-in slide-in-from-left duration-300">
          <AnnouncementBar />

          <div className="flex items-center justify-between px-4 h-16 border-b border-neutral-50 shrink-0">
            <button onClick={toggleMobileMenu} className="p-2 -ml-2 text-neutral-800">
              <X size={28} strokeWidth={1} />
            </button>
            <div className="flex items-center justify-center gap-1">
              <div className="text-xl font-extrabold tracking-tighter flex" style={{ fontFamily: 'sans-serif' }}>
                <span className="text-primary-400">Sui Dhaage</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => { toggleMobileMenu(); setSearchOpen(true); }} className="p-2 text-neutral-800"><Search size={22} strokeWidth={1.5} /></button>
              <button onClick={() => { toggleMobileMenu(); setCartOpen(true); }} className="p-2 text-neutral-800 relative">
                <ShoppingBag size={22} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-primary text-background text-[10px] w-3 h-3 rounded-full flex items-center justify-center">{cartCount}</span>
                )}
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-hidden relative">
            <div className={`absolute inset-0 flex flex-col bg-background transition-transform duration-300 ease-in-out ${submenuOpen ? '-translate-x-full' : 'translate-x-0'}`}>
              <div className="flex-1 overflow-y-auto py-2">
                <button onClick={() => handleNavigate('/')} className="w-full text-left px-6 py-5 text-neutral-800 hover:bg-neutral-50 text-base font-normal tracking-wide border-b border-neutral-50">
                  Home
                </button>
                <button onClick={() => handleNavigate('/shop')} className="w-full text-left px-6 py-5 text-neutral-800 hover:bg-neutral-50 text-base font-normal tracking-wide border-b border-neutral-50">
                  Shop All
                </button>
                <button onClick={() => handleNavigate('/contact')} className="w-full text-left px-6 py-5 text-neutral-800 hover:bg-neutral-50 text-base font-normal tracking-wide border-b border-neutral-50">
                  Contact Us
                </button>
                <button onClick={() => handleNavigate('/studio')} className="w-full text-left px-6 py-5 text-neutral-800 hover:bg-neutral-50 text-base font-normal tracking-wide border-b border-neutral-50">
                  About Us
                </button>
                <button 
                  onClick={() => setSubmenuOpen('collection')}
                  className="w-full flex justify-between items-center px-6 py-5 text-neutral-800 hover:bg-neutral-50 text-base font-normal tracking-wide border-b border-neutral-50"
                >
                  <span>Collection</span>
                  <ArrowRight size={18} className="text-neutral-400" strokeWidth={1.5} />
                </button>
              </div>

              <div className="p-6 mt-auto">
                <button onClick={() => handleNavigate('/login')} className="flex items-center gap-3 text-neutral-700">
                  <User size={22} strokeWidth={1.5} />
                  <span className="text-base font-normal">Log in</span>
                </button>
              </div>
            </div>

            <div className={`absolute inset-0 flex flex-col bg-background transition-transform duration-300 ease-in-out ${submenuOpen === 'collection' ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="px-4 flex items-center gap-2 h-14 bg-neutral-50/50 border-b border-neutral-100">
                <button onClick={() => setSubmenuOpen(null)} className="p-2 -ml-2 text-neutral-600 flex items-center gap-2">
                  <ArrowLeft size={20} strokeWidth={1.5} />
                  <span className="font-normal text-base text-neutral-600">Collection</span>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-2">
                {['Bouquet', 'Phool', 'Bags', 'Pots', 'Plushies', 'blankets', 'accessories'].map(cat => (
                  <button key={cat} onClick={() => handleNavigate(`/category/${cat.toLowerCase()}`)} className="w-full text-left px-6 py-4 text-neutral-700 hover:bg-neutral-50 text-base font-normal">
                    {cat}
                  </button>
                ))}
              </div>
              
              <div className="p-6 mt-auto">
                <p className="text-xs text-neutral-300 text-center">suidhaage.com</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}