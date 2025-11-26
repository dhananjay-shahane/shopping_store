"use client";

import React from 'react';
import { FadeIn } from './FadeIn';

const OurStudioSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="bg-accent py-10 md:py-12 text-center mb-12 md:mb-16">
        <h1 className="text-2xl md:text-3xl text-foreground tracking-wide uppercase" style={{ fontFamily: 'var(--font-heading-family)', fontWeight: 'var(--font-heading-weight)', fontStyle: 'var(--font-heading-style)' }}>
          OUR STUDIO
        </h1>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-start">
          <FadeIn>
            <div className="max-w-md mx-auto md:mx-0">
              <div className="aspect-[4/5] overflow-hidden shadow-sm">
                <img 
                  src="https://picsum.photos/seed/crochetstudio/500/625" 
                  alt="Our Crochet Studio" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="space-y-6 md:space-y-7 text-neutral-600 text-base md:text-lg leading-relaxed md:leading-loose pt-2 md:pt-4" style={{ fontFamily: 'var(--font-body-family)', fontWeight: 'var(--font-body-weight)' }}>
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
