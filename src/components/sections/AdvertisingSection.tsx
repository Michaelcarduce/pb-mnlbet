import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/typography/Heading2";
import { Paragraph } from "@/components/typography/Paragraph";
import FeatureCardCarousel from "@/components/ui/FeatureCardCarousel";
import { advertiseFeatureCardData } from "@/data/advertiseFeatureCardData";
import React from "react";

export const AdvertisingSection = () => {
  return (
    <section className={cn("p-8 md:p-12 ")}>
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>
        Why You&apos;ll Love Panalobet&apos;s Advertising
      </Heading2>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Bonuses and promotions are clearly one of the main attractions of online
        gaming, and at Panalobet, we ensure that every player gets the best
        value available. Regarding promotions, there is always something to look
        forward to regardless of your level of experience—newcomer or frequent
        player. Our perks and rewards are particularly exciting for the
        following reasons:
      </Paragraph>
      <div className="bg-[radial-gradient(circle_at_center,_#10122b_0%,_#171717_100%)] justify-center">
        <FeatureCardCarousel
          cards={advertiseFeatureCardData}
          autoRotate={true}
          rotateInterval={10000}
          cardClassName="bg-[radial-gradient(circle_at_center,_#31399a_0%,_#252b73_100%)] border-[1.5px] border-amber-800 text-center shadow-lg hover:shadow-xl transition-shadow"
          activeCardClassName="w-full max-w-lg"
        />
      </div>
      <Paragraph className={cn("my-4 md:my-6 text-center")}>
        At Panalobet, we see your gaming experience as being as fulfilling as it
        might be. Among the several ways we improve your stay with us are
        promotions and bonuses, which guarantees that you always feel driven to
        play, win, and return for more.
      </Paragraph>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Hence, don&apos;t miss these amazing chances! Sign up now, collect your
        welcome bonus, and begin looking at the extensive array of specials
        Panalobet offers. The excitement never ends at Panalobet; fresh bonuses,
        cashback awards, and daily fascinating challenges abound!
      </Paragraph>
    </section>
  );
};
