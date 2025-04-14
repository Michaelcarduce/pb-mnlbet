// import { CardGridItem } from "@/types/cardGridItem";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";

// interface CardGridProps {
//   items: CardGridItem[];
//   className?: string;
//   cardClassName?: string;
//   imageClassName?: string;
//   titleClassName?: string;
//   isLoading?: boolean;
//   skeletonCount?: number;
// }

// const cardVariants = {
//   initial: { opacity: 0.7, scale: 1 },
//   hover: {
//     opacity: 1,
//     scale: 1.05,
//     transition: {
//       type: "spring",
//       stiffness: 400,
//       damping: 10,
//     },
//   },
// };

// export default function CardGrid({
//   items,
//   className = "",
//   cardClassName = "",
//   imageClassName = "",
//   titleClassName = "",
//   isLoading = false,
//   skeletonCount = 6,
// }: CardGridProps) {
//   if (isLoading) {
//     return (
//       <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
//         {[...Array(skeletonCount)].map((_, i) => (
//           <div
//             key={`skeleton-${i}`}
//             className="w-[250px] h-[200px] bg-gray-200 rounded-lg animate-pulse"
//           />
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
//       {items.map((item) => (
//         <motion.div
//           key={item.id}
//           initial="initial"
//           whileHover="hover"
//           variants={cardVariants}
//           className="relative">
//           <Link
//             href={item.link}
//             className={`block w-[250px] h-[200px] rounded-lg shadow-md overflow-hidden ${cardClassName}`}>
//             {/* Optimized Image with Lazy Loading */}
//             <div className={`relative w-full h-full ${imageClassName}`}>
//               <Image
//                 src={item.imageUrl}
//                 alt={item.alt}
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 768px) 100vw, 250px"
//                 placeholder="blur"
//                 blurDataURL="/img/placeholder-casino.webp" // Add a small placeholder image
//                 onError={(e) => {
//                   (e.target as HTMLImageElement).src =
//                     "/img/fallback-casino.webp";
//                 }}
//               />
//             </div>

//             {/* Title Overlay with Gradient */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
//               <h3
//                 className={`text-white text-lg font-semibold ${titleClassName}`}>
//                 {item.title}
//               </h3>
//             </div>
//           </Link>
//         </motion.div>
//       ))}
//     </div>
//   );
// }

import { CardGridItem } from "@/types/cardGridItem";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface CardGridProps {
  items: CardGridItem[];
  className?: string;
  cardClassName?: string;
  imageClassName?: string;
  titleClassName?: string;
  isLoading?: boolean;
  skeletonCount?: number;
  limit?: number;
}

// Properly typed variants
const cardVariants: Variants = {
  initial: { opacity: 0.7, scale: 1 },
  hover: {
    opacity: 1,
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const goldBorderVariants: Variants = {
  hover: {
    background: [
      "linear-gradient(135deg, #f9d423 0%, #ff4e50 50%, #f9d423 100%)",
      "linear-gradient(135deg, #ff4e50 0%, #f9d423 50%, #ff4e50 100%)",
    ],
    boxShadow: "0 0 15px rgba(255, 215, 0, 0.7)",
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "mirror" as const, // Explicitly typed as "mirror"
      ease: "linear",
    },
  },
};

export default function CardGrid({
  items,
  className = "",
  cardClassName = "",
  imageClassName = "",
  titleClassName = "",
  isLoading = false,
  skeletonCount = 6,
  limit = 0,
}: CardGridProps) {
  const displayedItems = limit > 0 ? items.slice(0, limit) : items;

  if (isLoading) {
    return (
      <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
        {[...Array(skeletonCount)].map((_, i) => (
          <div
            key={`skeleton-${i}`}
            className="w-[250px] h-[200px] bg-gray-200 rounded-lg animate-pulse border-2 border-yellow-500"
          />
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
      {displayedItems.map((item) => (
        <motion.div
          key={item.id}
          initial="initial"
          whileHover="hover"
          variants={cardVariants}
          className="relative">
          {/* Animated Gold Border Wrapper */}
          <motion.div
            className="rounded-lg p-[2px]"
            variants={goldBorderVariants}
            initial={{
              background:
                "linear-gradient(135deg, #f9d423 0%, #ff4e50 50%, #f9d423 100%)",
            }}>
            <Link
              href={item.link}
              className={`block w-[250px] h-[200px] rounded-[calc(0.5rem-2px)] shadow-md overflow-hidden bg-white ${cardClassName}`}>
              {/* Optimized Image with Lazy Loading */}
              <div className={`relative w-full h-full ${imageClassName}`}>
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 250px"
                  placeholder="blur"
                  blurDataURL="/img/placeholder-casino.webp"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/img/fallback-casino.webp";
                  }}
                />
              </div>

              {/* Title Overlay with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <h3
                  className={`text-white text-lg font-semibold ${titleClassName}`}>
                  {item.title}
                </h3>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
