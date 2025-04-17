import { cn } from "@/lib/utils";
import { FeatureSection } from "@/components/sections/FeatureSection";
import React from "react";

export const CasinoFreeSpinsSection = () => {
  return (
    <section className={cn("")}>
      <FeatureSection
        title="Boost Your Gaming Experience with Free Spins"
        description={[
          "One of the most attractive aspects of Panalobet Casino for both new and seasoned players is free spins. Free spins give players the chance to win actual rewards for free and let them enjoy slot games without running personal money risk. Often employed as a welcome present to new gamers, loyalty programs, or as part of advertising efforts, this function is seen in.",
          "Generous free spin incentives in their welcome package greet new players at Panalobet Casino so they may test out well-liked slot games like Starburst and Book of Dead without having to make an initial deposit. All without spending a dime, these free spins give players a risk-free chance to familiarize themselves with the game mechanics, test various strategies, and maybe walk away with a reward.",
          "Apart from welcome incentives, some slot games feature free spins right throughout the gameplay. A player might be given extra free spins, for instance, if they land a scatter symbol or set off a bonus feature, therefore greatly raising their odds of winning. Free spins enhance the thrill and fun of online slots even if money is not at stake.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        dividerClassName="flex-col-reverse md:flex-row"
        descriptionClassName=""
        paragraphClassName="text-left text-gray-300"
        img="/img/sectionImg1.webp"
      />
    </section>
  );
};
