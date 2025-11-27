"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { PRODUCTS, BOUQUET_FLOWERS } from "@/app/_shared/constants";
import { useCart } from "@/app/_shared/context/CartContext";
import ProductCard from "../../_components/Product/ProductCard";
import {
  ChevronDown,
  Check,
  Minus,
  Plus,
  Send,
  Heart,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart, setCartOpen } = useCart();

  const allProducts = [...PRODUCTS, ...BOUQUET_FLOWERS];
  const product = allProducts.find((p) => p.id === params.id);

  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0]?.name || "",
  );
  const [quantity, setQuantity] = useState(1);
  const [addGiftWrap, setAddGiftWrap] = useState(false);
  const [customMessage, setCustomMessage] = useState("");
  const [activeTab, setActiveTab] = useState<
    "description" | "details" | "care"
  >("description");

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <button
            onClick={() => router.push("/shop")}
            className="text-primary hover:underline"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart({
      id: `${product.id}-${Date.now()}`,
      product,
      quantity,
      color: selectedColor || undefined,
      giftWrap: addGiftWrap,
      customMessage: customMessage || undefined,
    });
  };

  const getCategorySlug = (category: string) => {
    return category
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  };

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="container max-w-6xl mx-auto py-8">
        <div className="text-xs uppercase tracking-widest text-neutral-500 mb-8">
          <span
            className="cursor-pointer hover:text-primary"
            onClick={() => router.push("/")}
          >
            Home
          </span>{" "}
          /
          <span
            className="cursor-pointer hover:text-primary mx-1"
            onClick={() =>
              router.push(`/category/${getCategorySlug(product.category)}`)
            }
          >
            {product.category}
          </span>{" "}
          /
          <span className="text-foreground mx-1 font-medium">
            {product.name}
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2 aspect-[4/5] bg-neutral-100 overflow-hidden rounded-lg group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
              </div>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-neutral-100 overflow-hidden rounded-lg group"
                >
                  <img
                    src={product.image}
                    alt={`${product.name} - View ${i}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-2/5 lg:sticky lg:top-24 lg:self-start">
            <div className="flex items-center gap-2 mb-2">
              {product.isNew && (
                <span className="bg-primary text-white text-[10px] font-bold uppercase px-2 py-1 rounded">
                  New
                </span>
              )}
              <span className="text-neutral-400 text-xs font-medium uppercase tracking-widest">
                SUIDHAGA
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl text-foreground font-medium mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <p className="text-2xl text-primary font-semibold">
                Rs. {product.price.toLocaleString()}
              </p>
              {product.originalPrice && (
                <p className="text-lg text-neutral-400 line-through">
                  Rs. {product.originalPrice.toLocaleString()}
                </p>
              )}
            </div>

            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="flex items-center gap-6 text-xs text-neutral-500 mb-8 pb-6 border-b border-neutral-100">
              <div className="flex items-center gap-1.5">
                <Truck size={14} />
                <span>Free shipping above Rs. 1099</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield size={14} />
                <span>Handmade with love</span>
              </div>
            </div>

            <div className="space-y-6">
              {product.hasVariants &&
                product.colors &&
                product.colors.length > 0 && (
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest text-neutral-700 mb-3">
                      Color:{" "}
                      <span className="font-normal normal-case text-neutral-500">
                        {selectedColor}
                      </span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((colorOption) => (
                        <button
                          key={colorOption.name}
                          onClick={() => setSelectedColor(colorOption.name)}
                          className={`w-8 h-8 rounded-full border-2 transition-all ${
                            selectedColor === colorOption.name
                              ? "border-primary ring-2 ring-primary ring-offset-2"
                              : "border-neutral-200 hover:border-neutral-400"
                          }`}
                          style={{ backgroundColor: colorOption.color }}
                          title={colorOption.name}
                        />
                      ))}
                    </div>
                  </div>
                )}

              <div>
                <label className="block text-xs font-medium uppercase tracking-widest text-neutral-700 mb-3">
                  Quantity
                </label>
                <div className="inline-flex items-center border border-neutral-200 rounded-lg bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-11 h-11 flex items-center justify-center text-neutral-500 hover:bg-neutral-50 rounded-l-lg transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center text-sm font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-11 h-11 flex items-center justify-center text-neutral-500 hover:bg-neutral-50 rounded-r-lg transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 py-2">
                  <div
                    className={`w-5 h-5 border-2 rounded cursor-pointer flex items-center justify-center transition-colors ${addGiftWrap ? "bg-primary border-primary" : "border-neutral-300"}`}
                    onClick={() => setAddGiftWrap(!addGiftWrap)}
                  >
                    {addGiftWrap && <Check size={12} className="text-white" />}
                  </div>
                  <label
                    className="text-sm text-neutral-600 cursor-pointer select-none"
                    onClick={() => setAddGiftWrap(!addGiftWrap)}
                  >
                    Add Gift Wrapping - Rs. 50
                  </label>
                </div>

                {addGiftWrap && (
                  <div>
                    <input
                      type="text"
                      placeholder="Add a gift message (optional)"
                      value={customMessage}
                      onChange={(e) => setCustomMessage(e.target.value)}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-primary"
                      maxLength={100}
                    />
                  </div>
                )}
              </div>

              <div className="bg-accent/50 rounded-lg p-4 text-sm text-neutral-600">
                <p className="font-medium text-foreground mb-1">
                  Handcrafted with Care
                </p>
                <p>
                  Each piece is made to order. Please allow 5-7 days for
                  preparation before shipping.
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <button
                  onClick={handleAddToCart}
                  className="w-full py-4 bg-foreground text-background text-sm font-medium uppercase tracking-wider rounded-lg hover:bg-neutral-800 transition-all"
                >
                  Add to cart - Rs.{" "}
                  {(
                    product.price * quantity +
                    (addGiftWrap ? 50 : 0)
                  ).toLocaleString()}
                </button>
                <button
                  onClick={() => {
                    handleAddToCart();
                    setCartOpen(true);
                    router.push("/checkout");
                  }}
                  className="w-full py-4 bg-primary text-white text-sm font-medium uppercase tracking-wider rounded-lg hover:bg-primary/90 transition-all"
                >
                  Buy it now
                </button>

                <div className="flex items-center justify-center gap-6 pt-2">
                  <button className="flex items-center gap-2 text-sm text-neutral-500 hover:text-primary transition-colors">
                    <Heart size={18} /> Add to Wishlist
                  </button>
                  <button className="flex items-center gap-2 text-sm text-neutral-500 hover:text-primary transition-colors">
                    <Send size={18} /> Share
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100">
              <div className="flex gap-6 border-b border-neutral-100 mb-4">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`pb-3 text-sm font-medium transition-colors ${activeTab === "description" ? "text-foreground border-b-2 border-foreground" : "text-neutral-400"}`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab("details")}
                  className={`pb-3 text-sm font-medium transition-colors ${activeTab === "details" ? "text-foreground border-b-2 border-foreground" : "text-neutral-400"}`}
                >
                  Details
                </button>
                <button
                  onClick={() => setActiveTab("care")}
                  className={`pb-3 text-sm font-medium transition-colors ${activeTab === "care" ? "text-foreground border-b-2 border-foreground" : "text-neutral-400"}`}
                >
                  Care
                </button>
              </div>

              <div className="text-sm text-neutral-600 leading-relaxed">
                {activeTab === "description" && (
                  <p>
                    {product.description} This piece is handcrafted with premium
                    quality yarn and materials. Perfect for gifting or adding a
                    unique touch to your home decor.
                  </p>
                )}
                {activeTab === "details" && (
                  <ul className="space-y-2">
                    <li>
                      <span className="font-medium text-foreground">
                        Material:
                      </span>{" "}
                      Premium quality acrylic yarn
                    </li>
                    <li>
                      <span className="font-medium text-foreground">
                        Craft:
                      </span>{" "}
                      Handmade crochet
                    </li>
                    <li>
                      <span className="font-medium text-foreground">
                        Made in:
                      </span>{" "}
                      India
                    </li>
                    <li>
                      <span className="font-medium text-foreground">
                        Customization:
                      </span>{" "}
                      Available on request
                    </li>
                  </ul>
                )}
                {activeTab === "care" && (
                  <ul className="space-y-2">
                    <li>Keep away from direct sunlight to preserve colors</li>
                    <li>Dust gently with a soft brush</li>
                    <li>Store in a cool, dry place</li>
                    <li>Handle with care to maintain shape</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-12 border-t border-neutral-100">
            <h3 className="text-2xl text-foreground mb-8 font-medium">
              You may also like
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((p, idx) => (
                <ProductCard key={p.id} product={p} delay={idx * 100} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
