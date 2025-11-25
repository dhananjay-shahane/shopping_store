
import React from 'react';
import { X, ArrowRight, Minus, Plus } from 'lucide-react';
import { CartItem, PageView } from '../types';
import { RazorpayPayment } from './RazorpayPayment';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  navigateTo: (view: PageView) => void;
  removeFromCart: (id: string) => void;
  updateCartQuantity: (id: string, change: number) => void;
  clearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  cart, 
  navigateTo, 
  removeFromCart, 
  updateCartQuantity,
  clearCart
}) => {
  
  const totalAmount = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  const handlePaymentSuccess = () => {
    alert('Payment Successful! Thank you for your order.');
    clearCart();
  };

  const handlePaymentFailure = (error: any) => {
    alert(`Payment Failed: ${error.description || 'Something went wrong.'}`);
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300"
          onClick={onClose}
        />
      )}
      
      {/* Side Menu - Full width on mobile, 450px on desktop */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[450px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white">
          <h2 className="text-xl font-light text-gray-900">Shopping Cart</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-500 transition-colors p-2">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
              <h3 className="text-2xl font-medium text-gray-900">Your cart is empty</h3>
              
              <button 
                onClick={onClose}
                className="bg-gray-100 text-gray-800 px-8 py-3 text-sm font-medium tracking-wide hover:bg-gray-200 transition-colors rounded-sm"
              >
                Continue shopping
              </button>

              <div className="pt-4">
                <h4 className="text-lg font-medium text-gray-900 mb-2">Have an account?</h4>
                <p className="text-gray-500 text-sm">
                  <button onClick={() => navigateTo(PageView.LOGIN)} className="underline text-gray-900 hover:text-pink-500">Log in</button> to check out faster.
                </p>
              </div>

              {/* Recommendation Promo at bottom of empty cart */}
              <div className="mt-auto w-full pt-8 cursor-pointer group" onClick={onClose}>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg shadow-md">
                  <img src="https://picsum.photos/seed/promo/500/600" alt="Promo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-6">
                      <button className="bg-yellow-400 text-black px-6 py-3 font-semibold flex items-center gap-2 hover:bg-yellow-300 transition-colors w-full justify-center shadow-lg">
                        All Products <ArrowRight size={18}/>
                      </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 animate-in slide-in-from-right-4 duration-500">
                  <div className="w-20 h-28 bg-gray-50 flex-shrink-0 overflow-hidden rounded-sm">
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-gray-900 text-sm line-clamp-1">{item.product.name}</h4>
                        <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 p-1"><X size={16}/></button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{item.size} / {item.type}</p>
                      {item.embroideryName && (
                        <p className="text-xs text-pink-500 mt-1 italic">+ Embroidery: {item.embroideryName}</p>
                      )}
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="flex items-center border border-gray-200 rounded-sm">
                        <button onClick={() => updateCartQuantity(item.id, -1)} className="px-2 py-1 text-gray-500 hover:bg-gray-50"><Minus size={12}/></button>
                        <span className="px-2 text-xs font-medium w-6 text-center">{item.quantity}</span>
                        <button onClick={() => updateCartQuantity(item.id, 1)} className="px-2 py-1 text-gray-500 hover:bg-gray-50"><Plus size={12}/></button>
                      </div>
                      <span className="font-medium text-gray-900 text-sm">Rs. {(item.product.price * item.quantity).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600 font-medium">Subtotal</span>
              <span className="text-xl font-bold text-gray-900">Rs. {totalAmount.toLocaleString()}</span>
            </div>
            <p className="text-xs text-gray-500 mb-4 text-center">Shipping & taxes calculated at checkout</p>
            
            <RazorpayPayment 
              amount={totalAmount} 
              onSuccess={handlePaymentSuccess} 
              onFailure={handlePaymentFailure} 
            />
          </div>
        )}
      </div>
    </>
  );
};
