import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/typography/Heading2";
import { Heading5 } from "@/components/typography/Heading5";
import { Paragraph } from "@/components/typography/Paragraph";
import { FeatureSection } from "@/components/sections/FeatureSection";
import React from "react";

export const SabongConclusionSection = () => {
  return (
    <section
      className={cn(
        "p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md"
      )}>
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>
        In Conclusion, Why would one choose Panalobet Sabong Live?
      </Heading2>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Among the best online sabong platforms accessible in the Philippines,
        Panalobet offers unmatched features, safe transactions, and an
        interesting betting experience.
      </Paragraph>
      <FeatureSection
        title="Why Wager with Panalobet?"
        description={[
          "Quick and Safe Transactions Using GCash Live HD Streaming of Sabong Matches Odds for Competent Betting",
          "Detailed Gamefowl Notes and Match statistics Around-the-Clock Client Support",
          "Whatever your level of experience, Panalobet Sabong Live is the finest venue for your sabong betting needs. Start laying bets right now by registering!",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center text-2xl md:text-3xl font-semibold tracking-tight bg-gradient-to-b from-[#c6c6af] via-[#c6c6af] via-[#c6c6af] to-[#c6c6af] bg-clip-text text-transparent"
        dividerClassName="flex-col-reverse md:flex-row"
        descriptionClassName=""
        paragraphClassName="text-left text-gray-300"
        img="/img/sectionImg1.webp"
      />
      <div className="pb-4 md:pb-10"></div>
      <Heading5
        className={cn(
          "mb-4 md:mb-6 text-center bg-gradient-to-b from-[#c6c6af] via-[#e5e5d5] via-[#d8b156] to-[#a3a285] bg-clip-text text-transparent"
        )}>
        Register Now and let the Game Commence!
      </Heading5>
    </section>
  );
};
