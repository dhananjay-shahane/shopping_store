
import React, { useState, useEffect } from 'react';
import { INITIAL_PRODUCTS } from './constants';
import { Product, PageView, CartItem } from './types';
import AdminPanel from './components/AdminPanel';

// Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';

// Pages
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { CategoryPage } from './pages/CategoryPage';
import { OurStory } from './pages/OurStory';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Collections } from './pages/Collections';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [currentView, setCurrentView] = useState<PageView>(PageView.HOME);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, selectedProduct, selectedCategory]);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Navigation Handlers
  const navigateTo = (view: PageView) => {
    setCurrentView(view);
    setCartOpen(false);
  };

  const navigateToCategory = (category: string) => {
    setSelectedCategory(category);
    setCurrentView(PageView.SUB_COLLECTION);
    setCartOpen(false);
  };

  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView(PageView.PRODUCT_DETAIL);
    setCartOpen(false);
  };

  const addToCart = (item: CartItem) => {
    const existingItemIndex = cart.findIndex(
      (i) => i.product.id === item.product.id && i.size === item.size && i.type === item.type && i.embroideryName === item.embroideryName
    );

    if (existingItemIndex > -1) {
      const newCart = [...cart];
      newCart[existingItemIndex].quantity += item.quantity;
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }
    setCartOpen(true); // Open cart drawer on add
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateCartQuantity = (id: string, change: number) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const clearCart = () => {
    setCart([]);
    setCartOpen(false);
  };

  // Admin Handlers
  const handleAddProduct = (newProduct: Product) => {
    setProducts([newProduct, ...products]);
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-pink-100">
      <Header 
        currentView={currentView}
        navigateTo={navigateTo}
        navigateToCategory={navigateToCategory}
        cartCount={cartCount}
        setCartOpen={setCartOpen}
        products={products}
        navigateToProduct={navigateToProduct}
      />
      
      {currentView === PageView.ADMIN ? (
        <AdminPanel 
          products={products} 
          onAddProduct={handleAddProduct} 
          onDeleteProduct={handleDeleteProduct}
          onClose={() => navigateTo(PageView.HOME)}
        />
      ) : (
        <main className="animate-in fade-in duration-500">
          {currentView === PageView.HOME && (
            <Home 
              navigateTo={navigateTo} 
              products={products} 
              onProductClick={navigateToProduct}
            />
          )}
          {currentView === PageView.SHOP && (
            <Shop 
              products={products} 
              onProductClick={navigateToProduct}
            />
          )}
          {currentView === PageView.PRODUCT_DETAIL && selectedProduct && (
            <ProductDetail 
              product={selectedProduct} 
              addToCart={addToCart} 
              navigateTo={navigateTo} 
              setCartOpen={setCartOpen}
              relatedProducts={products.filter(p => p.id !== selectedProduct.id)}
              onProductClick={navigateToProduct}
            />
          )}
          {currentView === PageView.Bouquet && (
            <CategoryPage 
              categoryName="Bouquet" 
              products={products} 
              navigateTo={navigateTo} 
              onProductClick={navigateToProduct}
            />
          )}
          {currentView === PageView.Plushies && (
            <CategoryPage 
              categoryName="Plushies" 
              products={products} 
              navigateTo={navigateTo} 
              onProductClick={navigateToProduct}
            />
          )}
          {currentView === PageView.SUB_COLLECTION && (
            <CategoryPage 
              categoryName={selectedCategory} 
              products={products} 
              navigateTo={navigateTo} 
              onProductClick={navigateToProduct}
            />
          )}
          {currentView === PageView.COLLECTIONS && (
            <Collections navigateTo={navigateTo} />
          )}
          {currentView === PageView.OUR_STORY && <OurStory />}
          {currentView === PageView.CONTACT && <Contact />}
          {currentView === PageView.LOGIN && <Login />}
        </main>
      )}

      <CartDrawer 
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        navigateTo={navigateTo}
        removeFromCart={removeFromCart}
        updateCartQuantity={updateCartQuantity}
        clearCart={clearCart}
      />
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;
