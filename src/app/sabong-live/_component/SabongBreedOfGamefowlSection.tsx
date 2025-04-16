import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/typography/Heading2";
import { Heading3 } from "@/components/typography/Heading3";
import { Paragraph } from "@/components/typography/Paragraph";
import { FeatureSection } from "@/components/sections/FeatureSection";
import React from "react";

export const SabongBreedOfGamefowlSection = () => {
  return (
    <section
      className={cn(
        "p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md"
      )}>
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>
        Breed of Gamefowl: Crucially Important for Smart Betting
      </Heading2>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        One of the least often discussed aspects of sabong betting is gamefowl
        breed study. While many gamblers focus on past performance records and
        match odds, knowing the features of certain gamefowl breeds can be just
        as crucial in guiding smart wagers. At Panalobet, we provide extensive
        research of many gamefowl breeds, thereby helping players to base their
        decisions on facts and enhance their betting strategies.
      </Paragraph>
      <div className="pb-2 md:pb-4"></div>
      <Heading3 className={cn("mb-4 lg:mb-6 text-left")}>
        Top Gamefowl Breeds to Watch Closely
      </Heading3>
      <div className="pb-2 md:pb-4"></div>
      <FeatureSection
        title="Sweater"
        description={[
          "Sweater gamefowls are among Sabong's most robust and aggressive varieties. They are well-known for their exceptional endurance that qualifies them as good candidates for long events.",
          "High attack speed frequently overwhelms opponents with continuous onslaught. Quick recovery will enable them to quickly return under control during bouts.",
          "Because of their consistent performance, strong energy level, and ability to rule opponents in the arena, sweaters are typically preferred by bettors.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        dividerClassName="flex-col-reverse md:flex-row"
        descriptionClassName=""
        paragraphClassName="text-left text-gray-300"
        img="/img/sectionImg1.webp"
      />
      <div className="pb-2 md:pb-4"></div>
      <FeatureSection
        title="Kelso"
        description={[
          "Kelso gamefowls are very cunning and strategic fighters. Unlike breeds that rely simply on aggressiveness, Kelso gamefowls are unique.",
          <>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>•</strong>{" "}
            One reduces their chances of being hit via smart avoiding.
          </>,
          <>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>•</strong>{" "}
            Precisely counterattacks leveraging opponent shortcomings.
          </>,
          <>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>•</strong>{" "}
            Adaptability allows them to modify their fighting strategy midway
            through a conflict.
          </>,
          <>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>•</strong>{" "}
            Those who appreciate a tactical approach to sabong sometimes wager
            on Kelso gamefowls since their capacity to outmaneuver more powerful
            but less strategic opponents frequently results in unexpected
            triumphs.
          </>,
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        dividerClassName="flex-col-reverse md:flex-row-reverse"
        descriptionClassName=""
        paragraphClassName="text-left text-gray-300"
        img="/img/sectionImg1.webp"
      />
      <div className="pb-2 md:pb-4"></div>
      <FeatureSection
        title="Hatch"
        description={[
          "Hatch game fowls are sturdy, fast, and ruthless in protracted matches. Their primary characteristics consist in:",
          <>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>•</strong>{" "}
            Unmatched speed makes their offset difficult to predict and balance.
          </>,
          <>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>•</strong>{" "}
            Good endurance helps them to maintain optimal performance all during
            the fight.
          </>,
          <>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>•</strong>{" "}
            Great defensive moves that will enable one to withstand multiple
            attacks before launching their own attack.
          </>,
          "Hatch gamefowls have great value for bettors looking for fierce and persistent opponents who can endure and change the course of a game at any moment.",
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
