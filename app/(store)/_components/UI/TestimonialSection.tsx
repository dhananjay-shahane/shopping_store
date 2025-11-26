import React from "react";
import { TestimonialSlider } from "./TestimonialSlider";
import { SectionHeading } from "./SectionHeading";

export default function TestimonialSection() {
  return (
    <section className="py-4 overflow-hidden">
      <SectionHeading title="HAPPY CUSTOMERS" />

      <TestimonialSlider />
    </section>
  );
}
