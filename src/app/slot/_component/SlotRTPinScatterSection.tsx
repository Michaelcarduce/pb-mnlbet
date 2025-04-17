import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/typography/Heading2";
import { Paragraph } from "@/components/typography/Paragraph";
import { HeadingSubHeading } from "@/components/ui/HeadingSubHeading";
import React from "react";

export const SlotRTPinScatterSection = () => {
  return (
    <section
      className={cn(
        "p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md"
      )}>
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>
        The Value of RTP—Return to Player—in Scatter Games
      </Heading2>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Another vital statistic any slot player should know is return to player
        (RTP). Theoretically, RTP is the proportion of the whole money wagered
        on a slot machine that is reimbursed to players over time. For instance,
        hypothetically a game pays ₱96 for every ₱100 stacked over the long run
        if its RTP is 96%.
      </Paragraph>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Many of the titles in Panalobet&apos;s scatter games have high RTP
        percentages, which draws in players who wish to increase their chances
        of winning. Games with competitive RTPs, such as Super Ace Scatter and
        Lucky Jili Slots, are meant to over time return a significant amount of
        wagers to players. If you want to maximize your money while still
        experiencing the excitement of scatter features, then pick a game with a
        high RTP.
      </Paragraph>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Making wise choices on which scatter game to play depends on an
        awareness of RTP. RTP gives players a good sense of the possibility for
        long-term success with a given game even though it offers a theoretical
        return. Choose scatter games with higher RTPs for individuals looking
        for consistent rewards.
      </Paragraph>
      <HeadingSubHeading
        title="Variability: High against Low-risk Games"
        description={[
          "Apart from RTP, another element greatly influencing the type of slot experience you will have is volatility. Playing a given slot game carries a certain degree of risk, so volatility describes it. Low volatility games usually yield smaller and more frequent wins; high volatility games usually offer fewer but greater payouts.",
          "For those who prefer the excitement of pursuing enormous jackpots, Super Ace Scatter, for example, is a high-volatile game with great prizes but less chances to win. Conversely, Lucky Jili Slots offers more consistent wins over time and has a quite low to medium volatility.",
          "Aligning your playing technique with the kind of rewards you want depends on an awareness of volatility. While low-volatile games are perfect for people who want consistent payouts and extended play, high-volatility games are better suited for players who love high-risk, high-reward encounters.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-left"
        descriptionClassName="mx-auto"
        paragraphClassName="text-left text-gray-300"
      />
    </section>
  );
};
