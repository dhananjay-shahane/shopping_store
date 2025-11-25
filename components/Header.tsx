
import React, { useState, useEffect } from 'react';
import { Menu, Search, User, ShoppingBag, X, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { PageView, Product } from '../types';
import { NeedleIcon } from './NeedleIcon';

interface HeaderProps {
  currentView: PageView;
  navigateTo: (view: PageView) => void;
  navigateToCategory?: (category: string) => void;
  cartCount: number;
  setCartOpen: (open: boolean) => void;
  products: Product[];
  navigateToProduct: (product: Product) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentView, 
  navigateTo, 
  navigateToCategory,
  cartCount, 
  setCartOpen, 
  products, 
  navigateToProduct 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState<'collection' | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Announcement Slider State
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

  const handleNavigate = (view: PageView) => {
    setMobileMenuOpen(false);
    setSubmenuOpen(null);
    setSearchOpen(false);
    navigateTo(view);
  };

  const handleCategoryNavigate = (category: string) => {
    if (navigateToCategory) {
      setMobileMenuOpen(false);
      setSubmenuOpen(null);
      setSearchOpen(false);
      navigateToCategory(category);
    } else {
      handleNavigate(PageView.COLLECTIONS);
    }
  };

  const handleProductSelect = (product: Product) => {
    setSearchOpen(false);
    navigateToProduct(product);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setSubmenuOpen(null);
  };

  // Reusable Announcement Bar Component
  const AnnouncementBar = () => (
    <div className="bg-[#FCE4DC] h-12 flex justify-center items-center px-4 relative z-50 shrink-0 text-[#1a1a1a]">
      <button onClick={prevAnnouncement} className="absolute left-4 p-1 hover:opacity-60 transition-opacity text-gray-800">
        <ChevronLeft size={16} strokeWidth={1.5}/>
      </button>
      <span className="text-[15px] tracking-wide animate-in fade-in duration-500 font-normal key={currentAnnouncement}">
        {announcements[currentAnnouncement]}
      </span>
      <button onClick={nextAnnouncement} className="absolute right-4 p-1 hover:opacity-60 transition-opacity text-gray-800">
        <ChevronRight size={16} strokeWidth={1.5}/>
      </button>
    </div>
  );

  return (
    <>
      {/* Top Announcement Bar (Desktop/Default) */}
      {!mobileMenuOpen && <AnnouncementBar />}

      <header className="sticky top-0 bg-white/95 backdrop-blur-md z-40 border-b border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all">
        <div className="container mx-auto px-4 md:px-8 h-16 md:h-24 flex items-center justify-between relative">
          
          {/* Mobile Menu Button (Hamburger) */}
          <button className="md:hidden z-50 text-gray-800 p-2 -ml-2" onClick={toggleMobileMenu}>
             <Menu size={28} strokeWidth={1.5} />
          </button>

          {/* Left: Navigation Links (Desktop) */}
          <nav className="hidden md:flex flex-1 gap-6 lg:gap-8 text-xs font-medium text-gray-600 uppercase tracking-widest items-center bg-white h-full">
            <button onClick={() => handleNavigate(PageView.HOME)} className={`hover:text-pink-500 transition-colors ${currentView === PageView.HOME ? 'text-pink-500' : ''}`}>Home</button>
            <button onClick={() => handleNavigate(PageView.SHOP)} className={`hover:text-pink-500 transition-colors ${currentView === PageView.SHOP ? 'text-pink-500' : ''}`}>Shop All</button>
            <button onClick={() => handleNavigate(PageView.CONTACT)} className={`hover:text-pink-500 transition-colors ${currentView === PageView.CONTACT ? 'text-pink-500' : ''}`}>Contact Us</button>
            <button onClick={() => handleNavigate(PageView.OUR_STORY)} className={`hover:text-pink-500 transition-colors ${currentView === PageView.OUR_STORY ? 'text-pink-500' : ''}`}>About Us</button>
            
            {/* Collection Dropdown */}
            <div className="relative group h-full flex items-center">
              <button className="flex items-center gap-1 hover:text-pink-500 transition-colors h-full">
                Collection
                <ChevronDown size={14} />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl py-4 hidden group-hover:block z-50 animate-in fade-in zoom-in-95 duration-200 rounded-b-lg">
                <div className="flex flex-col items-start text-left">
                  <button onClick={() => handleCategoryNavigate('Bouquet')} className="w-full text-left px-6 py-2 text-gray-600 hover:bg-pink-50 hover:text-pink-500 transition-colors">Bouquet</button>
                  <button onClick={() => handleCategoryNavigate('Phool')} className="w-full text-left px-6 py-2 text-gray-600 hover:bg-pink-50 hover:text-pink-500 transition-colors">Phool</button>
                  <button onClick={() => handleCategoryNavigate('Bags')} className="w-full text-left px-6 py-2 text-gray-600 hover:bg-pink-50 hover:text-pink-500 transition-colors">Bags</button>
                  <button onClick={() => handleCategoryNavigate('Pots')} className="w-full text-left px-6 py-2 text-gray-600 hover:bg-pink-50 hover:text-pink-500 transition-colors">Pots</button>
                  <button onClick={() => handleCategoryNavigate('Plushies')} className="w-full text-left px-6 py-2 text-gray-600 hover:bg-pink-50 hover:text-pink-500 transition-colors">Plushies</button>
                  <button onClick={() => handleCategoryNavigate('blankets')} className="w-full text-left px-6 py-2 font-bold text-gray-900 hover:bg-pink-50 hover:text-pink-500 transition-colors">blankets</button>
                  
                  <div className="px-6 py-2 mt-2 text-gray-400 text-[10px] font-bold uppercase tracking-wider border-t border-gray-50 pt-3">Flower Arrangements</div>
                  
                  <button onClick={() => handleCategoryNavigate('accessories')} className="w-full text-left px-6 py-2 font-bold text-gray-900 hover:bg-pink-50 hover:text-pink-500 transition-colors">accessories</button>
                </div>
              </div>
            </div>

    
          </nav>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group" onClick={() => handleNavigate(PageView.HOME)}>
             <div className="flex items-center justify-center gap-1">
               <div className="opacity-80 group-hover:rotate-12 transition-transform scale-75 md:scale-100">
                 <NeedleIcon />
               </div>
               <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tighter leading-none flex" style={{ fontFamily: 'sans-serif' }}>
                  <span className="text-yellow-400">SUI</span>
                  <span className="text-pink-400">DHAGA</span>
               </div>
             </div>
          </div>

          {/* Right: Icons */}
          <div className="flex-1 flex justify-end items-center gap-2 md:gap-6">
            <button onClick={() => setSearchOpen(!searchOpen)} className="hover:text-pink-500 transition-colors text-gray-700 p-2"><Search size={22} strokeWidth={1.5} /></button>
            <button 
              className={`hidden md:block hover:text-pink-500 transition-colors text-gray-700 p-2 ${currentView === PageView.LOGIN ? 'text-pink-500' : ''}`}
              onClick={() => handleNavigate(PageView.LOGIN)}
            >
              <User size={22} strokeWidth={1.5} />
            </button>
            <button 
              onClick={() => setCartOpen(true)}
              className="hover:text-pink-500 transition-colors relative text-gray-700 p-2"
            >
              <ShoppingBag size={22} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-sm">{cartCount}</span>
              )}
            </button>
          </div>
        </div>

        {/* Search Overlay */}
        {searchOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl p-6 animate-in slide-in-from-top-2 z-30">
            <div className="container mx-auto max-w-2xl">
               <div className="relative">
                 <input 
                  type="text" 
                  placeholder="Search for products..." 
                  className="w-full border-b-2 border-gray-200 py-3 text-lg focus:outline-none focus:border-pink-500 bg-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                 />
                 <button onClick={() => setSearchOpen(false)} className="absolute right-0 top-3 text-gray-400 hover:text-gray-600"><X size={24}/></button>
               </div>
               
               {searchQuery && (
                 <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto custom-scrollbar">
                    {products
                      .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
                      .map(p => (
                        <div key={p.id} onClick={() => handleProductSelect(p)} className="flex gap-4 items-center p-3 hover:bg-gray-50 cursor-pointer rounded-lg transition-colors">
                          <img src={p.image} className="w-12 h-12 object-cover rounded" alt={p.name} />
                          <div>
                            <div className="font-medium text-sm text-gray-900">{p.name}</div>
                            <div className="text-xs text-gray-500">Rs. {p.price.toLocaleString()}</div>
                          </div>
                        </div>
                      ))}
                      {products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                        <div className="text-gray-500 text-sm py-4 text-center">No results found matching "{searchQuery}".</div>
                      )}
                 </div>
               )}
            </div>
          </div>
        )}

      </header>

      {/* Mobile Menu Full Screen Overlay - REPLICA DESIGN */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60] bg-white flex flex-col animate-in slide-in-from-left duration-300">
          
          {/* 1. Announcement Bar INSIDE Menu Overlay */}
          <AnnouncementBar />

          {/* 2. Menu Header (X on left, Logo Center, Icons Right) */}
          <div className="flex items-center justify-between px-4 h-16 border-b border-gray-50 shrink-0">
            <button onClick={toggleMobileMenu} className="p-2 -ml-2 text-gray-800">
               <X size={28} strokeWidth={1} />
            </button>
            <div className="flex items-center justify-center gap-1">
               <div className="text-xl font-extrabold tracking-tighter flex" style={{ fontFamily: 'sans-serif' }}>
                  <span className="text-pink-400">Sui Dhaage</span>
               </div>
            </div>
            <div className="flex items-center gap-2">
               <button onClick={() => { toggleMobileMenu(); setSearchOpen(true); }} className="p-2 text-gray-800"><Search size={22} strokeWidth={1.5} /></button>
               <button onClick={() => { toggleMobileMenu(); setCartOpen(true); }} className="p-2 text-gray-800 relative">
                 <ShoppingBag size={22} strokeWidth={1.5} />
                 {cartCount > 0 && (
                    <span className="absolute top-0 right-0 bg-pink-500 text-white text-[10px] w-3 h-3 rounded-full flex items-center justify-center">{cartCount}</span>
                  )}
               </button>
            </div>
          </div>

          {/* 3. Menu Content Container */}
          <div className="flex-1 overflow-hidden relative">
            
            {/* Level 1 Menu */}
            <div className={`absolute inset-0 flex flex-col bg-white transition-transform duration-300 ease-in-out ${submenuOpen ? '-translate-x-full' : 'translate-x-0'}`}>
              
              <div className="flex-1 overflow-y-auto py-2">
                <button onClick={() => handleNavigate(PageView.HOME)} className="w-full text-left px-6 py-5 text-gray-800 hover:bg-gray-50 text-base font-normal tracking-wide border-b border-gray-50">
                  Home
                </button>
                <button onClick={() => handleNavigate(PageView.SHOP)} className="w-full text-left px-6 py-5 text-gray-800 hover:bg-gray-50 text-base font-normal tracking-wide border-b border-gray-50">
                  Shop All
                </button>
                <button onClick={() => handleNavigate(PageView.CONTACT)} className="w-full text-left px-6 py-5 text-gray-800 hover:bg-gray-50 text-base font-normal tracking-wide border-b border-gray-50">
                  Contact Us
                </button>
                <button onClick={() => handleNavigate(PageView.OUR_STORY)} className="w-full text-left px-6 py-5 text-gray-800 hover:bg-gray-50 text-base font-normal tracking-wide border-b border-gray-50">
                  About Us
                </button>
                <button 
                  onClick={() => setSubmenuOpen('collection')}
                  className="w-full flex justify-between items-center px-6 py-5 text-gray-800 hover:bg-gray-50 text-base font-normal tracking-wide border-b border-gray-50"
                >
                  <span>Collection</span>
                  <ArrowRight size={18} className="text-gray-400" strokeWidth={1.5} />
                </button>
              </div>

              {/* Mobile Footer (Log in) */}
              <div className="p-6 mt-auto">
                <button onClick={() => handleNavigate(PageView.LOGIN)} className="flex items-center gap-3 text-gray-700">
                  <User size={22} strokeWidth={1.5} />
                  <span className="text-base font-normal">Log in</span>
                </button>
              </div>
            </div>

            {/* Level 2 Menu: Collection Submenu */}
            <div className={`absolute inset-0 flex flex-col bg-white transition-transform duration-300 ease-in-out ${submenuOpen === 'collection' ? 'translate-x-0' : 'translate-x-full'}`}>
              
              {/* Back Header */}
              <div className="px-4 flex items-center gap-2 h-14 bg-gray-50/50 border-b border-gray-100">
                 <button onClick={() => setSubmenuOpen(null)} className="p-2 -ml-2 text-gray-600 flex items-center gap-2">
                    <ArrowLeft size={20} strokeWidth={1.5} />
                    <span className="font-normal text-base text-gray-600">Collection</span>
                 </button>
              </div>

              <div className="flex-1 overflow-y-auto py-2">
                 {/* Specific Replica Items from Screenshot - Now Functional */}
                 <button onClick={() => handleCategoryNavigate('Bouquet')} className="w-full text-left px-6 py-4 text-gray-700 hover:bg-gray-50 text-base font-normal">
                    Bouquet
                 </button>
                 <button onClick={() => handleCategoryNavigate('Phool')} className="w-full text-left px-6 py-4 text-gray-700 hover:bg-gray-50 text-base font-normal">
                    Phool
                 </button>
                 <button onClick={() => handleCategoryNavigate('Bags')} className="w-full text-left px-6 py-4 text-gray-700 hover:bg-gray-50 text-base font-normal">
                    Bags
                 </button>
                 <button onClick={() => handleCategoryNavigate('Pots')} className="w-full text-left px-6 py-4 text-gray-700 hover:bg-gray-50 text-base font-normal">
                    Pots
                 </button>
                 <button onClick={() => handleCategoryNavigate('Plushies')} className="w-full text-left px-6 py-4 text-gray-700 hover:bg-gray-50 text-base font-normal">
                    Plushies
                 </button>
                 <button onClick={() => handleCategoryNavigate('blankets')} className="w-full text-left px-6 py-4 text-black hover:bg-gray-50 text-lg font-bold">
                    blankets
                 </button>
                 
                 <div className="px-6 py-4 mt-2">
                   <span className="text-gray-500 text-base">Flower Arrangements</span>
                 </div>

                 <button onClick={() => handleCategoryNavigate('accessories')} className="w-full text-left px-6 py-4 text-black hover:bg-gray-50 text-xl font-bold">
                    accessories
                 </button>
              </div>
              
              <div className="p-6 mt-auto">
                 <p className="text-xs text-gray-300 text-center">suidhaage.com</p>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
