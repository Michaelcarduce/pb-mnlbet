"use client";

import { motion } from "framer-motion";

interface AnimatedHamburgerProps {
  isOpen: boolean;
  className?: string;
  color?: string;
  size?: number;
}

export const AnimatedHamburger = ({
  isOpen,
  className = "",
  color = "white",
  size = 24,
}: AnimatedHamburgerProps) => {
  return (
    <motion.div
      className={`relative flex flex-col justify-between ${className}`}
      style={{ width: size, height: size }}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      aria-hidden="true">
      <motion.span
        className="w-full h-[2px] block rounded"
        style={{ backgroundColor: color }}
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: 45, y: 7 },
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="w-full h-[2px] block rounded"
        style={{ backgroundColor: color }}
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <motion.span
        className="w-full h-[2px] block rounded"
        style={{ backgroundColor: color }}
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: -45, y: -8 },
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};
