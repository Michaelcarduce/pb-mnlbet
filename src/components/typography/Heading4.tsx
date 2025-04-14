import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Heading4Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

export const Heading4 = ({ children, className, ...props }: Heading4Props) => {
  return (
    <h3
      className={cn("text-xl md:text-2xl font-semibold", className)}
      {...props}>
      {children}
    </h3>
  );
};
