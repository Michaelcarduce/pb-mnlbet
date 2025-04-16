import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/typography/Heading2";
import FeatureCardCarousel from "@/components/ui/FeatureCardCarousel";
import { sabongMainCharacteristicsData } from "@/data/sabongMainCharacteristicsData";
import React from "react";

export const SabongMainCharacteristicsSection = () => {
  return (
    <section className={cn("p-8 md:p-12 ")}>
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>
        Main Characteristics of Panalobet Sabong Live
      </Heading2>
      <div className="bg-[radial-gradient(circle_at_center,_#10122b_0%,_#171717_100%)] justify-center">
        <FeatureCardCarousel
          cards={sabongMainCharacteristicsData}
          autoRotate={true}
          rotateInterval={10000}
          cardClassName="bg-[radial-gradient(circle_at_center,_#31399a_0%,_#252b73_100%)] border-[1.5px] border-amber-800 text-center shadow-lg hover:shadow-xl transition-shadow"
          activeCardClassName="w-full max-w-lg"
        />
      </div>
    </section>
  );
};
