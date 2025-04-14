import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Heading3Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

export const Heading3 = ({ children, className, ...props }: Heading3Props) => {
  return (
    <h3
      className={cn(
        "text-2xl md:text-3xl font-semibold tracking-tight bg-gradient-to-b from-[#c6c6af] via-[#c6c6af] via-[#c6c6af] to-[#c6c6af] bg-clip-text text-transparent",
        className
      )}
      {...props}>
      {children}
    </h3>
  );
};
