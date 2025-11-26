import React from "react";
import Link from "next/link";
import { CATEGORIES } from "@/app/_shared/constants";
import { FadeIn } from "./FadeIn";

export default function CategorySection() {
  return (
    <section className="py-4 bg-background">
      <div>
        <FadeIn>
          <div className="bg-accent py-8 text-center mb-8">
            <h1 className="text-2xl md:text-3xl text-foreground tracking-wide uppercase" style={{ fontFamily: 'Assistant', fontWeight: 300 }}>
              SHOP BY CATEGORY
            </h1>
          </div>
        </FadeIn>

        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
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
                      loading="lazy"
                    />
                  </div>
                  <span className="text-md md:text-xl text-neutral-800 group-hover:text-primary transition-colors inline-flex items-center gap-1">
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
  );
}
