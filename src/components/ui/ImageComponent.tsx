import Image from "next/image";
import { motion } from "framer-motion";

interface ImageComponentProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  imgClassName?: string;
  borderRadius?: string; // Tailwind classes like 'rounded-lg'
  shadow?: string; // Tailwind classes like 'shadow-md'
  hoverScale?: number;
  hoverShadow?: string; // Enhanced shadow on hover
  duration?: number; // Animation duration in seconds
  priority?: boolean;
  quality?: number;
  blurDataURL?: string;
}

export const ImageComponent = ({
  src,
  alt,
  width = 500,
  height = 300,
  className = "",
  imgClassName = "",
  borderRadius = "rounded-md",
  shadow = "shadow-sm",
  hoverScale = 1.03,
  hoverShadow = "shadow-lg",
  duration = 0.3,
  priority = false,
  quality = 85,
  blurDataURL = "/img/placeholder.webp",
}: ImageComponentProps) => {
  return (
    <motion.div
      className={`relative overflow-hidden ${borderRadius} ${shadow} ${className}`}
      whileHover={{
        scale: hoverScale,
        transition: { duration },
      }}
      initial={{ opacity: 0.9 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <div className={`relative w-full h-full ${borderRadius}`}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`object-cover w-full h-full transition-all duration-${
            duration * 1000
          } hover:${hoverShadow} ${imgClassName}`}
          quality={quality}
          priority={priority}
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </div>
    </motion.div>
  );
};
