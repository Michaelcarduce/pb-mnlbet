import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface MetaTextProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

export const Meta = ({ children, className, ...props }: MetaTextProps) => {
  return (
    <span
      className={cn("text-xs text-gray-500 dark:text-gray-400", className)}
      {...props}>
      {children}
    </span>
  );
};
