import { cn } from "@/lib/utils";
import { FeatureSection } from "@/components/sections/FeatureSection";
import React from "react";

export const SportsWhyPanalobetSection = () => {
  return (
    <section className={cn("")}>
      <FeatureSection
        title="Why Choose Panalobet?"
        description={[
          "Understanding why Panalobet is a top choice for online sports bettors in the Philippines will help one better appreciate the specifics of sports betting. The platform offers everything required for the best possible betting experience. Panalobet is so well respected for the following reasons:",
          "From the most popular sports like basketball and football to specialist choices like sabong (cockfighting) and eSports, Panalobet covers a wide spectrum of sports in comprehensive betting markets. There's always something to gamble on whether your taste is in classic sports or modern trends.",
          "Any sports betting system's fundamental component is its odds, which define competitiveness. Panalobet guarantees that users have access to some of the most competitive odds in the business, therefore increasing your chances of optimizing returns.",
          "Panalobet offers a whole other level of excitement from in-play betting. Wagers can be placed during a game with dynamic odds that alter with its course.",
          "Panalobet offers localized payment methods, customer assistance, and features catered to local bettors' tastes since it knows the Filipino market. Whether you are a novice bettor or a seasoned one, Panalobet's simple interface guarantees that you may promptly and hassle-free make bets.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        dividerClassName="flex-col-reverse md:flex-row"
        descriptionClassName=""
        paragraphClassName="text-left text-gray-300"
        img="/img/sports/why.webp"
      />
    </section>
  );
};
