import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { HeadingSubHeading } from "@/components/ui/HeadingSubHeading";
import CardGrid from "@/components/ui/CardGrid";
import { casinoCardGridItems } from "@/data/casinoCardGridData";
import Button from "@/components/ui/Button";
import React from "react";

export const CasinoRTPSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={cn(
        "p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md"
      )}>
      <HeadingSubHeading
        title="Knowing RTP—Return to Player—and Its Value"
        description={[
          "Return to Player (RTP) is among the most important statistics every player at an online casino should be familiar with. RTP, or the proportion of all the money bet that a game is meant to be returned to players over time. It reflects the anticipated result of a game. If a game has an RTP of 96%, for instance, ₱96 will be refunded on average for every ₱100 bet, leaving ₱4 as the house edge.",
          "Players who wish to increase their chances of making wise judgments on which games to engage in especially depend on RTP. Higher RTP games offer superior long-term value, thereby enabling players to enjoy longer gaming sessions with improved possibilities of favorable results.",
          "Players of Panalobet Casino can discover several games with competitive RTPs. Players trying to maximize their wagers highly value popular slot games such as Starburst, Gonzo's Quest, and Book of Dead since RTPs range from 94% to 98%. There are also table games like Blackjack (99% RTP) and Roulette (97% RTP), which present yet more chances for better rewards.",
          "For Filipino gamers, developing a strong gaming plan depends on knowing RTP. For those who give value first priority, games with higher RTP values are the first choice since they raise the possibility of generating positive returns.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-left"
        descriptionClassName="mx-auto"
        paragraphClassName="text-left text-gray-300"
      />
      <div className="pb-4 md:pb-10"></div>
      <CardGrid
        items={casinoCardGridItems}
        isLoading={loading}
        className="gap-4"
        cardClassName="hover:shadow-lg"
        limit={4} //remove this line if desired to show all the list
      />
      <div className="flex justify-center py-4 md:py-6">
        <Button
          label="Explore All"
          href="/casino"
          gradientStart="#1f2460"
          gradientEnd="#005fbe"
          shadowInset={true}
          width="150px"
          newTab={true}
        />
      </div>
      <div className="pb-4 md:pb-10"></div>
      <HeadingSubHeading
        title="The Thrills of Progressive Jackpots"
        description={[
          "The progressive jackpot is among the most exciting elements of online casinos that attract players. Progressive jackpots expand with every bet made by players unlike conventional fixed jackpots, which offer a set payoff. A part of each player's bet is contributed to the jackpot pool each time they spin the reels or engage in a game helping to generate the jackpot. This cycle keeps on, allowing the prize to grow to amazing levels—often going into the millions of pesos—so offering a life-changing chance for one fortunate player.",
          "Progressive jackpots are not just a common occurrence but also a main draw at Panalobet Casino. On an amazing selection of progressive jackpot games such the Mega Moolah, Divine Fortune, and Major Millions, players are allowed to try their luck. These games are well-known for their enormous prize pools, which may fly into multi-million-peso territory and give players pursuing their ambitions of winning a great and exciting experience.",
          "Progressive jackpots have appeal since they provide large possible prizes and the jackpot value increases with every minute. Every stake, no matter how little, contributes to increasing the prize pool; players can see it develop to unbelievable amounts. The payout gets larger and the buzz around these jackpots only gets more intense the longer it goes without a winner. Online casinos offer the best chance for those looking for the utmost excitement to win a progressive jackpot.",
          "The multi-tier system, usually connected with progressive jackpots, is what really distinguishes them from other casino tools. Among the several prize tiers, progressive jackpots often include small, minor, major, and mega jackpots. Though they don't reach the ultimate jackpot, every one of these stages assures varied degrees of rewards, therefore enabling players to win major prizes. Though lesser than the mega prize, the mini and minor jackpots can still pay off remarkably high amounts, more than enough to alter a player's life.",
          "Progressive jackpots' multi-tiered structure helps to maintain the thrill for all kinds of gamers. Should a player fail to win the big prize, they still walk away with a respectable gain from one of the lesser levels. Because it guarantees that every player has an opportunity to experience a profitable outcome—small but substantial or large life-altering payout—this structure makes progressive jackpot games immensely popular.",
          "These progressive jackpot games at Panalobet Casino are meant to provide the ideal mix of thrill, tension, and possible big payouts, thereby keeping players on the edge of their seats with every spin. The always rising prize pools generate great excitement and unending expectation, therefore offering everyone who plays a dynamic and exciting gaming environment.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-left"
        descriptionClassName="mx-auto"
        paragraphClassName="text-left text-gray-300"
      />
    </section>
  );
};
