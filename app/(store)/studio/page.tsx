import React from "react";
import Link from "next/link";

export default function StudioPage() {
   return (
      <div className="bg-background min-h-screen">
         {/* Meet The Face Behind The Flowers Section */}
         <div className="bg-accent py-8 text-center">
            <h2 className="text-sm md:text-base text-foreground font-medium tracking-widest uppercase">
               MEET THE FACE BEHIND THE FLOWERS
            </h2>
         </div>

         <div className="container mx-auto px-6 md:px-12 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start max-w-5xl mx-auto">
               <div className="flex justify-center md:justify-end">
                  <div className="w-64 md:w-80">
                     <img
                        src="/images/products/woman_crafting_handm_cc86993a.jpg"
                        className="w-full h-auto object-cover"
                        alt="Mahek Satyen Choksi - Founder"
                     />
                  </div>
               </div>
               
               <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">
                     Mahek Satyen Choksi
                  </h3>
                  <div className="text-sm md:text-base text-neutral-600 leading-relaxed space-y-3">
                     <p>
                        Hi I am Mahek, the founder of Phooldhaga. In an era where modern technology often overshadows traditional crafts, I'm a young entrepreneur that is revitalizing the timeless art of crochet while carrying forward a cherished family legacy.
                     </p>
                     <p>
                        I'm a dynamic 27-year-old who represents the fourth generation of a family deeply rooted in the crochet tradition. My journey embodies a unique blend of heritage and innovation, as I've merged our passion and skill of an age-old technique with contemporary designs to carve out my niche in the creative world.
                     </p>
                  </div>
               </div>
            </div>
         </div>

         {/* About Us Section */}
         <div className="bg-accent py-10 text-center">
            <h2 className="text-2xl md:text-3xl text-foreground font-medium tracking-wide uppercase">
               ABOUT US
            </h2>
         </div>

         <div className="container mx-auto px-6 md:px-12 py-12 md:py-16">
            <div className="max-w-4xl mx-auto text-center space-y-6 leading-relaxed text-neutral-600 text-sm md:text-base">
               <p>
                  Welcome to Phooldhaga, where passion meets creativity. We are a passionate business dedicated to preserving and showcasing India's rich heritage of crochet artistry. Based in Surat we work with local women artisans whose expertise and creativity bring to life our exquisite handmade pieces.
               </p>
               <p>
                  Our mission is two-fold: to sustain the timeless craft of crochet and to empower the talented women who practice it. By providing fair wages and a supportive work environment, we ensure that our artisans can thrive while keeping their craft alive for future generations.
               </p>
               <p>
                  Every item in our collection tells a story of dedication and skill, blending traditional techniques with contemporary designs. From intricate wearables to vibrant home décor, our products are a testament to the enduring beauty of Indian handicrafts.
               </p>
               <p>
                  Join us on this journey to support sustainable fashion and celebrate artisanal excellence. At Phooldhaga we are committed to making a difference, one stitch at a time.
               </p>
            </div>
         </div>

         {/* Our Artisans Section */}
         <div className="bg-accent py-12 md:py-16">
            <div className="container mx-auto px-6 md:px-12">
               <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-5xl mx-auto">
                  <div className="flex justify-center md:justify-start">
                     <div className="w-full max-w-md">
                        <img
                           src="/images/products/woman_crafting_handm_f2341c71.jpg"
                           className="w-full h-auto object-cover"
                           alt="Our Artisans at work"
                        />
                     </div>
                  </div>
                  
                  <div className="space-y-5 text-center md:text-left">
                     <h3 className="text-2xl md:text-3xl font-medium text-foreground tracking-wide uppercase">
                        OUR ARTISANS
                     </h3>
                     <div className="text-sm md:text-base text-neutral-600 leading-relaxed space-y-3">
                        <p>
                           At the heart of our business are the talented women artisans who bring our crochet flowers to life. Each piece is handcrafted with love and skill, reflecting their rich cultural heritage and dedication to sustainable craftsmanship.
                        </p>
                        <p>
                           By supporting our artisans, you're not only acquiring unique, beautiful creations but also empowering local communities and fostering a brighter future.
                        </p>
                     </div>
                     <div className="pt-4">
                        <Link 
                           href="/shop"
                           className="inline-block border border-foreground text-foreground px-6 py-3 text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors uppercase"
                        >
                           Explore Our Collection
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
