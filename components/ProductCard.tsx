import React from 'react';
import { Product } from '../types';
import { FadeIn } from './FadeIn';

interface ProductCardProps {
  product: Product;
  delay?: number;
  onClick?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, delay = 0, onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick(product);
    }
  };

  return (
    <FadeIn delay={delay} className="group flex flex-col w-full">
      {/* Image Container */}
      <div 
        onClick={handleClick} 
        className="block relative w-full aspect-square overflow-hidden mb-3 bg-gray-50 cursor-pointer"
      >
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" 
        />
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-white px-2 py-1 text-[10px] font-medium uppercase tracking-widest shadow-sm">
            New
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="flex flex-col items-start w-full">
        {/* Product Name */}
        <div 
          onClick={handleClick} 
          className="text-[13px] text-gray-900 font-normal hover:text-gray-600 transition-colors mb-1 truncate w-full cursor-pointer"
        >
          {product.name}
        </div>
        
        {/* Brand Name */}
        <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">SUIDHAAGE</p>
        
        {/* Price */}
        <p className="text-[13px] text-gray-900 font-normal mb-4">Rs. {product.price.toLocaleString()}.00</p>
        
        {/* Button */}
        <button 
            onClick={handleClick} 
            className="w-full border border-gray-900 bg-white py-2.5 text-xs font-normal text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200 text-center"
        >
            Add to cart
        </button>
      </div>
    </FadeIn>
  );
};
