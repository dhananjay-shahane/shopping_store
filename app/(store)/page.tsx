"use client";

import React from "react";
import Link from "next/link";
import { Truck, ShieldCheck, Headphones } from "lucide-react";
import { CATEGORIES } from "@/app/_shared/constants";
import { FadeIn } from "./_components/UI/FadeIn";
import { TestimonialSlider } from "./_components/UI/TestimonialSlider";
import BouquetSection from "./_components/Product/BouquetSection";
import BestsellerSection from "./_components/Product/BestsellerSection";
import OurStudioSection from "./_components/UI/OurStudioSection";
import HeroSection from "./_components/UI/HeroSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="py-4 bg-background">
        <div>
          <FadeIn>
            <div className="bg-accent py-8 text-center mb-8">
              <h1 className="text-2xl md:text-3xl text-foreground font-medium tracking-wide uppercase">
                SHOP BY CATEGORY
              </h1>
            </div>
          </FadeIn>

          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {CATEGORIES.map((cat, idx) => (
                <FadeIn key={cat.id} delay={idx * 50}>
                  <Link
                    href={`/category/${cat.name.toLowerCase()}`}
                    className="block group cursor-pointer"
                  >
                    <div className="aspect-square overflow-hidden bg-neutral-100 mb-2">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-xs md:text-sm text-neutral-800 group-hover:text-primary transition-colors inline-flex items-center gap-1">
                      {cat.name}{" "}
                      <span className="text-neutral-400 group-hover:text-primary">
                        →
                      </span>
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
          <h1 className="text-2xl md:text-3xl text-foreground font-medium tracking-wide uppercase">
            HAPPY CUSTOMERS
          </h1>
        </div>

        <TestimonialSlider />
      </section>

      <section className="py-20 border-t border-neutral-100">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <FadeIn delay={0} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center text-primary mb-6">
              <Truck size={28} />
            </div>
            <h3 className="font-bold text-foreground mb-2">Fast Shipping</h3>
            <p className="text-neutral-500 text-sm max-w-xs">
              Reliable delivery to your doorstep within 5-7 business days.
            </p>
          </FadeIn>
          <FadeIn delay={100} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center text-primary mb-6">
              <ShieldCheck size={28} />
            </div>
            <h3 className="font-bold text-foreground mb-2">Secure Payment</h3>
            <p className="text-neutral-500 text-sm max-w-xs">
              Your transactions are safe with our encrypted payment systems.
            </p>
          </FadeIn>
          <FadeIn delay={200} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center text-primary mb-6">
              <Headphones size={28} />
            </div>
            <h3 className="font-bold text-foreground mb-2">24/7 Support</h3>
            <p className="text-neutral-500 text-sm max-w-xs">
              Our team is here to assist you with any queries anytime.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
