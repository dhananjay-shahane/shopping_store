import React from "react";
import type { Metadata } from "next";
import { CartProvider } from "@/app/_shared/context/CartContext";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Sui Dhaga - Handcrafted Crochet Flowers",
  description: "Premium handcrafted crochet flowers and gifts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ fontFamily: "Assistant, sans-serif" }}>
      <head>
        <script
          src="https://checkout.razorpay.com/v1/checkout.js"
          async
        ></script>
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "Assistant, sans-serif" }}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
