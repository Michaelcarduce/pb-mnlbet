import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Heading1Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

export const Heading1 = ({ children, className, ...props }: Heading1Props) => {
  return (
    <h1
      className={cn(
        "text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-[#FFEA00] via-[#FFD700] via-[#DAA520] to-[#B8860B] bg-clip-text text-transparent",
        className
      )}
      {...props}>
      {children}
    </h1>
  );
};
