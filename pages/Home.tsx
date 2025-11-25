import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Truck, ShieldCheck, Headphones, Bell, Pause, Play } from 'lucide-react';
import { PageView, Product } from '../types';
import { CATEGORIES } from '../constants';
import { FadeIn } from '../components/FadeIn';
import { ProductCard } from '../components/ProductCard';
import { TestimonialSlider } from '../components/TestimonialSlider';

interface HomeProps {
  navigateTo: (view: PageView) => void;
  products: Product[];
  onProductClick: (product: Product) => void;
}

export const Home: React.FC<HomeProps> = ({ navigateTo, products, onProductClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      image: "https://picsum.photos/seed/flower1/1920/1080",
      title: "Divya Kamal",
      subtitle: "Timeless Classics"
    },
    {
      image: "https://picsum.photos/seed/knitwear2/1920/1080",
      title: "Winter Bloom",
      subtitle: "Handcrafted Luxury"
    },
    {
      image: "https://picsum.photos/seed/kidsfashion3/1920/1080",
      title: "Festive Joy",
      subtitle: "New Collection"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slides.length, isPlaying]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const togglePlay = () => setIsPlaying(!isPlaying);

  const handleCategoryClick = (catName: string) => {
    const boyCats = ['Cars', 'Traffic', 'Aeroplane'];
    if (boyCats.includes(catName)) navigateTo(PageView.BOYS);
    else navigateTo(PageView.GIRLS);
  };

  return (
    <>
      {/* Modern Aesthetic Carousel with Bottom Controls */}
      <section className="relative w-full h-[600px] md:h-[800px] bg-gray-50 group flex flex-col">
        <div className="relative flex-1 overflow-hidden">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              {/* Image */}
              <img 
                src={slide.image} 
                alt={slide.title} 
                className={`w-full h-full object-cover object-center transition-transform duration-[6000ms] ease-linear ${index === currentSlide && isPlaying ? 'scale-110' : 'scale-100'}`}
              />
              
              {/* Notification Style Overlay Card */}
              <div className="absolute bottom-24 left-6 md:bottom-32 md:left-24 z-20">
                 <FadeIn delay={300} className={index === currentSlide ? 'block' : 'hidden'}>
                    <div className="bg-white/95 backdrop-blur-sm px-6 py-5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 max-w-xs animate-in slide-in-from-bottom-4 duration-700 flex items-start gap-4">
                       <div className="bg-yellow-50 p-2.5 rounded-full relative shrink-0 mt-1">
                          <Bell size={20} className="text-yellow-500 fill-yellow-500" />
                          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
                       </div>
                       <div>
                          <p className="text-pink-500 text-[10px] font-bold uppercase tracking-widest mb-1">{slide.subtitle}</p>
                          <h3 className="text-gray-900 font-serif text-2xl leading-none mb-3">{slide.title}</h3>
                          <button 
                            onClick={() => navigateTo(PageView.GIRLS)} 
                            className="text-pink-500 font-bold text-sm border-b-2 border-pink-500 pb-0.5 hover:text-pink-700 hover:border-pink-700 transition-all"
                          >
                            Shop now
                          </button>
                       </div>
                    </div>
                 </FadeIn>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation Bar (White Strip) */}
        <div className="bg-white border-t border-gray-100 h-14 flex items-center justify-center relative z-30">
           <div className="flex items-center h-full">
              <button 
                onClick={prevSlide} 
                className="h-full px-6 text-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-all border-r border-gray-100"
              >
                <ChevronLeft size={16} />
              </button>
              
              <div className="px-8 text-xs font-medium tracking-widest text-gray-500 flex items-center h-full tabular-nums">
                 <span className="text-gray-900">{currentSlide + 1}</span>
                 <span className="mx-1">/</span>
                 <span>{slides.length}</span>
              </div>

              <button 
                onClick={nextSlide} 
                className="h-full px-6 text-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-all border-l border-r border-gray-100"
              >
                <ChevronRight size={16} />
              </button>

              <button 
                onClick={togglePlay} 
                className="h-full px-6 text-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-all"
              >
                {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}
              </button>
           </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="text-center">
          <FadeIn>
             <div className="bg-[#FCE4DC] py-10 text-center mb-12">
                <h1 className="text-3xl md:text-4xl text-[#1a1a1a] font-normal tracking-wide uppercase">SHOP BY CATEGORY</h1>
              </div>
          </FadeIn>
          
          <div className="flex flex-wrap container mx-auto px-4  justify-center gap-6 md:gap-10">
            {CATEGORIES.map((cat, idx) => (
              <FadeIn key={cat.id} delay={idx * 100}>
                <div className="flex flex-col items-center group cursor-pointer" onClick={() => handleCategoryClick(cat.name)}>
                  <div className="w-20 h-20 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-pink-200 transition-all mb-4 md:mb-5 relative shadow-sm">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-xs md:text-sm font-bold text-gray-800 uppercase tracking-widest group-hover:text-pink-500 transition-colors">{cat.name}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pink-50 min-h-[500px] flex flex-col md:flex-row items-stretch">
        <div className="w-full md:w-1/2 p-8 md:p-24 flex flex-col justify-center items-start">
          <FadeIn>
            <span className="text-pink-500 font-bold uppercase tracking-widest text-xs mb-4">Matching Sets</span>
            <h2 className="text-3xl md:text-5xl font-light mb-6 md:mb-8 text-gray-900">Brother & Sister</h2>
            <p className="text-gray-600 mb-8 md:mb-10 leading-relaxed max-w-md text-sm md:text-base">
              Create picture-perfect memories with our coordinated sets designed to strengthen the bond between siblings.
            </p>
            <button 
              onClick={() => navigateTo(PageView.BOYS)}
              className="bg-gray-900 text-white px-8 py-3 md:px-10 md:py-4 text-xs font-bold uppercase tracking-widest hover:bg-pink-500 transition-all shadow-lg"
            >
              Shop Collection
            </button>
          </FadeIn>
        </div>
        <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden group">
          <img 
            src="https://picsum.photos/seed/siblings/800/600" 
            alt="Brother and Sister" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
         <div className="bg-[#FCE4DC] py-10 text-center mb-12">
            <h1 className="text-4xl md:text-5xl text-[#1a1a1a] font-normal tracking-wide uppercase">Make your own bouquet</h1>
          </div>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 container mx-auto px-4">
            {products.slice(0, 4).map((product, idx) => (
              <ProductCard key={product.id} product={product} delay={idx * 100} onClick={onProductClick} />
            ))}
         </div>
         <div className="text-center mt-12">
           <button onClick={() => navigateTo(PageView.BOYS)} className="text-gray-900 border-b border-gray-900 pb-1 uppercase tracking-widest text-xs font-bold hover:text-pink-500 hover:border-pink-500 transition-all">View All Products</button>
         </div>
      </section>

      {/* Testimonials Swipeable */}
      <section className="py-20  overflow-hidden">
       <div className="bg-[#FCE4DC] py-10 text-center mb-12">
         <h1 className="text-4xl md:text-5xl text-[#1a1a1a] font-normal tracking-wide uppercase">HAPPY CUSTOMERS</h1>
      </div>
        
        <TestimonialSlider />
      </section>

      {/* Features Icons */}
      <section className="py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
           <FadeIn delay={0} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center text-pink-500 mb-6">
                 <Truck size={28}/>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Fast Shipping</h3>
              <p className="text-gray-500 text-sm max-w-xs">Reliable delivery to your doorstep within 5-7 business days.</p>
           </FadeIn>
           <FadeIn delay={100} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center text-pink-500 mb-6">
                 <ShieldCheck size={28}/>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Secure Payment</h3>
              <p className="text-gray-500 text-sm max-w-xs">Your transactions are safe with our encrypted payment systems.</p>
           </FadeIn>
           <FadeIn delay={200} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center text-pink-500 mb-6">
                 <Headphones size={28}/>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-500 text-sm max-w-xs">Our team is here to assist you with any queries anytime.</p>
           </FadeIn>
        </div>
      </section>
    </>
  );
};