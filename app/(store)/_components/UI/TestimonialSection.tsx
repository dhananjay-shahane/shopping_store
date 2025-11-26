
import React from "react";
import { TestimonialSlider } from "./TestimonialSlider";

export default function TestimonialSection() {
  return (
    <section className="py-12 overflow-hidden">
      <div className="bg-accent py-8 text-center mb-10">
        <h1 className="text-2xl md:text-3xl text-foreground font-medium tracking-wide uppercase">
          HAPPY CUSTOMERS
        </h1>
      </div>

      <TestimonialSlider />
    </section>
  );
}
