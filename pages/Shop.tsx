// pages/Shop.tsx

import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { ChevronDown, ChevronLeft, ChevronRight, Check } from 'lucide-react';

interface ShopProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export const Shop: React.FC<ShopProps> = ({ products, onProductClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; 
  
  const [sortOption, setSortOption] = useState('featured');
  const [priceFilter, setPriceFilter] = useState('all');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const processedProducts = useMemo(() => {
    let result = [...products];

    if (priceFilter !== 'all') {
      result = result.filter(p => {
        if (priceFilter === 'under-1000') return p.price < 1000;
        if (priceFilter === '1000-3000') return p.price >= 1000 && p.price <= 3000;
        if (priceFilter === 'above-3000') return p.price > 3000;
        return true;
      });
    }

    switch (sortOption) {
      case 'alpha-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'alpha-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return result;
  }, [priceFilter, sortOption, products]);

  const totalPages = Math.ceil(processedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = processedProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <div className="min-h-screen bg-white pb-16" onClick={() => setActiveDropdown(null)}>
      <div className="bg-[#FCE4DC] py-16 text-center mb-12">
         <h1 className="text-4xl md:text-5xl text-[#1a1a1a] font-normal tracking-wide uppercase">PRODUCTS</h1>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Filters & Sort Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 text-sm text-gray-600 border-b border-gray-100 pb-4 gap-4 relative z-20">
           <div className="flex items-center gap-6">
              <span className="font-medium text-gray-900">Filter:</span>
              
              <div className="relative group cursor-pointer" onClick={(e) => { e.stopPropagation(); toggleDropdown('availability'); }}>
                 <div className="flex items-center gap-1 hover:text-pink-500 transition-colors">
                    Availability <ChevronDown size={14} />
                 </div>
                 {activeDropdown === 'availability' && (
                   <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 shadow-lg rounded-sm py-2 z-30 animate-in fade-in zoom-in-95 duration-200">
                      <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center justify-between text-gray-800">
                        <span>In Stock (All)</span> <Check size={14} className="text-pink-500"/>
                      </div>
                   </div>
                 )}
              </div>

              <div className="relative group cursor-pointer" onClick={(e) => { e.stopPropagation(); toggleDropdown('price'); }}>
                 <div className={`flex items-center gap-1 hover:text-pink-500 transition-colors ${priceFilter !== 'all' ? 'text-pink-500 font-medium' : ''}`}>
                    Price {priceFilter !== 'all' ? `(${priceFilter})` : ''} <ChevronDown size={14} />
                 </div>
                 {activeDropdown === 'price' && (
                   <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 shadow-lg rounded-sm py-2 z-30 animate-in fade-in zoom-in-95 duration-200">
                      <div onClick={() => setPriceFilter('all')} className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center justify-between">
                        <span>All</span> {priceFilter === 'all' && <Check size={14} className="text-pink-500"/>}
                      </div>
                      <div onClick={() => setPriceFilter('under-1000')} className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center justify-between">
                        <span>Under Rs. 1000</span> {priceFilter === 'under-1000' && <Check size={14} className="text-pink-500"/>}
                      </div>
                      <div onClick={() => setPriceFilter('1000-3000')} className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center justify-between">
                        <span>Rs. 1000 - Rs. 3000</span> {priceFilter === '1000-3000' && <Check size={14} className="text-pink-500"/>}
                      </div>
                      <div onClick={() => setPriceFilter('above-3000')} className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center justify-between">
                        <span>Above Rs. 3000</span> {priceFilter === 'above-3000' && <Check size={14} className="text-pink-500"/>}
                      </div>
                   </div>
                 )}
              </div>
           </div>
           
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 relative" onClick={(e) => { e.stopPropagation(); toggleDropdown('sort'); }}>
                 <span className="font-medium text-gray-900">Sort by:</span>
                 <div className="cursor-pointer flex items-center gap-1 hover:text-pink-500 transition-colors">
                    {sortOption === 'featured' && 'Featured'}
                    {sortOption === 'alpha-asc' && 'Alphabetically, A-Z'}
                    {sortOption === 'alpha-desc' && 'Alphabetically, Z-A'}
                    {sortOption === 'price-asc' && 'Price, low to high'}
                    {sortOption === 'price-desc' && 'Price, high to low'}
                    <ChevronDown size={14} />
                 </div>

                 {activeDropdown === 'sort' && (
                   <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-gray-100 shadow-lg rounded-sm py-2 z-30 animate-in fade-in zoom-in-95 duration-200">
                      <div onClick={() => setSortOption('featured')} className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center justify-between">
                        <span>Featured</span> {sortOption === 'featured' && <Check size={14} className="text-pink-500"/>}
                      </div>
                      <div onClick={() => setSortOption('alpha-asc')} className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center justify-between">
                        <span>Alphabetically, A-Z</span> {sortOption === 'alpha-asc' && <Check size={14} className="text-pink-500"/>}
                      </div>
                      <div onClick={() => setSortOption('alpha-desc')} className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center justify-between">
                        <span>Alphabetically, Z-A</span> {sortOption === 'alpha-desc' && <Check size={14} className="text-pink-500"/>}
                      </div>
                      <div onClick={() => setSortOption('price-asc')} className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center justify-between">
                        <span>Price, low to high</span> {sortOption === 'price-asc' && <Check size={14} className="text-pink-500"/>}
                      </div>
                      <div onClick={() => setSortOption('price-desc')} className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center justify-between">
                        <span>Price, high to low</span> {sortOption === 'price-desc' && <Check size={14} className="text-pink-500"/>}
                      </div>
                   </div>
                 )}
              </div>
              <span className="text-gray-500">{processedProducts.length} products</span>
           </div>
        </div>

        {currentProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
             {currentProducts.map((p, idx) => (
                <ProductCard key={p.id} product={p} delay={idx * 50} onClick={onProductClick} />
             ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            <p>No products match your filters.</p>
            <button onClick={() => {setPriceFilter('all'); setSortOption('featured');}} className="mt-4 text-pink-500 hover:underline">Clear Filters</button>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 text-sm font-medium text-gray-600">
             <button 
               onClick={() => handlePageChange(currentPage - 1)} 
               disabled={currentPage === 1}
               className="p-2 hover:text-pink-500 disabled:opacity-30 transition-colors"
             >
               <ChevronLeft size={18} />
             </button>
             
             {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-8 h-8 flex items-center justify-center rounded-full transition-all ${currentPage === page ? 'text-gray-900 border-b-2 border-gray-900' : 'hover:bg-gray-50'}`}
                >
                  {page}
                </button>
             ))}

             <button 
               onClick={() => handlePageChange(currentPage + 1)} 
               disabled={currentPage === totalPages}
               className="p-2 hover:text-pink-500 disabled:opacity-30 transition-colors"
             >
               <ChevronRight size={18} />
             </button>
          </div>
        )}
      </div>
    </div>
  );
};