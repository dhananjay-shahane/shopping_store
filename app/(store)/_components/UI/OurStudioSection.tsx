"use client";

import React from 'react';
import { FadeIn } from './FadeIn';

const OurStudioSection = () => {
  return (
    <section className="py-12">
      <div className="bg-accent py-8 text-center mb-10">
        <h1 className="text-2xl md:text-3xl text-foreground font-medium tracking-wide uppercase">OUR STUDIO</h1>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <FadeIn>
            <div className="max-w-sm mx-auto md:mx-0">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/crochetstudio/400/500" 
                  alt="Our Crochet Studio" 
                  className="w-full h-full object-cover"
                />
              </div>
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
  );
};

export default OurStudioSection;
