import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/typography/Heading2";
import { Paragraph } from "@/components/typography/Paragraph";
import FeatureCardCarousel from "@/components/ui/FeatureCardCarousel";
import { whyPanalobetFeatureCardData } from "@/data/whyPanalobetFeatureCardData";
import React from "react";

export const WhyPanalobetSection = () => {
  return (
    <section className={cn("p-8 md:p-12 ")}>
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>
        Why Panalobet?
      </Heading2>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        At Panalobet, we take great satisfaction in providing a thrilling, safe,
        secure gaming experience. Here's the reason we're fast rising to be the
        top pick among Filipino players:
      </Paragraph>
      <div className="bg-[radial-gradient(circle_at_center,_#10122b_0%,_#171717_100%)] justify-center">
        <FeatureCardCarousel
          cards={whyPanalobetFeatureCardData}
          autoRotate={true}
          rotateInterval={10000}
          cardClassName="bg-[radial-gradient(circle_at_center,_#31399a_0%,_#252b73_100%)] border-[1.5px] border-amber-800 text-center shadow-lg hover:shadow-xl transition-shadow"
          activeCardClassName="w-full max-w-3xl"
        />
      </div>
    </section>
  );
};
