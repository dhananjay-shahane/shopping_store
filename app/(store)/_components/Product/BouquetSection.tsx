"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { X, Minus, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/app/_shared/context/CartContext";
import { BOUQUET_FLOWERS } from "@/app/_shared/constants";
import { Product } from "@/app/_shared/types";

const BouquetSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const { addToCart } = useCart();
  const scrollRef = useRef<HTMLDivElement>(null);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(BOUQUET_FLOWERS.length / itemsPerPage);

  const handleOpenPopup = (product: Product) => {
    setSelectedProduct(product);
    if (product.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0].name);
    }
    setQuantity(1);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart({
        id: `${selectedProduct.id}-${Date.now()}`,
        product: selectedProduct,
        quantity,
        size: "Standard",
        type: selectedColor || "Default",
      });
      setSelectedProduct(null);
      setQuantity(1);
    }
  };

  const handleDirectAddToCart = (product: Product) => {
    addToCart({
      id: `${product.id}-${Date.now()}`,
      product: product,
      quantity: 1,
      size: "Standard",
      type: "Default",
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  return (
    <>
      <section className="py-4">
        <div className="bg-accent py-8 text-center mb-8">
          <h1 className="text-2xl md:text-3xl text-foreground font-medium tracking-wide">
            Make your own bouquet
          </h1>
        </div>

        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-8 space-y-1 text-neutral-600 text-md">
            <p>1. Add your favourite flowers to the cart</p>
            <p>2. Add a choosing of your favourite sheet</p>
            <p>3. That's it! We'll prepare an exceptional bouquet for you!</p>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {BOUQUET_FLOWERS.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[220px] md:w-[250px] group"
              >
                <div className="aspect-[4/5] bg-neutral-100 mb-3 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {(product.isNew || product.originalPrice) && (
                    <div className="absolute top-3 left-3 bg-foreground text-background px-3 py-1 text-xs font-medium">
                      Sale
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1 truncate">
                    {product.name}
                  </h3>
                  <p className="text-xs text-neutral-400 uppercase tracking-wide mb-1">
                    SUIDHAGE
                  </p>
                  <div className="flex items-center gap-2 mb-3">
                    {product.originalPrice && (
                      <span className="text-xs text-neutral-400 line-through">
                        Rs. {product.originalPrice.toLocaleString()}.00
                      </span>
                    )}
                    <span className="text-sm font-medium">
                      Rs. {product.price.toLocaleString()}.00
                    </span>
                  </div>
                  {product.hasVariants ? (
                    <button
                      onClick={() => handleOpenPopup(product)}
                      className="w-full border border-neutral-300 py-2.5 text-xs hover:bg-neutral-50 transition-colors"
                    >
                      Choose options
                    </button>
                  ) : (
                    <button
                      onClick={() => handleDirectAddToCart(product)}
                      className="w-full border border-neutral-300 py-2.5 text-xs hover:bg-neutral-50 transition-colors"
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-6 mb-6">
            <button
              onClick={scrollLeft}
              className="p-1 hover:text-primary text-neutral-400 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-sm text-neutral-500">
              {currentPage}/{totalPages}
            </span>
            <button
              onClick={scrollRight}
              className="p-1 hover:text-primary text-neutral-400 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="text-center">
            <Link
              href="/category/phool"
              className="inline-block bg-foreground text-background px-8 py-3 text-xs font-medium uppercase tracking-wide hover:bg-neutral-800 transition-colors"
            >
              View all
            </Link>
          </div>
        </div>
      </section>

      {selectedProduct && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-60 animate-in fade-in duration-200"
            onClick={() => setSelectedProduct(null)}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <div
              className="bg-background max-w-4xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto animate-in zoom-in-95 fade-in duration-200 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 hover:bg-neutral-100 rounded-full z-10 bg-white/80"
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="aspect-square bg-neutral-50">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 md:p-8 flex flex-col">
                  <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">
                    SUIDHAGE
                  </p>
                  <h2 className="text-2xl md:text-3xl font-light mb-3">
                    {selectedProduct.name}
                  </h2>

                  <p className="text-lg mb-1">
                    Rs. {selectedProduct.price.toLocaleString()}.00
                  </p>

                  <p className="text-xs text-neutral-500 mb-6">
                    <span className="underline cursor-pointer">Shipping</span>{" "}
                    calculated at checkout.
                  </p>

                  {selectedProduct.colors &&
                    selectedProduct.colors.length > 0 && (
                      <div className="mb-6">
                        <label className="block text-sm mb-3">
                          Color:{" "}
                          <span className="font-medium">
                            {selectedColor
                              .replace(" tulip", "")
                              .replace(" rose branch", "")
                              .replace(" lily", "")}
                          </span>
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {selectedProduct.colors.map((color) => (
                            <button
                              key={color.name}
                              onClick={() => setSelectedColor(color.name)}
                              className={`w-9 h-9 rounded-full border-2 transition-all ${
                                selectedColor === color.name
                                  ? "border-foreground ring-2 ring-offset-2 ring-neutral-300"
                                  : "border-neutral-200 hover:border-neutral-400"
                              }`}
                              style={{ backgroundColor: color.color }}
                              title={color.name}
                            />
                          ))}
                        </div>
                      </div>
                    )}

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

                  <div className="flex flex-col gap-3 mt-auto">
                    <button
                      onClick={handleAddToCart}
                      className="w-full border border-foreground py-3 text-sm font-medium hover:bg-neutral-50 transition-colors"
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

                  <Link
                    href={`/product/${selectedProduct.id}`}
                    className="mt-6 text-sm text-neutral-600 hover:text-primary flex items-center gap-2 justify-end"
                  >
                    View full details
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BouquetSection;
