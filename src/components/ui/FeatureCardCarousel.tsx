// import { useState, useEffect } from "react";
// import { FeatureCard } from "@/types/featureCard";
// import { motion, AnimatePresence } from "framer-motion";

// interface FeatureCardCarouselProps {
//   cards: FeatureCard[];
//   autoRotate?: boolean;
//   rotateInterval?: number;
//   className?: string;
//   cardClassName?: string;
//   activeCardClassName?: string;
// }

// export default function FeatureCardCarousel({
//   cards,
//   autoRotate = true,
//   rotateInterval = 5000,
//   className = "",
//   cardClassName = "",
//   activeCardClassName = "",
// }: FeatureCardCarouselProps) {
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Auto-rotation effect
//   useEffect(() => {
//     if (!autoRotate || cards.length <= 1) return;

//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % cards.length);
//     }, rotateInterval);

//     return () => clearInterval(interval);
//   }, [autoRotate, rotateInterval, cards.length]);

//   const goToCard = (index: number) => {
//     setActiveIndex(index);
//   };

//   const getVisibleCards = () => {
//     const total = cards.length;
//     if (total <= 1) return cards;

//     let start = activeIndex - 1;
//     if (activeIndex === 0) start = total - 1;
//     if (activeIndex === total - 1) start = activeIndex - 1;

//     return [cards[start], cards[activeIndex], cards[(activeIndex + 1) % total]];
//   };

//   if (!cards || cards.length === 0) {
//     return <div className="text-center p-4">No features available</div>;
//   }

//   return (
//     <div className={`w-full ${className}`}>
//       {/* Main Feature Card with Animation */}
//       <div className="mb-2 md:mb-4 flex items-center justify-center">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={cards[activeIndex].id}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.3 }}
//             className={`${cardClassName} ${activeCardClassName} rounded-[50px] p-4 md:p-6 w-full max-w-lg`}>
//             <h3 className="text-xl md:text-2xl font-semibold tracking-tight bg-gradient-to-b from-[#c6c6af] via-[#c6c6af] via-[#c6c6af] to-[#c6c6af] bg-clip-text text-transparent">
//               {cards[activeIndex].title}
//             </h3>
//             <p className="text-gray-300">{cards[activeIndex].description}</p>
//             {cards[activeIndex].icon && (
//               <div className="">{cards[activeIndex].icon}</div>
//             )}
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       <div className="flex justify-center gap-2 mt-4 md:mt-8">
//         {cards.map((card, index) => (
//           <button
//             key={card.id}
//             onClick={() => goToCard(index)}
//             className={`w-3 h-3 rounded-full transition-colors ${
//               index === activeIndex ? "bg-gray-100 w-6" : "bg-gray-500"
//             }`}
//             aria-label={`Go to feature ${index + 1}`}
//           />
//         ))}
//       </div>

//       {cards.length > 1 && (
//         <div className="flex justify-center gap-4 mt-2 md:mt-4">
//           {getVisibleCards().map((card) => {
//             const isActive = card.id === cards[activeIndex].id;
//             return (
//               <button
//                 key={card.id}
//                 onClick={() =>
//                   goToCard(cards.findIndex((c) => c.id === card.id))
//                 }
//                 className={`text-left rounded-md p-2 md:p-3 ${cardClassName} ${
//                   isActive
//                     ? activeCardClassName
//                     : "opacity-30 hover:opacity-100"
//                 } w-1/3 max-w-[200px] transition-all`}>
//                 <h4 className="font-medium text-xs">{card.title}</h4>
//                 <p className="text-xs text-gray-300 line-clamp-2">
//                   {card.description}
//                 </p>
//               </button>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// components/ui/FeatureCardCarousel.tsx
import { useState, useEffect } from "react";
import { FeatureCard } from "@/types/featureCard";
import { motion, AnimatePresence } from "framer-motion";

interface FeatureCardCarouselProps {
  cards: FeatureCard[];
  autoRotate?: boolean;
  rotateInterval?: number;
  className?: string;
  cardClassName?: string;
  activeCardClassName?: string;
}

export default function FeatureCardCarousel({
  cards,
  autoRotate = true,
  rotateInterval = 5000,
  className = "",
  cardClassName = "",
  activeCardClassName = "",
}: FeatureCardCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotation effect
  useEffect(() => {
    if (!autoRotate || cards.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, rotateInterval);

    return () => clearInterval(interval);
  }, [autoRotate, rotateInterval, cards.length]);

  const goToCard = (index: number) => {
    setActiveIndex(index);
  };

  if (!cards || cards.length === 0) {
    return <div className="text-center p-4">No features available</div>;
  }

  return (
    <div className={`w-full ${className}`}>
      {/* Main Feature Card with Animation */}
      <div className="mb-2 md:mb-4 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={cards[activeIndex].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className={`${cardClassName} ${activeCardClassName} rounded-[50px] p-4 md:p-6`}>
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight bg-gradient-to-b from-[#c6c6af] via-[#c6c6af] via-[#c6c6af] to-[#c6c6af] bg-clip-text text-transparent">
              {cards[activeIndex].title}
            </h3>
            <p className="text-gray-300">{cards[activeIndex].description}</p>
            {cards[activeIndex].icon && (
              <div className="">{cards[activeIndex].icon}</div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-4 md:mt-8">
        {cards.map((card, index) => (
          <button
            key={card.id}
            onClick={() => goToCard(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === activeIndex ? "bg-gray-100 w-6" : "bg-gray-500"
            }`}
            aria-label={`Go to feature ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail Navigation - Now scrollable */}
      {cards.length > 1 && (
        <div className="relative">
          <div className="flex overflow-x-auto py-4 gap-2 md:gap-4 scrollbar-hide">
            {cards.map((card) => {
              const isActive = card.id === cards[activeIndex].id;
              return (
                <button
                  key={card.id}
                  onClick={() =>
                    goToCard(cards.findIndex((c) => c.id === card.id))
                  }
                  className={`flex-shrink-0 text-left rounded-md p-2 md:p-3 ${cardClassName} ${
                    isActive
                      ? activeCardClassName
                      : "opacity-30 hover:opacity-100"
                  } w-[150px] md:w-[200px] transition-all`}>
                  <h4 className="font-medium text-xs">{card.title}</h4>{" "}
                  <p className="text-xs text-gray-300 line-clamp-2">
                    {card.description}{" "}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
