import React from 'react';
import { PageView, Product } from '../types';
import { ProductCard } from '../components/ProductCard';

interface CategoryPageProps {
  categoryName: string;
  products: Product[];
  navigateTo: (view: PageView) => void;
  onProductClick: (product: Product) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ 
  categoryName, 
  products, 
  navigateTo, 
  onProductClick 
}) => {

  // Normalize category name for accurate matching
  const filteredProducts = products.filter(
    p => p.category.toLowerCase() === categoryName.toLowerCase()
  );
  
  return (
    <div className="min-h-screen bg-white pb-16">

      {/* Updated Header */}
      <div className="bg-[#FCE4DC] py-16 text-center mb-12">
        <h1 className="text-4xl md:text-5xl text-[#1a1a1a] font-normal tracking-wide uppercase">
          {categoryName} Collection
        </h1>
      </div>
      
      <div className="container mx-auto px-4">
        {filteredProducts.length > 0 ? (
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {filteredProducts.map((product, idx) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                delay={idx * 50}
                onClick={onProductClick} 
              />
            ))}
          </div>

        ) : (

          <div className="text-center py-20 text-gray-500">
            <p>No products found in this category yet.</p>
            <button 
              onClick={() => navigateTo(PageView.HOME)} 
              className="mt-4 text-pink-500 hover:underline"
            >
              Back to Home
            </button>
          </div>

        )}
      </div>
    </div>
  );
};
