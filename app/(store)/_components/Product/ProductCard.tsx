"use client";

import React from "react";
import Link from "next/link";
import { Product } from "@/app/_shared/types";
import { FadeIn } from "../UI/FadeIn";

interface ProductCardProps {
  product: Product;
  delay?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, delay = 0 }) => {
  return (
    <FadeIn delay={delay} className="group flex flex-col w-full">
      <Link
        href={`/product/${product.id}`}
        className="block relative w-full aspect-square overflow-hidden mb-3 bg-neutral-50"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          loading="lazy"
        />
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-background px-2 py-1 text-[10px] font-medium uppercase tracking-widest shadow-sm">
            New
          </div>
        )}
      </Link>

      <div className="flex flex-col items-start w-full">
        <Link
          href={`/product/${product.id}`}
          className="text-[13px] text-foreground font-normal hover:text-neutral-600 transition-colors mb-1 truncate w-full"
        >
          {product.name}
        </Link>

        <p className="text-[10px] text-neutral-400 uppercase tracking-widest mb-1">
          SUIDHAGE
        </p>

        <p className="text-[13px] text-foreground font-normal mb-4">
          Rs. {product.price.toLocaleString()}.00
        </p>

        <Link
          href={`/product/${product.id}`}
          className="w-full border border-foreground bg-background py-2.5 text-xs font-normal text-foreground hover:bg-foreground hover:text-background transition-all duration-200 text-center block"
        >
          Add to cart
        </Link>
      </div>
    </FadeIn>
  );
};

export default ProductCard;
