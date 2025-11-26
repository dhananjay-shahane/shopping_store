"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Truck, ShieldCheck, Headphones, Bell, Pause, Play } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '@/app/_shared/constants';
import { FadeIn } from './_components/UI/FadeIn';
import ProductCard from './_components/Product/ProductCard';
import { TestimonialSlider } from './_components/UI/TestimonialSlider';
import BouquetSection from './_components/Product/BouquetSection';
import BestsellerSection from './_components/Product/BestsellerSection';

export default function HomePage() {
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

  return (
    <>
      <section className="relative w-full h-[600px] md:h-[800px] bg-neutral-50 group flex flex-col">
        <div className="relative flex-1 overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover object-center transition-transform duration-[6000ms] ease-linear ${index === currentSlide && isPlaying ? 'scale-110' : 'scale-100'}`}
              />

              <div className="absolute bottom-24 left-6 md:bottom-32 md:left-24 z-20">
                <FadeIn delay={300} className={index === currentSlide ? 'block' : 'hidden'}>
                  <div className="bg-background/95 backdrop-blur-sm px-6 py-5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-background/50 max-w-xs animate-in slide-in-from-bottom-4 duration-700 flex items-start gap-4">
                    <div className="bg-secondary-50 p-2.5 rounded-full relative shrink-0 mt-1">
                      <Bell size={20} className="text-secondary-500 fill-secondary-500" />
                      <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-error border-2 border-background rounded-full"></span>
                    </div>
                    <div>
                      <p className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1">{slide.subtitle}</p>
                      <h3 className="text-foreground font-serif text-2xl leading-none mb-3">{slide.title}</h3>
                      <Link
                        href="/category/bouquet"
                        className="text-primary font-bold text-sm border-b-2 border-primary pb-0.5 hover:text-primary-700 hover:border-primary-700 transition-all"
                      >
                        Shop now
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-background border-t border-neutral-100 h-14 flex items-center justify-center relative z-30">
          <div className="flex items-center h-full">
            <button
              onClick={prevSlide}
              className="h-full px-6 text-neutral-400 hover:text-foreground hover:bg-neutral-50 transition-all border-r border-neutral-100"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="px-8 text-xs font-medium tracking-widest text-neutral-500 flex items-center h-full tabular-nums">
              <span className="text-foreground">{currentSlide + 1}</span>
              <span className="mx-1">/</span>
              <span>{slides.length}</span>
            </div>

            <button
              onClick={nextSlide}
              className="h-full px-6 text-neutral-400 hover:text-foreground hover:bg-neutral-50 transition-all border-l border-r border-neutral-100"
            >
              <ChevronRight size={16} />
            </button>

            <button
              onClick={togglePlay}
              className="h-full px-6 text-neutral-400 hover:text-foreground hover:bg-neutral-50 transition-all"
            >
              {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div>
          <FadeIn>
            <div className="bg-accent py-8 text-center mb-8">
              <h1 className="text-2xl md:text-3xl text-foreground font-medium tracking-wide uppercase">SHOP BY CATEGORY</h1>
            </div>
          </FadeIn>

          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {CATEGORIES.map((cat, idx) => (
                <FadeIn key={cat.id} delay={idx * 50}>
                  <Link href={`/category/${cat.name.toLowerCase()}`} className="block group cursor-pointer">
                    <div className="aspect-square overflow-hidden bg-neutral-100 mb-2">
                      <img 
                        src={cat.image} 
                        alt={cat.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <span className="text-xs md:text-sm text-neutral-800 group-hover:text-primary transition-colors inline-flex items-center gap-1">
                      {cat.name} <span className="text-neutral-400 group-hover:text-primary">→</span>
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BestsellerSection />

      <section className="bg-primary-50 min-h-[500px] flex flex-col md:flex-row items-stretch">
        <div className="w-full md:w-1/2 p-8 md:p-24 flex flex-col justify-center items-start">
          <FadeIn>
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Matching Sets</span>
            <h2 className="text-3xl md:text-5xl font-light mb-6 md:mb-8 text-foreground">Brother & Sister</h2>
            <p className="text-neutral-600 mb-8 md:mb-10 leading-relaxed max-w-md text-sm md:text-base">
              Create picture-perfect memories with our coordinated sets designed to strengthen the bond between siblings.
            </p>
            <Link
              href="/category/plushies"
              className="bg-foreground text-background px-8 py-3 md:px-10 md:py-4 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-all shadow-lg"
            >
              Shop Collection
            </Link>
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

      <BouquetSection />

      <section className="py-12">
        <div className="bg-accent py-8 text-center mb-10">
          <h1 className="text-2xl md:text-3xl text-foreground font-medium tracking-wide uppercase">OUR STUDIO</h1>
        </div>

        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <FadeIn>
              <div className="aspect-[3/4] md:aspect-[4/5] overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/crochetstudio/600/800" 
                  alt="Our Crochet Studio" 
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="space-y-5 text-neutral-700 text-sm md:text-base leading-relaxed">
                <p>
                  Welcome to our cozy crochet studio nestled in the heart of Surat. Our small home-based business is lovingly run by a mother daughter duo.
                </p>
                <p>
                  The heart and soul of our creations come from a rich heritage, as the girl behind these beautiful crochet flowers is a fourth-generation crochet maker.
                </p>
                <p>
                  Each piece is crafted with a deep understanding and appreciation of this timeless art, passed down through generations.
                </p>
                <p>
                  In our little studio, tradition meets passion, and every flower we create is a testament to our love for this craft.
                </p>
                <p>
                  Join us in celebrating the beauty of handmade artistry and the legacy we proudly carry forward.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 overflow-hidden">
        <div className="bg-accent py-10 text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-foreground font-normal tracking-wide uppercase">HAPPY CUSTOMERS</h1>
        </div>

        <TestimonialSlider />
      </section>

      <section className="py-20 border-t border-neutral-100">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <FadeIn delay={0} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center text-primary mb-6">
              <Truck size={28}/>
            </div>
            <h3 className="font-bold text-foreground mb-2">Fast Shipping</h3>
            <p className="text-neutral-500 text-sm max-w-xs">Reliable delivery to your doorstep within 5-7 business days.</p>
          </FadeIn>
          <FadeIn delay={100} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center text-primary mb-6">
              <ShieldCheck size={28}/>
            </div>
            <h3 className="font-bold text-foreground mb-2">Secure Payment</h3>
            <p className="text-neutral-500 text-sm max-w-xs">Your transactions are safe with our encrypted payment systems.</p>
          </FadeIn>
          <FadeIn delay={200} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center text-primary mb-6">
              <Headphones size={28}/>
            </div>
            <h3 className="font-bold text-foreground mb-2">24/7 Support</h3>
            <p className="text-neutral-500 text-sm max-w-xs">Our team is here to assist you with any queries anytime.</p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}