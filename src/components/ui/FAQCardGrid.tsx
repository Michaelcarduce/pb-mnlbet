import { CardGridItem } from "@/types/cardGridItem";
import { Heading5 } from "@/components/typography/Heading5";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface FAQCardGridProps {
  items: CardGridItem[];
  className?: string;
  cardClassName?: string;
  imageClassName?: string;
  titleClassName?: string;
  isLoading?: boolean;
  skeletonCount?: number;
  limit?: number;
}

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
      repeatType: "mirror" as const,
      ease: "linear",
    },
  },
};

export default function FAQCardGrid({
  items,
  className = "",
  cardClassName = "",
  imageClassName = "",
  titleClassName = "",
  isLoading = false,
  skeletonCount = 2,
  limit = 0,
}: FAQCardGridProps) {
  const displayedItems = limit > 0 ? items.slice(0, limit) : items;

  if (isLoading) {
    return (
      <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
        {[...Array(skeletonCount)].map((_, i) => (
          <div
            key={`skeleton-${i}`}
            className="w-full max-w-[500px] h-[160px] bg-gray-200 rounded-xl animate-pulse border-2 border-yellow-500"
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
          className="relative w-full max-w-[500px]">
          <motion.div
            className="rounded-xl p-[2px]"
            variants={goldBorderVariants}
            initial={{
              background:
                "linear-gradient(135deg, #f9d423 0%, #ff4e50 50%, #f9d423 100%)",
            }}>
            <a
              href={item.link}
              className={`flex flex-col w-full rounded-xl shadow-md overflow-hidden ${cardClassName}`}>
              <div className={`relative w-full aspect-[5/2] ${imageClassName}`}>
                {/* Image covering the whole card */}
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  priority={item.id === 1}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                  placeholder="blur"
                  blurDataURL="/img/placeholder-casino.webp"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/img/fallback-casino.webp";
                  }}
                />

                {/* Centered title overlay */}
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-4">
                  <Heading5
                    className={`text-white text-center ${titleClassName}`}>
                    {item.title}
                  </Heading5>
                </div>
              </div>
            </a>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
