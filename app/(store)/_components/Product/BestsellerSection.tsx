"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Minus, Plus, Share2 } from "lucide-react";
import { useCart } from "@/app/_shared/context/CartContext";
import { FadeIn } from "../UI/FadeIn";

const BestsellerSection = () => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const bestseller = {
    id: "bestseller-1",
    name: "Blooming Rose",
    price: 450,
    category: "Phool",
    image: "/images/products/crochet_rose_flower__b3d2bb80.jpg",
    description:
      "Beautiful handcrafted blooming rose arrangement in a ceramic vase.",
  };

  const handleAddToCart = () => {
    addToCart({
      id: `${bestseller.id}-${Date.now()}`,
      product: bestseller,
      quantity,
      size: "Standard",
      type: "Default",
    });
    setQuantity(1);
  };

  const handleBuyNow = () => {
    handleAddToCart();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: bestseller.name,
          text: bestseller.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    }
  };

  return (
    <section className="py-12">
      <div className="bg-accent py-8 text-center mb-10">
        <h1 className="text-2xl md:text-3xl text-foreground font-medium tracking-wide uppercase">
          BESTSELLER
        </h1>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <FadeIn>
          <div className="bg-accent p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="aspect-square md:aspect-[4/5] overflow-hidden">
                <img
                  src={bestseller.image}
                  alt={bestseller.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col">
                <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">
                  SUIDHAGE
                </p>
                <h2 className="text-2xl md:text-3xl font-light mb-3">
                  {bestseller.name}
                </h2>

                <p className="text-lg mb-1">
                  Rs. {bestseller.price.toLocaleString()}.00
                </p>

                <p className="text-xs text-neutral-500 mb-6">
                  <span className="underline cursor-pointer">Shipping</span>{" "}
                  calculated at checkout.
                </p>

                <div className="mb-6">
                  <label className="block text-sm mb-3">Quantity</label>
                  <div className="inline-flex items-center border border-neutral-300 bg-white">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center hover:bg-neutral-50 transition-colors border-r border-neutral-300"
                    >
                      <Minus size={14} />
                    </button>
                    <input
                      type="text"
                      value={quantity}
                      readOnly
                      className="w-12 text-center text-sm focus:outline-none bg-transparent h-10"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center hover:bg-neutral-50 transition-colors border-l border-neutral-300"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleAddToCart}
                    className="w-full border border-foreground py-3 text-sm font-medium hover:bg-white/50 transition-colors bg-white"
                  >
                    Add to cart
                  </button>
                  <button
                    onClick={handleBuyNow}
                    className="w-full bg-foreground text-background py-3 text-sm font-medium hover:bg-neutral-800 transition-colors"
                  >
                    Buy it now
                  </button>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <button
                    onClick={handleShare}
                    className="text-sm text-neutral-600 hover:text-primary flex items-center gap-2"
                  >
                    <Share2 size={16} />
                    Share
                  </button>
                  <Link
                    href={`/product/${bestseller.id}`}
                    className="text-sm text-neutral-600 hover:text-primary flex items-center gap-2"
                  >
                    View full details
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default BestsellerSection;
