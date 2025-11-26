import React from "react";

export default function StudioPage() {
   return (
      <div className="bg-background min-h-screen">
         <div className="bg-accent py-16 text-center mb-12">
            <h1 className="text-4xl md:text-5xl text-foreground font-normal tracking-wide uppercase">
               OUR STUDIO
            </h1>
         </div>

         <div className="container mx-auto px-4 py-8">
            <div className="max-w-3xl mx-auto text-center space-y-8 leading-relaxed text-neutral-600">
               <p className="text-xl font-light text-foreground">
                  "Sui Dhaga" implies Needle and Thread. It is the beginning of
                  every creation.
               </p>
               <p>
                  Founded in 2020, we started with a small team of three
                  artisans in a cozy studio in Lahore. Our vision was simple: to
                  bring the intricate beauty of traditional embroidery into the
                  playful, dynamic world of children's fashion.
               </p>
               <p>
                  We believe that clothes should not just be worn, but
                  experienced. The texture of hand-woven cotton, the brightness
                  of a silk thread, and the comfort of a perfect fit - these are
                  the details we obsess over.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-20">
               <div className="text-center flex justify-items-center justfy-content-center">
                  <img
                     src="https://picsum.photos/seed/artisan/400/400"
                     className="w-full h-64 object-cover mb-6 rounded-sm"
                     alt="Artisan"
                  />
                  <h3 className="text-lg font-bold uppercase tracking-widest mb-2">
                     Craftsmanship
                  </h3>
                  <p className="text-sm text-neutral-500">
                     Every piece passes through the hands of skilled artisans
                     who have inherited their craft through generations.
                  </p>
               </div>
               <div className="text-center p-6">
                  <img
                     src="https://picsum.photos/seed/fabric/400/400"
                     className="w-full h-64 object-cover mb-6 rounded-sm"
                     alt="Fabric"
                  />
                  <h3 className="text-lg font-bold uppercase tracking-widest mb-2">
                     Quality
                  </h3>
                  <p className="text-sm text-neutral-500">
                     We source only the finest organic cottons and breathable
                     linens suitable for delicate skin.
                  </p>
               </div>
               <div className="text-center p-6">
                  <img
                     src="https://picsum.photos/seed/design/400/400"
                     className="w-full h-64 object-cover mb-6 rounded-sm"
                     alt="Design"
                  />
                  <h3 className="text-lg font-bold uppercase tracking-widest mb-2">
                     Design
                  </h3>
                  <p className="text-sm text-neutral-500">
                     Merging traditional motifs with contemporary cuts to create
                     timeless wardrobes.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}
