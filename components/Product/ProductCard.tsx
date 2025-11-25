import React from 'react';
import Link from 'next/link';
import { Product } from '@/lib/data';
import { FadeIn } from '@/components/FadeIn';

interface ProductCardProps {
  product: Product;
  delay?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, delay = 0 }) => {
  return (
    <FadeIn delay={delay} className="group flex flex-col w-full">
      <Link href={`/product/${product.id}`} className="block relative w-full aspect-square overflow-hidden mb-4 bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" 
        />
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest shadow-sm">
            New
          </div>
        )}
      </Link>
      
      <div className="flex flex-col items-start w-full gap-1">
        <Link href={`/product/${product.id}`} className="text-sm text-gray-800 hover:text-pink-500 transition-colors line-clamp-1 font-normal">
          {product.name}
        </Link>
        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">SUI DHAGA</p>
        <p className="text-sm text-gray-900 font-medium mb-3">Rs. {product.price.toLocaleString()}.00</p>
        
        <Link 
            href={`/product/${product.id}`} 
            className="w-full border border-black bg-white py-3 text-[11px] md:text-xs font-medium uppercase tracking-widest text-center text-gray-900 hover:bg-black hover:text-white transition-all duration-300"
        >
            Choose options
        </Link>
      </div>
    </FadeIn>
  );
};

export default ProductCard;