import { newsCardGridItem } from "@/types/newsCardGridItem";
import { Heading5 } from "@/components/typography/Heading5";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface RecentNewsCardGridProps {
  items: newsCardGridItem[];
  className?: string;
  cardClassName?: string;
  imageClassName?: string;
  titleClassName?: string;
  subTitleClassName?: string;
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

export default function RecentNewsCardGrid({
  items,
  className = "",
  cardClassName = "",
  imageClassName = "",
  titleClassName = "",
  subTitleClassName = "",
  isLoading = false,
  skeletonCount = 2,
  limit = 0,
}: RecentNewsCardGridProps) {
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
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={`/news/${item.slug}`}
              className={`flex flex-col w-full rounded-xl shadow-md overflow-hidden ${cardClassName}`}>
              {/* Fully responsive image container */}
              <div className={`relative w-full aspect-[5/2] ${imageClassName}`}>
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  fill // This makes the image fill the container
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
              </div>

              <div className="flex flex-col p-4">
                <Heading5 className={`${titleClassName}`}>
                  {item.title}
                </Heading5>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
