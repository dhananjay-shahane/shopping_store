"use client";

import React from "react";
import { FadeIn } from "./FadeIn";

const OurStudioSection = () => {
  return (
    <section className="py-6 md:py-4">
      <div className="bg-accent py-8 text-center mb-8">
        <h1 className="text-2xl md:text-3xl text-foreground font-medium tracking-wide uppercase">
          OUR STUDIO
        </h1>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div
          className="grid md:grid-cols-2 gap-10 md:gap-6 lg:gap-10 items-start"
          style={{ justifyItems: "end" }}
        >
          <div
            className="max-w-md mx-auto md:mx-0"
            style={{ display: "flex", justifyItems: "end" }}
          >
            <div className="aspect-[4/5] overflow-hidden shadow-sm">
              <img
                src="/images/products/crochet_craft_studio_d2d0e937.jpg"
                alt="Our Crochet Studio"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <FadeIn delay={100}>
            <div
              className="space-y-6 md:space-y-7 text-neutral-600 text-base md:text-lg leading-relaxed md:leading-loose pt-2 md:pt-4"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              <p>
                Welcome to our cozy crochet studio nestled in the heart of
                Surat. Our small home-based business is lovingly run by a mother
                daughter duo.
              </p>
              <p>
                The heart and soul of our creations come from a rich heritage,
                as the girl behind these beautiful crochet flowers is a
                fourth-generation crochet maker.
              </p>
              <p>
                Each piece is crafted with a deep understanding and appreciation
                of this timeless art, passed down through generations.
              </p>
              <p>
                In our little studio, tradition meets passion, and every flower
                we create is a testament to our love for this craft.
              </p>
              <p>
                Join us in celebrating the beauty of handmade artistry and the
                legacy we proudly carry forward.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default OurStudioSection;
