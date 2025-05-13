import { cn } from "@/lib/utils";
import { Heading5 } from "@/components/typography/Heading5";
import { FeatureSection } from "@/components/sections/FeatureSection";
import React from "react";

export const SportsSummarySection = () => {
  return (
    <section
      className={cn(
        "p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md"
      )}>
      <FeatureSection
        title="SUMMARY"
        description={[
          "For sports bettors in the Philippines, Panalobet presents an interesting and all-around platform. For those wishing to extend their sports betting experience, Panalobet is a great alternative with its vast spectrum of sports markets, competitive odds, and creative betting choices including live betting and prop bets.",
          "Understanding the odds, betting styles, and the several techniques accessible will help you to be well on your way to make wise judgments and raise your possibilities of success.",
          "Panalobet has something for everyone whether your interests are eSports, basketball, or football. ",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center "
        dividerClassName="flex-col-reverse md:flex-row"
        descriptionClassName=""
        paragraphClassName="text-left text-gray-300"
        img="/img/sports/summary.webp"
      />
      <div className="pb-4 md:pb-10"></div>
      <Heading5
        className={cn(
          "mb-4 md:mb-6 text-center bg-gradient-to-b from-[#c6c6af] via-[#e5e5d5] via-[#d8b156] to-[#a3a285] bg-clip-text text-transparent"
        )}>
        What do you need? Starting your adventure with Panalobet right now will
        let you enjoy internet sports betting!
      </Heading5>
    </section>
  );
};
