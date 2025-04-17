"use client";

import { SlotPromotionCardGridSection } from "./_component/SlotPromotionCardGridSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { SlotSymbolSection } from "./_component/SlotSymbolSection";
import { SlotPaylineBetlineSection } from "./_component/SlotPaylineBetlineSection";
import { SlotTechniquesSection } from "./_component/SlotTechniquesSection";
import { SlotRTPinScatterSection } from "./_component/SlotRTPinScatterSection";
import { SlotGcashSection } from "./_component/SlotGcashSection";
import { SlotGcashBenefitsSection } from "./_component/SlotGcashBenefitsSection";

export default function Slot() {
  return (
    <main>
      <SlotPromotionCardGridSection />
      <IntroSection
        title="Making Simple Transactions with GCash for Panalobet Slots"
        description={[
          "For many Filipino players, online slots have been a mainstay in the entertainment scene; Panalobet Casino has become one of the best venues providing some of the most fascinating and profitable slot games. Particularly scatter slots, these games are much-liked for their original features and large reward possibilities. Among the several elements that appeal to players of Panalobet, scatter games rank among the most. From free spins and bonus rounds to multipliers, scatter symbols open a world of fascinating possibilities and are a favorite for everyone looking for a fast gaming experience.",
          "Leading e-wallet in the Philippines, GCash, has made it quite simple and handy for players to deposit, play, and withdraw money for scatter slots on Panalobet while handling funds for online gaming. While exploring the fascinating characteristics that make scatter slots such a great option for Filipino players, this tutorial will lead you through how you might easily use GCash for your Panalobet Slots transactions.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        descriptionClassName="mx-auto max-w-5xl"
        paragraphClassName="text-center text-gray-300"
      />
      <FeatureSection
        title="Definition of Scatter Symbols"
        description={[
          "Understanding what makes scatter symbols so crucial in online slot games will help you better appreciate the specifics of using GCash for your transactions. Among the most sought-after icons in the realm of online slots are scatter symbols. Scatter symbols behave differently than ordinary symbols that have to show on a payline to initiate a win. Often without regard to a payline, scatter symbols on the reels can set off a sequence of payouts including free spins, multipliers, or bonus rounds.",
          "Hitting a designated number of scatter symbols in Panalobet's scatter slots can activate bonus rounds or free spins. For instance, getting three or more scatter symbols opens free spins in the well-known game Super Ace Scatter, therefore allowing you to win without having to lay more wagers. Likewise, games like Lucky Jili Slots provide players with exciting payouts when scatter symbols land in the proper areas.",
          "Because scatter symbols provide players a real chance to win big and can set other features like multipliers or even jackpot rounds, they are especially fascinating. Since these symbols are sometimes seen as a portal to even more benefits, scatter slots are preferred among both casual gamers and experienced gamblers.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        dividerClassName="flex-col-reverse md:flex-row"
        descriptionClassName=""
        paragraphClassName="text-left text-gray-300"
        img="/img/sectionImg1.webp"
      />
      <SlotSymbolSection />
      <SlotPaylineBetlineSection />
      <SlotTechniquesSection />
      <SlotRTPinScatterSection />
      <SlotGcashSection />
      <SlotGcashBenefitsSection />
    </main>
  );
}
