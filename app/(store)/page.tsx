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
import OurStudioSection from './_components/UI/OurStudioSection';

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

      <BouquetSection />

      <OurStudioSection />

      <BestsellerSection />

      <section className="py-12 overflow-hidden">
        <div className="bg-accent py-8 text-center mb-10">
          <h1 className="text-2xl md:text-3xl text-foreground font-medium tracking-wide uppercase">HAPPY CUSTOMERS</h1>
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