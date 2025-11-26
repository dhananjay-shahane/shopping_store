
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Bell, Pause, Play } from "lucide-react";
import { FadeIn } from "./FadeIn";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      image: "/images/products/crochet_flowers_bouq_dd4ac4d3.jpg",
      title: "Handcrafted Blooms",
      subtitle: "Timeless Beauty",
    },
    {
      image: "/images/products/crochet_flowers_bouq_12075390.jpg",
      title: "Forever Flowers",
      subtitle: "Crochet Collection",
    },
    {
      image: "/images/products/crochet_flowers_bouq_b8936798.jpg",
      title: "Gift of Love",
      subtitle: "New Arrivals",
    },
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
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <section className="relative w-full h-[600px] md:h-[100vh] bg-neutral-50 group flex flex-col">
      <div className="relative flex-1 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover object-center transition-transform duration-[6000ms] ease-linear ${index === currentSlide && isPlaying ? "scale-110" : "scale-100"}`}
              loading={index === 0 ? "eager" : "lazy"}
            />

            <div className="absolute bottom-24 left-6 md:bottom-32 md:left-24 z-20">
              <FadeIn
                delay={300}
                className={index === currentSlide ? "block" : "hidden"}
              >
                <div className="bg-background/95 backdrop-blur-sm px-6 py-5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-background/50 max-w-xs animate-in slide-in-from-bottom-4 duration-700 flex items-start gap-4">
                  <div className="bg-secondary-50 p-2.5 rounded-full relative shrink-0 mt-1">
                    <Bell
                      size={20}
                      className="text-secondary-500 fill-secondary-500"
                    />
                    <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-error border-2 border-background rounded-full"></span>
                  </div>
                  <div>
                    <p className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1">
                      {slide.subtitle}
                    </p>
                    <h3 className="text-foreground font-serif text-2xl leading-none mb-3">
                      {slide.title}
                    </h3>
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
            {isPlaying ? (
              <Pause size={14} fill="currentColor" />
            ) : (
              <Play size={14} fill="currentColor" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
