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
import CategorySection from "./_components/UI/CategorySection";
import TestimonialSection from "./_components/UI/TestimonialSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <CategorySection />

      <BouquetSection />

      <OurStudioSection />

      <BestsellerSection />

      <TestimonialSection />

      <section className="max-w-6xl mx-auto border-t border-neutral-100">
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
