import React from "react";
import { FadeIn } from "./FadeIn";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  className = "",
}) => {
  return (
    <FadeIn>
      <div className={`bg-accent py-8 text-center mb-8 ${className}`}>
        <h1
          className="text-3xl md:text-5xl text-foreground tracking-wide uppercase"
          style={{ fontFamily: "Assistant", fontWeight: 500 }}
        >
          {title}
        </h1>
      </div>
    </FadeIn>
  );
};
