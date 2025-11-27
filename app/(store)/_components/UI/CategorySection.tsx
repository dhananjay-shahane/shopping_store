import React from "react";
import Link from "next/link";
import { CATEGORIES } from "@/app/_shared/constants";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export default function CategorySection() {
  return (
    <section className="py-4 bg-background">
      <div>
        <SectionHeading title="SHOP BY CATEGORY" />

        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {CATEGORIES.map((cat, idx) => (
              <FadeIn key={cat.id} delay={idx * 50} className="mb-2">
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
