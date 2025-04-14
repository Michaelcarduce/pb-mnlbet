import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Heading2Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

export const Heading2 = ({ children, className, ...props }: Heading2Props) => {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-b from-[#c6c6af] via-[#e5e5d5] via-[#d8b156] to-[#a3a285] bg-clip-text text-transparent",
        className
      )}
      {...props}>
      {children}
    </h2>
  );
};
