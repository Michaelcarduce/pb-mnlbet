import { cn } from "@/lib/utils";
import { FeatureSection } from "@/components/sections/FeatureSection";
import React from "react";

export const CasinoWhyChooseSection = () => {
  return (
    <section className={cn("")}>
      <FeatureSection
        title="Why Choose Panalobet Casino?"
        description={[
          "With its extensive game variety, easy-to-use design, attractive bonuses, and chance to earn through affiliate programs, Panalobet Casino has rapidly become among the most popular online casino platforms in the Philippines. Panalobet Casino provides everything for everyone whether your preferred game is live dealer games, progressive jackpots, or high-RTP slots.",
          "To guarantee that gamers may enjoy a responsible and safe gaming experience, the platform also offers top-notch customer service, safe payment choices, and completely licensed surroundings. Thanks to mobile gaming choices, Filipino players may enjoy their preferred casino games anywhere they are most convenient.",
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
