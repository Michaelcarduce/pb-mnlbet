import { useState } from "react";
import { PromotionBannerItem } from "@/types/promotionBanner";

interface FeaturedPromotionBannerProps {
  items: PromotionBannerItem[];
  className?: string;
  bannerClassName?: string;
  thumbnailClassName?: string;
  activeThumbnailClassName?: string;
  inactiveThumbnailClassName?: string;
  showTitle?: boolean;
  titleClassName?: string;
  maxThumbnails?: number;
}

export default function FeaturedPromotionBanner({
  items,
  className = "",
  bannerClassName = "w-full overflow-hidden rounded-lg shadow-lg mb-2 md:mb-4",
  thumbnailClassName = "w-20 h-12 md:w-24 md:h-16 object-cover rounded-md",
  activeThumbnailClassName = "opacity-100 ring-2 ring-primary",
  inactiveThumbnailClassName = "opacity-50 hover:opacity-75",
  showTitle = true,
  titleClassName = "text-center mt-1 md:mt-2 text-base md:text-lg font-medium",
  maxThumbnails = 3,
}: FeaturedPromotionBannerProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const getVisibleThumbnails = () => {
    const total = items.length;
    if (total <= maxThumbnails) return items;

    let start = activeIndex - Math.floor(maxThumbnails / 2);

    // Adjust for start and end of array
    if (start < 0) start = 0;
    if (start > total - maxThumbnails) start = total - maxThumbnails;

    return items.slice(start, start + maxThumbnails);
  };

  if (!items || items.length === 0) {
    return <div className="text-center p-4">No banners available</div>;
  }

  return (
    <div className={`w-full mb-6 md:mb-8 ${className}`}>
      <div className={bannerClassName}>
        <a href={items[activeIndex].link}>
          <img
            src={items[activeIndex].imageUrl}
            alt={items[activeIndex].alt}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </a>
      </div>

      <div className="flex justify-center gap-3">
        {getVisibleThumbnails().map((item) => {
          const isActive = items[activeIndex].id === item.id;
          return (
            <button
              key={item.id}
              onClick={() =>
                goToSlide(items.findIndex((i) => i.id === item.id))
              }
              className={`transition-all duration-200 ${
                isActive ? activeThumbnailClassName : inactiveThumbnailClassName
              }`}
              aria-label={`View ${item.title}`}>
              <img
                src={item.imageUrl}
                alt={item.alt}
                className={thumbnailClassName}
              />
            </button>
          );
        })}
      </div>

      {/* Optional Title */}
      {showTitle && (
        <div className={titleClassName}>{items[activeIndex].title}</div>
      )}
    </div>
  );
}
