"use client";

import React from "react";
import Link from "next/link";

export default function AccountFooter() {
  return (
    <footer className="border-t border-neutral-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/refund" className="text-blue-600 hover:underline">
            Refund policy
          </Link>
          <Link href="/shipping" className="text-blue-600 hover:underline">
            Shipping
          </Link>
          <Link href="/privacy" className="text-blue-600 hover:underline">
            Privacy policy
          </Link>
          <Link href="/terms" className="text-blue-600 hover:underline">
            Terms of service
          </Link>
          <Link href="/contact" className="text-blue-600 hover:underline">
            Contact information
          </Link>
        </div>
      </div>
    </footer>
  );
}
